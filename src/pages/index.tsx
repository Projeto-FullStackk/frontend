import { Input } from "@/components/Input";
import Card from "@/components/Card/card";
import { Footer, Header } from "@/components";
import { Filter } from "@/components";

const Home = () => {
  return (
    <>
      <Header />
      <div className="relative w-full h-[400px] flex items-center justify-center mb-8">
        <div className="absolute inset-0 bg-luxury-car bg-center bg-no-repeat z-0"></div>
        <div className="w-full h-full bg-gradient-black opacity-75 flex items-center justify-center z-10">
          <div className="flex-row text-center items-center justify-center text-white z-10 opacity-none">
            <h2 className="text-4xl font-bold">Motor Shop</h2>
            <p className="text-3xl">
              A melhor plataforma de anúncios de carros do país
            </p>
          </div>
        </div>
      </div>
      <Filter />
      <Footer />
    </>
  );
};

export default Home;
