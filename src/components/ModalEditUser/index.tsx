import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Modal } from "@/components";
import { useAuth, useAppContext } from "@/contexts";
import { UserUpdate, userUpdateSchema } from "@/schemas";

const ModalEditUser = () => {
  const { userLogged, updateUser, deleteUser } = useAuth();
  const { handleCloseModal } = useAppContext();
  const { register, handleSubmit } = useForm<UserUpdate>({
    resolver: zodResolver(userUpdateSchema.partial()),
    defaultValues: {
      name: userLogged?.name,
      email: userLogged?.email,
      cpf: userLogged?.cpf,
      phone: userLogged?.phone,
      birthDate: userLogged?.birthDate,
      description: userLogged?.description,
    },
  });
  const submitUpdate = async (userData: any) => {
    if (await updateUser(userData)) {
      handleCloseModal()
    }
  };

  const submitDelete = async () => {
    if (await deleteUser()) {
      handleCloseModal();
    }
  }

  return (
    <Modal title="Editar Usuário">
      <form
        className="flex flex-col gap-6 mt-5"
        onSubmit={handleSubmit(submitUpdate)}
      >
        <p className="font-medium text-sm justify-start cursor-pointer">
          Informações pessoais
        </p>

        <Input
          id="name"
          as="input"
          label="Nome"
          register={register("name")}
          placeholder={userLogged?.name}
        />

        <Input
          id="email"
          as="input"
          label="Email"
          register={register("email")}
          placeholder={userLogged?.email}
        />

        <Input
          id="cpf"
          as="input"
          label="CPF"
          register={register("cpf")}
          placeholder={userLogged?.cpf}
        />

        <Input
          id="cellphone"
          as="input"
          type="tel"
          label="Celular"
          register={register("phone")}
          placeholder={userLogged?.phone}
        />

        <Input
          id="birthdate"
          as="input"
          type="date"
          label="Data de nascimento"
          register={register("birthDate")}
          placeholder={userLogged?.birthDate}
        />

        <Input
          id="description"
          as="textarea"
          label="Descrição"
          register={register("description")}
          placeholder={userLogged?.description}
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
          <Button
            style="button-alert"
            size="button-medium"
            type="button"
            onClick={() => {submitDelete()}}
          >
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
