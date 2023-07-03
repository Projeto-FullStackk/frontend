import Modal from "../Modal";
import { UserAdress } from "@/schemas";
import { Button, Input } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useAppContext } from "@/contexts";
import { useAuth } from "@/contexts";

import { userAdressSchema } from "@/schemas";
import Form from "./Form";

const ModalAdsEdit = () => {
  return (
    <Modal title="Editar Anúncio">
      <Form />
    </Modal>
  );
};

export default ModalAdsEdit;
