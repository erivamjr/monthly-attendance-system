import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { unitSchema } from "@/lib/validations";
import {
  handleError,
  handleAuthError,
  handleValidationError,
  handleNotFoundError,
  handleConflictError,
} from "@/lib/errors";

export async function PUT(
  request: Request,
  { params }: { params: { organizationId: string; unitId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "MASTER") {
      return handleAuthError();
    }

    const body = await request.json();

    const validationResult = unitSchema.safeParse(body);

    if (!validationResult.success) {
      return handleValidationError(validationResult.error.message);
    }

    const { name, location } = validationResult.data;

    const unit = await prisma.unit.update({
      where: {
        id: params.unitId,
        organization_id: params.organizationId,
      },
      data: {
        name,
        location,
      },
      include: {
        _count: {
          select: {
            users: true,
            employees: true,
          },
        },
      },
    });

    return NextResponse.json(unit);
  } catch (error) {
    return handleError(error);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { organizationId: string; unitId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "MASTER") {
      return handleAuthError();
    }

    // Verificar se a unidade existe e pertence à organização
    const unit = await prisma.unit.findUnique({
      where: {
        id: params.unitId,
        organization_id: params.organizationId,
      },
      include: {
        _count: {
          select: {
            users: true,
            employees: true,
          },
        },
      },
    });

    if (!unit) {
      return handleNotFoundError("Unidade");
    }

    // Verificar se há dependências
    if (unit._count.users > 0 || unit._count.employees > 0) {
      return handleConflictError(
        "Não é possível excluir uma unidade que possui usuários ou funcionários"
      );
    }

    await prisma.unit.delete({
      where: {
        id: params.unitId,
        organization_id: params.organizationId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return handleError(error);
  }
}
