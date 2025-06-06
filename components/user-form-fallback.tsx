"use client";

import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { id } from "date-fns/locale";

type Unit = {
  id: string;
  name: string;
};

type UserFormFallbackProps = {
  onSuccess?: () => void;
  onCancel?: () => void;
  organizationId: string;
};

export function UserFormFallback({
  onSuccess,
  onCancel,
  organizationId,
}: UserFormFallbackProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [role, setRole] = useState("");
  const [unitId, setUnitId] = useState("");
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUnits() {
      try {
        const response = await fetch(
          `/api/units?organizationId=${organizationId}`
        );
        if (!response.ok) {
          throw new Error("Erro ao carregar unidades");
        }
        const data = await response.json();
        setUnits(data);
      } catch (err) {
        console.error("Erro ao carregar unidades:", err);
        toast({
          title: "Erro",
          description: "Não foi possível carregar as unidades.",
          variant: "destructive",
        });
      }
    }

    loadUnits();
  }, [organizationId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          cpf,
          role,
          organization_id: organizationId,
          unit_id: unitId === "none" ? null : unitId,
          is_active: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar usuário");
      }

      toast({
        title: "Sucesso",
        description: "Usuário criado com sucesso!",
      });

      // Limpar formulário
      setName("");
      setEmail("");
      setCpf("");
      setRole("");
      setUnitId("");

      // Chamar callback de sucesso
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error("Erro ao criar usuário:", err);
      toast({
        title: "Erro",
        description: "Não foi possível criar o usuário.",
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
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <Input
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="cpf" className="text-sm font-medium">
            CPF
          </label>
          <Input
            id="cpf"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="role" className="text-sm font-medium">
            Função
          </label>
          <Select value={role} onValueChange={setRole} required>
            <SelectTrigger id="role">
              <SelectValue placeholder="Selecione a função" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Administrador</SelectItem>
              <SelectItem value="responsible">Responsável</SelectItem>
              <SelectItem value="viewer">Visualizador</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="unit" className="text-sm font-medium">
            Unidade
          </label>
          <Select value={unitId} onValueChange={setUnitId}>
            <SelectTrigger id="unit">
              <SelectValue placeholder="Selecione a unidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Sem unidade</SelectItem>
              {units.map((unit) => (
                <SelectItem key={unit.id} value={unit.id}>
                  {unit.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
        )}
        <Button type="submit" className="gap-2" disabled={loading}>
          <Save className="h-4 w-4" />
          {loading ? "Criando..." : "Criar Usuário"}
        </Button>
      </div>
    </form>
  );
}
