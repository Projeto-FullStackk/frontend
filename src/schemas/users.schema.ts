import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty("Campo obrigatório"),
});

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  cpf: z.string().length(14),
  cellphone: z.string().length(12),
  birthdate: z.string().length(6),
  description: z.string(),
  cep: z.string().length(8),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  confirmPass: z.string(),
});

export type UserData = z.infer<typeof userSchema>;
export type LoginData = z.infer<typeof loginSchema>;
