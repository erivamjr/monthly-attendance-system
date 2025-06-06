"use client";

import { useState, useEffect } from "react";
import { Building2, Users, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/use-toast";
import { UserForm } from "@/components/user-form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSession } from "next-auth/react";

type DashboardStats = {
  totalUnits: number;
  totalUsers: number;
  totalEmployees: number;
};

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  unit: {
    name: string;
  } | null;
};

export function AdminDashboard() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [showUserForm, setShowUserForm] = useState(false);
  const [organization, setOrganization] = useState<any>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Buscar organização
        const orgResponse = await fetch(
          `/api/organizations/${session?.user?.organizationId}`
        );
        if (!orgResponse.ok) {
          throw new Error("Erro ao carregar dados da organização");
        }
        const org = await orgResponse.json();
        setOrganization(org);

        // Buscar usuários
        const usersResponse = await fetch("/api/users");
        if (!usersResponse.ok) {
          throw new Error("Erro ao carregar usuários");
        }
        const usersData = await usersResponse.json();
        setUsers(usersData);

        // Calcular estatísticas
        setStats({
          totalUnits: org._count?.units || 0,
          totalUsers: org._count?.users || 0,
          totalEmployees: org._count?.employees || 0,
        });
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar os dados do dashboard",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    if (session?.user?.organizationId) {
      fetchData();
    }
  }, [session?.user?.organizationId]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <Skeleton className="h-4 w-[100px]" />
                </CardTitle>
                <Skeleton className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <Skeleton className="h-8 w-[50px]" />
                </div>
                <p className="text-xs text-muted-foreground">
                  <Skeleton className="h-4 w-[120px]" />
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[200px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[200px] w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unidades</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalUnits}</div>
            <p className="text-xs text-muted-foreground">
              Total de unidades na organização
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              Total de usuários na organização
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Funcionários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalEmployees}</div>
            <p className="text-xs text-muted-foreground">
              Total de funcionários na organização
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Seção de Gerenciamento de Usuários */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Gerenciamento de Usuários</CardTitle>
            <CardDescription>
              Crie e gerencie usuários administradores e responsáveis da sua
              organização
            </CardDescription>
          </div>
          <Button onClick={() => setShowUserForm(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Usuário
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Unidade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.role === "admin" ? "Administrador" : "Responsável"}
                  </TableCell>
                  <TableCell>{user.unit?.name || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Modal de criação/edição de usuário */}
      <UserForm
        isOpen={showUserForm}
        onClose={() => setShowUserForm(false)}
        organizations={[organization].filter(Boolean)}
        isMasterView={false}
        onSuccess={async () => {
          setShowUserForm(false);
          try {
            // Buscar organização
            const orgResponse = await fetch(
              `/api/organizations/${session?.user?.organizationId}`
            );
            if (!orgResponse.ok) {
              throw new Error("Erro ao carregar dados da organização");
            }
            const org = await orgResponse.json();
            setOrganization(org);

            // Buscar usuários
            const usersResponse = await fetch("/api/users");
            if (!usersResponse.ok) {
              throw new Error("Erro ao carregar usuários");
            }
            const usersData = await usersResponse.json();
            setUsers(usersData);

            // Calcular estatísticas
            setStats({
              totalUnits: org._count?.units || 0,
              totalUsers: org._count?.users || 0,
              totalEmployees: org._count?.employees || 0,
            });
          } catch (error) {
            console.error("Erro ao recarregar dados:", error);
            toast({
              title: "Erro",
              description: "Não foi possível recarregar os dados",
              variant: "destructive",
            });
          }
        }}
      />
    </div>
  );
}
