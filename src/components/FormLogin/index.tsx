import Link from "next/link";
import Button from "../Button";
import Input from "../Input";

const FormLogin = () => {
  return (
    <form className="flex flex-col gap-6 mt-5">
      <Input
        width="w-80"
        labelName="Email"
        placeholder="Digitar email"
        name="email"
        id="login-email"
      />
      <Input
        width="w-80"
        labelName="Senha"
        placeholder="Digitar senha"
        name="password"
        id="login-password"
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
