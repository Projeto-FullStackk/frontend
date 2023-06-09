import { Filter } from "@/components";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full h-80 bg-gradient-black flex items-center justify-center">
        <div className="flex-row text-center items-center justify-center">
          <h2 className="text-4xl font-bold">Motor Shop</h2>
          <p className="text-3xl">
            A melhor platagorma de anúncios de carros do país
          </p>
        </div>
      </div>
      <Filter />
    </>
  );
};

export default Home;
