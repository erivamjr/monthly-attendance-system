import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import * as z from "zod";
import {
  handleError,
  handleAuthError,
  handleValidationError,
} from "@/lib/errors";

const organizationSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  slug: z.string().min(3, "Slug deve ter no mínimo 3 caracteres"),
  logo_url: z.string().optional(),
});

// GET /api/organizations - List all organizations (Master only)
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (session.user.role !== "MASTER") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const organizations = await prisma.organization.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        logo_url: true,
        created_at: true,
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
    console.error("Erro ao listar organizações:", error);
    return NextResponse.json(
      { error: "Erro ao carregar organizações" },
      { status: 500 }
    );
  }
}

// POST /api/organizations - Create new organization (Master only)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (session.user.role !== "MASTER") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const body = await request.json();
    const { name, slug, logo_url } = body;

    // Validate required fields
    if (!name || !slug) {
      return NextResponse.json(
        { error: "Nome e slug são obrigatórios" },
        { status: 400 }
      );
    }

    // Check if slug is unique
    const existingOrg = await prisma.organization.findUnique({
      where: { slug },
    });

    if (existingOrg) {
      return NextResponse.json(
        { error: "Slug já está em uso" },
        { status: 400 }
      );
    }

    const organization = await prisma.organization.create({
      data: {
        name,
        slug,
        logo_url,
      },
    });

    // Log the creation
    await prisma.log.create({
      data: {
        action: "CREATE_ORGANIZATION",
        details: { organization_id: organization.id },
        organization: {
          connect: { id: organization.id },
        },
        user: {
          connect: { id: session.user.id },
        },
      },
    });

    return NextResponse.json(organization, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar organização:", error);
    return NextResponse.json(
      { error: "Erro ao criar organização" },
      { status: 500 }
    );
  }
}

// PATCH /api/organizations/[id] - Update organization (Master only)
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (session.user.role !== "MASTER") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const body = await request.json();
    const { name, logo_url } = body;

    const organization = await prisma.organization.update({
      where: { id: params.id },
      data: {
        name,
        logo_url,
      },
    });

    // Log the update
    await prisma.log.create({
      data: {
        action: "UPDATE_ORGANIZATION",
        details: { organization_id: organization.id },
        organization: {
          connect: { id: organization.id },
        },
        user: {
          connect: { id: session.user.id },
        },
      },
    });

    return NextResponse.json(organization);
  } catch (error) {
    console.error("Erro ao atualizar organização:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar organização" },
      { status: 500 }
    );
  }
}

// DELETE /api/organizations/[id] - Delete organization (Master only)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (session.user.role !== "MASTER") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // Check if organization has any data
    const organization = await prisma.organization.findUnique({
      where: { id: params.id },
      include: {
        _count: {
          select: {
            units: true,
            users: true,
            employees: true,
            frequency_sheets: true,
          },
        },
      },
    });

    if (!organization) {
      return NextResponse.json(
        { error: "Organização não encontrada" },
        { status: 404 }
      );
    }

    // Prevent deletion if organization has data
    if (
      organization._count.units > 0 ||
      organization._count.users > 0 ||
      organization._count.employees > 0 ||
      organization._count.frequency_sheets > 0
    ) {
      return NextResponse.json(
        {
          error:
            "Não é possível excluir uma organização que possui dados cadastrados",
        },
        { status: 400 }
      );
    }

    await prisma.organization.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: "Organização excluída com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao excluir organização:", error);
    return NextResponse.json(
      { error: "Erro ao excluir organização" },
      { status: 500 }
    );
  }
}
