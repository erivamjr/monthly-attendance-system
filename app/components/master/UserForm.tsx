"use client";

import { useState } from "react";
import { Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

type Organization = {
  id: string;
  name: string;
};

type Unit = {
  id: string;
  name: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  role: string;
  organization_id: string;
  unit_id: string | null;
  is_active: boolean;
  organization: Organization;
  unit: Unit | null;
};

type UserFormProps = {
  user?: User;
  isMasterView?: boolean;
};

export function UserForm({ user, isMasterView = false }: UserFormProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    cpf: user?.cpf || "",
    role: user?.role || "viewer",
    organization_id: user?.organization_id || "",
    unit_id: user?.unit_id || "",
    is_active: user?.is_active ?? true,
  });

  const { toast } = useToast();
  const router = useRouter();

  const loadOrganizations = async () => {
    try {
      const response = await fetch("/api/organizations");
      if (!response.ok) throw new Error("Failed to load organizations");
      const data = await response.json();
      setOrganizations(data);
    } catch (error) {
      console.error("Error loading organizations:", error);
      toast({
        title: "Error",
        description: "Failed to load organizations",
        variant: "destructive",
      });
    }
  };

  const loadUnits = async (organizationId: string) => {
    try {
      const response = await fetch(
        `/api/organizations/${organizationId}/units`
      );
      if (!response.ok) throw new Error("Failed to load units");
      const data = await response.json();
      setUnits(data);
    } catch (error) {
      console.error("Error loading units:", error);
      toast({
        title: "Error",
        description: "Failed to load units",
        variant: "destructive",
      });
    }
  };

  const handleOrganizationChange = (organizationId: string) => {
    setFormData((prev) => ({
      ...prev,
      organization_id: organizationId,
      unit_id: "", // Reset unit when organization changes
    }));
    loadUnits(organizationId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = user ? `/api/users/${user.id}` : "/api/users";
      const method = user ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save user");
      }

      toast({
        title: "Success",
        description: `User ${user ? "updated" : "created"} successfully`,
      });

      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Error saving user:", error);
      toast({
        title: "Error",
        description: "Failed to save user",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (isOpen) {
          loadOrganizations();
          if (user?.organization_id) {
            loadUnits(user.organization_id);
          }
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant={user ? "outline" : "default"}
          size={user ? "icon" : "default"}
        >
          {user ? (
            <Pencil className="h-4 w-4" />
          ) : (
            <>
              <Plus className="h-4 w-4 mr-2" />
              New User
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{user ? "Edit User" : "Create User"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                value={formData.cpf}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, cpf: e.target.value }))
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select
                value={formData.role}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, role: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  {isMasterView ? (
                    <>
                      <SelectItem value="master">Master</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="coordinator">Coordinator</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="coordinator">Coordinator</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <Select
                value={formData.organization_id}
                onValueChange={handleOrganizationChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select organization" />
                </SelectTrigger>
                <SelectContent>
                  {organizations.map((org) => (
                    <SelectItem key={org.id} value={org.id}>
                      {org.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="unit">Unit</Label>
              <Select
                value={formData.unit_id}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, unit_id: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  {units.map((unit) => (
                    <SelectItem key={unit.id} value={unit.id}>
                      {unit.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="is_active"
              checked={formData.is_active}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, is_active: checked }))
              }
            />
            <Label htmlFor="is_active">Active</Label>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
