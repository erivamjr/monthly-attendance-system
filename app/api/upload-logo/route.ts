import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const organizationId = formData.get("organizationId") as string;

    if (!file) {
      return NextResponse.json(
        { error: "Arquivo não encontrado" },
        { status: 400 }
      );
    }

    if (!organizationId) {
      return NextResponse.json(
        { error: "ID da organização não encontrado" },
        { status: 400 }
      );
    }

    // Verificar tipo de arquivo
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Tipo de arquivo inválido" },
        { status: 400 }
      );
    }

    // Verificar tamanho do arquivo (máximo 2MB)
    if (file.size > 2 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Arquivo muito grande" },
        { status: 400 }
      );
    }

    // Gerar nome único para o arquivo
    const fileName = `${uuidv4()}-${file.name}`;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Criar diretório de uploads se não existir
    const uploadDir = join(process.cwd(), "public", "uploads");
    await writeFile(join(uploadDir, fileName), buffer);

    // Atualizar a URL do logo na organização
    const logoUrl = `/uploads/${fileName}`;
    const organization = await prisma.organization.update({
      where: { id: organizationId },
      data: { logo_url: logoUrl },
    });

    return NextResponse.json({
      success: true,
      logo_url: logoUrl,
    });
  } catch (error) {
    console.error("Erro ao fazer upload do logo:", error);
    return NextResponse.json(
      { error: "Erro ao fazer upload do logo" },
      { status: 500 }
    );
  }
}
