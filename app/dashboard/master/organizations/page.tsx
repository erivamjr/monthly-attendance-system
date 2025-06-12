import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

import { prisma } from "@/lib/prisma";
import { DeleteOrganizationDialog } from "../../../components/master/DeleteOrganizationDialog";
import { OrganizationForm } from "@/components/organization-form";
import { OrganizationActions } from "./OrganizationActions";

type Organization = {
  id: string;
  name: string;
  slug: string;
  logo_url?: string;
  _count: {
    units: number;
    users: number;
    employees: number;
  };
};

async function getOrganizations() {
  const organizations = await prisma.organization.findMany({
    include: {
      _count: {
        select: {
          units: true,
          users: true,
          employees: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return organizations;
}

export default async function OrganizationsPage() {
  const organizations = await getOrganizations();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Organizações</h1>
        <OrganizationActions />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Unidades</TableHead>
              <TableHead>Usuários</TableHead>
              <TableHead>Funcionários</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizations.map((org) => (
              <TableRow key={org.id}>
                <TableCell className="font-medium">{org.name}</TableCell>
                <TableCell>{org.slug}</TableCell>
                <TableCell>{org._count.units}</TableCell>
                <TableCell>{org._count.users}</TableCell>
                <TableCell>{org._count.employees}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <OrganizationForm organization={org} />
                    <DeleteOrganizationDialog organization={org} />
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
