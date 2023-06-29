import { ProductPage } from "@/components";
import { Ad } from "@/contexts/AuthContext";
import { api } from "@/services/api";
import { GetServerSideProps } from "next";

interface ProductProps {
  car: Ad;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params!.carId;
  const response = await api.get<Ad>(`/ads/${id}`);

  return { props: { car: response.data } };
};

const Product = ({ car }: ProductProps) => {
  return (
    <>
      <ProductPage car={car} />
    </>
  );
};

export default Product;
