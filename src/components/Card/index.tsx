import { useRouter } from "next/router";
import { Button } from "@/components";
import { Ad } from "@/contexts/AuthContext";
import Badge from "./Badge";
import { useAppContext } from "@/contexts";
import ModalAdsEdit from "../ModalAdsEdit";
import CardCoverImage from "./CardCoverImage";
import CardPublishLabel from "./CardPublishLabel";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardSeller from "./CardSeller";
import CardInfo from "./CardInfo";

interface CardProps {
  type: "user" | "seller";
  carData: Ad;
}

const Card = ({ type, carData }: CardProps) => {
  const { user, ...car } = carData;
  const router = useRouter();
  const { handleOpenModal, setModalType, setCarUpdate } = useAppContext();

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
            <div className="w-full pt-4 flex gap-4">
              <Button
                style="button-black-outline"
                size="button-medium"
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleOpenModal();
                  setModalType("adsEdit");
                  setCarUpdate(car);
                }}
              >
                Editar
              </Button>
              <Button
                style="button-black-outline"
                size="button-medium"
                type="button"
              >
                Ver detalhes
              </Button>
            </div>

            <CardPublishLabel isPublished={car.published} />
          </>
        )}
      </li>
    </>
  );
};

export default Card;
