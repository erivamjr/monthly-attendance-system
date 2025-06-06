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
} from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Organizações",
    href: "/dashboard/master/organizations",
    icon: Building2,
  },
  {
    title: "Unidades",
    href: "/dashboard/units",
    icon: Building2,
  },
  {
    title: "Usuários",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Servidores",
    href: "/dashboard/employees",
    icon: Users,
  },
  {
    title: "Frequências",
    href: "/dashboard/sheets",
    icon: FileText,
  },
  {
    title: "Relatórios",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "Configurações",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen flex-col md:flex-row">
        <div className="w-64 shrink-0 border-r bg-background">
          <div className="flex h-14 items-center border-b px-4">
            <Skeleton className="h-6 w-40" />
          </div>
          <div className="p-4 space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-8 w-full" />
            ))}
          </div>
        </div>
        <main className="flex-1 p-4 md:p-6">
          <div className="space-y-4">
            <Skeleton className="h-8 w-[200px]" />
            <Skeleton className="h-32 w-full" />
          </div>
        </main>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <SidebarNav items={sidebarNavItems} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardContent>{children}</DashboardContent>;
}
