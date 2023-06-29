import { Button } from "@/components";
import Link from "next/link";

interface iSellerProps {
  sellerName: string
  sellerDescription: string | undefined
  sellerId: string
}

const Seller = ({ sellerName, sellerDescription, sellerId }: iSellerProps) => {
  return (
    <section className="w-full py-9 px-7 bg-gray-10 rounded flex flex-col items-center gap-7">
      <div className="w-[77px] h-[77px] bg-brand-1 rounded-full flex justify-center items-center">
        <p className="font-inter font-medium text-2xl text-white">
          {
            sellerName.split(" ")
              .map(word => word[0].toUpperCase())
              .slice(0, 2)
              .join("")
          }
        </p>
      </div>

      <h2 className="font-lex font-semibold text-xl text-gray-1">
        {sellerName}
      </h2>

      {
        sellerDescription && (
          <p className="font-inter font-normal text-base text-gray-2">
            {sellerDescription}
          </p>
        )
      }

      <Link href={`/profile/${sellerId}`}>
        <Button style="button-black">
          Ver todos anuncios
        </Button>
      </Link>
    </section>
  )
}

export default Seller;
