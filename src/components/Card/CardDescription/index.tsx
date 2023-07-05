interface iCardDescriptionProps {
  description: string;
}

const CardDescription = ({ description }: iCardDescriptionProps) => {
  return (
    <p className="font-inter font-normal text-xs text-gray-2">
      {description}
    </p>
  )
}

export default CardDescription;
