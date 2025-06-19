"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

type UnitFormProps = {
  onSuccess: () => void;
  onCancel: () => void;
  organizationId: string;
  initialData?: {
    id: string;
    name: string;
    location: string;
  };
};

export function UnitForm({
  onSuccess,
  onCancel,
  organizationId,
  initialData,
}: UnitFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [location, setLocation] = useState(initialData?.location || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;
      if (initialData) {
        // Editar unidade
        response = await fetch(`/api/units/${initialData.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            location,
          }),
        });
      } else {
        // Criar unidade
        response = await fetch("/api/units", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            location,
            organization_id: organizationId,
            is_active: true,
          }),
        });
      }

      if (!response.ok) {
        throw new Error(
          initialData ? "Erro ao editar unidade" : "Erro ao criar unidade"
        );
      }

      toast({
        title: "Sucesso",
        description: initialData
          ? "Unidade editada com sucesso!"
          : "Unidade criada com sucesso!",
      });

      onSuccess();
    } catch (err) {
      console.error(
        initialData ? "Erro ao editar unidade:" : "Erro ao criar unidade:",
        err
      );
      toast({
        title: "Erro",
        description: initialData
          ? "Não foi possível editar a unidade."
          : "Não foi possível criar a unidade.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Nome
          </label>
          <Input
            id="name"
            placeholder="Nome da unidade"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="location" className="text-sm font-medium">
            Localização
          </label>
          <Input
            id="location"
            placeholder="Endereço da unidade"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" className="gap-2" disabled={loading}>
          <Save className="h-4 w-4" />
          {loading
            ? initialData
              ? "Salvando..."
              : "Criando..."
            : initialData
            ? "Salvar"
            : "Criar Unidade"}
        </Button>
      </div>
    </form>
  );
}
