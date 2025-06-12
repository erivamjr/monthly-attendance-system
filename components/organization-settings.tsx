"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Organization = {
  id: string;
  name: string;
  logo_url: string | null;
};

type OrganizationSettingsProps = {
  organizationId?: string;
};

export function OrganizationSettings({
  organizationId,
}: OrganizationSettingsProps) {
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newOrgName, setNewOrgName] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (organizationId) {
      loadOrganization(organizationId);
    } else {
      setLoading(false);
      setOrganization(null);
      toast({
        title: "Informação",
        description: "Organização não identificada para configurações.",
        variant: "default",
      });
    }
  }, [organizationId]);

  const loadOrganization = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/organizations/${id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao carregar dados da organização");
      }

      setOrganization(data);
    } catch (error) {
      console.error("Erro ao carregar organização:", error);
      setLoading(false);
      toast({
        title: "Erro",
        description:
          error instanceof Error ? error.message : "Erro ao carregar dados",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!organization) return;

    try {
      setSaving(true);
      const response = await fetch(`/api/organizations/${organization.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: organization.name,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao atualizar organização");
      }

      toast({
        title: "Sucesso",
        description: "Organização atualizada com sucesso",
      });
    } catch (error) {
      console.error("Erro ao atualizar organização:", error);
      toast({
        title: "Erro",
        description:
          error instanceof Error ? error.message : "Erro ao atualizar dados",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleCreateOrganization = async () => {
    if (!newOrgName.trim()) return;

    try {
      setSaving(true);
      const response = await fetch("/api/organizations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newOrgName.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao criar organização");
      }

      toast({
        title: "Sucesso",
        description: "Organização criada com sucesso",
      });

      // Limpar o formulário e fechar o diálogo
      setNewOrgName("");
      setIsCreateDialogOpen(false);

      // Recarregar os dados
      await loadOrganization(data.id);
    } catch (error) {
      console.error("Erro ao criar organização:", error);
      toast({
        title: "Erro",
        description:
          error instanceof Error ? error.message : "Erro ao criar organização",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Dados da Organização</h2>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova Organização
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Nova Organização</DialogTitle>
              <DialogDescription>
                Adicione uma nova organização ao sistema.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="new-org-name">Nome da Organização</Label>
                <Input
                  id="new-org-name"
                  placeholder="Ex: Secretaria de Educação"
                  value={newOrgName}
                  onChange={(e) => setNewOrgName(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleCreateOrganization}
                disabled={saving || !newOrgName.trim()}
              >
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Criando...
                  </>
                ) : (
                  "Criar Organização"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome da Organização</Label>
          <Input
            id="name"
            value={organization?.name || ""}
            onChange={(e) =>
              setOrganization((prev) =>
                prev ? { ...prev, name: e.target.value } : null
              )
            }
            placeholder="Ex: Secretaria de Saúde"
            required
          />
        </div>

        <Button type="submit" disabled={saving}>
          {saving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Salvando...
            </>
          ) : (
            "Salvar Alterações"
          )}
        </Button>
      </form>
    </div>
  );
}
