import { z } from "zod";

// Validação de organização
export const organizationSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  slug: z
    .string()
    .min(3, "Slug deve ter no mínimo 3 caracteres")
    .max(50, "Slug deve ter no máximo 50 caracteres")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug deve conter apenas letras minúsculas, números e hífens"
    ),
});

// Validação de unidade
export const unitSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  location: z
    .string()
    .min(5, "Localização deve ter no mínimo 5 caracteres")
    .max(200, "Localização deve ter no máximo 200 caracteres"),
});

// Validação de usuário
export const userSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .email("Email inválido")
    .max(100, "Email deve ter no máximo 100 caracteres"),
  cpf: z.string().regex(/^\d{11}$/, "CPF deve conter 11 dígitos numéricos"),
  role: z.enum(["admin", "responsible", "viewer"], {
    invalid_type_error: "Papel inválido",
  }),
  password: z
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .max(100, "Senha deve ter no máximo 100 caracteres")
    .optional(),
});

// Validação de funcionário
export const employeeSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  cpf: z.string().regex(/^\d{11}$/, "CPF deve conter 11 dígitos numéricos"),
  pis: z
    .string()
    .regex(/^\d{11}$/, "PIS deve conter 11 dígitos numéricos")
    .optional()
    .nullable(),
  role: z
    .string()
    .min(2, "Cargo deve ter no mínimo 2 caracteres")
    .max(100, "Cargo deve ter no máximo 100 caracteres"),
  contract_type: z.enum(["CLT", "PJ", "ESTAGIO"], {
    invalid_type_error: "Tipo de contrato inválido",
  }),
  floor_code: z
    .string()
    .max(20, "Código do piso deve ter no máximo 20 caracteres")
    .optional()
    .nullable(),
});

// Validação de frequência
export const frequencyEntrySchema = z.object({
  absence_days: z
    .number()
    .int("Dias de ausência deve ser um número inteiro")
    .min(0, "Dias de ausência não pode ser negativo")
    .max(31, "Dias de ausência não pode ser maior que 31"),
  additional_night_hours: z
    .number()
    .min(0, "Horas noturnas adicionais não pode ser negativo")
    .max(200, "Horas noturnas adicionais não pode ser maior que 200"),
  overtime_50_hours: z
    .number()
    .min(0, "Horas extras 50% não pode ser negativo")
    .max(200, "Horas extras 50% não pode ser maior que 200"),
  overtime_100_hours: z
    .number()
    .min(0, "Horas extras 100% não pode ser negativo")
    .max(200, "Horas extras 100% não pode ser maior que 200"),
  on_call_hours: z
    .number()
    .min(0, "Horas de sobreaviso não pode ser negativo")
    .max(200, "Horas de sobreaviso não pode ser maior que 200"),
  vacation_days: z
    .number()
    .int("Dias de férias deve ser um número inteiro")
    .min(0, "Dias de férias não pode ser negativo")
    .max(30, "Dias de férias não pode ser maior que 30"),
  justification: z
    .string()
    .max(500, "Justificativa deve ter no máximo 500 caracteres")
    .optional()
    .nullable(),
});
