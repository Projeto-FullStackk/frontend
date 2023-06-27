import Modal from "../Modal";
import { UserAdress } from "@/schemas";
import { Button, Input } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";

import { useAppContext } from "@/contexts";
import { useAuth } from "@/contexts";

import { userAdressSchema } from "@/schemas";

const ModalEditAdress = () => {
  const { userLogged, updateAdress } = useAuth();
  const { handleCloseModal } = useAppContext();

  const { register, handleSubmit } = useForm<UserAdress>({
    resolver: zodResolver(userAdressSchema.partial()),
    defaultValues: {
      zipCode: userLogged?.Address.zipCode,
      country: userLogged?.Address.country,
      city: userLogged?.Address.city,
      complement: userLogged?.Address.complement,
      street: userLogged?.Address.street,
      number: userLogged?.Address.number,
      state: userLogged?.Address.state,
    },
  });

  const submitUpdate = async (userData: UserAdress) => {
    try {
      await updateAdress(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal title="Editar Endereço">
      <form
        className="flex flex-col gap-6 mt-5"
        onSubmit={handleSubmit(submitUpdate)}
      >
        <p className="font-medium text-sm justify-start cursor-pointer">
          Informações de endereço
        </p>

        <Input
          id="cep"
          as="input"
          label="CEP"
          type="text"
          register={register("zipCode")}
          placeholder={userLogged?.Address.zipCode}
        />

        <Input
          id="country"
          as="input"
          label="País"
          register={register("country")}
          placeholder={userLogged?.Address.country}
        />

        <div className="flex gap-2.5">
          <Input
            id="state"
            as="input"
            label="Estado"
            register={register("state")}
            placeholder={userLogged?.Address.state}
          />

          <Input
            id="city"
            as="input"
            label="Cidade"
            register={register("city")}
            placeholder={userLogged?.Address.city}
          />
        </div>

        <Input
          id="street"
          as="input"
          label="Rua"
          register={register("street")}
          placeholder={userLogged?.Address.street}
        />

        <div className="flex gap-2.5">
          <Input
            id="number"
            as="input"
            label="Número"
            register={register("number")}
            placeholder={userLogged?.Address.number}
          />

          <Input
            id="complement"
            as="input"
            label="Complemento"
            register={register("complement")}
            placeholder={userLogged?.Address.complement}
          />
        </div>
        <div className="flex gap-2.5 justify-end ">
          <Button
            style="button-grey"
            size="button-medium"
            type="button"
            onClick={handleCloseModal}
          >
            Cancelar
          </Button>
          <Button style="button-brand" size="button-medium" type="submit">
            Salvar alterações
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEditAdress;
