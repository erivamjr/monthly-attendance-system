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
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Session } from "next-auth";
import { Skeleton } from "@/components/ui/skeleton";

interface Organization {
  id: string;
  name: string;
  slug: string;
  logo?: string;
}

interface Unit {
  id: string;
  name: string;
  organization_id: string;
}

interface ExtendedSession extends Session {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    organizationId?: string;
    organizationSlug?: string;
    organizationLogo?: string;
    organizationName?: string;
  };
}

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
    role: z.enum(["master", "admin", "coordinator"]),
    organization_id: z.string().min(1, "Organização é obrigatória"),
    unit_id: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.role === "coordinator" && !data.unit_id) {
        return false;
      }
      return true;
    },
    {
      message: "Unidade é obrigatória para usuários coordenadores",
      path: ["unit_id"],
    }
  );

type UserFormData = {
  name: string;
  email: string;
  cpf: string;
  password?: string;
  role: "master" | "admin" | "coordinator";
  organization_id: string;
  unit_id?: string;
};

type UserFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  isMasterView?: boolean;
  user?: UserFormData & { id: string };
};

export function UserForm({
  isOpen,
  onClose,
  onSuccess,
  isMasterView = false,
  user,
}: UserFormProps) {
  const { data: session } = useSession() as { data: ExtendedSession | null };
  const [units, setUnits] = useState<Unit[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [selectedOrganizationId, setSelectedOrganizationId] = useState<
    string | null
  >(user?.organization_id || null);

  const form = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      cpf: user?.cpf || "",
      role: user?.role || "coordinator",
      organization_id: user?.organization_id || "",
      unit_id: user?.unit_id || "",
      password: "",
    },
  });

  const selectedRole = form.watch("role");

  // Carregar unidades da organização selecionada
  const loadUnits = async (orgId: string) => {
    try {
      const response = await fetch(`/api/units?organization_id=${orgId}`);
      if (!response.ok) throw new Error("Erro ao carregar unidades");
      const data = await response.json();
      setUnits(data.units);
    } catch (error) {
      console.error("Erro ao carregar unidades:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar as unidades",
        variant: "destructive",
      });
    }
  };

  // Carregar unidades quando a organização for selecionada
  useEffect(() => {
    if (selectedOrganizationId) {
      loadUnits(selectedOrganizationId);
    }
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
        role: "coordinator",
        organization_id: "",
        unit_id: "",
      });
    }
  }, [user, form]);

  // Carregar organizações
  useEffect(() => {
    const loadOrganizations = async () => {
      if (!isMasterView) return;

      setIsLoading(true);
      try {
        const response = await fetch("/api/organizations");
        if (!response.ok) throw new Error("Erro ao carregar organizações");
        const data = await response.json();
        setOrganizations(data.organizations || []);
      } catch (error) {
        console.error("Erro ao carregar organizações:", error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar as organizações",
          variant: "destructive",
        });
        setOrganizations([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadOrganizations();
  }, [isMasterView]);

  const onSubmit = async (data: UserFormData) => {
    setIsSubmitting(true);

    try {
      const url = user ? `/api/users/${user.id}` : "/api/users";
      const method = user ? "PUT" : "POST";

      let formData = data;

      // Se for edição e não foi fornecida senha, remover do payload
      if (user && !formData.password) {
        const { password, ...dataWithoutPassword } = formData;
        formData = dataWithoutPassword;
      }

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar usuário");
      }

      toast({
        title: "Sucesso",
        description: `Usuário ${user ? "atualizado" : "criado"} com sucesso`,
      });

      onSuccess();
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      toast({
        title: "Erro",
        description: "Não foi possível salvar o usuário",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{user ? "Editar Usuário" : "Novo Usuário"}</DialogTitle>
          <DialogDescription>
            {user
              ? "Atualize as informações do usuário"
              : "Preencha as informações para criar um novo usuário"}
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
                    <Input {...field} />
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
                    <Input type="email" {...field} />
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
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {!user && (
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
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
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="master">Master</option>
                      <option value="admin">Administrador</option>
                      <option value="coordinator">Coordenador</option>
                    </select>
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
                    <FormControl>
                      <select
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setSelectedOrganizationId(e.target.value);
                        }}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Selecione a organização</option>
                        {isLoading ? (
                          <option value="" disabled>
                            Carregando...
                          </option>
                        ) : organizations.length > 0 ? (
                          organizations.map((org) => (
                            <option key={org.id} value={org.id}>
                              {org.name}
                            </option>
                          ))
                        ) : (
                          <option value="" disabled>
                            Nenhuma organização encontrada
                          </option>
                        )}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {selectedRole === "coordinator" && selectedOrganizationId && (
              <FormField
                control={form.control}
                name="unit_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unidade</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Selecione a unidade</option>
                        {units.length > 0 ? (
                          units.map((unit) => (
                            <option key={unit.id} value={unit.id}>
                              {unit.name}
                            </option>
                          ))
                        ) : (
                          <option value="" disabled>
                            Nenhuma unidade encontrada
                          </option>
                        )}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Salvando..." : user ? "Atualizar" : "Criar"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
