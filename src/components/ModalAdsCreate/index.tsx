import { fontInter } from "@/styles/font";
import Modal from "../Modal";
import Form from "./Form";

const ModalAdsCreate = () => {
  return (
    <Modal title="Criar anuncio">
      <div className={`w-full flex flex-col gap-6 ${fontInter.className}`}>
        <h4 className="font-medium text-sm text-gray-0">
          Informações do veículo
        </h4>

        <Form />
      </div>
    </Modal>
  )
}

export default ModalAdsCreate;
