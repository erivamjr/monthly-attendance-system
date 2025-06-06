"use client";

import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminDashboard } from "@/components/admin-dashboard";
import { ResponsibleDashboard } from "@/components/responsible-dashboard";
import { MasterDashboard } from "@/components/master-dashboard";

export default function Dashboard() {
  const { data: session } = useSession();
  const [currentMonth, setCurrentMonth] = useState("Maio 2025");

  // Se o usuário for master, mostrar apenas o dashboard master
  if (session?.user?.role === "master") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Calendar className="h-4 w-4" />
              {currentMonth}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <MasterDashboard />
      </div>
    );
  }

  // Para outros usuários, mostrar as abas admin/responsible
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            {currentMonth}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue={session?.user?.role || "admin"} className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="admin">Administrador</TabsTrigger>
          <TabsTrigger value="responsible">Responsável</TabsTrigger>
        </TabsList>

        <TabsContent value="admin" className="space-y-6">
          <AdminDashboard />
        </TabsContent>

        <TabsContent value="responsible" className="space-y-6">
          <ResponsibleDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
