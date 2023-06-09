import { Filter } from "@/components";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="relative w-full h-[400px] flex items-center justify-center mb-8">
        <div className="absolute inset-0 bg-luxury-car bg-center  z-0"></div>
        <div className="w-full h-full bg-gradient-black opacity-75 flex items-center justify-center z-10">
          <div className="flex-row text-center items-center justify-center text-gray-9 z-10">
            <h2 className="text-4xl font-bold">Motor Shop</h2>
            <p className="text-3xl">
              A melhor plataforma de anúncios de carros do país
            </p>
          </div>
        </div>
      </div>
      <Filter />
    </>
  );
};

export default Home;
