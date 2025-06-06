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

export default function SettingsPage() {
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
              <OrganizationSettings />
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
              <EventCodeSettings />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
