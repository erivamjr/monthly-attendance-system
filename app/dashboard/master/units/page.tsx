import { prisma } from "@/lib/prisma";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { UnitForm } from "@/components/master/UnitForm";
import { DeleteUnitDialog } from "@/components/master/DeleteUnitDialog";

async function getUnits() {
  const units = await prisma.unit.findMany({
    include: {
      organization: true,
      _count: {
        select: {
          employees: true,
          users: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return units;
}

export default async function UnitsPage() {
  const units = await getUnits();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Units</h1>
        <UnitForm />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Organization</TableHead>
              <TableHead>Employees</TableHead>
              <TableHead>Users</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {units.map((unit) => (
              <TableRow key={unit.id}>
                <TableCell className="font-medium">{unit.name}</TableCell>
                <TableCell>{unit.location}</TableCell>
                <TableCell>{unit.organization.name}</TableCell>
                <TableCell>{unit._count.employees}</TableCell>
                <TableCell>{unit._count.users}</TableCell>
                <TableCell>
                  <Badge
                    variant={unit.is_active ? "success" : "secondary"}
                    className="capitalize"
                  >
                    {unit.is_active ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <UnitForm unit={unit} />
                    <DeleteUnitDialog unit={unit} />
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
