const Banner = () => {
  return (
    <div className="relative w-full h-[400px] mb-8">
      <div className="absolute inset-0 bg-center bg-no-repeat z-0 flex items-end md:items-center lg:items-center justify-center overflow-hidden">
        <img
          className="min-w-[600px] md:w-10/12 lg:w-10/12"
          src="/images/car.jpg"
          alt=""
        />
      </div>
      <div className="relative w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-black opacity-75 z-0" />
        <div className="w-full h-full pt-9 px-10 text-white flex items-center flex-col justify-start md:justify-center lg:justify-center text-center z-10">
          <h2 className="text-2xl font-bold z-10 md:text-3xl lg:text-4xl">
            Motor Shop
          </h2>
          <p className="text-xl z-10 md:text-2xl lg:text-3xl">
            A melhor plataforma de anúncios de carros do país
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner;
