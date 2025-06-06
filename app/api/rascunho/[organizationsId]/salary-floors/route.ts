import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET /api/organizations/[id]/salary-floors - List salary floors for an organization
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    // For non-master users, ensure they can only view salary floors in their organization
    if (
      session.user.role !== "MASTER" &&
      params.id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const salaryFloors = await prisma.salaryFloor.findMany({
      where: {
        organization_id: params.id,
      },
      orderBy: {
        position: "asc",
      },
    });

    return NextResponse.json({ salaryFloors });
  } catch (error) {
    console.error("Erro ao listar pisos salariais:", error);
    return NextResponse.json(
      { error: "Erro ao carregar pisos salariais" },
      { status: 500 }
    );
  }
}

// POST /api/organizations/[id]/salary-floors - Create new salary floor
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (!["MASTER", "ADMIN"].includes(session.user.role)) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // For non-master users, ensure they can only create salary floors in their organization
    if (
      session.user.role === "ADMIN" &&
      params.id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const body = await request.json();
    const { position, base_value, hour_value, floor_quantity } = body;

    // Validate required fields
    if (!position || !base_value || !hour_value || !floor_quantity) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Check if salary floor already exists for this position
    const existingFloor = await prisma.salaryFloor.findFirst({
      where: {
        organization_id: params.id,
        position,
      },
    });

    if (existingFloor) {
      return NextResponse.json(
        { error: "Já existe um piso salarial para este cargo" },
        { status: 400 }
      );
    }

    const salaryFloor = await prisma.salaryFloor.create({
      data: {
        organization_id: params.id,
        position,
        base_value,
        hour_value,
        floor_quantity,
      },
    });

    // Log the creation
    await prisma.log.create({
      data: {
        organization_id: params.id,
        user_id: session.user.id,
        action: "CREATE_SALARY_FLOOR",
        details: { salary_floor_id: salaryFloor.id },
      },
    });

    return NextResponse.json(salaryFloor, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar piso salarial:", error);
    return NextResponse.json(
      { error: "Erro ao criar piso salarial" },
      { status: 500 }
    );
  }
}
