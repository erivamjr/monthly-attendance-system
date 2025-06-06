"use client";

import { useState, useEffect } from "react";
import { Plus, Save, Edit2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type EventCode = {
  id: string;
  eventType: string;
  eventTypeId: string;
  statutoryCode: string;
  contractCode: string;
  temporaryCode: string;
};

type EventType = {
  id: string;
  name: string;
  label: string;
  description: string;
};

type NewEventType = {
  name: string;
  label: string;
  description: string;
};

type SavedEventCode = {
  id: string;
  event_type_id: string;
  contract_type: string;
  code: number;
};

export function EventCodeSettings() {
  const [eventCodes, setEventCodes] = useState<EventCode[]>([]);
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [newEventType, setNewEventType] = useState<NewEventType>({
    name: "",
    label: "",
    description: "",
  });
  const [editingEventType, setEditingEventType] = useState<EventType | null>(
    null
  );

  useEffect(() => {
    loadEventCodes();
  }, []);

  const loadEventCodes = async () => {
    try {
      setLoading(true);
      const currentUser = JSON.parse(
        sessionStorage.getItem("currentUser") || "{}"
      );
      const organizationId =
        currentUser?.organization_id || currentUser?.organization?.id;

      if (!organizationId) {
        throw new Error("Organização não identificada");
      }

      const [typesResponse, codesResponse] = await Promise.all([
        fetch("/api/settings/event-types"),
        fetch(`/api/settings/event-codes?organizationId=${organizationId}`),
      ]);

      const [typesData, codesData] = await Promise.all([
        typesResponse.json(),
        codesResponse.json(),
      ]);

      if (!typesResponse.ok) {
        throw new Error(typesData.error || "Erro ao carregar tipos de evento");
      }

      if (!codesResponse.ok) {
        throw new Error(
          codesData.error || "Erro ao carregar códigos de evento"
        );
      }

      setEventTypes(typesData);
      setEventCodes(codesData);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      toast({
        title: "Erro",
        description:
          error instanceof Error ? error.message : "Erro ao carregar dados",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (id: string, field: string, value: string) => {
    setEventCodes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleNewEventTypeChange = (
    field: keyof NewEventType,
    value: string
  ) => {
    setNewEventType((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditEventTypeChange = (field: keyof EventType, value: string) => {
    if (editingEventType) {
      setEditingEventType((prev) => ({ ...prev!, [field]: value }));
    }
  };

  const handleEditClick = async (eventTypeId: string) => {
    if (!eventTypeId) {
      toast({
        title: "Error",
        description: "Event type ID is required",
        variant: "destructive",
      });
      return;
    }

    try {
      // Find the event type in the loaded event types
      const eventType = eventTypes.find((type) => type.id === eventTypeId);

      if (!eventType) {
        // If not found in loaded event types, fetch it directly
        const response = await fetch(
          `/api/settings/event-types/${eventTypeId}`
        );
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Failed to fetch event type");
        }
        const data = await response.json();
        setEditingEventType(data);
      } else {
        setEditingEventType(eventType);
      }

      setIsEditDialogOpen(true);
    } catch (error) {
      console.error("Error loading event type for editing:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to load event type for editing",
        variant: "destructive",
      });
    }
  };

  const handleCreateEventType = async () => {
    try {
      setSaving(true);

      const response = await fetch("/api/settings/event-types", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEventType),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao criar tipo de evento");
      }

      // Atualizar o estado com o novo tipo de evento
      const newEventTypeData = data.created;
      setEventTypes((prevTypes) => [...prevTypes, newEventTypeData]);

      // Adicionar uma entrada vazia para o novo tipo nos códigos
      setEventCodes((prevCodes) => [
        ...prevCodes,
        {
          id: newEventTypeData.id,
          eventTypeId: newEventTypeData.id,
          eventType: newEventTypeData.label,
          statutoryCode: "",
          contractCode: "",
          temporaryCode: "",
        },
      ]);

      // Limpar o formulário e fechar o diálogo
      setNewEventType({ name: "", label: "", description: "" });
      setIsCreateDialogOpen(false);

      toast({
        title: "Sucesso",
        description: "Tipo de evento criado com sucesso",
      });
    } catch (error) {
      console.error("Erro ao criar tipo de evento:", error);
      toast({
        title: "Erro",
        description:
          error instanceof Error
            ? error.message
            : "Erro ao criar tipo de evento",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateEventType = async () => {
    if (!editingEventType) return;

    try {
      setSaving(true);

      const response = await fetch("/api/settings/event-types", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingEventType),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao atualizar tipo de evento");
      }

      // Atualizar o estado localmente
      setEventTypes((prevTypes) =>
        prevTypes.map((type) => (type.id === editingEventType.id ? data : type))
      );

      // Atualizar os códigos com o novo label
      setEventCodes((prevCodes) =>
        prevCodes.map((code) =>
          code.eventTypeId === editingEventType.id
            ? { ...code, eventType: data.label }
            : code
        )
      );

      toast({
        title: "Sucesso",
        description: "Tipo de evento atualizado com sucesso",
      });

      // Reset form and close dialog
      setEditingEventType(null);
      setIsEditDialogOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar tipo de evento:", error);
      toast({
        title: "Erro",
        description:
          error instanceof Error
            ? error.message
            : "Erro ao atualizar tipo de evento",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const currentUser = JSON.parse(
        sessionStorage.getItem("currentUser") || "{}"
      );

      // Verificar se o usuário tem uma organização (tenta ambos os formatos)
      const organizationId =
        currentUser?.organization_id || currentUser?.organization?.id;

      if (!organizationId) {
        toast({
          title: "Erro",
          description: "Organização não identificada",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch("/api/settings/event-codes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          organizationId: organizationId,
          eventCodes: eventCodes.map((code) => ({
            ...code,
            statutoryCode: code.statutoryCode.trim(),
            contractCode: code.contractCode.trim(),
            temporaryCode: code.temporaryCode.trim(),
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao salvar códigos");
      }

      // Update the local state with the saved data
      if (data.updatedCodes) {
        const formattedCodes = eventTypes.map((eventType) => {
          const statutoryCode = data.updatedCodes.find(
            (code: SavedEventCode) =>
              code.event_type_id === eventType.id &&
              code.contract_type === "EFETIVO"
          );
          const contractCode = data.updatedCodes.find(
            (code: SavedEventCode) =>
              code.event_type_id === eventType.id &&
              code.contract_type === "COMISSIONADO"
          );
          const temporaryCode = data.updatedCodes.find(
            (code: SavedEventCode) =>
              code.event_type_id === eventType.id &&
              code.contract_type === "TEMPORARIO"
          );

          return {
            id: eventType.id,
            eventTypeId: eventType.id,
            eventType: eventType.label,
            statutoryCode: statutoryCode?.code?.toString() || "",
            contractCode: contractCode?.code?.toString() || "",
            temporaryCode: temporaryCode?.code?.toString() || "",
          };
        });

        setEventCodes(formattedCodes);
      }

      toast({
        title: "Sucesso",
        description: "Códigos salvos com sucesso",
      });
    } catch (error) {
      console.error("Erro ao salvar códigos:", error);
      toast({
        title: "Erro",
        description:
          error instanceof Error ? error.message : "Erro ao salvar códigos",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Códigos de Evento</h2>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Tipo de Evento
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Novo Tipo de Evento</DialogTitle>
              <DialogDescription>
                Adicione um novo tipo de evento ao sistema. Isso estará
                disponível para todas as organizações.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Interno</Label>
                <Input
                  id="name"
                  placeholder="ex: licenca_medica"
                  value={newEventType.name}
                  onChange={(e) =>
                    handleNewEventTypeChange("name", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="label">Rótulo de Exibição</Label>
                <Input
                  id="label"
                  placeholder="ex: Licença Médica"
                  value={newEventType.label}
                  onChange={(e) =>
                    handleNewEventTypeChange("label", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva o tipo de evento..."
                  value={newEventType.description}
                  onChange={(e) =>
                    handleNewEventTypeChange("description", e.target.value)
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleCreateEventType}
                disabled={saving || !newEventType.name || !newEventType.label}
              >
                {saving ? "Criando..." : "Criar Tipo de Evento"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Tipo de Evento</TableHead>
              <TableHead>Código Estatutário</TableHead>
              <TableHead>Código Contratual</TableHead>
              <TableHead>Código Temporário</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {eventCodes.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.eventType}</TableCell>
                <TableCell>
                  <Input
                    value={event.statutoryCode}
                    onChange={(e) =>
                      handleInputChange(
                        event.id,
                        "statutoryCode",
                        e.target.value
                      )
                    }
                    className="h-8 w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={event.contractCode}
                    onChange={(e) =>
                      handleInputChange(
                        event.id,
                        "contractCode",
                        e.target.value
                      )
                    }
                    className="h-8 w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={event.temporaryCode}
                    onChange={(e) =>
                      handleInputChange(
                        event.id,
                        "temporaryCode",
                        e.target.value
                      )
                    }
                    className="h-8 w-full"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditClick(event.eventTypeId)}
                  >
                    <Edit2 className="h-4 w-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={saving}>
          <Save className="mr-2 h-4 w-4" />
          {saving ? "Salvando..." : "Salvar Configurações"}
        </Button>
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Tipo de Evento</DialogTitle>
            <DialogDescription>
              Atualize os detalhes do tipo de evento. O nome interno não pode
              ser alterado.
            </DialogDescription>
          </DialogHeader>
          {editingEventType && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Nome Interno</Label>
                <Input
                  id="edit-name"
                  value={editingEventType.name}
                  disabled
                  className="bg-muted"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-label">Rótulo de Exibição</Label>
                <Input
                  id="edit-label"
                  value={editingEventType.label}
                  onChange={(e) =>
                    handleEditEventTypeChange("label", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Descrição</Label>
                <Textarea
                  id="edit-description"
                  value={editingEventType.description}
                  onChange={(e) =>
                    handleEditEventTypeChange("description", e.target.value)
                  }
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              onClick={handleUpdateEventType}
              disabled={saving || !editingEventType?.label}
            >
              {saving ? "Atualizando..." : "Atualizar Tipo de Evento"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
