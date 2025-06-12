"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventCodeSettings } from "@/components/event-code-settings";
import { OrganizationSettings } from "@/components/organization-settings";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function SettingsPage() {
  const { data: session } = useSession();
  const [organizationId, setOrganizationId] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user?.organizationId) {
      setOrganizationId(session.user.organizationId);
    } else if (session?.user?.role === "master") {
      setOrganizationId(null);
    } else {
      setOrganizationId(null);
    }
  }, [session]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Configurações</h1>
      </div>

      <Tabs defaultValue="organization" className="space-y-6">
        <TabsList>
          <TabsTrigger value="organization">Organização</TabsTrigger>
          <TabsTrigger value="event-codes">Códigos de Evento</TabsTrigger>
        </TabsList>

        <TabsContent value="organization">
          <Card>
            <CardHeader>
              <CardTitle>Configurações da Organização</CardTitle>
              <CardDescription>
                Gerencie as informações básicas da sua organização
              </CardDescription>
            </CardHeader>
            <CardContent>
              {organizationId ? (
                <OrganizationSettings organizationId={organizationId} />
              ) : (
                <div className="text-center text-muted-foreground">
                  Organização não identificada
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="event-codes">
          <Card>
            <CardHeader>
              <CardTitle>Configuração de Códigos por Vínculo</CardTitle>
              <CardDescription>
                Configure os códigos utilizados para cada tipo de evento por
                vínculo
              </CardDescription>
            </CardHeader>
            <CardContent>
              {organizationId ? (
                <EventCodeSettings organizationId={organizationId} />
              ) : (
                <div className="text-center text-muted-foreground">
                  Organização não identificada
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
