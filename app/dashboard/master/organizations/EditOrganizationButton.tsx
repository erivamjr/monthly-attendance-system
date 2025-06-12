"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { OrganizationForm } from "@/components/organization-form";
import { useRouter } from "next/navigation";

type Organization = {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  created_at: Date;
  _count: {
    units: number;
    users: number;
    employees: number;
  };
};

interface EditOrganizationButtonProps {
  organization: Organization;
}

export function EditOrganizationButton({
  organization,
}: EditOrganizationButtonProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSuccess = () => {
    setOpen(false);
    router.refresh();
  };

  return (
    <>
      <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
        <Pencil className="h-4 w-4" />
      </Button>

      <OrganizationForm
        open={open}
        onOpenChange={setOpen}
        organization={organization}
        onSuccess={handleSuccess}
      />
    </>
  );
}
