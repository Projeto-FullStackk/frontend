import { transformCapitalize } from "@/utils";

interface iCardTitleProps {
  brand: string;
  name: string;
}

const CardTitle = ({ brand, name }: iCardTitleProps) => {
  return (
    <h2 className="mb-4 font-lex font-semibold text-gray-1 text-ellipsis whitespace-nowrap overflow-hidden">
      {transformCapitalize(brand)} - {transformCapitalize(name)}
    </h2>
  )
}

export default CardTitle;
