import Image from "next/image";
import product from "@/assets/product.png";
import { Ad, useAuth } from "@/contexts/AuthContext";
import { CommentsList, UserComment } from "..";
import { useComments } from "@/contexts/commentsContext";

interface ProductPageProps {
  car: Ad;
}

const ProductPage = ({ car }: ProductPageProps) => {
  const { userLogged } = useAuth();
  const { comments } = useComments();

  return (
    <main className="h-[5000px] bg-gray-6">
      <div className="bg-brand-1 h-[28.125rem] mb-40 flex flex-col justify-center items-center lg:flex-row lg:gap-10">
        <section className="px-3 pt-10 mt-[84.8125rem] mb-8 lg:mt-[26.5625rem]">
          <figure className="w-[21.9375rem] h-[22.1875rem] lg:w-[752px] bg-gray-10 rounded flex justify-center items-center">
            <img
              className="w-full h-full object-cover rounded-md"
              src={car.coverImage}
              alt={car.name}
            />
          </figure>

          <div className="w-[21.9375rem] h-[18.375rem] lg:w-[47rem] lg:h-auto bg-gray-10 rounded mt-4 p-7 mb-6">
            <h2 className="text-gray-1 font-semibold text-[1.1rem] font-lex mb-6">
              {car?.name}
            </h2>
            <div className="mb-4 lg:flex lg:justify-between">
              <div className=" flex items-center gap-3 mb-8">
                <span className="w-auto h-[1.875rem] px-2 flex justify-center items-center bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
                  {new Intl.NumberFormat("pt-BR").format(+car.km)} km
                </span>
                <span className="w-[2.875rem] h-[1.875rem] flex justify-center items-center bg-brand-4 rounded font-inter font-medium text-brand-1 text-sm">
                  {car?.year}
                </span>
              </div>
              <span className="font-lex font-medium text-gray-1 whitespace-nowrap text-ellipsis overflow-hidden">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(car.price)}
              </span>
            </div>
            <button className="button-brand w-[6.25rem] h-[2.375rem] rounded">
              Comprar
            </button>
          </div>

          <div className="lg:w-[47rem] lg:h-auto w-[21.9375rem] h-[18.375rem] bg-gray-10 py-9 px-7 rounded">
            <h2 className="text-gray-1 font-semibold text-[1.1rem] font-lex mb-8">
              Descrição
            </h2>
            <p className="font-inter text-base text-gray-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              mollitia molestias nostrum nulla necessitatibus officiis,
              delectus, molestiae at voluptatibus nihil vitae maxime corrupti
              possimus id aliquam ad ab perspiciatis sunt!
            </p>
          </div>

          <div className="lg:w-[47rem] mt-4 lg:h-auto w-[21.9375rem] h-[18.375rem] bg-gray-10 pt-9 pb-1 px-7 rounded">
            <h2 className="text-gray-1 font-semibold text-[1.1rem] font-lex mb-8">
              Comentários
            </h2>
            <ul>
              {comments.map((element) => (
                <CommentsList comment={element} key={element.id} />
              ))}
            </ul>
          </div>
          {userLogged ? (
            <div className="lg:w-[47rem] mt-4 lg:h-auto w-[21.9375rem] h-[18.375rem] bg-gray-10 py-9 px-7 rounded">
              <UserComment />
            </div>
          ) : null}
        </section>

        <section className="px-3 lg:mt-[23.6875rem]">
          <div className="w-[21.9375rem] h-auto py-9 px-10 bg-gray-10 mb-[2.5rem] rounded">
            <h2 className="mb-8 text-gray-1 font-semibold text-[1.1rem] font-lex">
              Fotos
            </h2>
            <ul className="flex flex-row flex-wrap gap-2">
              <li className="w-[85px] h-[85px] bg-gray-7 flex justify-center items-center rounded">
                <Image src={product} alt="carro" width={70} height={55} />
              </li>
              <li className="w-[85px] h-[85px] bg-gray-7 flex justify-center items-center rounded">
                <Image src={product} alt="carro" width={70} height={55} />
              </li>
              <li className="w-[85px] h-[85px] bg-gray-7 flex justify-center items-center rounded">
                <Image src={product} alt="carro" width={70} height={55} />
              </li>
              <li className="w-[85px] h-[85px] bg-gray-7 flex justify-center items-center rounded">
                <Image src={product} alt="carro" width={70} height={55} />
              </li>
              <li className="w-[85px] h-[85px] bg-gray-7 flex justify-center items-center rounded">
                <Image src={product} alt="carro" width={70} height={55} />
              </li>
              <li className="w-[85px] h-[85px] bg-gray-7 flex justify-center items-center rounded">
                <Image src={product} alt="carro" width={70} height={55} />
              </li>
            </ul>
          </div>

          <div className="w-[21.9375rem] h-[26rem] bg-gray-10 rounded px-7 pb-10 flex flex-col gap-5 justify-center items-center">
            <h2 className="rounded-[9.375rem] h-[4rem] w-[4rem] mt-4 bg-random-4 text-white flex items-center justify-center">
              SL
            </h2>
            <h3 className="text-gray-1 font-semibold text-[1.1rem] font-lex">
              Samuel Leão
            </h3>
            <p className="font-inter text-base text-gray-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              earum facere, laboriosam aliquid tenetur sunt velit et maiores
              minus ipsam illo ex ullam necessitatibus maxime nobis alias
              repellendus corrupti impedit?
            </p>
            <button className="button-black rounded w-[206px] h-12">
              Ver todos os anuncios
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductPage;
