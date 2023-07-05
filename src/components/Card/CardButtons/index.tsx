import { MouseEventHandler } from "react";
import { Ad } from "@/contexts/AuthContext";
import { Button } from "@/components";
import { useAppContext } from "@/contexts";

interface iCardButtonsProps {
  carData: Ad
}

const CardButtons = ({ carData }: iCardButtonsProps) => {
  const { handleOpenModal, setModalType, setCarUpdate } = useAppContext();

  const handleEditCar: MouseEventHandler = (event) => {
    event.stopPropagation();
    handleOpenModal();
    setModalType("adsEdit");
    setCarUpdate(carData);
  }

  return (
    <div className="w-full pt-4 flex gap-4">
      <Button
        style="button-black-outline"
        size="button-medium"
        type="button"
        onClick={handleEditCar}
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
  )
}

export default CardButtons;
