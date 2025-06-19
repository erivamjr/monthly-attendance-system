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

import { DeleteOrganizationDialog } from "@/app/components/master/DeleteOrganizationDialog";
import { OrganizationForm } from "@/components/organization-form";

type Organization = {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  _count: {
    units: number;
    users: number;
    employees: number;
  };
  created_at: Date;
};

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const { toast } = useToast();
  const [showOrganizationForm, setShowOrganizationForm] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<
    Organization | undefined
  >(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrganizations = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/organizations/get-all");
        if (!response.ok) {
          throw new Error("Failed to fetch organizations");
        }
        const data: Organization[] = await response.json();
        setOrganizations(data);
      } catch (error) {
        console.error("Erro ao carregar organizações:", error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar as organizações",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, [toast]);

  const handleOpenForm = (org?: Organization) => {
    setSelectedOrganization(org);
    setShowOrganizationForm(true);
  };

  const handleCloseForm = () => {
    setShowOrganizationForm(false);
    setSelectedOrganization(undefined);
  };

  const handleSuccess = async () => {
    handleCloseForm();
    const response = await fetch("/api/organizations/get-all"); // Re-fetch organizations after success
    if (!response.ok) {
      toast({
        title: "Erro",
        description: "Não foi possível recarregar as organizações",
        variant: "destructive",
      });
      return;
    }
    const data: Organization[] = await response.json();
    setOrganizations(data);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Organizations</h1>
          <Button onClick={() => handleOpenForm()} className="gap-2">
            <Plus className="h-4 w-4" />
            Nova Organização
          </Button>
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
              {[1, 2, 3].map((i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    <Skeleton className="h-4 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[80px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[40px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[40px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[40px]" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-4 w-[60px]" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Organizations</h1>
        <Button onClick={() => handleOpenForm()} className="gap-2">
          <Plus className="h-4 w-4" />
          Nova Organização
        </Button>
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
                    <Button
                      onClick={() => handleOpenForm(org)}
                      variant="outline"
                      size="icon"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <DeleteOrganizationDialog
                      organization={org}
                      onSuccess={handleSuccess}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <OrganizationForm
        open={showOrganizationForm}
        onOpenChange={handleCloseForm}
        organization={selectedOrganization}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
