"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Unit = {
  id: string;
  name: string;
  location: string;
  is_active: boolean;
  responsible: string | null;
  employeeCount: number;
};

interface UnitsStatusTableProps {
  units: Unit[];
}

export function UnitsStatusTable({ units }: UnitsStatusTableProps) {
  return (
    <div className="relative">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Unidade</TableHead>
            <TableHead>Responsável</TableHead>
            <TableHead>Servidores</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {units.map((unit) => (
            <TableRow key={unit.id}>
              <TableCell className="font-medium">{unit.name}</TableCell>
              <TableCell>{unit.responsible || "Não definido"}</TableCell>
              <TableCell>{unit.employeeCount}</TableCell>
              <TableCell>
                <Badge variant={unit.is_active ? "success" : "destructive"}>
                  {unit.is_active ? "Ativo" : "Inativo"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">Visualizar</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
