import { useState } from "react";

const Badge = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleMessage = () => setShowMessage(!showMessage);

  return (
    <span
      onMouseOver={handleMessage}
      onMouseOut={handleMessage}
      className="w-max h-max p-1 bg-[#349974] rounded-sm font-medium text-sm text-white absolute top-0 right-0"
    >
      {showMessage ? "Preço vantajoso!" : "$"}
    </span>
  )
}

export default Badge;
