"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
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
import { OrganizationForm } from "@/components/master/OrganizationForm";
import { DeleteOrganizationDialog } from "@/components/master/DeleteOrganizationDialog";
import { prisma } from "@/lib/prisma";

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
        <h1 className="text-2xl font-bold">Organizations</h1>
        <OrganizationForm />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Units</TableHead>
              <TableHead>Users</TableHead>
              <TableHead>Employees</TableHead>
              <TableHead className="text-right">Actions</TableHead>
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
