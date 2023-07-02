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
  const { userLogged, updateAdress } = useAuth();
  const { handleCloseModal, setModalType } = useAppContext();

  const { register, handleSubmit } = useForm<UserAdress>({
    resolver: zodResolver(userAdressSchema.partial()),
    /* defaultValues: {
      zipCode: userLogged?.Address.zipCode,
      country: userLogged?.Address.country,
      city: userLogged?.Address.city,
      complement: userLogged?.Address.complement,
      street: userLogged?.Address.street,
      number: userLogged?.Address.number,
      state: userLogged?.Address.state,
    }, */
  });

  const submitUpdate = async (userData: UserAdress) => {
    try {
      await updateAdress(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal title="Editar Anúncio">
      <Form />
    </Modal>
  );
};

export default ModalAdsEdit;
