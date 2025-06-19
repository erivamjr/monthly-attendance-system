import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  try {
    // Encontrar o usuário alcirema
    const user = await prisma.user.findFirst({
      where: {
        name: {
          contains: "alcirema",
          mode: "insensitive",
        },
      },
    });

    if (!user) {
      console.error("Usuário alcirema não encontrado");
      return;
    }

    console.log("Usuário encontrado:", {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      password: user.password,
    });

    // Testar a senha "changeme123"
    const isValid = await bcrypt.compare("changeme123", user.password);
    console.log("Senha 'changeme123' é válida:", isValid);

    // Gerar um novo hash para "changeme123"
    const newHash = await bcrypt.hash("changeme123", 10);
    console.log("Novo hash para 'changeme123':", newHash);

    // Atualizar a senha
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { password: newHash },
    });

    console.log("Senha atualizada com sucesso!");
    console.log("Email:", updatedUser.email);
    console.log("Nova senha: changeme123");
  } catch (error) {
    console.error("Erro ao verificar senha:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
