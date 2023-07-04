import { GetServerSideProps } from "next";
import { api } from "@/services/api";
import { Banner, Card, Filter, Pagination } from "@/components";
import { Ad } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { iFilter } from "@/schemas";

interface HomeProps {
  cars: Ad[];
  filtersCars: iFilter;
}
export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const { query } = context;

  const response = await api.get("/ads/filter", { params: query });
  const cars = response.data.ads;
  const filtersCars = response.data.filters;

  return {
    props: {
      cars,
      filtersCars
    },
  };
};

const Home: React.FC<HomeProps> = ({ cars, filtersCars }) => {
  const router = useRouter();
  const [carsData, setCarsData] = useState(cars);
  const [filters, setFilters] = useState(filtersCars);
  const [page, setPage] = useState(0);
  const [limitPage, setLimitPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await api.get("/ads/filter", { params: router.query });
      setCarsData(response.data.ads);
      setFilters(response.data.filters);
      setPage(response.data.page);
      setLimitPage(response.data.limitPage);
      setHasNextPage(response.data.hasNextPage);
      setHasPreviousPage(response.data.hasPreviousPage);
    };

    fetchCars();
  }, [router.query]);

  const paginationData = {
    page,
    limitPage,
    hasNextPage,
    hasPreviousPage,
  }

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <Banner />

        <div className="flex w-full items-center justify-between max-w-7xl mx-auto flex-col-reverse gap-8 lg:items-start lg:flex-row lg:gap-0">
          <Filter filters={filters} />
          <ul className="list-none w-full h-fit px-5 flex overflow-x-auto lg:grid lg:grid-cols-2 lg:max-w-[1429px] xl:grid-cols-3 lg:pr-0 gap-8 pb-10 ">
            {carsData.map((car) => (
              <Card key={car.id} type={"user"} carData={car} />
            ))}
          </ul>
        </div>

        <Pagination data={paginationData} />
      </div>
    </>
  );
};

export default Home;
