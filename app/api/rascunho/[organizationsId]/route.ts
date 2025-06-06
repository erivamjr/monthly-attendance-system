import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const body = await request.json();
    const { name, slug } = body;

    // Check if another organization with the same slug exists
    const existingOrg = await prisma.organization.findFirst({
      where: {
        slug,
        NOT: {
          id: params.organizationId,
        },
      },
    });

    if (existingOrg) {
      return NextResponse.json(
        { error: "Organization with this slug already exists" },
        { status: 400 }
      );
    }

    const organization = await prisma.organization.update({
      where: { id: params.organizationId },
      data: {
        name,
        slug,
      },
    });

    return NextResponse.json(organization);
  } catch (error) {
    console.error("Error updating organization:", error);
    return NextResponse.json(
      { error: "Failed to update organization" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    // Check if organization has any dependencies
    const organization = await prisma.organization.findUnique({
      where: { id: params.organizationId },
      include: {
        _count: {
          select: {
            units: true,
            users: true,
            employees: true,
          },
        },
      },
    });

    if (!organization) {
      return NextResponse.json(
        { error: "Organization not found" },
        { status: 404 }
      );
    }

    if (
      organization._count.units > 0 ||
      organization._count.users > 0 ||
      organization._count.employees > 0
    ) {
      return NextResponse.json(
        {
          error:
            "Cannot delete organization with existing units, users, or employees",
        },
        { status: 400 }
      );
    }

    await prisma.organization.delete({
      where: { id: params.organizationId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting organization:", error);
    return NextResponse.json(
      { error: "Failed to delete organization" },
      { status: 500 }
    );
  }
}
