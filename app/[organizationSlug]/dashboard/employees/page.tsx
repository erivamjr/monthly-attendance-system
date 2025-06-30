"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { EmployeeForm } from "@/components/employee-form";

type Employee = {
  id: string;
  name: string;
  registration: string;
  position: string;
  unit_id: string;
  unit: {
    name: string;
  };
  is_active: boolean;
  cpf?: string;
  rg?: string;
  rg_state?: string;
  contract_type?: string;
  address?: string;
};

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >();
  const { toast } = useToast();

  const loadEmployees = async () => {
    try {
      const response = await fetch("/api/employees");
      if (!response.ok) {
        throw new Error("Erro ao carregar servidores");
      }
      const data = await response.json();
      console.log("CONSOLANDO = ", data.employees);
      setEmployees(data.employees);
    } catch (error) {
      console.error("Erro ao carregar servidores:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os servidores",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja deletar este servidor?")) return;
    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao deletar servidor");
      toast({ title: "Sucesso", description: "Servidor deletado com sucesso" });
      loadEmployees();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível deletar o servidor",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-10 w-[150px]" />
        </div>
        <div className="border rounded-lg">
          <div className="p-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-12 w-full mt-2" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Servidores</h2>
        <Button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Novo Servidor
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Matrícula</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>Unidade</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees ? (
              employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.registration}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.unit.name}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(employee)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(employee.id)}
                    >
                      <Trash className="h-4 w-4 text-red-600" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  Nenhum servidor encontrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <EmployeeForm
        open={showForm}
        onOpenChange={(open) => {
          setShowForm(open);
          if (!open) setSelectedEmployee(undefined);
        }}
        employee={
          selectedEmployee
            ? {
                id: selectedEmployee.id,
                name: selectedEmployee.name,
                registration: selectedEmployee.registration,
                position: selectedEmployee.position,
                cpf: selectedEmployee.cpf ?? "",
                rg: selectedEmployee.rg ?? "",
                rg_state: selectedEmployee.rg_state ?? "",
                contract_type: selectedEmployee.contract_type ?? "",
                address: selectedEmployee.address ?? "",
                unit_id: selectedEmployee.unit_id,
                is_active: selectedEmployee.is_active,
              }
            : undefined
        }
        onSuccess={() => {
          loadEmployees();
        }}
      />
    </div>
  );
}
