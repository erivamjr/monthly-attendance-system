import { type PrismaClient } from "@/lib/generated/prisma";

type PrismaClientType = PrismaClient;

export type FrequencySheetWithDetails = {
  id: string;
  organization_id: string;
  unit_id: string;
  month: number;
  year: number;
  status: string;
  submitted_by: string | null;
  submitted_at: Date | null;
  created_at: Date;
  entries: {
    id: string;
    employee_id: string;
    absence_days: number;
    additional_night_hours: number;
    overtime_50_hours: number;
    overtime_100_hours: number;
    on_call_hours: number;
    vacation_days: number;
    justification: string | null;
  }[];
  submitter: {
    name: string;
  } | null;
};

export type EmployeeData = {
  id: string;
  name: string;
  role: string;
  contract_type: string;
};

export type FrequencyEntryData = {
  id: string;
  employee_id: string;
  absence_days: number;
  additional_night_hours: number;
  overtime_50_hours: number;
  overtime_100_hours: number;
  on_call_hours: number;
  vacation_days: number;
  justification: string | null;
};
