import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const unitId = searchParams.get("unitId");

    if (!unitId) {
      return NextResponse.json(
        { error: "Unit ID is required" },
        { status: 400 }
      );
    }

    // Get current month and year
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    // Get all employees for the unit
    const employees = await prisma.employee.findMany({
      where: {
        unit_id: unitId,
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        role: true,
      },
    });

    // Get current frequency sheet
    const currentSheet = await prisma.frequencySheet.findFirst({
      where: {
        unit_id: unitId,
        month: currentMonth,
        year: currentYear,
      },
      include: {
        entries: true,
      },
    });

    // Map employees with their status
    const employeesWithStatus = employees.map((emp) => {
      const entry = currentSheet?.entries.find(
        (entry) => entry.employee_id === emp.id
      );

      return {
        id: emp.id,
        name: emp.name,
        cpf: emp.cpf,
        role: emp.role,
        status: entry ? "Preenchido" : "Pendente",
      };
    });

    return NextResponse.json(employeesWithStatus);
  } catch (error) {
    console.error("Error fetching employee status:", error);
    return NextResponse.json(
      { error: "Failed to fetch employee status" },
      { status: 500 }
    );
  }
}
