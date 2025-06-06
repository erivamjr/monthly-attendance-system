"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

// Função para validar CPF
function validateCPF(cpf: string) {
  cpf = cpf.replace(/[^\d]/g, "");

  if (cpf.length !== 11) return false;

  // Verificar se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cpf)) return false;

  // Validar dígitos verificadores
  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

const userFormSchema = z
  .object({
    name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
    email: z.string().email("Email inválido"),
    password: z
      .string()
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .optional(),
    cpf: z
      .string()
      .min(11, "CPF inválido")
      .max(14, "CPF inválido")
      .refine((cpf) => validateCPF(cpf), "CPF inválido"),
    role: z.enum(["admin", "responsible"]),
    organization_id: z.string().min(1, "Organização é obrigatória"),
    unit_id: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.role === "responsible" && !data.unit_id) {
        return false;
      }
      return true;
    },
    {
      message: "Unidade é obrigatória para usuários responsáveis",
      path: ["unit_id"],
    }
  );

type UserFormData = {
  name: string;
  email: string;
  cpf: string;
  password?: string;
  role: "admin" | "responsible";
  organization_id: string;
  unit_id?: string;
};

interface UserFormProps {
  isOpen: boolean;
  onClose: () => void;
  organizations: any[];
  isMasterView: boolean;
  onSuccess: () => void;
  user?: UserFormData & { id: string };
}

export function UserForm({
  isOpen,
  onClose,
  organizations,
  isMasterView,
  onSuccess,
  user,
}: UserFormProps) {
  const { data: session } = useSession();
  const [units, setUnits] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      cpf: user?.cpf || "",
      password: "",
      role: user?.role || "admin",
      organization_id: user?.organization_id || organizations[0]?.id || "",
      unit_id: user?.unit_id || "",
    },
  });

  const selectedOrganizationId = form.watch("organization_id");
  const selectedRole = form.watch("role");

  // Carregar unidades quando a organização for selecionada
  useEffect(() => {
    async function loadUnits() {
      if (!selectedOrganizationId) return;

      try {
        const response = await fetch(
          `/api/organizations/${selectedOrganizationId}/units`
        );
        if (!response.ok) throw new Error("Erro ao carregar unidades");
        const data = await response.json();
        setUnits(data);
      } catch (error) {
        console.error("Erro ao carregar unidades:", error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar as unidades",
          variant: "destructive",
        });
      }
    }

    loadUnits();
  }, [selectedOrganizationId]);

  // Atualizar valores do formulário quando o usuário mudar
  useEffect(() => {
    if (user) {
      form.reset(user);
    } else {
      form.reset({
        name: "",
        email: "",
        cpf: "",
        password: "",
        role: "admin",
        organization_id: organizations[0]?.id || "",
        unit_id: "",
      });
    }
  }, [user, form, organizations]);

  async function onSubmit(data: UserFormData) {
    setLoading(true);
    try {
      const url = user ? `/api/users/${user.id}` : "/api/users";
      const method = user ? "PUT" : "POST";

      // Se for edição e não foi fornecida senha, remover do payload
      if (user && !data.password) {
        delete data.password;
      }

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar usuário");
      }

      toast({
        title: "Sucesso",
        description: user
          ? "Usuário atualizado com sucesso"
          : "Usuário cadastrado com sucesso",
      });

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      toast({
        title: "Erro",
        description: "Não foi possível salvar o usuário",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{user ? "Editar" : "Criar"} Usuário</DialogTitle>
          <DialogDescription>
            Preencha os dados para {user ? "editar o" : "criar um novo"} usuário
            no sistema
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do usuário" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {user ? "Nova Senha (opcional)" : "Senha"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={
                        user ? "Nova senha do usuário" : "Senha do usuário"
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="000.000.000-00"
                      {...field}
                      onChange={(e) => {
                        // Formatar CPF enquanto digita
                        let value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 11) {
                          value = value.replace(/(\d{3})(\d)/, "$1.$2");
                          value = value.replace(/(\d{3})(\d)/, "$1.$2");
                          value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                          field.onChange(value);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isMasterView && (
              <FormField
                control={form.control}
                name="organization_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organização</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={!!user} // Não permitir mudar a organização na edição
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma organização" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {organizations.map((org) => (
                          <SelectItem key={org.id} value={org.id}>
                            {org.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Função</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma função" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="responsible">Responsável</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedRole === "responsible" && (
              <FormField
                control={form.control}
                name="unit_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unidade</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma unidade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {units.map((unit) => (
                          <SelectItem key={unit.id} value={unit.id}>
                            {unit.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading
                ? user
                  ? "Salvando..."
                  : "Criando..."
                : user
                ? "Salvar"
                : "Criar Usuário"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
