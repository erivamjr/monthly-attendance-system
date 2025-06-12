"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrganizationForm } from "@/components/organization-form";

export function OrganizationActions() {
  const [showForm, setShowForm] = useState(false);

  const handleSuccess = () => {
    setShowForm(false);
  };

  return (
    <>
      <Button onClick={() => setShowForm(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Nova Organização
      </Button>
      <OrganizationForm
        open={showForm}
        onOpenChange={setShowForm}
        onSuccess={handleSuccess}
      />
    </>
  );
}
