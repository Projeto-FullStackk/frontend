import { Header, Card, Filter, Footer } from "@/components";

const Home = () => {
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <Header />
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

        <div className="flex w-full items-center justify-between max-w-7xl mx-auto flex-col-reverse gap-8 lg:items-start lg:flex-row lg:gap-0">
          <Filter />
          <ul className="list-none w-full h-fit  px-5 flex overflow-x-auto lg:grid lg:grid-cols-2 lg:max-w-[1429px] xl:grid-cols-3 lg:pr-0 gap-8 pb-10 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2 py-6">
          <button className="text-[#5126EA] font-bold py-2 px-4 rounded">
            {"<"} Anterior
          </button>
          <div className=" font-bold text-gray-2/25">
            <span className="text-gray-3">1</span> de 3
          </div>
          <button className="text-[#5126EA] font-bold py-2 px-4 rounded">
            Seguinte {">"}
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
