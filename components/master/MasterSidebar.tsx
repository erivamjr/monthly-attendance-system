"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MasterSidebar() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/dashboard/master",
      label: "Dashboard",
      active: pathname === "/dashboard/master",
    },
    {
      href: "/dashboard/master/organizations",
      label: "Organizações",
      active: pathname === "/dashboard/master/organizations",
    },
    {
      href: "/dashboard/master/users",
      label: "Usuários",
      active: pathname === "/dashboard/master/users",
    },
  ];

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-background text-primary">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                route.active
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
