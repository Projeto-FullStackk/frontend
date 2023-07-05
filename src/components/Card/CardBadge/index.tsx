import { useState } from "react";

interface iCardBadgeProps {
  price: number;
  priceTf: number;
}

const CardBadge = ({ price, priceTf }: iCardBadgeProps) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleMessage = () => setShowMessage(!showMessage);

  const isBelowPrice: boolean = priceTf * 0.95 > price;

  return isBelowPrice && (
    <span
      onMouseOver={handleMessage}
      onMouseOut={handleMessage}
      className="w-max h-max p-1 bg-[#349974] rounded-sm font-medium text-sm text-white absolute top-0 right-0"
    >
      {showMessage ? "Preço vantajoso!" : "$"}
    </span>
  )
}

export default CardBadge;
