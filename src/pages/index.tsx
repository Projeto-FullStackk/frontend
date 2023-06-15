import { GetServerSideProps } from "next";
import axios from "axios";
import { api } from "@/services/api";
import { cars } from "@/services/dataMock";
import { Banner, Card, Filter } from "@/components";

export interface Car {
  id: number;
  brand: string;
  name: string;
  year: number;
  fuel: string;
  km: string;
  color: string;
  priceTf: number;
  price: number;
  description: string;
  coverImage: string;
  firstImage: string;
  secondImage: string;
  thirdImage: string | null;
  fourthImage: string | null;
  fifthImage: string | null;
  sixthImage: string | null;
  published: boolean;
  userId: string;
}

interface HomeProps {
  cars: Car[];
}
/* export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await api.get("/ads");
  const cars = response.data;

  return {
    props: {
      cars,
    },
  };
}; */

const Home: React.FC<HomeProps> = (/* { cars } */) => {
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <Banner />

        <div className="flex w-full items-center justify-between max-w-7xl mx-auto flex-col-reverse gap-8 lg:items-start lg:flex-row lg:gap-0">
          <Filter cars={cars} />
          <ul className="list-none w-full h-fit px-5 flex overflow-x-auto lg:grid lg:grid-cols-2 lg:max-w-[1429px] xl:grid-cols-3 lg:pr-0 gap-8 pb-10 ">
            {cars.map((car) => (
              <Card key={car.id} type={"user"} carData={car} />
            ))}
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
      </div>
    </>
  );
};

export default Home;
