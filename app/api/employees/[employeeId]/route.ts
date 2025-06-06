import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import * as z from "zod";

const employeeSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  registration: z.string().optional(),
  position: z.string().min(1, "Cargo é obrigatório"),
  cpf: z.string().min(11, "CPF é obrigatório"),
  rg: z.string().optional(),
  rg_state: z.string().optional(),
  contract_type: z.string().min(1, "Tipo de contrato é obrigatório"),
  address: z.string().optional(),
  unit_id: z.string().min(1, "Unidade é obrigatória"),
});

export async function PUT(
  request: Request,
  { params }: { params: { employeeId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const json = await request.json();
    const body = employeeSchema.parse(json);

    // Verifica se o servidor existe
    const existingEmployee = await prisma.employee.findUnique({
      where: { id: params.employeeId },
      include: {
        unit: true,
      },
    });

    if (!existingEmployee) {
      return new NextResponse("Servidor não encontrado", { status: 404 });
    }

    // Se não for master, verifica se o servidor pertence à organização do usuário
    if (session.user.role !== "master") {
      if (
        existingEmployee.unit.organization_id !== session.user.organizationId
      ) {
        return new NextResponse("Não autorizado", { status: 401 });
      }
    }

    // Verifica se a nova unidade pertence à organização do usuário
    const newUnit = await prisma.unit.findUnique({
      where: { id: body.unit_id },
      include: { organization: true },
    });

    if (!newUnit) {
      return new NextResponse("Unidade não encontrada", { status: 404 });
    }

    if (session.user.role !== "master") {
      if (newUnit.organization_id !== session.user.organizationId) {
        return new NextResponse("Não autorizado", { status: 401 });
      }
    }

    const updatedEmployee = await prisma.employee.update({
      where: { id: params.employeeId },
      data: {
        name: body.name,
        registration: body.registration,
        position: body.position,
        cpf: body.cpf,
        rg: body.rg,
        rg_state: body.rg_state,
        contract_type: body.contract_type,
        address: body.address,
        unit_id: body.unit_id,
      },
      include: {
        unit: true,
      },
    });

    return NextResponse.json(updatedEmployee);
  } catch (error) {
    console.error("[EMPLOYEE_PUT]", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}
