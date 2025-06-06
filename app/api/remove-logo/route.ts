import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { unlink } from "fs/promises";
import { join } from "path";

export async function POST(request: Request) {
  try {
    const { organizationId, logoUrl } = await request.json();

    if (!organizationId || !logoUrl) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
    }

    // Remover o arquivo físico
    const fileName = logoUrl.split("/").pop();
    const filePath = join(process.cwd(), "public", "uploads", fileName);

    try {
      await unlink(filePath);
    } catch (err) {
      console.error("Erro ao remover arquivo:", err);
      // Não retornar erro se o arquivo não existir
    }

    // Atualizar a organização
    await prisma.organization.update({
      where: { id: organizationId },
      data: { logo_url: null },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Erro ao remover logo:", error);
    return NextResponse.json(
      { error: "Erro ao remover logo" },
      { status: 500 }
    );
  }
}
