"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil } from "lucide-react";
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
import { useSession } from "next-auth/react";
import { UnitForm } from "@/components/unit-form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { DeleteUnitDialog } from "@/app/components/master/DeleteUnitDialog";

type Unit = {
  id: string;
  name: string;
  location: string;
  responsible: string | null;
  employeeCount: number;
  is_active: boolean;
};

export default function UnitsPage() {
  const { data: session } = useSession();
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingUnit, setEditingUnit] = useState<Unit | null>(null);
  const organizationId = session?.user?.organizationId;
  console.log("organizationId do usuário logado:", organizationId);

  useEffect(() => {
    if (!organizationId) return;

    async function loadUnits() {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/organizations/${organizationId}/units`
        );
        if (!response.ok) {
          throw new Error("Erro ao carregar unidades");
        }
        const data = await response.json();
        console.log("Unidades carregadas:", data);
        setUnits(data);
      } catch (err) {
        console.error("Erro ao carregar unidades:", err);
        toast({
          title: "Erro",
          description: "Não foi possível carregar as unidades.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    loadUnits();
  }, [organizationId]);

  const handleSuccess = () => {
    setShowForm(false);
    // Recarregar unidades
    if (organizationId) {
      fetch(`/api/organizations/${organizationId}/units`)
        .then(async (response) => {
          if (!response.ok) {
            if (response.status === 401) {
              toast({
                title: "Sessão expirada",
                description: "Faça login novamente para continuar.",
                variant: "destructive",
              });
              // window.location.href = "/login";
              return;
            }
            throw new Error("Erro ao atualizar lista de unidades.");
          }
          return response.json();
        })
        .then((data) => {
          if (data) setUnits(data);
        })
        .catch((err) => {
          console.error("Erro ao recarregar unidades:", err);
          toast({
            title: "Erro",
            description: err.message || "Erro ao atualizar lista de unidades.",
            variant: "destructive",
          });
        });
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Unidades</h2>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Funcionários</TableHead>
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
                    <Skeleton className="h-4 w-[300px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[150px]" />
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

  if (!organizationId) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Unidades</h2>
        </div>
        <p>Carregando informações da organização...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Unidades</h2>
        <Dialog
          open={showForm || !!editingUnit}
          onOpenChange={(open) => {
            setShowForm(open);
            if (!open) setEditingUnit(null);
          }}
        >
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nova Unidade
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingUnit ? "Editar Unidade" : "Nova Unidade"}
              </DialogTitle>
              <DialogDescription>
                {editingUnit
                  ? "Altere os dados da unidade."
                  : "Preencha os dados da nova unidade."}
              </DialogDescription>
            </DialogHeader>
            <UnitForm
              onSuccess={() => {
                handleSuccess();
                setEditingUnit(null);
              }}
              onCancel={() => {
                setShowForm(false);
                setEditingUnit(null);
              }}
              organizationId={organizationId}
              {...(editingUnit && { initialData: editingUnit })}
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Responsável</TableHead>
              <TableHead>Funcionários</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {units.map((unit) => (
              <TableRow key={unit.id}>
                <TableCell className="font-medium">{unit.name}</TableCell>
                <TableCell>{unit.location}</TableCell>
                <TableCell>{unit.responsible || "Não definido"}</TableCell>
                <TableCell>{unit.employeeCount}</TableCell>
                <TableCell>
                  <Switch
                    checked={unit.is_active}
                    onCheckedChange={async (checked: boolean) => {
                      await fetch(`/api/units/${unit.id}`, {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ is_active: checked }),
                      });
                      handleSuccess();
                    }}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        setEditingUnit(unit);
                        setShowForm(false);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <DeleteUnitDialog unit={unit} onSuccess={handleSuccess} />
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
