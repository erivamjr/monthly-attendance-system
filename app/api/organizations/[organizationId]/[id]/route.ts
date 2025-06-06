import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "MASTER") {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const organization = await prisma.organization.findUnique({
      where: {
        id: params.organizationId,
      },
      include: {
        _count: {
          select: {
            units: true,
            users: true,
            employees: true,
          },
        },
      },
    });

    if (!organization) {
      return new NextResponse("Organização não encontrada", { status: 404 });
    }

    return NextResponse.json(organization);
  } catch (error) {
    console.error("[ORGANIZATION_GET]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "MASTER") {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const { name, slug } = await request.json();

    if (!name || !slug) {
      return new NextResponse("Nome e slug são obrigatórios", { status: 400 });
    }

    // Verificar se o slug já existe em outra organização
    const existingOrg = await prisma.organization.findFirst({
      where: {
        slug,
        id: {
          not: params.organizationId,
        },
      },
    });

    if (existingOrg) {
      return new NextResponse("Slug já está em uso", { status: 400 });
    }

    const organization = await prisma.organization.update({
      where: {
        id: params.organizationId,
      },
      data: {
        name,
        slug,
      },
    });

    return NextResponse.json(organization);
  } catch (error) {
    console.error("[ORGANIZATION_UPDATE]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "MASTER") {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Verificar se a organização existe
    const organization = await prisma.organization.findUnique({
      where: {
        id: params.organizationId,
      },
      include: {
        _count: {
          select: {
            units: true,
            users: true,
            employees: true,
          },
        },
      },
    });

    if (!organization) {
      return new NextResponse("Organização não encontrada", { status: 404 });
    }

    // Verificar se há dependências
    if (
      organization._count.units > 0 ||
      organization._count.users > 0 ||
      organization._count.employees > 0
    ) {
      return new NextResponse(
        "Não é possível excluir uma organização que possui unidades, usuários ou funcionários",
        { status: 400 }
      );
    }

    await prisma.organization.delete({
      where: {
        id: params.organizationId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[ORGANIZATION_DELETE]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}
