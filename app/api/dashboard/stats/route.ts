import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Buscar total de unidades
    const totalUnits = await prisma.unit.count();

    // Buscar folhas de frequência do mês atual
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const sheets = await prisma.frequencySheet.findMany({
      where: {
        month: currentMonth,
        year: currentYear,
      },
    });

    // Contar folhas por status
    let submittedSheets = 0;
    let pendingSignature = 0;

    sheets.forEach((sheet) => {
      if (sheet.status === "submitted") {
        submittedSheets++;
      } else if (sheet.status === "draft") {
        pendingSignature++;
      }
    });

    const pendingSheets = totalUnits - submittedSheets - pendingSignature;

    return NextResponse.json({
      totalUnits,
      submittedSheets,
      pendingSignature,
      pendingSheets,
    });
  } catch (error) {
    console.error("Erro ao buscar estatísticas:", error);
    return NextResponse.json(
      { error: "Erro ao carregar estatísticas" },
      { status: 500 }
    );
  }
}
