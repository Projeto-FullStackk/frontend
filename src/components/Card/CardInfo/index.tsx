interface iCardInfoProps {
  km: number;
  price: number;
  year: number;
}

const CardInfo = ({ km, price, year }: iCardInfoProps) => {
  return (
    <div className="flex container justify-between items-center mt-4">
      <div className="flex gap-2">
        <span className="w-max h-max px-2 py-1 bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
          {new Intl.NumberFormat("pt-BR").format(km)} km
        </span>

        <span className="w-max h-max px-2 py-1 bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
          {year}
        </span>
      </div>

      <span className="w-auto whitespace-nowrap text-ellipsis overflow-hidden">
        {
          new Intl.NumberFormat(
            "pt-BR",
            {
              style: "currency",
              currency: "BRL"
            },
          ).format(price)
        }
      </span>
    </div>
  )
}

export default CardInfo;
