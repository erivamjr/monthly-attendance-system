import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ConfigPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Alert variant="destructive" className="max-w-lg">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Configuração Incompleta</AlertTitle>
        <AlertDescription className="mt-2">
          <p className="mb-4">
            A variável de ambiente DATABASE_URL não está configurada.
          </p>
          <p className="mt-2 text-sm">
            Crie um arquivo .env na raiz do projeto com a seguinte variável:
          </p>
          <pre className="mt-2 p-2 bg-gray-100 rounded text-sm">
            DATABASE_URL=sua_url_do_banco_de_dados
          </pre>
        </AlertDescription>
      </Alert>
    </div>
  );
}
