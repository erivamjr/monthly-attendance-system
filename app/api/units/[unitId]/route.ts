import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: { unitId: string } }
) {
  try {
    const body = await request.json();
    const { name, location, organization_id, is_active } = body;

    const unit = await prisma.unit.update({
      where: { id: params.unitId },
      data: {
        name,
        location,
        organization_id,
        is_active,
      },
      include: {
        organization: true,
      },
    });

    return NextResponse.json(unit);
  } catch (error) {
    console.error("Error updating unit:", error);
    return NextResponse.json(
      { error: "Failed to update unit" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const unit = await prisma.unit.findUnique({
      where: { id: params.id },
      include: {
        _count: {
          select: {
            employees: true,
            users: true,
          },
        },
      },
    });

    if (!unit) {
      return NextResponse.json({ error: "Unit not found" }, { status: 404 });
    }

    if (unit._count.employees > 0 || unit._count.users > 0) {
      return NextResponse.json(
        {
          error: "Cannot delete unit with existing employees or users",
        },
        { status: 400 }
      );
    }

    await prisma.unit.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting unit:", error);
    return NextResponse.json(
      { error: "Failed to delete unit" },
      { status: 500 }
    );
  }
}
