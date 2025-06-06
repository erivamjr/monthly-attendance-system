import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useSalaryFloors(organizationId: string) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/organizations/${organizationId}/salary-floors`,
    fetcher
  );

  return {
    data: data?.salaryFloors,
    error,
    isLoading,
    mutate,
  };
}
