import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export async function PUT(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const body = await request.json();

    // Verificar se o usuário tem permissão para editar
    if (session.user.role !== "master" && session.user.role !== "admin") {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Buscar o usuário atual
    const user = await prisma.user.findUnique({
      where: { id: params.userId },
      include: {
        organization: true,
      },
    });

    if (!user) {
      return new NextResponse("Usuário não encontrado", { status: 404 });
    }

    // Se não for master, verificar se o usuário pertence à mesma organização
    if (
      session.user.role !== "master" &&
      user.organization_id !== session.user.organizationId
    ) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Se for responsável, verificar se a unidade pertence à organização
    if (body.role === "responsible") {
      if (!body.unit_id) {
        return new NextResponse(
          "Unidade é obrigatória para usuários responsáveis",
          { status: 400 }
        );
      }

      const unit = await prisma.unit.findUnique({
        where: { id: body.unit_id },
        include: {
          organization: true,
        },
      });

      if (!unit) {
        return new NextResponse("Unidade não encontrada", { status: 404 });
      }

      if (unit.organization_id !== body.organization_id) {
        return new NextResponse(
          "Unidade não pertence à organização selecionada",
          { status: 400 }
        );
      }
    }

    // Preparar dados para atualização
    const updateData: any = {
      name: body.name,
      email: body.email,
      cpf: body.cpf,
      role: body.role,
      organization_id: body.organization_id,
      unit_id: body.role === "responsible" ? body.unit_id : null,
    };

    // Se uma nova senha foi fornecida, hash e adiciona aos dados
    if (body.password) {
      updateData.password = await hash(body.password, 12);
    }

    // Atualizar usuário
    const updatedUser = await prisma.user.update({
      where: { id: params.userId },
      data: updateData,
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}
