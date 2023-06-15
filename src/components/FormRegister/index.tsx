import { UserData, userSchema } from "@/schemas/users.schema";
import { Button, AuthInput as Input } from "..";
import { useAuth } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });

  console.log(errors);
  const { register: registerForm } = useAuth();

  const submitRegister = (formData: UserData) => {
    registerForm(formData);
    console.log(formData);
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
      <p>{errors.name?.message ? errors.name.message : null}</p>

      <Input
        width="w-80"
        labelName="Email"
        placeholder="Ex: samuel@kenzie.com.br"
        id="register-email"
        register={register("email")}
      />
      <p>{errors.email?.message ? errors.email.message : null}</p>
      <Input
        width="w-80"
        labelName="CPF"
        placeholder="000.000.000.-00"
        register={register("cpf")}
        id="register-cpf"
        mask="999.999.999-99"
      />
      <p>{errors.cpf?.message ? errors.cpf.message : null}</p>

      <Input
        width="w-80"
        labelName="Celular"
        placeholder="(DDD) 90000-0000"
        register={register("cellphone")}
        id="register-cell"
        mask="(999)999999999"
      />
      <p>{errors.cellphone?.message ? errors.cellphone.message : null}</p>

      <Input
        width="w-80"
        labelName="Data de nascimento"
        placeholder="00/00/00"
        register={register("birthdate")}
        id="register-birth"
        mask="99/99/99"
      />
      <p>{errors.birthdate?.message ? errors.birthdate.message : null}</p>

      <Input
        width="w-80"
        labelName="Descrição"
        placeholder="Digitar descrição"
        register={register("description")}
        id="register-desc"
      />
      <p>{errors.description?.message ? errors.description.message : null}</p>

      <p className="font-medium text-sm justify-start cursor-pointer">
        Informações de endereço
      </p>
      <Input
        width="w-80"
        labelName="CEP"
        placeholder="00000-000"
        register={register("cep")}
        id="register-cep"
        mask="99999-999"
      />
      <p>{errors.cpf?.message ? errors.cpf.message : null}</p>

      <div className="flex gap-2.5">
        <Input
          width="w-36"
          labelName="Estado"
          placeholder="Digitar estado"
          register={register("state")}
          id="register-state"
        />
        <p>{errors.state?.message ? errors.state.message : null}</p>

        <Input
          width="w-36"
          labelName="Cidade"
          placeholder="Digitar cidade"
          register={register("city")}
          id="register-city"
        />
        <p>{errors.city?.message ? errors.city.message : null}</p>
      </div>
      <Input
        width="w-80"
        labelName="Rua"
        placeholder="Digitar rua"
        register={register("street")}
        id="register-street"
      />
      <p>{errors.street?.message ? errors.street.message : null}</p>

      <div className="flex gap-2.5">
        <Input
          width="w-36"
          labelName="Número"
          placeholder="Digitar número"
          register={register("number")}
          id="register-number"
        />
        <p>{errors.number?.message ? errors.number.message : null}</p>

        <Input
          width="w-36"
          labelName="Complemento"
          placeholder="Ex: apart 307"
          register={register("complement")}
          id="register-complement"
        />
        <p>{errors.complement?.message ? errors.complement.message : null}</p>
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
        type="password"
      />
      <p>{errors.password?.message ? errors.password.message : null}</p>

      <Input
        width="w-80"
        labelName="Confirmar senha"
        placeholder="Confirmar senha"
        register={register("confirmPass")}
        id="register-confirm"
        type="password"
      />
      <p>{errors.confirmPass?.message ? errors.confirmPass.message : null}</p>

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
