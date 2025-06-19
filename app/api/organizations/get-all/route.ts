import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const organizations = await prisma.organization.findMany({
      include: {
        _count: {
          select: {
            units: true,
            users: true,
            employees: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(organizations);
  } catch (error) {
    console.error("Erro ao buscar organizações:", error);
    return NextResponse.json(
      { error: "Falha ao buscar organizações" },
      { status: 500 }
    );
  }
}
