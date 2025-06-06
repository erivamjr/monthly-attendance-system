import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Lista de rotas que não precisam de verificação de configuração
const PUBLIC_ROUTES = ["/api/check-env", "/_next", "/favicon.ico"];

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Verifica se a rota atual é pública
  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Verifica se a variável de ambiente existe
  const hasDatabaseUrl =
    !!process.env.DATABASE_URL && process.env.DATABASE_URL.trim() !== "";

  // Se não tiver a configuração necessária e não estiver na página de configuração
  if (!hasDatabaseUrl && !pathname.startsWith("/config")) {
    // Redireciona para a página de configuração
    return NextResponse.redirect(new URL("/config", request.url));
  }

  // Public routes
  if (pathname === "/login" || pathname === "/unauthorized") {
    if (token) {
      // If user is already logged in, redirect to their organization's dashboard
      if (token.role === "MASTER") {
        return NextResponse.redirect(new URL("/dashboard/master", request.url));
      }
      return NextResponse.redirect(
        new URL(`/${token.organizationSlug}/dashboard`, request.url)
      );
    }
    return NextResponse.next();
  }

  // Protected routes
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Master routes
  if (pathname.startsWith("/dashboard/master")) {
    if (token.role !== "MASTER") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
    return NextResponse.next();
  }

  // Organization routes
  const organizationSlug = pathname.split("/")[1];
  if (!organizationSlug) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Check if user has access to this organization
  if (token.role !== "MASTER" && token.organizationSlug !== organizationSlug) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Role-based access control for specific routes
  const isAdmin = token.role === "ADMIN";
  const isResponsible = token.role === "RESPONSIBLE";

  // Routes that require admin access
  if (
    pathname.includes("/units") ||
    pathname.includes("/users") ||
    pathname.includes("/employees") ||
    pathname.includes("/salary-floor") ||
    pathname.includes("/export")
  ) {
    if (!isAdmin && token.role !== "MASTER") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // Routes that require admin or responsible access
  if (pathname.includes("/frequency")) {
    if (!isAdmin && !isResponsible && token.role !== "MASTER") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
