import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET /api/frequency-sheets - List frequency sheets (filtered by organization/unit)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const organizationId = searchParams.get("organizationId") || undefined;
    const unitId = searchParams.get("unitId") || undefined;
    const month = searchParams.get("month")
      ? parseInt(searchParams.get("month")!)
      : undefined;
    const year = searchParams.get("year")
      ? parseInt(searchParams.get("year")!)
      : undefined;

    // Build where clause based on role and filters
    let whereClause: any = {};

    if (session.user.role === "MASTER") {
      if (organizationId) {
        whereClause.organization_id = organizationId;
      }
    } else {
      whereClause.organization_id = session.user.organizationId;
    }

    if (session.user.role === "COORDINATOR") {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { unit_id: true },
      });

      if (!user?.unit_id) {
        return NextResponse.json({ sheets: [] });
      }

      whereClause.unit_id = user.unit_id;
    } else if (unitId) {
      whereClause.unit_id = unitId;
    }

    if (month) whereClause.month = month;
    if (year) whereClause.year = year;

    const sheets = await prisma.frequencySheet.findMany({
      where: whereClause,
      select: {
        id: true,
        month: true,
        year: true,
        status: true,
        submitted_at: true,
        created_at: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
        unit: {
          select: {
            id: true,
            name: true,
          },
        },
        submitter: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            entries: true,
          },
        },
      },
      orderBy: [{ year: "desc" }, { month: "desc" }, { created_at: "desc" }],
    });

    return NextResponse.json({ sheets });
  } catch (error) {
    console.error("Erro ao listar folhas de frequência:", error);
    return NextResponse.json(
      { error: "Erro ao carregar folhas de frequência" },
      { status: 500 }
    );
  }
}

// POST /api/frequency-sheets - Create new frequency sheet (Admin/Coordinator only)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (!["MASTER", "ADMIN", "COORDINATOR"].includes(session.user.role)) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const body = await request.json();
    const { month, year, organization_id, unit_id } = body;

    // Validate required fields
    if (!month || !year || !organization_id || !unit_id) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // For non-master users, ensure they can only create sheets in their organization
    if (
      session.user.role !== "MASTER" &&
      organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // For coordinators, ensure they can only create sheets for their unit
    if (session.user.role === "COORDINATOR") {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { unit_id: true },
      });

      if (!user?.unit_id || user.unit_id !== unit_id) {
        return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
      }
    }

    // Check if sheet already exists for this month/year/unit
    const existingSheet = await prisma.frequencySheet.findFirst({
      where: {
        month,
        year,
        unit_id,
      },
    });

    if (existingSheet) {
      return NextResponse.json(
        {
          error: "Já existe uma folha de frequência para este mês/ano/unidade",
        },
        { status: 400 }
      );
    }

    const sheet = await prisma.frequencySheet.create({
      data: {
        month,
        year,
        organization_id,
        unit_id,
      },
      select: {
        id: true,
        month: true,
        year: true,
        status: true,
        created_at: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
        unit: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Log the creation
    await prisma.log.create({
      data: {
        organization_id,
        user_id: session.user.id,
        action: "CREATE_FREQUENCY_SHEET",
        details: { sheet_id: sheet.id },
      },
    });

    return NextResponse.json(sheet, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar folha de frequência:", error);
    return NextResponse.json(
      { error: "Erro ao criar folha de frequência" },
      { status: 500 }
    );
  }
}

// PATCH /api/frequency-sheets/[id] - Update frequency sheet status (Admin/Coordinator only)
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (!["MASTER", "ADMIN", "COORDINATOR"].includes(session.user.role)) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const sheet = await prisma.frequencySheet.findUnique({
      where: { id: params.id },
      include: {
        entries: true,
      },
    });

    if (!sheet) {
      return NextResponse.json(
        { error: "Folha de frequência não encontrada" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only update sheets in their organization
    if (
      session.user.role !== "MASTER" &&
      sheet.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // For coordinators, ensure they can only update sheets for their unit
    if (session.user.role === "COORDINATOR") {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { unit_id: true },
      });

      if (!user?.unit_id || user.unit_id !== sheet.unit_id) {
        return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
      }
    }

    const body = await request.json();
    const { status } = body;

    // Validate status transition
    if (status === "SUBMITTED") {
      if (sheet.status !== "DRAFT") {
        return NextResponse.json(
          { error: "Folha já foi enviada anteriormente" },
          { status: 400 }
        );
      }

      if (sheet.entries.length === 0) {
        return NextResponse.json(
          { error: "Folha não possui registros de frequência" },
          { status: 400 }
        );
      }
    }

    const updatedSheet = await prisma.frequencySheet.update({
      where: { id: params.id },
      data: {
        status,
        submitted_by: status === "SUBMITTED" ? session.user.id : null,
        submitted_at: status === "SUBMITTED" ? new Date() : null,
      },
      select: {
        id: true,
        month: true,
        year: true,
        status: true,
        submitted_at: true,
        created_at: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
        unit: {
          select: {
            id: true,
            name: true,
          },
        },
        submitter: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Log the update
    await prisma.log.create({
      data: {
        organization_id: sheet.organization_id,
        user_id: session.user.id,
        action: "UPDATE_FREQUENCY_SHEET",
        details: { sheet_id: sheet.id, new_status: status },
      },
    });

    return NextResponse.json(updatedSheet);
  } catch (error) {
    console.error("Erro ao atualizar folha de frequência:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar folha de frequência" },
      { status: 500 }
    );
  }
}

// DELETE /api/frequency-sheets/[id] - Delete frequency sheet (Admin only)
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

    const sheet = await prisma.frequencySheet.findUnique({
      where: { id: params.id },
    });

    if (!sheet) {
      return NextResponse.json(
        { error: "Folha de frequência não encontrada" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only delete sheets in their organization
    if (
      session.user.role === "ADMIN" &&
      sheet.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // Only allow deletion of draft sheets
    if (sheet.status !== "DRAFT") {
      return NextResponse.json(
        {
          error: "Não é possível excluir uma folha que já foi enviada",
        },
        { status: 400 }
      );
    }

    // Delete all entries first
    await prisma.frequencyEntry.deleteMany({
      where: { sheet_id: params.id },
    });

    // Then delete the sheet
    await prisma.frequencySheet.delete({
      where: { id: params.id },
    });

    // Log the deletion
    await prisma.log.create({
      data: {
        organization_id: sheet.organization_id,
        user_id: session.user.id,
        action: "DELETE_FREQUENCY_SHEET",
        details: { sheet_id: sheet.id },
      },
    });

    return NextResponse.json(
      { message: "Folha de frequência excluída com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao excluir folha de frequência:", error);
    return NextResponse.json(
      { error: "Erro ao excluir folha de frequência" },
      { status: 500 }
    );
  }
}
