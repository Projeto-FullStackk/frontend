import { UserData, userSchema } from "@/schemas/users.schema";
import { Button, AuthInput as Input } from "..";
import { useAuth } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import cpfMask from "@/masks/cpf.mask";

const FormRegister = () => {
  const { register, handleSubmit } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });

  const { register: registerForm } = useAuth();

  const submitRegister = (formData: UserData) => {
    registerForm(formData);
  };

  return (
    <form
      className="flex flex-col gap-6 mt-5"
      onSubmit={handleSubmit(submitRegister)}
    >
      <p className="font-medium text-sm justify-start cursor-pointer">
        Informações pessoais
      </p>
      <Input
        width="w-80"
        labelName="Nome"
        placeholder="Ex: Samuel Leão"
        id="register-name"
        register={register("name")}
      />
      <Input
        width="w-80"
        labelName="Email"
        placeholder="Ex: samuel@kenzie.com.br"
        id="register-email"
        register={register("email")}
      />
      <Input
        width="w-80"
        labelName="CPF"
        placeholder="000.000.000.-00"
        register={register("cpf")}
        id="register-cpf"
      />
      <Input
        width="w-80"
        labelName="Celular"
        placeholder="(DDD) 90000-0000"
        register={register("cellphone")}
        id="register-cell"
      />
      <Input
        width="w-80"
        labelName="Data de nascimento"
        placeholder="00/00/00"
        register={register("birthdate")}
        id="register-birth"
      />
      <Input
        width="w-80"
        labelName="Descrição"
        placeholder="Digitar descrição"
        register={register("description")}
        id="register-desc"
      />

      <p className="font-medium text-sm justify-start cursor-pointer">
        Informações de endereço
      </p>
      <Input
        width="w-80"
        labelName="CEP"
        placeholder="00000-000"
        register={register("cep")}
        id="register-cep"
      />
      <div className="flex gap-2.5">
        <Input
          width="w-36"
          labelName="Estado"
          placeholder="Digitar estado"
          register={register("state")}
          id="register-state"
        />
        <Input
          width="w-36"
          labelName="Cidade"
          placeholder="Digitar cidade"
          register={register("city")}
          id="register-city"
        />
      </div>
      <Input
        width="w-80"
        labelName="Rua"
        placeholder="Digitar rua"
        register={register("street")}
        id="register-street"
      />
      <div className="flex gap-2.5">
        <Input
          width="w-36"
          labelName="Número"
          placeholder="Digitar número"
          register={register("number")}
          id="register-number"
        />
        <Input
          width="w-36"
          labelName="Complemento"
          placeholder="Ex: apart 307"
          register={register("complement")}
          id="register-complement"
        />
      </div>

      <p className="font-medium text-sm justify-start cursor-pointer">
        Tipo de conta
      </p>
      <div className="flex gap-2.5">
        <Button
          type="button"
          style="button-brand"
          disabled={false}
          size="button-medium"
          fullWidth={true}
        >
          Comprador
        </Button>
        <Button
          type="button"
          style="button-grey"
          disabled={false}
          size="button-medium"
          fullWidth={true}
        >
          Anunciante
        </Button>
      </div>

      <Input
        width="w-80"
        labelName="Senha"
        placeholder="Digitar senha"
        register={register("password")}
        id="register-pass"
      />

      <Input
        width="w-80"
        labelName="Confirmar senha"
        placeholder="Confirmar senha"
        register={register("confirmPass")}
        id="register-confirm"
      />

      <Button
        type="submit"
        style="button-brand"
        disabled={false}
        size="button-medium"
        fullWidth={true}
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
};

export default FormRegister;
