import { prisma } from "./prisma";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Function to get organization data
export async function getOrganizationData() {
  try {
    const organization = await prisma.organization.findFirst({
      select: {
        name: true,
        logo_url: true,
      },
    });

    return {
      name: organization?.name || "",
      logo_url: organization?.logo_url || null,
    };
  } catch (error) {
    console.error("Error fetching organization data:", error);
    return {
      name: "",
      logo_url: null,
    };
  }
}

// Function to get units
export async function getUnits() {
  try {
    const units = await prisma.unit.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return units;
  } catch (error) {
    console.error("Error fetching units:", error);
    return [];
  }
}

// Function to get frequency sheet data
export async function getFrequencySheetData(
  unitId: string,
  month: number,
  year: number
) {
  try {
    // Get employees for the unit
    const employees = await prisma.employee.findMany({
      where: {
        unit_id: unitId,
      },
      select: {
        id: true,
        name: true,
        role: true,
        contract_type: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    // Get frequency sheet
    const sheet = await prisma.frequencySheet.findFirst({
      where: {
        unit_id: unitId,
        month: month,
        year: year,
      },
      include: {
        entries: true,
        submitter: {
          select: {
            name: true,
          },
        },
      },
    });

    return {
      employees,
      sheet,
    };
  } catch (error) {
    console.error("Error fetching frequency sheet data:", error);
    return {
      employees: [],
      sheet: null,
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Dados de login incompletos");
        }

        try {
          // Primeiro, tenta encontrar um usuário master
          const masterUser = await prisma.masterUser.findUnique({
            where: { email: credentials.email },
          });

          if (masterUser) {
            const isValid = await bcrypt.compare(
              credentials.password,
              masterUser.password
            );

            if (!isValid) {
              throw new Error("Senha incorreta");
            }

            return {
              id: masterUser.id,
              name: masterUser.name,
              email: masterUser.email,
              role: "master",
            };
          }

          // Se não encontrou um usuário master, procura um usuário regular
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            include: {
              organization: {
                select: {
                  id: true,
                  slug: true,
                },
              },
            },
          });

          if (!user) {
            throw new Error("Usuário não encontrado");
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isValid) {
            throw new Error("Senha incorreta");
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            organizationId: user.organization_id,
            organizationSlug: user.organization.slug,
          };
        } catch (error) {
          console.error("Erro na autenticação:", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.organizationId = user.organizationId;
        token.organizationSlug = user.organizationSlug;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.organizationId = token.organizationId;
        session.user.organizationSlug = token.organizationSlug;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};
