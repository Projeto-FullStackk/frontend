import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserData, userSchema } from "@/schemas";
import { Button, Input } from "@/components";
import { fontInter } from "@/styles/font";
import { useAuth } from "@/contexts";

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
    formData.isSeller === "1"
      ? (formData.isSeller = false)
      : (formData.isSeller = true);

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
        id="name"
        as="input"
        label="Nome"
        placeholder="Ex: Samuel Leão"
        errorMessage={errors.name?.message}
        register={register("name")}
      />

      <Input
        id="email"
        as="input"
        label="Email"
        placeholder="Ex: samuel@kenzie.com.br"
        errorMessage={errors.email?.message}
        register={register("email")}
      />

      <Input
        id="cpf"
        as="input"
        label="CPF"
        placeholder="000.000.000-00"
        errorMessage={errors.cpf?.message}
        register={register("cpf")}
      />

      <Input
        id="cellphone"
        as="input"
        type="tel"
        label="Celular"
        placeholder="(DDD) 90000-0000"
        errorMessage={errors.phone?.message}
        register={register("phone")}
      />

      <Input
        id="birthdate"
        as="input"
        type="date"
        label="Data de nascimento"
        placeholder="00/00/00"
        errorMessage={errors.birthDate?.message}
        register={register("birthDate")}
      />

      <Input
        id="description"
        as="textarea"
        label="Descrição"
        placeholder="Digitar descrição"
        errorMessage={errors.description?.message}
        register={register("description")}
      />

      <p className="font-medium text-sm justify-start cursor-pointer">
        Informações de endereço
      </p>

      <Input
        id="cep"
        as="input"
        label="CEP"
        placeholder="00000-000"
        errorMessage={errors.zipCode?.message}
        register={register("zipCode")}
      />

      <Input
        id="country"
        as="input"
        label="País"
        placeholder="Digitar país"
        errorMessage={errors.country?.message}
        register={register("country")}
      />

      <div className="flex gap-2.5">
        <Input
          id="state"
          as="input"
          label="Estado"
          placeholder="Digitar Estado"
          errorMessage={errors.state?.message}
          register={register("state")}
        />

        <Input
          id="city"
          as="input"
          label="Cidade"
          placeholder="Digitar cidade"
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
          placeholder="Ex: apart 307"
          errorMessage={errors.complement?.message}
          register={register("complement")}
        />
      </div>

      <p className="font-medium text-sm justify-start cursor-pointer">
        Tipo de conta
      </p>

      <div className="flex gap-2.5">
        <label
          className={`${fontInter.className} text-center w-full button-brand h-max rounded-[0.25rem] font-semibold transition-colors button-medium`}
        >
          Comprador{" "}
          <input
            type="radio"
            value="1"
            id="buyer"
            className="hidden"
            {...register("isSeller")}
          />
        </label>

        <label
          className={`${fontInter.className} text-center w-full button-grey h-max rounded-[0.25rem] font-semibold transition-colors button-medium`}
        >
          Vendedor{" "}
          <input
            type="radio"
            value="2"
            id="seller"
            className="hidden"
            {...register("isSeller")}
          />
        </label>
      </div>

      <Input
        id="password"
        as="input"
        type="password"
        label="Senha"
        placeholder="Digitar senha"
        errorMessage={errors.password?.message}
        register={register("password")}
      />

      <Input
        id="confirmPass"
        as="input"
        type="password"
        label="Confirmar Senha"
        placeholder="Confirmar senha"
        errorMessage={errors.confirmPass?.message}
        register={register("confirmPass")}
      />

      <Button type="submit" style="button-brand" size="button-medium" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
};

export default FormRegister;
