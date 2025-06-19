"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, ArrowLeft } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Unit = {
  id: string;
  name: string;
  location: string;
  _count: {
    users: number;
    employees: number;
  };
};

type Organization = {
  id: string;
  name: string;
};

export default function UnitsPage() {
  const params = useParams();
  const router = useRouter();
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [editingUnit, setEditingUnit] = useState<Unit | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        await Promise.all([loadOrganization(), loadUnits()]);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [params.organizationId]);

  const loadOrganization = async () => {
    try {
      const response = await fetch(
        `/api/organizations/${params.organizationId}`
      );
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erro ao carregar organização");
      }
      const data = await response.json();
      setOrganization(data);
    } catch (err) {
      console.error("Erro ao carregar organização:", err);
      toast({
        title: "Erro",
        description:
          err instanceof Error
            ? err.message
            : "Não foi possível carregar a organização.",
        variant: "destructive",
      });
      throw err;
    }
  };

  const loadUnits = async () => {
    try {
      const response = await fetch(
        `/api/organizations/${params.organizationId}/units`
      );
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erro ao carregar unidades");
      }
      const data = await response.json();
      setUnits(data);
    } catch (err) {
      console.error("Erro ao carregar unidades:", err);
      toast({
        title: "Erro",
        description:
          err instanceof Error
            ? err.message
            : "Não foi possível carregar as unidades.",
        variant: "destructive",
      });
      throw err;
    }
  };

  const handleEdit = (unit: Unit) => {
    setEditingUnit(unit);
    setName(unit.name);
    setLocation(unit.location);
    setShowForm(true);
  };

  const handleDelete = async (unitId: string) => {
    try {
      const response = await fetch(
        `/api/organizations/${params.organizationId}/units/${unitId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao excluir unidade");
      }

      toast({
        title: "Sucesso",
        description: "Unidade excluída com sucesso!",
      });

      loadUnits();
    } catch (err) {
      console.error("Erro ao excluir unidade:", err);
      toast({
        title: "Erro",
        description: "Não foi possível excluir a unidade.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const url = editingUnit
        ? `/api/organizations/${params.organizationId}/units/${editingUnit.id}`
        : `/api/organizations/${params.organizationId}/units`;

      const method = editingUnit ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          location,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error.error ||
            `Erro ao ${editingUnit ? "atualizar" : "criar"} unidade`
        );
      }

      toast({
        title: "Sucesso",
        description: `Unidade ${
          editingUnit ? "atualizada" : "criada"
        } com sucesso!`,
      });

      setName("");
      setLocation("");
      setShowForm(false);
      setEditingUnit(null);
      loadUnits();
    } catch (err) {
      console.error("Erro ao salvar unidade:", err);
      toast({
        title: "Erro",
        description:
          err instanceof Error ? err.message : "Erro ao salvar unidade",
        variant: "destructive",
      });
    } finally {
      setFormLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-2xl font-bold tracking-tight">
            Unidades - Carregando...
          </h2>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Usuários</TableHead>
                <TableHead>Funcionários</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(3)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-[200px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[300px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[50px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[50px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
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
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold tracking-tight">
          Unidades - {organization?.name}
        </h2>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={() => {
            setEditingUnit(null);
            setName("");
            setLocation("");
            setShowForm(true);
          }}
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          Nova Unidade
        </Button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border p-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Nome
              </label>
              <Input
                id="name"
                placeholder="Nome da unidade"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="location" className="text-sm font-medium">
                Localização
              </label>
              <Input
                id="location"
                placeholder="Localização da unidade"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setShowForm(false);
                setEditingUnit(null);
                setName("");
                setLocation("");
              }}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={formLoading}>
              {formLoading
                ? "Salvando..."
                : editingUnit
                ? "Atualizar"
                : "Criar"}
            </Button>
          </div>
        </form>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Usuários</TableHead>
              <TableHead>Funcionários</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {units.map((unit) => (
              <TableRow key={unit.id}>
                <TableCell className="font-medium">{unit.name}</TableCell>
                <TableCell>{unit.location}</TableCell>
                <TableCell>{unit._count.users}</TableCell>
                <TableCell>{unit._count.employees}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEdit(unit)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Confirmar exclusão
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Tem certeza que deseja excluir a unidade "
                            {unit.name}"? Esta ação não pode ser desfeita.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(unit.id)}
                          >
                            Excluir
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
