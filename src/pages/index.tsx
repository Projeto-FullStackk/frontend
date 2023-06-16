import { GetServerSideProps } from "next";
import { api } from "@/services/api";
import { cars } from "@/services/dataMock";
import { Banner, Card, Filter, Pagination } from "@/components";
import { Car } from "@/schemas";

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

        <Pagination />
      </div>
    </>
  );
};

export default Home;
