import { useRouter } from "next/router";
import { Button } from "@/components";
import { Ad } from "@/contexts/AuthContext";
import Badge from "./Badge";
import ModalAdsEdit from "../ModalAdsEdit";
import CardCoverImage from "./CardCoverImage";
import CardPublishLabel from "./CardPublishLabel";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardSeller from "./CardSeller";
import CardInfo from "./CardInfo";
import CardButtons from "./CardButtons";

interface CardProps {
  type: "user" | "seller";
  carData: Ad;
}

const Card = ({ type, carData }: CardProps) => {
  const { user, ...car } = carData;
  const router = useRouter();

  const isBelowPrice: boolean = car.priceTf * 0.95 > car.price;

  return (
    <>
      <li
        className="group w-[18rem] min-w-[18rem] max-h-[400px] cursor-pointer relative"
        onClick={() => router.push(`/product/${car?.id}`)}
      >
        <CardCoverImage coverImage={car.coverImage} />

        <CardTitle brand={car.brand} name={car.name} />

        <CardDescription description={car.description} />

        {type === "user" && (
          <>
            <CardSeller sellerId={user.id} sellerName={user.name} />

            {isBelowPrice && <Badge />}
          </>
        )}

        <CardInfo km={+car.km} price={car.price} year={car.year} />

        {type === "seller" && (
          <>
            <CardButtons carData={carData} />

            <CardPublishLabel isPublished={car.published} />
          </>
        )}
      </li>
    </>
  );
};

export default Card;
