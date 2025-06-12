"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const organizationSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  slug: z.string().min(3, "Slug deve ter no mínimo 3 caracteres"),
  logo_url: z.string().nullable().optional(),
});

type OrganizationFormData = z.infer<typeof organizationSchema>;

interface OrganizationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  organization?: OrganizationFormData & { id: string };
  onSuccess: () => void;
}

export function OrganizationForm({
  open,
  onOpenChange,
  organization,
  onSuccess,
}: OrganizationFormProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<OrganizationFormData>({
    resolver: zodResolver(organizationSchema),
    defaultValues: organization || {
      name: "",
      slug: "",
      logo_url: null,
    },
  });

  useEffect(() => {
    if (organization) {
      form.reset(organization);
    } else {
      form.reset({
        name: "",
        slug: "",
        logo_url: null,
      });
    }
  }, [organization, form]);

  const onSubmit = async (data: OrganizationFormData) => {
    setLoading(true);
    try {
      const url = organization
        ? `/api/organizations/${organization.id}`
        : "/api/organizations";
      const method = organization ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar organização");
      }

      toast({
        title: "Sucesso",
        description: organization
          ? "Organização atualizada com sucesso"
          : "Organização cadastrada com sucesso",
      });

      onSuccess();
      onOpenChange(false);
      router.refresh();
    } catch (error) {
      console.error("Erro ao salvar organização:", error);
      toast({
        title: "Erro",
        description: "Não foi possível salvar a organização",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {organization ? "Editar Organização" : "Nova Organização"}
          </DialogTitle>
          <DialogDescription>
            Preencha os dados da organização abaixo
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
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="logo_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL do Logo</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  "Salvar"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
