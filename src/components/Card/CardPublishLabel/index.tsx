interface iCardPublishLabelProps {
  isPublished: boolean;
}

const CardPublishLabel = ({ isPublished }: iCardPublishLabelProps) => {
  return (
    <span
      className={`absolute top-2 left-2 text-xs px-2 py-1 text-white ${isPublished ? "bg-brand-1" : "bg-gray-4"}`}
    >
      {isPublished ? "Ativo" : "Inativo"}
    </span>
  )
}

export default CardPublishLabel;
