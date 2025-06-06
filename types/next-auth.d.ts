// src/types/next-auth.d.ts
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    organizationId?: string;
    organizationSlug?: string;
    organizationLogo?: string;
    organizationName?: string;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      organizationId?: string;
      organizationSlug?: string;
      organizationLogo?: string;
      organizationName?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    role: string;
    organizationId?: string;
    organizationSlug?: string;
    organizationLogo?: string;
    organizationName?: string;
  }
}
