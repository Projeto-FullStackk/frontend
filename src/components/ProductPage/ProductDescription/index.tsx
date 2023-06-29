import { iAds } from "@/schemas";

type iProductDescription = Pick<iAds, "description">;

const ProductDescription = ({ description }: iProductDescription) => {
  return (
    <section className="w-full py-9 px-7 bg-gray-10 rounded flex flex-col gap-8">
      <h2 className="font-semibold text-xl text-gray-1">
        Descrição
      </h2>

      <p className="h-full font-inter font-normal text-base text-gray-2">
        {description}
      </p>
    </section>
  )
}

export default ProductDescription;
