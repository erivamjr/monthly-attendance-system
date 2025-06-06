import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET /api/frequency-entries - List frequency entries (filtered by sheet)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const sheetId = searchParams.get("sheetId");

    if (!sheetId) {
      return NextResponse.json(
        { error: "ID da folha é obrigatório" },
        { status: 400 }
      );
    }

    // Get the sheet to check permissions
    const sheet = await prisma.frequencySheet.findUnique({
      where: { id: sheetId },
    });

    if (!sheet) {
      return NextResponse.json(
        { error: "Folha de frequência não encontrada" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only view entries in their organization
    if (
      session.user.role !== "MASTER" &&
      sheet.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // For coordinators, ensure they can only view entries for their unit
    if (session.user.role === "COORDINATOR") {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { unit_id: true },
      });

      if (!user?.unit_id || user.unit_id !== sheet.unit_id) {
        return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
      }
    }

    const entries = await prisma.frequencyEntry.findMany({
      where: {
        sheet_id: sheetId,
      },
      select: {
        id: true,
        absence_days: true,
        additional_night_hours: true,
        overtime_50_hours: true,
        overtime_100_hours: true,
        on_call_hours: true,
        vacation_days: true,
        salary_floor_amount: true,
        justification: true,
        created_at: true,
        employee: {
          select: {
            id: true,
            name: true,
            registration: true,
            position: true,
            contract_type: true,
            base_salary: true,
          },
        },
      },
      orderBy: {
        employee: {
          name: "asc",
        },
      },
    });

    return NextResponse.json({ entries });
  } catch (error) {
    console.error("Erro ao listar registros de frequência:", error);
    return NextResponse.json(
      { error: "Erro ao carregar registros de frequência" },
      { status: 500 }
    );
  }
}

