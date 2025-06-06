import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // agora recebe (credentials, req)
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Dados de login incompletos");
        }

        try {
          // 1) tenta master
          const masterUser = await prisma.user.findFirst({
            where: { email: credentials.email, role: "MASTER" },
          });

          if (masterUser) {
            const isValid = await bcrypt.compare(
              credentials.password,
              masterUser.password
            );
            if (!isValid) throw new Error("Senha incorreta");

            return {
              id: masterUser.id,
              name: masterUser.name,
              email: masterUser.email,
              role: "MASTER",
            };
          }

          // 2) usuário "normal"
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            include: {
              organization: {
                select: {
                  id: true,
                  slug: true,
                  logo_url: true,
                  name: true,
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
            organizationSlug: user.organization!.slug,
            organizationLogo: user.organization!.logo_url ?? "",
            organizationName: user.organization!.name,
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
        token.organizationLogo = user.organizationLogo;
        token.organizationName = user.organizationName;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.organizationId = token.organizationId;
        session.user.organizationSlug = token.organizationSlug;
        session.user.organizationLogo = token.organizationLogo;
        session.user.organizationName = token.organizationName;
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
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
