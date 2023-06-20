import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "@/schemas";
import { Input, Button } from "@/components";
import { useAuth } from "@/contexts";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const submitLogin = (formData: LoginData) => {
    login(formData);
  };

  return (
    <form
      className="flex flex-col gap-6 mt-5 font-inter"
      onSubmit={handleSubmit(submitLogin)}
    >
      <Input
        id="email"
        as="input"
        type="email"
        label="Email"
        placeholder="Digitar email"
        errorMessage={errors.email?.message}
        register={register("email")}
      />

      <Input
        id="password"
        as="input"
        type="password"
        label="password"
        placeholder="Digitar senha"
        errorMessage={errors.password?.message}
        register={register("password")}
      />

      <p className="flex text-gray-2 font-medium text-sm justify-end">
        <Link href="/resetPassword">
          Esqueci minha senha
        </Link>
      </p>

      <Button
        type="submit"
        style="button-brand"
        size="button-medium"
        fullWidth
      >
        Entrar
      </Button>
      <p className="flex text-gray-2 font-normal text-base justify-center cursor-pointer">
        Ainda não possui conta?
      </p>
      <Link href="/register" className="w-full cursor-pointer md:w-full">
        <Button
          type="button"
          style="button-grey-outline"
          size="button-medium"
          fullWidth
        >
          Cadastrar
        </Button>
      </Link>
    </form>
  );
};

export default FormLogin;
