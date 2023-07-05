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

        <div className="flex container justify-between items-center mt-4">
          <div className="flex gap-2">
            <span className="w-max h-max px-2 py-1 bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
              {new Intl.NumberFormat("pt-BR").format(+car.km)} km
            </span>
            <span className="w-max h-max px-2 py-1 bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
              {car.year}
            </span>
          </div>
          <span className="w-auto whitespace-nowrap text-ellipsis overflow-hidden">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(car.price)}
          </span>
        </div>

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
