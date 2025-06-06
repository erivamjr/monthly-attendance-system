"use client";

import { useState, useEffect } from "react";
import { Plus, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/use-toast";
import { UserForm } from "@/components/user-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type User = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  role: "admin" | "responsible";
  organization_id: string;
  unit: {
    name: string | null;
  } | null;
  unit_id: string | null;
  is_active: boolean;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");

  useEffect(() => {
    const userStr = sessionStorage.getItem("currentUser");
    if (userStr) {
      setCurrentUser(JSON.parse(userStr));
    }
  }, []);

  const loadUsers = async () => {
    if (!currentUser?.organization_id) return;

    try {
      setLoading(true);
      const response = await fetch(
        `/api/users?organizationId=${currentUser.organization_id}`
      );
      if (!response.ok) {
        throw new Error("Erro ao carregar usuários");
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.error("Erro ao carregar usuários:", err);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os usuários.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?.organization_id) {
      loadUsers();
    }
  }, [currentUser]);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setShowForm(true);
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

      loadUsers();
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

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Usuários</h2>
          <Skeleton className="h-10 w-[140px]" />
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(3)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-[200px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[150px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[180px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[50px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[80px]" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
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
          <Button onClick={() => setShowForm(true)} className="gap-2">
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
                  {user.role === "admin"
                    ? "Administrador"
                    : user.role === "responsible"
                    ? "Responsável"
                    : "Visualizador"}
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
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setSelectedUser(null);
        }}
        organizations={[currentUser?.organization].filter(Boolean)}
        isMasterView={false}
        onSuccess={() => {
          loadUsers();
          setShowForm(false);
          setSelectedUser(null);
        }}
        user={
          selectedUser
            ? {
                id: selectedUser.id,
                name: selectedUser.name,
                email: selectedUser.email,
                cpf: selectedUser.cpf,
                role: selectedUser.role,
                organization_id: selectedUser.organization_id,
                unit_id: selectedUser.unit_id || undefined,
              }
            : undefined
        }
      />
    </div>
  );
}
