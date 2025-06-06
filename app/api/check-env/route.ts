import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Verificando variáveis de ambiente...");

    // Verifica se a variável existe e não está vazia
    const hasEnv =
      !!process.env.DATABASE_URL && process.env.DATABASE_URL.trim() !== "";
    console.log("DATABASE_URL presente:", hasEnv);

    // Adiciona headers para evitar cache
    const headers = {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    };

    return NextResponse.json(
      {
        hasEnv,
        databaseUrl: process.env.DATABASE_URL
          ? process.env.DATABASE_URL.slice(0, 10) + "..."
          : null,
        timestamp: new Date().toISOString(),
      },
      { headers }
    );
  } catch (error) {
    console.error("Erro ao verificar ambiente:", error);
    return NextResponse.json(
      {
        error: "Erro ao verificar configuração",
        hasEnv: false,
        message: error instanceof Error ? error.message : "Erro desconhecido",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
