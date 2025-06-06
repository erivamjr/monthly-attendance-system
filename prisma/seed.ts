import { PrismaClient } from "../lib/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  try {
    // Criar organização padrão
    const organization = await prisma.organization.create({
      data: {
        name: "Organização Padrão",
        slug: "org-padrao",
      },
    });

    // Criar unidade padrão
    const unit = await prisma.unit.create({
      data: {
        name: "Unidade Central",
        location: "Sede",
        organization_id: organization.id,
      },
    });

    // Criar usuário master
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const masterUser = await prisma.user.create({
      data: {
        name: "Administrador Master",
        email: "admin@example.com",
        password: hashedPassword,
        cpf: "123.456.789-00",
        role: "MASTER",
        organization_id: organization.id,
      },
    });

    // Criar tipos de eventos padrão
    const eventTypes = await Promise.all([
      prisma.eventType.create({
        data: {
          name: "absence",
          label: "Falta",
          description: "Registro de falta do servidor",
        },
      }),
      prisma.eventType.create({
        data: {
          name: "overtime",
          label: "Hora Extra",
          description: "Registro de hora extra",
        },
      }),
      prisma.eventType.create({
        data: {
          name: "vacation",
          label: "Férias",
          description: "Registro de férias",
        },
      }),
    ]);

    console.log("Dados iniciais criados com sucesso!");
    console.log("Usuário master criado:");
    console.log("Email: admin@example.com");
    console.log("Senha: admin123");
  } catch (error) {
    console.error("Erro ao criar dados iniciais:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
