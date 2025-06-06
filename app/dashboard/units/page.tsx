"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
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
  const organizationId = session?.user?.organizationId;

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
        .then((response) => response.json())
        .then((data) => setUnits(data))
        .catch((err) => {
          console.error("Erro ao recarregar unidades:", err);
          toast({
            title: "Erro",
            description: "Erro ao atualizar lista de unidades.",
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
        <Button onClick={() => setShowForm(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Nova Unidade
        </Button>
      </div>

      {showForm ? (
        <UnitForm
          onSuccess={handleSuccess}
          onCancel={() => setShowForm(false)}
          organizationId={organizationId}
        />
      ) : (
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
              {units.map((unit) => (
                <TableRow key={unit.id}>
                  <TableCell className="font-medium">{unit.name}</TableCell>
                  <TableCell>{unit.location}</TableCell>
                  <TableCell>{unit.responsible || "Não definido"}</TableCell>
                  <TableCell>{unit.employeeCount}</TableCell>
                  <TableCell>
                    {unit.is_active ? (
                      <span className="text-green-600">Ativo</span>
                    ) : (
                      <span className="text-red-600">Inativo</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
