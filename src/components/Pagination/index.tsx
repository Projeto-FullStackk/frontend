const Pagination = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2 py-6">
      <button className="text-brand-1 font-bold py-2 px-4 rounded">
        {"<"} Anterior
      </button>
      <div className=" font-bold text-gray-2/25">
        <span className="text-gray-3">1</span> de 3
      </div>
      <button className="text-brand-1 font-bold py-2 px-4 rounded">
        Seguinte {">"}
      </button>
    </div>
  )
}

export default Pagination;
