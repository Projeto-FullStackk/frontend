import { Filter } from "@/components";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full h-80 bg-gradient-black flex items-center justify-center mb-8 bg-luxury-car">
        <div className="flex-row text-center items-center justify-center text-gray-9">
          <h2 className="text-4xl  font-bold">Motor Shop</h2>
          <p className="text-3xl">
            A melhor plataforma de anúncios de carros do país
          </p>
        </div>
      </div>
      <Filter />
    </>
  );
};

export default Home;
