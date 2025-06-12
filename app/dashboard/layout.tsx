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
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import type { SidebarNavItem } from "@/components/sidebar-nav";
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  const masterNavItems: SidebarNavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard/master",
      icon: LayoutDashboard,
    },
    {
      title: "Organizações",
      href: "/dashboard/master/organizations",
      icon: Building2,
    },
    {
      title: "Usuários",
      href: "/dashboard/master/users",
      icon: Users,
    },
  ];

  const adminNavItems: SidebarNavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Unidades",
      href: "/dashboard/admin/units",
      icon: Building2,
    },
    {
      title: "Usuários",
      href: "/dashboard/admin/users",
      icon: Users,
    },
  ];

  const responsibleNavItems: SidebarNavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard/responsible",
      icon: LayoutDashboard,
    },
    {
      title: "Presenças",
      href: "/dashboard/responsible/attendances",
      icon: ClipboardList,
    },
  ];

  let navItems: SidebarNavItem[] = [];

  switch (session.user.role) {
    case "MASTER":
      navItems = masterNavItems;
      break;
    case "ADMIN":
      navItems = adminNavItems;
      break;
    case "RESPONSIBLE":
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
