import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/salary-floors-columns";
import { useSalaryFloors } from "@/hooks/use-salary-floors";
import { CreateSalaryFloorDialog } from "@/components/create-salary-floor-dialog";

interface SalaryFloorsTableProps {
  organizationId: string;
}

export function SalaryFloorsTable({ organizationId }: SalaryFloorsTableProps) {
  const [open, setOpen] = useState(false);
  const { data: salaryFloors, isLoading } = useSalaryFloors(organizationId);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={() => setOpen(true)}>Adicionar Piso Salarial</Button>
      </div>
      <DataTable
        columns={columns}
        data={salaryFloors || []}
        isLoading={isLoading}
      />
      <CreateSalaryFloorDialog
        open={open}
        onOpenChange={setOpen}
        organizationId={organizationId}
      />
    </div>
  );
}
