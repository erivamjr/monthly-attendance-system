"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

type Employee = {
  id: string;
  name: string;
  cpf: string;
  role: string;
  status: string;
};

export function EmployeeStatusTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [unitId, setUnitId] = useState<string | null>(null);

  useEffect(() => {
    // Get user info from session
    const userStr = sessionStorage.getItem("currentUser");
    if (userStr) {
      const user = JSON.parse(userStr);
      setUnitId(user.unit_id);
    }
  }, []);

  useEffect(() => {
    async function fetchEmployees() {
      if (!unitId) return;

      try {
        const response = await fetch(`/api/employees/status?unitId=${unitId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch employees");
        }

        setEmployees(data);
      } catch (error) {
        console.error("Error loading employees:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEmployees();
  }, [unitId]);

  if (loading) {
    return (
      <div className="space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>CPF</TableHead>
          <TableHead>Função</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell className="font-medium">{employee.name}</TableCell>
            <TableCell>{employee.cpf}</TableCell>
            <TableCell>{employee.role}</TableCell>
            <TableCell>
              <Badge
                variant={
                  employee.status === "Preenchido" ? "success" : "destructive"
                }
              >
                {employee.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
