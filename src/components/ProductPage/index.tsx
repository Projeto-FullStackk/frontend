import { Ad } from "@/contexts/AuthContext";
import { Button } from "@/components";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import ProductImages from "./ProductImages";
import Seller from "./Seller";
import Comments from "./Comments";

interface ProductPageProps {
  car: Ad;
}

const ProductPage = ({ car }: ProductPageProps) => {
  return (
    <main className="w-full pb-32 min-h-screen bg-gray-6">
      <div className="w-full h-[516px] bg-brand-1 -mb-[450px]" />

      <div className="w-full max-w-7xl mx-auto px-5 flex flex-col items-center gap-4 xl:items-start xl:flex-row xl:flex-wrap xl:justify-between">
        <div className="w-full max-w-sm h-max flex flex-col items-center gap-4 md:max-w-3xl">
          <ProductImage coverImage={car.coverImage} />

          <div className="w-full p-7 bg-gray-10 rounded flex flex-col gap-2">
            <ProductInfo
              name={car.name}
              year={car.year}
              km={+car.km}
              price={car.price}
            />

            <Button style="button-brand" size="button-medium">
              Comprar
            </Button>
          </div>

          <ProductDescription description={car.description} />
        </div>

        <div className="w-full max-w-sm h-max flex flex-col items-center gap-4 md:max-w-3xl xl:max-w-md">
          <ProductImages images={[
            car.firstImage,
            car.secondImage,
            car.thirdImage,
            car.fourthImage,
            car.fifthImage,
            car.sixthImage,
          ]} />

          <Seller
            sellerName={car.user.name}
            sellerDescription={car.user.description}
            sellerId={car.user.id}
          />
        </div>

        <div className="w-full max-w-sm flex flex-col items-center gap-10 md:max-w-3xl">
          {/* Comentários serão inseridos e implementados no componente abaixo */}
          <Comments />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
