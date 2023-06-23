import Modal from "../Modal";
import { UserAdress } from "@/schemas";
import FormRegister from "../FormRegister";
import { Button, Input } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userSchema } from "@/schemas";
import { fontInter } from "@/styles/font";
import { useAppContext } from "@/contexts";
import { useAuth } from "@/contexts";

const ModalEditAdress = () => {
  const { userLogged } = useAuth();
  const { handleCloseModal } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAdress>({
    resolver: zodResolver(userSchema),
  });

  return (
    <Modal title="Editar Endereço">
      <form className="flex flex-col gap-6 mt-5">
        <p className="font-medium text-sm justify-start cursor-pointer">
          Informações de endereço
        </p>

        <Input
          id="cep"
          as="input"
          label="CEP"
          placeholder={userLogged?.Address.zipCode}
          errorMessage={errors.zipCode?.message}
          register={register("zipCode")}
        />

        <Input
          id="country"
          as="input"
          label="País"
          placeholder={userLogged?.Address.country}
          errorMessage={errors.country?.message}
          register={register("country")}
        />

        <div className="flex gap-2.5">
          <Input
            id="state"
            as="input"
            label="Estado"
            placeholder={userLogged?.Address.state}
            errorMessage={errors.state?.message}
            register={register("state")}
          />

          <Input
            id="city"
            as="input"
            label="Cidade"
            placeholder={userLogged?.Address.city}
            errorMessage={errors.city?.message}
            register={register("city")}
          />
        </div>

        <Input
          id="street"
          as="input"
          label="Rua"
          placeholder="Digitar rua"
          errorMessage={errors.street?.message}
          register={register("street")}
        />

        <div className="flex gap-2.5">
          <Input
            id="number"
            as="input"
            label="Número"
            placeholder="Digitar número"
            errorMessage={errors.number?.message}
            register={register("number")}
          />

          <Input
            id="complement"
            as="input"
            label="Complemento"
            placeholder={userLogged?.Address.complement}
            errorMessage={errors.complement?.message}
            register={register("complement")}
          />
        </div>
        <div className="flex gap-2.5">
          <Button style="button-grey" size="button-medium" type="button">
            Cancelar
          </Button>
          <Button style="button-brand" size="button-medium" type="button">
            Salvar alterações
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEditAdress;
