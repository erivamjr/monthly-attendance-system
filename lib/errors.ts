import { NextResponse } from "next/server";
import { ZodError } from "zod";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 400,
    public code?: string
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function handleError(error: unknown) {
  console.error(error);

  if (error instanceof AppError) {
    return new NextResponse(error.message, { status: error.statusCode });
  }

  if (error instanceof ZodError) {
    const errors = error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    return new NextResponse(JSON.stringify({ errors }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        return new NextResponse("Um registro com este valor já existe", {
          status: 409,
        });
      case "P2003":
        return new NextResponse("Registro relacionado não encontrado", {
          status: 404,
        });
      case "P2025":
        return new NextResponse("Registro não encontrado", { status: 404 });
      default:
        return new NextResponse("Erro ao processar a requisição", {
          status: 400,
        });
    }
  }

  if (error instanceof PrismaClientValidationError) {
    return new NextResponse("Dados inválidos", { status: 400 });
  }

  return new NextResponse("Erro interno do servidor", { status: 500 });
}

export function handleAuthError() {
  return new NextResponse("Não autorizado", { status: 401 });
}

export function handleNotFoundError(resource: string) {
  return new NextResponse(`${resource} não encontrado(a)`, { status: 404 });
}

export function handleValidationError(message: string) {
  return new NextResponse(message, { status: 400 });
}

export function handleConflictError(message: string) {
  return new NextResponse(message, { status: 409 });
}
