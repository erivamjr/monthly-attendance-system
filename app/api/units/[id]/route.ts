import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

// PATCH /api/units/[id] - Atualizar unidade
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (!["master", "admin"].includes(session.user.role)) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const unit = await prisma.unit.findUnique({
      where: { id: params.id },
    });

    if (!unit) {
      return NextResponse.json(
        { error: "Unidade não encontrada" },
        { status: 404 }
      );
    }

    // Para admin, só pode editar unidades da sua organização
    if (
      session.user.role === "admin" &&
      unit.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const body = await request.json();
    const { name, location, is_active } = body;

    const updatedUnit = await prisma.unit.update({
      where: { id: params.id },
      data: {
        name,
        location,
        is_active,
      },
    });

    // Log da atualização
    await prisma.log.create({
      data: {
        organization_id: unit.organization_id,
        user_id: session.user.id,
        action: "UPDATE_UNIT",
        details: { unit_id: unit.id },
      },
    });

    return NextResponse.json(updatedUnit);
  } catch (error) {
    console.error("Erro ao atualizar unidade:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar unidade" },
      { status: 500 }
    );
  }
}

// DELETE /api/units/[id] - Excluir unidade
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (!["master", "admin"].includes(session.user.role)) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const unit = await prisma.unit.findUnique({
      where: { id: params.id },
      include: {
        _count: {
          select: {
            employees: true,
            users: true,
            frequency_sheets: true,
          },
        },
      },
    });

    if (!unit) {
      return NextResponse.json(
        { error: "Unidade não encontrada" },
        { status: 404 }
      );
    }

    // Para admin, só pode deletar unidades da sua organização
    if (
      session.user.role === "admin" &&
      unit.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // Não permite deletar se houver dados relacionados
    if (
      unit._count.employees > 0 ||
      unit._count.users > 0 ||
      unit._count.frequency_sheets > 0
    ) {
      return NextResponse.json(
        {
          error:
            "Não é possível excluir uma unidade que possui dados cadastrados",
        },
        { status: 400 }
      );
    }

    await prisma.unit.delete({
      where: { id: params.id },
    });

    // Log da exclusão
    await prisma.log.create({
      data: {
        organization_id: unit.organization_id,
        user_id: session.user.id,
        action: "DELETE_UNIT",
        details: { unit_id: unit.id },
      },
    });

    return NextResponse.json(
      { message: "Unidade excluída com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao excluir unidade:", error);
    return NextResponse.json(
      { error: "Erro ao excluir unidade" },
      { status: 500 }
    );
  }
}
