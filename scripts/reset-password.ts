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

    // Gerar hash da nova senha
    const hashedPassword = await bcrypt.hash("changeme123", 10);

    // Atualizar a senha
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    console.log("Senha redefinida com sucesso!");
    console.log("Email:", updatedUser.email);
    console.log("Nova senha: changeme123");
  } catch (error) {
    console.error("Erro ao redefinir senha:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
