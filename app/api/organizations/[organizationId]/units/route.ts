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
} from "@/lib/errors";

export async function GET(
  request: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Verificar permissões
    if (session.user.role === "master") {
      // Master pode ver unidades de qualquer organização
      const units = await prisma.unit.findMany({
        where: { organization_id: params.organizationId },
        orderBy: {
          name: "asc",
        },
      });

      return NextResponse.json(units);
    } else if (session.user.role === "admin") {
      // Admin só pode ver unidades da sua própria organização
      if (params.organizationId !== session.user.organizationId) {
        return new NextResponse("Não autorizado", { status: 401 });
      }

      const units = await prisma.unit.findMany({
        where: { organization_id: params.organizationId },
        orderBy: {
          name: "asc",
        },
      });

      return NextResponse.json(units);
    } else {
      return new NextResponse("Não autorizado", { status: 401 });
    }
  } catch (error) {
    console.error("[ORGANIZATION_UNITS_GET]", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return handleAuthError();
    }

    // Apenas admin e master podem criar unidades
    if (
      session.user.role !== "master" &&
      (session.user.role !== "admin" ||
        session.user.organizationId !== params.organizationId)
    ) {
      return handleAuthError();
    }

    // Verifica se a organização existe
    const organization = await prisma.organization.findUnique({
      where: {
        id: params.organizationId,
      },
    });

    if (!organization) {
      return handleNotFoundError("Organização");
    }

    const body = await request.json();

    const validationResult = unitSchema.safeParse(body);

    if (!validationResult.success) {
      return handleValidationError(validationResult.error.message);
    }

    const { name, location } = validationResult.data;

    const unit = await prisma.unit.create({
      data: {
        name,
        location,
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

    return NextResponse.json(unit);
  } catch (error) {
    return handleError(error);
  }
}
