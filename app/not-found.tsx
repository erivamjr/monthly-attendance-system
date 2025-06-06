import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404 - Página não encontrada</h1>
      <p className="text-lg text-muted-foreground">
        Ops! A página que você está procurando não existe.
      </p>
      <Button asChild>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          Voltar para o Dashboard
        </Link>
      </Button>
    </div>
  );
}
