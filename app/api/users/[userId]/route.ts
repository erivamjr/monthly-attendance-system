import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function PUT(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    console.log("SESSION = ", session);

    if (!session?.user) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const body = await request.json();

    // Verificar se o usuário tem permissão para editar
    if (
      session.user.role.toLowerCase() !== "master" &&
      session.user.role.toLowerCase() !== "admin"
    ) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Buscar o usuário atual
    const user = await prisma.user.findUnique({
      where: { id: params.userId },
      include: {
        organization: true,
      },
    });

    if (!user) {
      return new NextResponse("Usuário não encontrado", { status: 404 });
    }

    // Se não for master, verificar se o usuário pertence à mesma organização
    // O usuário master pode editar usuários de qualquer organização
    if (
      session.user.role.toLowerCase() === "admin" &&
      user.organization_id !== session.user.organizationId
    ) {
      console.log(
        "Admin orgId:",
        session.user.organizationId,
        "User orgId:",
        user.organization_id
      );
      return new NextResponse("Não autorizado", { status: 401 });
    }

    // Se for responsável, verificar se a unidade pertence à organização
    if (body.role === "responsible") {
      if (!body.unit_id) {
        return new NextResponse(
          "Unidade é obrigatória para usuários responsáveis",
          { status: 400 }
        );
      }

      const unit = await prisma.unit.findUnique({
        where: { id: body.unit_id },
        include: {
          organization: true,
        },
      });

      if (!unit) {
        return new NextResponse("Unidade não encontrada", { status: 404 });
      }

      if (unit.organization_id !== body.organization_id) {
        return new NextResponse(
          "Unidade não pertence à organização selecionada",
          { status: 400 }
        );
      }
    }

    // Impedir que admin edite usuário para master
    if (session.user.role.toLowerCase() === "admin" && body.role === "master") {
      return new NextResponse("Admins não podem editar usuários para master", {
        status: 403,
      });
    }

    // Preparar dados para atualização
    const updateData: any = {
      name: body.name,
      email: body.email,
      cpf: body.cpf,
      role: body.role,
      organization_id: body.organization_id,
      unit_id: body.role === "responsible" ? body.unit_id : null,
    };

    // Se uma nova senha foi fornecida, hash e adiciona aos dados
    if (body.password) {
      updateData.password = await bcrypt.hash(body.password, 10);
    }

    // Atualizar usuário
    const updatedUser = await prisma.user.update({
      where: { id: params.userId },
      data: updateData,
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  context: { params: { userId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  const body = await request.json();
  const { name, email, cpf, role, unit_id, is_active, password } = body;

  const updateData: any = {};
  if (name) updateData.name = name;
  if (email) updateData.email = email;
  if (cpf) updateData.cpf = cpf;
  if (role) updateData.role = role;
  if (unit_id !== undefined) updateData.unit_id = unit_id || null;
  if (is_active !== undefined) updateData.is_active = is_active;
  if (password) updateData.password = await bcrypt.hash(password, 10);

  const updatedUser = await prisma.user.update({
    where: { id: context.params.userId },
    data: updateData,
    select: {
      id: true,
      name: true,
      email: true,
      cpf: true,
      role: true,
      is_active: true,
      organization_id: true,
      unit_id: true,
      unit: { select: { id: true, name: true } },
    },
  });

  return NextResponse.json(updatedUser);
}
