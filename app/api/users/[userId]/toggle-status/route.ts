import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = params.userId;
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Verificar se o usuário tem permissão para alterar o status
    if (session.user.role !== "master" && session.user.role !== "admin") {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Buscar o usuário atual
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        is_active: true,
        organization_id: true,
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

    // Alternar o status do usuário
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        is_active: !user.is_active,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        is_active: true,
        organization: {
          select: {
            name: true,
          },
        },
        unit: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("[TOGGLE_STATUS_ERROR]", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Erro interno do servidor",
      { status: 500 }
    );
  }
}
