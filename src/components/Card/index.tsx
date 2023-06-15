import Image from "next/image";
import car from "@/assets/car.png";
import { useRouter } from "next/router";
import { Car } from "@/pages";
import Button from "../Button";

interface CardProps {
  type: "user" | "seller";
  carData: Car;
}

const Card = ({ type, carData }: CardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/profile/samuelleao");
  };

  return (
    <>
      <li className="group w-[18rem] max-h-[400px] cursor-pointer">
        <figure className="relative bg-gray-7 h-[9.5rem] mb-4 flex justify-center items-center border-2 group-hover:border-[#4529E6] ">
          <Image src={car} alt="car" width={250} height={250} />
          {type === "seller" ? (
            <span
              className={`absolute top-2 left-2 text-xs px-2 py-1 text-white ${
                carData.published ? "bg-brand-1" : "bg-gray-4"
              } `}
            >
              {carData.published ? "Ativo" : "Inativo"}
            </span>
          ) : null}
        </figure>
        <h2 className=" whitespace-nowrap font-lex font-semibold mb-4 text-ellipsis overflow-hidden ">
          Product title stays here - max 1 line
        </h2>
        <p className="font-inter font-normal text-xs text-gray-2">
          {carData.description}
        </p>

        {type === "user" ? (
          <div className="flex items-center gap-2 mt-5" onClick={handleClick}>
            <span className="rounded-[9.375rem] bg-random-5 w-[2rem] h-[2rem] text-gray-white flex justify-center items-center text-sm font-inter">
              SL
            </span>
            <span className="font-inter font-medium text-gray-2 text-sm">
              Samuel Leão
            </span>
          </div>
        ) : null}

        <div className="flex container justify-between items-center mt-4">
          <div className="flex gap-2">
            <span className="w-[2.875rem] h-[1.875rem] flex justify-center items-center bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
              0 km
            </span>
            <span className="w-[2.875rem] h-[1.875rem] flex justify-center items-center bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
              2019
            </span>
          </div>
          <span className="whitespace-nowrap text-ellipsis overflow-hidden">
            R$ 00000
          </span>
        </div>

        {type === "seller" ? (
          <div className="w-full pt-4 flex gap-4">
            <Button
              style="button-black-outline"
              size="button-medium"
              type="button"
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
        ) : null}
      </li>
    </>
  );
};

export default Card;
