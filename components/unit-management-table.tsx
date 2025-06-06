"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/components/auth-provider";
import { Pencil, Trash2, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UnitForm } from "@/components/unit-form";
import { EmployeeForm } from "@/components/employee-form";

type Unit = {
  id: string;
  name: string;
  location: string;
  is_active: boolean;
  _count?: {
    employees: number;
  };
};

export function UnitManagementTable() {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [showAddEmployeeDialog, setShowAddEmployeeDialog] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const fetchUnits = async () => {
    try {
      const response = await fetch("/api/units");
      if (!response.ok) {
        throw new Error("Erro ao carregar unidades");
      }
      const data = await response.json();
      setUnits(data);
    } catch (error) {
      console.error("Erro ao carregar unidades:", error);
      toast({
        title: "Erro ao carregar unidades",
        description: "Não foi possível carregar a lista de unidades.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnits();
  }, []);

  const handleDelete = async (unitId: string) => {
    if (!confirm("Tem certeza que deseja excluir esta unidade?")) {
      return;
    }

    try {
      const response = await fetch(`/api/units/${unitId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir unidade");
      }

      toast({
        title: "Unidade excluída",
        description: "A unidade foi removida com sucesso.",
      });

      fetchUnits();
    } catch (error) {
      console.error("Erro ao excluir unidade:", error);
      toast({
        title: "Erro ao excluir unidade",
        description: "Não foi possível excluir a unidade.",
        variant: "destructive",
      });
    }
  };

  const handleAddEmployee = () => {
    setShowAddEmployeeDialog(true);
  };

  const handleEmployeeAdded = () => {
    setShowAddEmployeeDialog(false);
    fetchUnits();
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Adicionar Unidade</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova Unidade</DialogTitle>
              <DialogDescription>
                Preencha os dados da nova unidade.
              </DialogDescription>
            </DialogHeader>
            <UnitForm />
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Localização</TableHead>
            <TableHead>Funcionários</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {units.map((unit) => (
            <TableRow key={unit.id}>
              <TableCell className="font-medium">{unit.name}</TableCell>
              <TableCell>{unit.location}</TableCell>
              <TableCell>{unit._count?.employees || 0}</TableCell>
              <TableCell>
                <Badge variant={unit.is_active ? "success" : "destructive"}>
                  {unit.is_active ? "Ativa" : "Inativa"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setSelectedUnit(unit);
                      handleAddEmployee();
                    }}
                  >
                    <Users className="h-4 w-4" />
                    <span className="sr-only">Gerenciar Funcionários</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      // TODO: Implementar edição
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(unit.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Excluir</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={showAddEmployeeDialog}
        onOpenChange={setShowAddEmployeeDialog}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Funcionário</DialogTitle>
            <DialogDescription>
              Adicione um novo funcionário à unidade {selectedUnit?.name}.
            </DialogDescription>
          </DialogHeader>
          {selectedUnit && (
            <EmployeeForm
              unitId={selectedUnit.id}
              onSuccess={handleEmployeeAdded}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
