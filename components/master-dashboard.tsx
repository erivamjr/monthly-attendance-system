"use client";

import { useState, useEffect } from "react";
import { Building2, Users, Plus, Edit } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchData } from "next-auth/client/_utils";

type DashboardStats = {
  totalOrganizations: number;
  totalUnits: number;
  totalUsers: number;
  totalEmployees: number;
};

type User = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  role: "master" | "admin" | "coordinator";
  organization_id: string;
  organization: {
    name: string;
  };
  unit: {
    name: string;
  } | null;
  unit_id?: string;
  is_active: boolean;
};

export function MasterDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [showUserForm, setShowUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");

  async function fetchData() {
    try {
      setLoading(true);
      // Buscar organizações
      const orgResponse = await fetch("/api/organizations");
      if (!orgResponse.ok) {
        throw new Error("Erro ao carregar estatísticas");
      }
      const orgs = await orgResponse.json();
      setOrganizations(orgs);

      // Buscar usuários
      const usersResponse = await fetch("/api/users");
      if (!usersResponse.ok) {
        throw new Error("Erro ao carregar usuários");
      }
      const usersData = await usersResponse.json();
      setUsers(usersData);

      // Calcular estatísticas
      const stats = {
        totalOrganizations: orgs.length,
        totalUnits: orgs.reduce(
          (acc: number, org: any) => acc + (org._count?.units || 0),
          0
        ),
        totalUsers: orgs.reduce(
          (acc: number, org: any) => acc + (org._count?.users || 0),
          0
        ),
        totalEmployees: orgs.reduce(
          (acc: number, org: any) => acc + (org._count?.employees || 0),
          0
        ),
      };

      setStats(stats);
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

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
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

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setShowUserForm(true);
  };

  const handleToggleStatus = async (userId: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/users/${userId}/toggle-status`, {
        method: "PATCH",
      });

      if (!response.ok) {
        throw new Error("Erro ao alterar status do usuário");
      }

      toast({
        title: "Sucesso",
        description: `Usuário ${
          currentStatus ? "desativado" : "ativado"
        } com sucesso`,
      });

      // Recarregar dados
      fetchData();
    } catch (error) {
      console.error("Erro ao alterar status do usuário:", error);
      toast({
        title: "Erro",
        description: "Não foi possível alterar o status do usuário",
        variant: "destructive",
      });
    }
  };

  const filteredUsers = users.filter((user) => {
    if (statusFilter === "all") return true;
    if (statusFilter === "active") return user.is_active;
    return !user.is_active;
  });

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Organizações</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats?.totalOrganizations}
            </div>
            <p className="text-xs text-muted-foreground">
              Total de organizações cadastradas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unidades</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalUnits}</div>
            <p className="text-xs text-muted-foreground">
              Total de unidades em todas as organizações
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
              Total de usuários em todas as organizações
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
              Total de funcionários em todas as organizações
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Remove the organizations table from here */}
      {/* Remove the users table from here */}
      {/* <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">Usuários</h2>
          <div className="flex gap-2">
            <Select
              value={statusFilter}
              onValueChange={(value: "all" | "active" | "inactive") =>
                setStatusFilter(value)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="active">Ativos</SelectItem>
                <SelectItem value="inactive">Inativos</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={() => setShowUserForm(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Novo Usuário
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Unidade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.role === "master"
                      ? "Master"
                      : user.role === "admin"
                      ? "Administrador"
                      : "Coordenador"}
                  </TableCell>
                  <TableCell>{user.unit?.name || "Não definida"}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.is_active
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.is_active ? "Ativo" : "Inativo"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(user)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          handleToggleStatus(user.id, user.is_active)
                        }
                        className={
                          user.is_active ? "text-red-600" : "text-green-600"
                        }
                      >
                        {user.is_active ? "Desativar" : "Ativar"}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <UserForm
          isOpen={showUserForm}
          onClose={() => {
            setShowUserForm(false);
            setSelectedUser(null);
          }}
          onSuccess={() => {
            setShowUserForm(false);
            setSelectedUser(null);
            fetchData();
          }}
          user={selectedUser ? {
            ...selectedUser,
            password: "", // UserForm expects password, but we don't fetch it
            role: selectedUser.role as "master" | "admin" | "coordinator" // Explicit cast for role
          } : undefined}
          isMasterView={true}
        />
      </div> */}
    </div>
  );
}
