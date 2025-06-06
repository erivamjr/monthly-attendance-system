import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    // Verifica se já existe algum usuário master
    const existingMaster = await prisma.masterUser.findFirst();
    if (existingMaster) {
      return NextResponse.json(
        { error: "Já existe um usuário master" },
        { status: 400 }
      );
    }

    const data = await request.json();
    const { name, email, password } = data;

    // Validação básica
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o usuário master
    const masterUser = await prisma.masterUser.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return NextResponse.json({
      message: "Usuário master criado com sucesso",
      user: masterUser,
    });
  } catch (error) {
    console.error("Erro ao criar usuário master:", error);
    return NextResponse.json(
      { error: "Erro ao criar usuário master" },
      { status: 500 }
    );
  }
}
