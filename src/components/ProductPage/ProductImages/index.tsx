import { ModalOpenImage } from "@/components";
import { useAppContext } from "@/contexts";
import { useState } from "react";

type url = string | undefined | null;

interface iProductImagesProps {
  images: url[];
}

const ProductImages = ({ images }: iProductImagesProps) => {
  const { handleOpenModal, open, setModalType, modalType } = useAppContext();
  const [currentImage, setCurrentImage] = useState("");

  const handleOpenModalImage = (url: string) => {
    setCurrentImage(url);
    handleOpenModal();
  };

  return (
    <>
      <section className="w-full py-9 px-7 bg-gray-10 rounded flex flex-wrap justify-center gap-y-8 gap-x-1 md:gap-x-1 xl:gap-x-4">
        <h2 className="w-full font-semibold text-xl text-gray-1">Fotos</h2>

        {images.some((img) => img) ? (
          images.map((url, index) => {
            if (url) {
              return (
                <figure
                  key={index}
                  className="w-[90px] h-[90px] bg-gray-7 rounded md:w-[108px] md:h-[108px] cursor-pointer"
                  onClick={() => {
                    handleOpenModalImage(url);
                    setModalType("carImage");
                  }}
                >
                  <img
                    src={url}
                    alt={`Image car ${index}`}
                    className="w-full h-full object-contain"
                  />
                </figure>
              );
            }
          })
        ) : (
          <p className="text-gray-2">Sem fotos adicionais</p>
        )}
      </section>

      {open && modalType === "carImage" ? (
        <ModalOpenImage url={currentImage} />
      ) : null}
    </>
  );
};

export default ProductImages;
