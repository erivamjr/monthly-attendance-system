import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import * as z from "zod";

const organizationSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  slug: z.string().min(3, "Slug deve ter no mínimo 3 caracteres"),
  logo_url: z.string().nullable().optional(),
});

export async function PUT(
  request: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "MASTER") {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const json = await request.json();
    const body = organizationSchema.parse(json);

    // Verifica se a organização existe
    const existingOrg = await prisma.organization.findUnique({
      where: { id: params.organizationId },
    });

    if (!existingOrg) {
      return new NextResponse("Organização não encontrada", { status: 404 });
    }

    // Verifica se o novo slug já está em uso por outra organização
    if (body.slug !== existingOrg.slug) {
      const slugExists = await prisma.organization.findUnique({
        where: { slug: body.slug },
      });

      if (slugExists) {
        return new NextResponse("Já existe uma organização com este slug", {
          status: 400,
        });
      }
    }

    const organization = await prisma.organization.update({
      where: { id: params.organizationId },
      data: {
        name: body.name,
        slug: body.slug,
        logo_url: body.logo_url,
      },
    });

    return NextResponse.json(organization);
  } catch (error) {
    console.error("[ORGANIZATION_PUT]", error);
    if (error instanceof z.ZodError) {
      return new NextResponse(error.errors[0].message, { status: 400 });
    }
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}

export async function GET(
  request: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Verificar permissões
    if (session.user.role === "master") {
      // Master pode ver qualquer organização
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
        return new NextResponse("Organização não encontrada", { status: 404 });
      }

      return NextResponse.json(organization);
    } else if (session.user.role === "admin") {
      // Admin só pode ver sua própria organização
      if (params.organizationId !== session.user.organizationId) {
        return new NextResponse("Não autorizado", { status: 401 });
      }

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
        return new NextResponse("Organização não encontrada", { status: 404 });
      }

      return NextResponse.json(organization);
    } else {
      return new NextResponse("Não autorizado", { status: 401 });
    }
  } catch (error) {
    console.error("[ORGANIZATION_GET]", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { organizationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "MASTER") {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Verificar se a organização existe
    const organization = await prisma.organization.findUnique({
      where: {
        id: params.organizationId,
      },
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
      return new NextResponse("Organização não encontrada", { status: 404 });
    }

    // Verificar se há dependências
    if (
      organization._count.units > 0 ||
      organization._count.users > 0 ||
      organization._count.employees > 0 ||
      organization._count.frequency_sheets > 0
    ) {
      return new NextResponse(
        "Não é possível excluir uma organização que possui unidades, usuários, funcionários ou folhas de frequência",
        { status: 400 }
      );
    }

    // EXCLUIR LOGS VINCULADOS
    await prisma.log.deleteMany({
      where: { organization_id: params.organizationId },
    });

    // Agora sim, excluir a organização
    await prisma.organization.delete({
      where: {
        id: params.organizationId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[ORGANIZATION_DELETE]", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}
