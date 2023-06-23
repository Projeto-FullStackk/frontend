import Modal from "../Modal";
import FormRegister from "../FormRegister";
import { Button, Input } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserData, userSchema } from "@/schemas";
import { fontInter } from "@/styles/font";
import { useAppContext } from "@/contexts";
import { useAuth } from "@/contexts";
import { UserUpdate } from "@/schemas";

const ModalEditUser = () => {
  const { userLogged } = useAuth();
  const { handleCloseModal } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdate>({
    resolver: zodResolver(userSchema),
  });

  return (
    <Modal title="Editar Usuário">
      <form className="flex flex-col gap-6 mt-5">
        <p className="font-medium text-sm justify-start cursor-pointer">
          Informações pessoais
        </p>

        <Input
          id="name"
          as="input"
          label="Nome"
          placeholder={userLogged?.name}
          errorMessage={errors.name?.message}
          register={register("name")}
        />

        <Input
          id="email"
          as="input"
          label="Email"
          placeholder={userLogged?.email}
          errorMessage={errors.email?.message}
          register={register("email")}
        />

        <Input
          id="cpf"
          as="input"
          label="CPF"
          placeholder={userLogged?.cpf}
          errorMessage={errors.cpf?.message}
          register={register("cpf")}
        />

        <Input
          id="cellphone"
          as="input"
          type="tel"
          label="Celular"
          placeholder={userLogged?.phone}
          errorMessage={errors.phone?.message}
          register={register("phone")}
        />

        <Input
          id="birthdate"
          as="input"
          type="date"
          label="Data de nascimento"
          placeholder={userLogged?.birthDate}
          errorMessage={errors.birthDate?.message}
          register={register("birthDate")}
        />

        <Input
          id="description"
          as="textarea"
          label="Descrição"
          placeholder={userLogged?.description}
          errorMessage={errors.description?.message}
          register={register("description")}
        />
        <div className="flex flex-row justify-between">
          <Button
            style="button-grey"
            size="button-medium"
            type="button"
            onClick={handleCloseModal}
          >
            Cancelar
          </Button>
          <Button style="button-alert" size="button-medium" type="button">
            Excluir Perfil
          </Button>
          <Button type="submit" style="button-brand" size="button-medium">
            Salvar alterações
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEditUser;
