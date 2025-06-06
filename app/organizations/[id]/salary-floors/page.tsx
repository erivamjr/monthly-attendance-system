import { Metadata } from "next";
import { SalaryFloorsTable } from "@/components/salary-floors-table";

export const metadata: Metadata = {
  title: "Pisos Salariais | FreqOn",
};

export default function SalaryFloorsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Pisos Salariais</h1>
      </div>
      <SalaryFloorsTable organizationId={params.id} />
    </div>
  );
}
