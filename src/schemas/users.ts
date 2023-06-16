import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("Campo obrigatório").email("Email inválido"),
  password: z.string().nonempty("Campo obrigatório"),
});

export const userSchema = z.object({
  name: z.string()
    .nonempty("Obrigatório informar o nome")
    .refine(
      name => name.trim().split(" ").length > 1,
      "Deve passar nome e sobrenome"
    ),
  email: z.string()
    .nonempty("Obrigatório informar o email")
    .email("Email informado inválido"),
  cpf: z.string()
    .nonempty("Obrigatório informar CPF")
    .regex(
      /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
      "CPF informado inválido"
    ),
  cellphone: z.string()
    .nonempty("Obrigatório informar o celular")
    .regex(
      /\(\d{2,3}\)\s\9\d{4}\-\d{4}/g,
      "Número de celular inválido"
    ),
  birthdate: z.string()
    .nonempty("Obrigatório informar sua data de nascimento"),
  description: z.string(),
  cep: z.string()
    .nonempty("Obrigatório informar o CEP")
    .regex(
      /\d{5}-\d{3}/,
      "CEP informado inválido"
    ),
  state: z.string()
    .nonempty("Obrigatório informar o estado"),
  city: z.string()
    .nonempty("Obrigatório informar a cidade"),
  street: z.string()
    .nonempty("Obrigatório informar a rua"),
  number: z.string()
    .nonempty("Obrigatório informar o número"),
  complement: z.string(),
  password: z.string()
    .nonempty("Obrigatório informar a senha")
    .min(4, "Senha precisa ter no mínimo 4 caracteres"),
  confirmPass: z.string()
    .nonempty("Obrigatório confimar a senha"),
}).superRefine(
  ({password, confirmPass}, ctx) => {
    if (password !== confirmPass) {
      ctx.addIssue({
        code: "custom",
        message: "Senhas estão diferentes",
        path: ["confirmPass"]
      })
    }
  }
)

export type UserData = z.infer<typeof userSchema>;
export type LoginData = z.infer<typeof loginSchema>;
