import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components";
import { Ad } from "@/contexts/AuthContext";

interface CardProps {
  type: "user" | "seller";
  carData: Ad;
}

const Card = ({ type, carData }: CardProps) => {
  const { user, ...car } = carData;
  const router = useRouter();

  let initials = "";
  if (user?.name) {
    const names = user?.name.split(" ");
    initials = names[0][0] + names[1][0];
  }

  return (
    <>
      <li className="group w-[18rem] max-h-[400px] cursor-pointer">
        <figure className="relative bg-gray-7 h-[9.5rem] mb-4 flex justify-center items-center border-2 group-hover:border-brand-1 ">
          <img
            className="w-full h-full object-cover"
            src={car.coverImage}
            alt={car.name}
          />
          {type === "seller" ? (
            <span
              className={`absolute top-2 left-2 text-xs px-2 py-1 text-white ${
                car.published ? "bg-brand-1" : "bg-gray-4"
              } `}
            >
              {car.published ? "Ativo" : "Inativo"}
            </span>
          ) : null}
        </figure>
        <h2 className=" whitespace-nowrap font-lex font-semibold mb-4 text-ellipsis overflow-hidden ">
          {car.name}
        </h2>
        <p className="font-inter font-normal text-xs text-gray-2">
          {car.description}
        </p>

        {type === "user" ? (
          <div
            className="flex items-center gap-2 mt-5"
            onClick={() => router.push(`/profile/${car.userId}`)}
          >
            <span className="rounded-[9.375rem] bg-random-5 w-[2rem] h-[2rem] text-gray-white flex justify-center items-center text-sm font-inter">
              {initials}
            </span>
            <span className="font-inter font-medium text-gray-2 text-sm">
              {user?.name}
            </span>
          </div>
        ) : null}

        <div className="flex container justify-between items-center mt-4">
          <div className="flex gap-2">
            <span className="w-auto h-[1.875rem] px-2 flex justify-center items-center bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
              <span className="w-auto h-[1.875rem] px-2 flex justify-center items-center bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
                {new Intl.NumberFormat("pt-BR").format(+car.km)} km
              </span>
            </span>
            <span className="w-[2.875rem] h-[1.875rem] flex justify-center items-center bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
              {car.year}
            </span>
          </div>
          <span className="whitespace-nowrap text-ellipsis overflow-hidden">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(car.price)}
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
