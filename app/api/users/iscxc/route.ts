import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, email, cpf, role, organization_id, unit_id, is_active } =
      body;

    // Check if another user with the same email or CPF exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { cpf }],
        NOT: {
          id: params.id,
        },
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email or CPF already exists" },
        { status: 400 }
      );
    }

    const user = await prisma.user.update({
      where: { id: params.id },
      data: {
        name,
        email,
        cpf,
        role,
        organization_id,
        unit_id: unit_id || null,
        is_active,
      },
      include: {
        organization: true,
        unit: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.user.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