// POST /api/frequency-entries - Create new frequency entry (Admin/Coordinator only)
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
    const {
      sheet_id,
      employee_id,
      absence_days,
      additional_night_hours,
      overtime_50_hours,
      overtime_100_hours,
      on_call_hours,
      vacation_days,
      salary_floor_amount,
      justification,
    } = body;

    // Validate required fields
    if (!sheet_id || !employee_id) {
      return NextResponse.json(
        { error: "Folha e servidor são obrigatórios" },
        { status: 400 }
      );
    }

    // Get the sheet to check permissions and status
    const sheet = await prisma.frequencySheet.findUnique({
      where: { id: sheet_id },
    });

    if (!sheet) {
      return NextResponse.json(
        { error: "Folha de frequência não encontrada" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only create entries in their organization
    if (
      session.user.role !== "MASTER" &&
      sheet.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // For coordinators, ensure they can only create entries for their unit
    if (session.user.role === "COORDINATOR") {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { unit_id: true },
      });

      if (!user?.unit_id || user.unit_id !== sheet.unit_id) {
        return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
      }
    }

    // Check if sheet is in draft status
    if (sheet.status !== "DRAFT") {
      return NextResponse.json(
        { error: "Folha já foi enviada e não pode ser alterada" },
        { status: 400 }
      );
    }

    // Check if employee belongs to the sheet's unit
    const employee = await prisma.employee.findUnique({
      where: { id: employee_id },
    });

    if (!employee || employee.unit_id !== sheet.unit_id) {
      return NextResponse.json(
        { error: "Servidor não pertence a esta unidade" },
        { status: 400 }
      );
    }

    // Check if entry already exists for this employee in this sheet
    const existingEntry = await prisma.frequencyEntry.findFirst({
      where: {
        sheet_id,
        employee_id,
      },
    });

    if (existingEntry) {
      return NextResponse.json(
        { error: "Já existe um registro para este servidor nesta folha" },
        { status: 400 }
      );
    }

    const entry = await prisma.frequencyEntry.create({
      data: {
        sheet_id,
        employee_id,
        absence_days: absence_days || 0,
        additional_night_hours: additional_night_hours || 0,
        overtime_50_hours: overtime_50_hours || 0,
        overtime_100_hours: overtime_100_hours || 0,
        on_call_hours: on_call_hours || 0,
        vacation_days: vacation_days || 0,
        salary_floor_amount: salary_floor_amount || 0,
        justification,
      },
      select: {
        id: true,
        absence_days: true,
        additional_night_hours: true,
        overtime_50_hours: true,
        overtime_100_hours: true,
        on_call_hours: true,
        vacation_days: true,
        salary_floor_amount: true,
        justification: true,
        created_at: true,
        employee: {
          select: {
            id: true,
            name: true,
            registration: true,
            position: true,
            contract_type: true,
            base_salary: true,
          },
        },
      },
    });

    // Log the creation
    await prisma.log.create({
      data: {
        organization_id: sheet.organization_id,
        user_id: session.user.id,
        action: "CREATE_FREQUENCY_ENTRY",
        details: { entry_id: entry.id, sheet_id },
      },
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar registro de frequência:", error);
    return NextResponse.json(
      { error: "Erro ao criar registro de frequência" },
      { status: 500 }
    );
  }
}

// PATCH /api/frequency-entries/[id] - Update frequency entry (Admin/Coordinator only)
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

    const entry = await prisma.frequencyEntry.findUnique({
      where: { id: params.id },
      include: {
        sheet: true,
      },
    });

    if (!entry) {
      return NextResponse.json(
        { error: "Registro de frequência não encontrado" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only update entries in their organization
    if (
      session.user.role !== "MASTER" &&
      entry.sheet.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // For coordinators, ensure they can only update entries for their unit
    if (session.user.role === "COORDINATOR") {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { unit_id: true },
      });

      if (!user?.unit_id || user.unit_id !== entry.sheet.unit_id) {
        return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
      }
    }

    // Check if sheet is in draft status
    if (entry.sheet.status !== "DRAFT") {
      return NextResponse.json(
        { error: "Folha já foi enviada e não pode ser alterada" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const {
      absence_days,
      additional_night_hours,
      overtime_50_hours,
      overtime_100_hours,
      on_call_hours,
      vacation_days,
      salary_floor_amount,
      justification,
    } = body;

    const updatedEntry = await prisma.frequencyEntry.update({
      where: { id: params.id },
      data: {
        absence_days,
        additional_night_hours,
        overtime_50_hours,
        overtime_100_hours,
        on_call_hours,
        vacation_days,
        salary_floor_amount,
        justification,
      },
      select: {
        id: true,
        absence_days: true,
        additional_night_hours: true,
        overtime_50_hours: true,
        overtime_100_hours: true,
        on_call_hours: true,
        vacation_days: true,
        salary_floor_amount: true,
        justification: true,
        created_at: true,
        employee: {
          select: {
            id: true,
            name: true,
            registration: true,
            position: true,
            contract_type: true,
            base_salary: true,
          },
        },
      },
    });

    // Log the update
    await prisma.log.create({
      data: {
        organization_id: entry.sheet.organization_id,
        user_id: session.user.id,
        action: "UPDATE_FREQUENCY_ENTRY",
        details: { entry_id: entry.id, sheet_id: entry.sheet_id },
      },
    });

    return NextResponse.json(updatedEntry);
  } catch (error) {
    console.error("Erro ao atualizar registro de frequência:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar registro de frequência" },
      { status: 500 }
    );
  }
}

// DELETE /api/frequency-entries/[id] - Delete frequency entry (Admin/Coordinator only)
export async function DELETE(
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

    const entry = await prisma.frequencyEntry.findUnique({
      where: { id: params.id },
      include: {
        sheet: true,
      },
    });

    if (!entry) {
      return NextResponse.json(
        { error: "Registro de frequência não encontrado" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only delete entries in their organization
    if (
      session.user.role !== "MASTER" &&
      entry.sheet.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // For coordinators, ensure they can only delete entries for their unit
    if (session.user.role === "COORDINATOR") {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { unit_id: true },
      });

      if (!user?.unit_id || user.unit_id !== entry.sheet.unit_id) {
        return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
      }
    }

    // Check if sheet is in draft status
    if (entry.sheet.status !== "DRAFT") {
      return NextResponse.json(
        { error: "Folha já foi enviada e não pode ser alterada" },
        { status: 400 }
      );
    }

    await prisma.frequencyEntry.delete({
      where: { id: params.id },
    });

    // Log the deletion
    await prisma.log.create({
      data: {
        organization_id: entry.sheet.organization_id,
        user_id: session.user.id,
        action: "DELETE_FREQUENCY_ENTRY",
        details: { entry_id: entry.id, sheet_id: entry.sheet_id },
      },
    });

    return NextResponse.json(
      { message: "Registro de frequência excluído com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao excluir registro de frequência:", error);
    return NextResponse.json(
      { error: "Erro ao excluir registro de frequência" },
      { status: 500 }
    );
  }
}

{
  status: 500;
}
