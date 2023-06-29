import { iAds } from "@/schemas";

type iProductInfoProps = Pick<iAds, "name" | "year" | "km" | "price">;

const ProductInfo = ({ name, year, km, price }: iProductInfoProps) => {
  return (
    <section className="w-full py-4 flex flex-col gap-8">
      <h2 className="font-semibold text-xl text-gray-1">
        {name}
      </h2>

      <div className="w-full flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="w-max flex items-center gap-3">
          <span className="w-max h-max py-1 px-2 bg-brand-4 rounded font-inter font-medium text-sm text-brand-1">
            {year}
          </span>

          <span className="w-max h-max py-1 px-2 bg-brand-4 rounded font-inter font-medium text-sm text-brand-1">
            {km} KM
          </span>
        </div>

        <p className="font-lex font-medium text-base text-gray-1">
          {
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)
          }
        </p>
      </div>
    </section>
  )
}

export default ProductInfo;
