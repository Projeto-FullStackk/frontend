import { GetServerSideProps } from "next";
import { api } from "@/services/api";
import { Banner, Card, Filter, Pagination } from "@/components";
import { Ad } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface HomeProps {
  cars: Ad[];
}
export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const { query } = context;

  const response = await api.get("/ads", { params: query });
  const cars = response.data;

  return {
    props: {
      cars,
    },
  };
};

const Home: React.FC<HomeProps> = ({ cars }) => {
  const router = useRouter();
  const [carsData, setCarsData] = useState(cars);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await api.get("/ads", { params: router.query });

      setCarsData(response.data);
    };

    fetchCars();
  }, [router.query]);

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <Banner />

        <div className="flex w-full items-center justify-between max-w-7xl mx-auto flex-col-reverse gap-8 lg:items-start lg:flex-row lg:gap-0">
          <Filter cars={carsData} />
          <ul className="list-none w-full h-fit px-5 flex overflow-x-auto lg:grid lg:grid-cols-2 lg:max-w-[1429px] xl:grid-cols-3 lg:pr-0 gap-8 pb-10 ">
            {carsData.map((car) => (
              <Card key={car.id} type={"user"} carData={car} />
            ))}
          </ul>
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default Home;
