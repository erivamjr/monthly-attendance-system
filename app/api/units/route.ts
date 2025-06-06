import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET /api/units - List units (filtered by organization for Admin/Coordinator)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const organizationId = searchParams.get("organizationId") || undefined;

    // For non-master users, force their organization context
    let queryOrgId = organizationId;
    if (session.user.role !== "MASTER") {
      queryOrgId = session.user.organizationId;
    }

    if (!queryOrgId) {
      return NextResponse.json(
        { error: "ID da organização é obrigatório" },
        { status: 400 }
      );
    }

    // For coordinators, only show their assigned unit
    let whereClause: any = {
      organization_id: queryOrgId,
      is_active: true,
    };

    if (session.user.role === "COORDINATOR") {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { unit_id: true },
      });

      if (!user?.unit_id) {
        return NextResponse.json({ units: [] });
      }

      whereClause.id = user.unit_id;
    }

    const units = await prisma.unit.findMany({
      where: whereClause,
      select: {
        id: true,
        name: true,
        location: true,
        is_active: true,
        created_at: true,
        _count: {
          select: {
            employees: true,
            users: true,
            frequency_sheets: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json({ units });
  } catch (error) {
    console.error("Erro ao listar unidades:", error);
    return NextResponse.json(
      { error: "Erro ao carregar unidades" },
      { status: 500 }
    );
  }
}

// POST /api/units - Create new unit (Admin only)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (!["MASTER", "ADMIN"].includes(session.user.role)) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const body = await request.json();
    const { name, location, organization_id } = body;

    // Validate required fields
    if (!name || !location || !organization_id) {
      return NextResponse.json(
        { error: "Nome, localização e organização são obrigatórios" },
        { status: 400 }
      );
    }

    // For non-master users, ensure they can only create units in their organization
    if (
      session.user.role === "ADMIN" &&
      organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const unit = await prisma.unit.create({
      data: {
        name,
        location,
        organization_id,
      },
    });

    // Log the creation
    await prisma.log.create({
      data: {
        organization_id,
        user_id: session.user.id,
        action: "CREATE_UNIT",
        details: { unit_id: unit.id },
      },
    });

    return NextResponse.json(unit, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar unidade:", error);
    return NextResponse.json(
      { error: "Erro ao criar unidade" },
      { status: 500 }
    );
  }
}

// PATCH /api/units/[id] - Update unit (Admin only)
export async function PATCH(
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

    const unit = await prisma.unit.findUnique({
      where: { id: params.id },
    });

    if (!unit) {
      return NextResponse.json(
        { error: "Unidade não encontrada" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only update units in their organization
    if (
      session.user.role === "ADMIN" &&
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

    // Log the update
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

// DELETE /api/units/[id] - Delete unit (Admin only)
export async function DELETE(
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

    // For non-master users, ensure they can only delete units in their organization
    if (
      session.user.role === "ADMIN" &&
      unit.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // Prevent deletion if unit has data
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

    // Log the deletion
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
