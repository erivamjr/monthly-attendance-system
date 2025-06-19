"use client";

import type React from "react";
import { SidebarNav } from "@/components/sidebar-nav";
import {
  BarChart3,
  CalendarDays,
  FileText,
  Home,
  Settings,
  Users,
  Building2,
  LayoutDashboard,
  ClipboardList,
} from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import type { SidebarNavItem } from "@/components/sidebar-nav";
import { redirect } from "next/navigation";

interface OrganizationLayoutProps {
  children: React.ReactNode;
  params: { organizationSlug: string };
}

export default function OrganizationLayout({
  children,
  params,
}: OrganizationLayoutProps) {
  const { organizationSlug } = params;
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  if (!session) {
    redirect("/login");
  }

  // Verifica se o usuário tem acesso a esta organização
  if (
    session.user.role !== "master" &&
    session.user.organizationSlug !== organizationSlug
  ) {
    redirect("/unauthorized");
  }

  const masterNavItems: SidebarNavItem[] = [
    {
      title: "Dashboard",
      href: `/${organizationSlug}/dashboard`,
      icon: LayoutDashboard,
    },
    {
      title: "Organizações",
      href: `/${organizationSlug}/dashboard/organizations`,
      icon: Building2,
    },
    {
      title: "Usuários",
      href: `/${organizationSlug}/dashboard/users`,
      icon: Users,
    },
  ];

  const adminNavItems: SidebarNavItem[] = [
    {
      title: "Dashboard",
      href: `/${organizationSlug}/dashboard`,
      icon: LayoutDashboard,
    },
    {
      title: "Unidades",
      href: `/${organizationSlug}/dashboard/units`,
      icon: Building2,
    },
    {
      title: "Usuários",
      href: `/${organizationSlug}/dashboard/users`,
      icon: Users,
    },
    {
      title: "Funcionários",
      href: `/${organizationSlug}/dashboard/employees`,
      icon: Users,
    },
    {
      title: "Frequência",
      href: `/${organizationSlug}/dashboard/frequency`,
      icon: CalendarDays,
    },
    {
      title: "Relatórios",
      href: `/${organizationSlug}/dashboard/reports`,
      icon: FileText,
    },
    {
      title: "Configurações",
      href: `/${organizationSlug}/dashboard/settings`,
      icon: Settings,
    },
  ];

  const responsibleNavItems: SidebarNavItem[] = [
    {
      title: "Dashboard",
      href: `/${organizationSlug}/dashboard`,
      icon: LayoutDashboard,
    },
    {
      title: "Presenças",
      href: `/${organizationSlug}/dashboard/attendances`,
      icon: ClipboardList,
    },
  ];

  let navItems: SidebarNavItem[] = [];

  switch (session.user.role) {
    case "master":
      navItems = masterNavItems;
      break;
    case "admin":
      navItems = adminNavItems;
      break;
    case "responsible":
      navItems = responsibleNavItems;
      break;
  }

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-background">
        <SidebarNav items={navItems} />
      </div>
      <main className="md:pl-72">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
