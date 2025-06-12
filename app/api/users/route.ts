import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import * as z from "zod";
import bcrypt from "bcryptjs";

const userSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  cpf: z.string().min(11, "CPF inválido").max(14, "CPF inválido"),
  role: z.enum(["master", "admin", "coordinator"]),
  organization_id: z.string().min(1, "Organização é obrigatória"),
  unit_id: z.string().optional(),
});

const userUpdateSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  cpf: z.string().min(11, "CPF inválido").max(14, "CPF inválido"),
  role: z.enum(["master", "admin", "coordinator"]),
  unit_id: z.string().optional(),
  password: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .optional(),
});

// GET /api/users - List users (filtered by organization for Admin)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const organizationId = searchParams.get("organizationId") || undefined;

    // For non-master users, force their organization context
    let whereClause: any = {
      is_active: true,
    };

    if (session.user.role === "MASTER") {
      if (organizationId) {
        whereClause.organization_id = organizationId;
      }
    } else {
      whereClause.organization_id = session.user.organizationId;
    }

    const users = await prisma.user.findMany({
      where: whereClause,
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        role: true,
        is_active: true,
        created_at: true,
        organization: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        unit: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    return NextResponse.json(
      { error: "Erro ao carregar usuários" },
      { status: 500 }
    );
  }
}

// POST /api/users - Create new user (Master/Admin only)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (!["MASTER", "ADMIN"].includes(session.user.role)) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const body = await request.json();
    const { name, email, cpf, role, organization_id, unit_id, password } = body;

    // Validate required fields
    if (!name || !email || !cpf || !role || !organization_id) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    // For non-master users, ensure they can only create users in their organization
    if (
      session.user.role === "ADMIN" &&
      organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // Check if email is already in use
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { cpf }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email ou CPF já cadastrado" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password || "changeme123", 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        cpf,
        role,
        organization_id,
        unit_id,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        role: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
        unit: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Log the creation
    await prisma.log.create({
      data: {
        organization_id,
        user_id: session.user.id,
        action: "CREATE_USER",
        details: { created_user_id: user.id },
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return NextResponse.json(
      { error: "Erro ao criar usuário" },
      { status: 500 }
    );
  }
}

// PATCH /api/users/[id] - Update user (Master/Admin only)
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (!["MASTER", "ADMIN"].includes(session.user.role)) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const user = await prisma.user.findUnique({
      where: { id: params.id },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only update users in their organization
    if (
      session.user.role === "ADMIN" &&
      user.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const body = await request.json();
    const { name, email, cpf, role, unit_id, is_active, password } = body;

    // Check if email/cpf is already in use by another user
    if (email || cpf) {
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [email ? { email } : {}, cpf ? { cpf } : {}],
          NOT: {
            id: params.id,
          },
        },
      });

      if (existingUser) {
        return NextResponse.json(
          { error: "Email ou CPF já cadastrado para outro usuário" },
          { status: 400 }
        );
      }
    }

    // Prepare update data
    const updateData: any = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (cpf) updateData.cpf = cpf;
    if (role) updateData.role = role;
    if (unit_id !== undefined) updateData.unit_id = unit_id;
    if (is_active !== undefined) updateData.is_active = is_active;
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: params.id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        role: true,
        is_active: true,
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
        unit: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Log the update
    await prisma.log.create({
      data: {
        organization_id: user.organization_id,
        user_id: session.user.id,
        action: "UPDATE_USER",
        details: { updated_user_id: user.id },
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar usuário" },
      { status: 500 }
    );
  }
}

// DELETE /api/users/[id] - Delete user (Master/Admin only)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    if (!["MASTER", "ADMIN"].includes(session.user.role)) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    const user = await prisma.user.findUnique({
      where: { id: params.id },
      include: {
        _count: {
          select: {
            submitted_sheets: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only delete users in their organization
    if (
      session.user.role === "ADMIN" &&
      user.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // Prevent deletion if user has submitted sheets
    if (user._count.submitted_sheets > 0) {
      return NextResponse.json(
        {
          error:
            "Não é possível excluir um usuário que possui folhas de frequência enviadas",
        },
        { status: 400 }
      );
    }

    await prisma.user.delete({
      where: { id: params.id },
    });

    // Log the deletion
    await prisma.log.create({
      data: {
        organization_id: user.organization_id,
        user_id: session.user.id,
        action: "DELETE_USER",
        details: { deleted_user_id: user.id },
      },
    });

    return NextResponse.json(
      { message: "Usuário excluído com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    return NextResponse.json(
      { error: "Erro ao excluir usuário" },
      { status: 500 }
    );
  }
}
