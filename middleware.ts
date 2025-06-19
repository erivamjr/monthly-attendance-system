import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Lista de rotas que não precisam de verificação de configuração
const PUBLIC_ROUTES = ["/api/check-env", "/_next", "/favicon.ico"];

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const pathname = request.nextUrl.pathname;

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

  // Public routes for login/unauthorized pages
  if (pathname === "/login" || pathname === "/unauthorized") {
    if (token) {
      // If user is already logged in, redirect to their designated dashboard
      const targetSlug =
        token.role === "master" ? "master" : token.organizationSlug;
      return NextResponse.redirect(
        new URL(`/${targetSlug}/dashboard`, request.url)
      );
    }
    return NextResponse.next();
  }

  // Protected routes: if no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Extract organization slug from the URL path
  const pathSegments = pathname.split("/");
  const organizationSlugFromPath = pathSegments[1];

  // If there's no organization slug in the path (e.g., /dashboard instead of /saude/dashboard)
  // Or if the path is not part of a valid dashboard structure, redirect to unauthorized
  if (
    !organizationSlugFromPath ||
    !pathname.startsWith(`/${organizationSlugFromPath}/dashboard`)
  ) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Enforce correct slug based on user role
  if (token.role === "master") {
    // Master users should only access the "master" slug
    if (organizationSlugFromPath !== "master") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  } else {
    // Non-master users must access their own organization slug
    if (organizationSlugFromPath !== token.organizationSlug) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // Role-based access control for specific routes within a dashboard
  const baseDashboardPath = `/${organizationSlugFromPath}/dashboard`;

  const isAdmin = token.role === "admin";
  const isMaster = token.role === "master";
  const isResponsible = token.role === "responsible";

  // Routes that require master access
  if (pathname.startsWith(`${baseDashboardPath}/organizations`)) {
    if (!isMaster) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // Routes that require admin or master access
  if (
    pathname.startsWith(`${baseDashboardPath}/units`) ||
    pathname.startsWith(`${baseDashboardPath}/users`) ||
    pathname.startsWith(`${baseDashboardPath}/employees`) ||
    pathname.startsWith(`${baseDashboardPath}/salary-floor`) ||
    pathname.startsWith(`${baseDashboardPath}/exports`) ||
    pathname.startsWith(`${baseDashboardPath}/settings`)
  ) {
    if (!isAdmin && !isMaster) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // Routes that require admin, responsible, or master access
  if (
    pathname.startsWith(`${baseDashboardPath}/sheets`) ||
    pathname.startsWith(`${baseDashboardPath}/reports`) ||
    pathname.startsWith(`${baseDashboardPath}/frequency`) ||
    pathname.startsWith(`${baseDashboardPath}/attendances`)
  ) {
    if (!isAdmin && !isMaster && !isResponsible) {
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
