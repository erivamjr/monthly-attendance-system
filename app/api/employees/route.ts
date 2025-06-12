import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET /api/employees - List employees (filtered by organization/unit)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const organizationId = searchParams.get("organizationId") || undefined;
    const unitId = searchParams.get("unitId") || undefined;

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
        return NextResponse.json({ employees: [] });
      }

      whereClause.unit_id = user.unit_id;
    } else if (unitId) {
      whereClause.unit_id = unitId;
    }

    const employees = await prisma.employee.findMany({
      where: whereClause,
      select: {
        id: true,
        registration: true,
        name: true,
        position: true,
        cpf: true,
        rg: true,
        rg_state: true,
        contract_type: true,
        base_salary: true,
        address: true,
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
      orderBy: {
        name: "asc",
      },
    });

    console.log("CONSOLANDO = ", employees);

    return NextResponse.json({ employees });
  } catch (error) {
    console.error("Erro ao listar servidores:", error);
    return NextResponse.json(
      { error: "Erro ao carregar servidores" },
      { status: 500 }
    );
  }
}

// POST /api/employees - Create new employee (Admin only)
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
    const {
      registration,
      name,
      position,
      cpf,
      rg,
      rg_state,
      contract_type,
      base_salary,
      address,
      organization_id,
      unit_id,
    } = body;

    // Validate required fields
    if (
      !name ||
      !position ||
      !cpf ||
      !contract_type ||
      !organization_id ||
      !unit_id
    ) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    // For non-master users, ensure they can only create employees in their organization
    if (
      session.user.role === "ADMIN" &&
      organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // Check if registration/cpf is already in use
    if (registration || cpf) {
      const existingEmployee = await prisma.employee.findFirst({
        where: {
          OR: [registration ? { registration } : {}, cpf ? { cpf } : {}],
        },
      });

      if (existingEmployee) {
        return NextResponse.json(
          { error: "Matrícula ou CPF já cadastrado" },
          { status: 400 }
        );
      }
    }

    const employee = await prisma.employee.create({
      data: {
        registration,
        name,
        position,
        cpf,
        rg,
        rg_state,
        contract_type,
        base_salary,
        address,
        organization_id,
        unit_id,
      },
      select: {
        id: true,
        registration: true,
        name: true,
        position: true,
        cpf: true,
        rg: true,
        rg_state: true,
        contract_type: true,
        base_salary: true,
        address: true,
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
        action: "CREATE_EMPLOYEE",
        details: { employee_id: employee.id },
      },
    });

    return NextResponse.json(employee, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar servidor:", error);
    return NextResponse.json(
      { error: "Erro ao criar servidor" },
      { status: 500 }
    );
  }
}

// PATCH /api/employees/[id] - Update employee (Admin only)
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

    const employee = await prisma.employee.findUnique({
      where: { id: params.id },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "Servidor não encontrado" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only update employees in their organization
    if (
      session.user.role === "ADMIN" &&
      employee.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const body = await request.json();
    const {
      registration,
      name,
      position,
      cpf,
      rg,
      rg_state,
      contract_type,
      base_salary,
      address,
      unit_id,
    } = body;

    // Check if registration/cpf is already in use by another employee
    if (registration || cpf) {
      const existingEmployee = await prisma.employee.findFirst({
        where: {
          OR: [registration ? { registration } : {}, cpf ? { cpf } : {}],
          NOT: {
            id: params.id,
          },
        },
      });

      if (existingEmployee) {
        return NextResponse.json(
          { error: "Matrícula ou CPF já cadastrado para outro servidor" },
          { status: 400 }
        );
      }
    }

    const updatedEmployee = await prisma.employee.update({
      where: { id: params.id },
      data: {
        registration,
        name,
        position,
        cpf,
        rg,
        rg_state,
        contract_type,
        base_salary,
        address,
        unit_id,
      },
      select: {
        id: true,
        registration: true,
        name: true,
        position: true,
        cpf: true,
        rg: true,
        rg_state: true,
        contract_type: true,
        base_salary: true,
        address: true,
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

    // Log the update
    await prisma.log.create({
      data: {
        organization_id: employee.organization_id,
        user_id: session.user.id,
        action: "UPDATE_EMPLOYEE",
        details: { employee_id: employee.id },
      },
    });

    return NextResponse.json(updatedEmployee);
  } catch (error) {
    console.error("Erro ao atualizar servidor:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar servidor" },
      { status: 500 }
    );
  }
}

// DELETE /api/employees/[id] - Delete employee (Admin only)
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

    const employee = await prisma.employee.findUnique({
      where: { id: params.id },
      include: {
        _count: {
          select: {
            frequency_entries: true,
          },
        },
      },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "Servidor não encontrado" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only delete employees in their organization
    if (
      session.user.role === "ADMIN" &&
      employee.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // Prevent deletion if employee has frequency entries
    if (employee._count.frequency_entries > 0) {
      return NextResponse.json(
        {
          error:
            "Não é possível excluir um servidor que possui registros de frequência",
        },
        { status: 400 }
      );
    }

    await prisma.employee.delete({
      where: { id: params.id },
    });

    // Log the deletion
    await prisma.log.create({
      data: {
        organization_id: employee.organization_id,
        user_id: session.user.id,
        action: "DELETE_EMPLOYEE",
        details: { employee_id: employee.id },
      },
    });

    return NextResponse.json(
      { message: "Servidor excluído com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao excluir servidor:", error);
    return NextResponse.json(
      { error: "Erro ao excluir servidor" },
      { status: 500 }
    );
  }
}
