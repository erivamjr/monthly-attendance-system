"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  CalendarDays,
  FileText,
  Home,
  Settings,
  Users,
  Building2,
  ImageIcon,
  LogOut,
  Loader2,
} from "lucide-react";

export type SidebarNavItem = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: SidebarNavItem[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut({ redirect: false });
      router.push("/login");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="flex h-screen flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center font-semibold">
          <span className="text-lg">Sistema de Frequência</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className={cn("flex flex-col space-y-1", className)} {...props}>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent" : "transparent"
                  )}
                >
                  {Icon && <Icon className="mr-2 h-4 w-4" />}
                  <span>{item.title}</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t p-4">
        <Button
          variant="ghost"
          className="justify-start px-3"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saindo...
            </>
          ) : (
            <>
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
