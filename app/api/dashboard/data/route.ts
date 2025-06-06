import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    // Buscar dados da organização do usuário atual
    const searchParams = new URL(request.url).searchParams;
    const organizationId = searchParams.get("organizationId");

    if (!organizationId) {
      return NextResponse.json(
        { error: "ID da organização é obrigatório" },
        { status: 400 }
      );
    }

    // Buscar dados da organização
    const organization = await prisma.organization.findUnique({
      where: { id: organizationId },
      select: {
        id: true,
        name: true,
        logo_url: true,
      },
    });

    if (!organization) {
      return NextResponse.json(
        { error: "Organização não encontrada" },
        { status: 404 }
      );
    }

    // Buscar estatísticas gerais
    const [
      totalUnits,
      totalEmployees,
      totalUsers,
      frequencySheets,
      units,
      employees,
    ] = await Promise.all([
      // Total de unidades
      prisma.unit.count({
        where: { organization_id: organizationId },
      }),

      // Total de funcionários
      prisma.employee.count({
        where: { organization_id: organizationId },
      }),

      // Total de usuários
      prisma.user.count({
        where: { organization_id: organizationId },
      }),

      // Folhas de frequência do mês atual
      prisma.frequencySheet.findMany({
        where: {
          organization_id: organizationId,
          month: currentMonth,
          year: currentYear,
        },
        select: {
          id: true,
          status: true,
          unit_id: true,
        },
      }),

      // Dados das unidades
      prisma.unit.findMany({
        where: { organization_id: organizationId },
        select: {
          id: true,
          name: true,
          location: true,
          is_active: true,
          users: {
            where: { role: "responsible" },
            select: { name: true },
          },
          employees: {
            select: { id: true },
          },
        },
      }),

      // Dados dos funcionários
      prisma.employee.findMany({
        where: { organization_id: organizationId },
        select: {
          id: true,
          name: true,
          cpf: true,

          contract_type: true,

          unit_id: true,
        },
      }),
    ]);

    // Processar estatísticas das folhas de frequência
    let submittedSheets = 0;
    let pendingSignature = 0;

    frequencySheets.forEach((sheet) => {
      if (sheet.status === "submitted") {
        submittedSheets++;
      } else if (sheet.status === "draft") {
        pendingSignature++;
      }
    });

    const pendingSheets = totalUnits - submittedSheets - pendingSignature;

    // Formatar dados das unidades
    const formattedUnits = units.map((unit) => ({
      id: unit.id,
      name: unit.name,
      location: unit.location,
      is_active: unit.is_active,
      responsible: unit.users[0]?.name || null,
      employeeCount: unit.employees.length,
    }));

    // Formatar dados dos funcionários
    const formattedEmployees = employees.map((employee) => ({
      id: employee.id,
      name: employee.name,
      cpf: employee.cpf,
      contractType: employee.contract_type,

      unitId: employee.unit_id,
    }));

    return NextResponse.json({
      organization,
      stats: {
        totalUnits,
        totalEmployees,
        totalUsers,
        submittedSheets,
        pendingSignature,
        pendingSheets,
      },
      units: formattedUnits,
      employees: formattedEmployees,
    });
  } catch (error) {
    console.error("Erro ao buscar dados do dashboard:", error);
    return NextResponse.json(
      { error: "Erro ao carregar dados do dashboard" },
      { status: 500 }
    );
  }
}
