import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("Campo obrigatório").email("Email inválido"),
  password: z.string().nonempty("Campo obrigatório"),
});

export const userSchema = z
  .object({
    name: z
      .string()
      .nonempty("Obrigatório informar o nome")
      .refine(
        (name) => name.trim().split(" ").length > 1,
        "Deve passar nome e sobrenome"
      ),
    email: z
      .string()
      .nonempty("Obrigatório informar o email")
      .email("Email informado inválido"),
    cpf: z
      .string()
      .nonempty("Obrigatório informar CPF")
      .regex(
        /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
        "CPF informado inválido"
      ),
    phone: z
      .string()
      .nonempty("Obrigatório informar o celular")
      .regex(/\(\d{2,3}\)\s\9\d{4}\-\d{4}/g, "Número de celular inválido"),
    birthDate: z
      .string()
      .nonempty("Obrigatório informar sua data de nascimento"),
    description: z.string(),
    zipCode: z
      .string()
      .nonempty("Obrigatório informar o CEP")
      .regex(/\d{5}-\d{3}/, "CEP informado inválido"),
    country: z.string().nonempty("Obrigatório informar o país"),
    state: z.string().nonempty("Obrigatório informar o estado"),
    city: z.string().nonempty("Obrigatório informar a cidade"),
    street: z.string().nonempty("Obrigatório informar a rua"),
    number: z.string().nonempty("Obrigatório informar o número"),
    complement: z.string(),
    isSeller: z.string().or(z.boolean()),
    password: z
      .string()
      .nonempty("Obrigatório informar a senha")
      .min(8, "Senha precisa ter no mínimo 8 caracteres"),
    confirmPass: z.string().nonempty("Obrigatório confimar a senha"),
  })
  .superRefine(({ password, confirmPass }, ctx) => {
    if (password !== confirmPass) {
      ctx.addIssue({
        code: "custom",
        message: "Senhas estão diferentes",
        path: ["confirmPass"],
      });
    }
  });

export const userEmailSchema = loginSchema.pick({
  email: true,
})
export const userResetPasswordSchema = loginSchema.pick({
  password: true,
}).extend({
  confirmPass: z.string().nonempty("Obrigatório confimar a senha"),
}).superRefine(({ password, confirmPass }, ctx) => {
  if (password !== confirmPass) {
    ctx.addIssue({
      code: "custom",
      message: "Senhas estão diferentes",
      path: ["confirmPass"],
    });
  }
});

export type UserData = z.infer<typeof userSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type UserEmail = z.infer<typeof userEmailSchema>;
export type UserResetPassword = z.infer<typeof userResetPasswordSchema>;

