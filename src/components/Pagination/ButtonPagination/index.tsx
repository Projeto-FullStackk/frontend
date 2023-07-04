interface iButtonPaginationProps {
  type: "next" | "previous"
  onClick: () => void
}

const ButtonPagination = ({ type, onClick }: iButtonPaginationProps) => {
  return (
    <button
      className="text-brand-1 font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {
        type === "next"
          ? <>Seguinte {">"}</>
          : <>{"<"} Anterior</>
      }
    </button>
  )
}

export default ButtonPagination;
