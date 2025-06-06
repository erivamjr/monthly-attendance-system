"use client";

import { useState, useEffect } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

type LogoSettingsProps = {
  organizationId: string;
};

export function LogoSettings({ organizationId }: LogoSettingsProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [currentLogo, setCurrentLogo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCurrentLogo() {
      try {
        const response = await fetch(`/api/organizations/${organizationId}`);
        if (!response.ok) {
          throw new Error("Erro ao carregar informações da organização");
        }
        const data = await response.json();
        setCurrentLogo(data.logo_url);
      } catch (err) {
        console.error("Erro ao carregar logo:", err);
        toast({
          title: "Erro",
          description: "Não foi possível carregar o logo atual.",
          variant: "destructive",
        });
      }
    }

    loadCurrentLogo();
  }, [organizationId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("organizationId", organizationId);

    try {
      const response = await fetch("/api/upload-logo", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer upload do logo");
      }

      const data = await response.json();
      setCurrentLogo(data.logo_url);
      setSelectedFile(null);

      toast({
        title: "Sucesso",
        description: "Logo atualizado com sucesso!",
      });
    } catch (err) {
      console.error("Erro ao fazer upload:", err);
      toast({
        title: "Erro",
        description: "Não foi possível fazer o upload do logo.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveLogo = async () => {
    if (!currentLogo) return;

    setLoading(true);
    try {
      const response = await fetch("/api/remove-logo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          organizationId,
          logoUrl: currentLogo,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao remover logo");
      }

      setCurrentLogo(null);
      toast({
        title: "Sucesso",
        description: "Logo removido com sucesso!",
      });
    } catch (err) {
      console.error("Erro ao remover logo:", err);
      toast({
        title: "Erro",
        description: "Não foi possível remover o logo.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="logo">Logo da Organização</Label>
        {currentLogo ? (
          <div className="flex items-center gap-4">
            <img
              src={currentLogo}
              alt="Logo atual"
              className="h-16 w-16 object-contain"
            />
            <Button
              variant="destructive"
              size="sm"
              onClick={handleRemoveLogo}
              disabled={loading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Nenhum logo definido ainda.
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          id="logo"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={loading}
        />
        <Button
          onClick={handleUpload}
          disabled={!selectedFile || loading}
          className="gap-2"
        >
          <Upload className="h-4 w-4" />
          {loading ? "Enviando..." : "Enviar Logo"}
        </Button>
      </div>
    </div>
  );
}
