import { Modal } from "@/components";

interface iModalOpenImageProps {
  url: string
}

const ModalOpenImage = ({ url }: iModalOpenImageProps) => {
  return (
    <Modal title="Imagem do veículo">
      <figure>
        <img
          src={url}
          alt="Car image"
        />
      </figure>
    </Modal>
  )
}

export default ModalOpenImage;
