import { z } from "zod";

export const adsSchema = z.object({
  id: z.string().uuid(),
  brand: z.string().nonempty("Obrigatório selecionar um marca"),
  name: z.string().nonempty("Obrigatório selecionar um modelo"),
  year: z.coerce.number().nullish(),
  fuel: z.string(),
  km: z.coerce.number(),
  color: z.string().nonempty(),
  priceTf: z
    .string()
    .transform((price) => {
      return price.slice(3).replace(".", "").replace(",", ".");
    })
    .transform((price) => +price),
  price: z
    .string()
    .nonempty("Obrigatório informar o preço")
    .transform((price) => {
      const removeStrings = price.replace(/[^\d,]+/g, "");
      const convertToNumber = +removeStrings.replace(",", ".");
      return convertToNumber;
    })
    .refine((price) => {
      return !isNaN(price);
    }, "Preço inválido"),
  description: z.string().nonempty("Precisa haver uma descrição"),
  coverImage: z
    .string()
    .nonempty("Imagem de capa obrigatório")
    .url("URL inválida"),
  images: z
    .array(
      z.object({
        url: z.string().url("URL inválida"),
      })
    )
    .max(6, "Precisa haver no máximo seis imagens"),
});

export const adsCreateSchema = adsSchema
  .omit({
    id: true,
  })
  .partial({
    year: true,
    fuel: true,
    priceTf: true,
    images: true,
  });

export const adsRequestSchema = adsCreateSchema
  .omit({
    images: true,
  })
  .extend({
    firstImage: z.string().nullable(),
    secondImage: z.string().nullable(),
    thirdImage: z.string().nullable(),
    fourthImage: z.string().nullable(),
    fifthImage: z.string().nullable(),
    sixthImage: z.string().nullable(),
    userId: z.string(),
    published: z.boolean(),
  });

export const adsUpdateSchema = adsSchema
  .extend({
    firstImage: z.string().nullable(),
    secondImage: z.string().nullable(),
    thirdImage: z.string().nullable(),
    fourthImage: z.string().nullable(),
    fifthImage: z.string().nullable(),
    sixthImage: z.string().nullable(),
    userId: z.string(),
    published: z.string().transform((value) => {
      if (value === "true") {
        return true;
      } else {
        return false;
      }
    }),
  })
  .deepPartial();

export type iAdsUpdate = Omit<
  z.infer<typeof adsUpdateSchema>,
  "price" | "priceTf"
> & {
  price?: number | string;
  published?: any;
  priceTf?: number | string;
};
export type iAds = z.infer<typeof adsSchema>;
export type iAdsCreate = z.infer<typeof adsCreateSchema>;
export type iAdsRequest = z.infer<typeof adsRequestSchema>;
export interface iFilter {
  allBrands: string[];
  allModels: string[];
  allYears: number[];
  allFuels: string[];
  allColors: string[];
}
export interface iAdsFilter {
  page: number;
  perPage: number;
  limitPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  ads: iAdsRequest[];
  filters: iFilter;
}
