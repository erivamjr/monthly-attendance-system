"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { MasterDashboard } from "@/components/master-dashboard";
import { AdminDashboard } from "@/components/admin-dashboard";
import { ResponsibleDashboard } from "@/components/responsible-dashboard";

export default function OrganizationDashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  if (!session) {
    redirect("/login");
  }

  // Renderiza o dashboard apropriado com base no papel do usuário
  switch (session.user.role) {
    case "master":
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <MasterDashboard />
        </div>
      );
    case "admin":
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <AdminDashboard />
        </div>
      );
    case "responsible":
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <ResponsibleDashboard />
        </div>
      );
    default:
      redirect("/unauthorized");
  }
}
