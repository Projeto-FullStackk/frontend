import Link from "next/link";
import { AuthInput as Input, Button } from "..";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, loginSchema } from "@/schemas/users.schema";
import { useAuth } from "@/contexts/AuthContext";

const FormLogin = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const submitLogin = (formData: LoginData) => {
    login(formData);
  };

  return (
    <form
      className="flex flex-col gap-6 mt-5"
      onSubmit={handleSubmit(submitLogin)}
    >
      <Input
        width="w-80"
        labelName="Email"
        placeholder="Digitar email"
        id="login-email"
        register={register("email")}
      />
      <Input
        width="w-80"
        labelName="Senha"
        placeholder="Digitar senha"
        id="login-password"
        register={register("password")}
      />
      <p className="flex text-gray-2 font-medium text-sm justify-end cursor-pointer">
        Esqueci minha senha
      </p>
      <Button
        type="submit"
        style="button-brand"
        disabled={false}
        size="button-medium"
        fullWidth={true}
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
          disabled={false}
          size="button-medium"
          fullWidth={true}
        >
          Cadastrar
        </Button>
      </Link>
    </form>
  );
};

export default FormLogin;
