import { MouseEventHandler } from "react";
import { useRouter } from "next/router";
import { initialsName } from "@/utils";

interface iCardSellerProps {
  sellerId: string;
  sellerName: string;
}

const CardSeller = ({ sellerId, sellerName }: iCardSellerProps) => {
  const router = useRouter();

  const sendToSellerPage: MouseEventHandler = (event) => {
    event.stopPropagation();
    router.push(`/profile/${sellerId}`);
  }

  return (
    <div
      className="flex items-center gap-2 mt-5"
      onClick={sendToSellerPage}
    >
      <span className="rounded-[9.375rem] bg-random-5 w-[2rem] h-[2rem] text-gray-white flex justify-center items-center text-sm font-inter">
        {initialsName(sellerName)}
      </span>
      
      <span className="font-inter font-medium text-gray-2 text-sm">
        {sellerName}
      </span>
    </div>
  )
}

export default CardSeller;
