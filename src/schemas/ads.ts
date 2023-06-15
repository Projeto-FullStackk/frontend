import { z } from "zod";

export const adsSchema = z.object({
  id: z.string().uuid(),
  brand: z.string().nonempty("Obrigatório selecionar um marca"),
  name: z.string().nonempty("Obrigatório selecionar um modelo"),
  year: z.coerce.number(),
  fuel: z.string().nonempty(),
  km: z.string().nonempty(),
  color: z.string().nonempty(),
  pricetf: z
    .string()
    .transform(price => {
      return price.slice(3)
        .replace(".", "")
        .replace(",", ".")
    })
    .transform(price => +price),
  price: z
    .string()
    .nonempty("Obrigatório informar o preço")
    .transform(price => {
      return price.replace("R$ ", "")
        .replace("R$", "")
        .replace(".", "")
        .replace(",", ".")
    })
    .refine(price => {
      return !isNaN(+price)
    }, "Valor inválido")
    .transform(price => +price),
  description: z.string(),
  coverImage: z
    .string()
    .nonempty("Imagem de capa obrigatório")
    .url("URL inválida"),
  images: z
    .array(
      z.object({
        url: z
          .string()
          .url("URL inválida")
      })
    )
    .max(6, "Precisa haver no máximo seis imagens")
})

export const adsCreateSchema = adsSchema.omit({
  id: true,
})

export const adsRequestSchema = adsCreateSchema
  .omit({
    images: true
  })
  .extend({
    firstImage: z.string().nullable(),
    secondImage: z.string().nullable(),
    thirdImage: z.string().nullable(),
    fourthImage: z.string().nullable(),
    fifthImage: z.string().nullable(),
    sixImage: z.string().nullable(),
    userId: z.string(),
    published: z.boolean(),
  })

export type iAds = z.infer<typeof adsSchema>;
export type iAdsCreate = z.infer<typeof adsCreateSchema>;
export type iAdsRequest = z.infer<typeof adsRequestSchema>;
