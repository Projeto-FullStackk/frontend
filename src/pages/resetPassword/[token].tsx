import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Button, Input, Loading, Section } from "@/components";
import { UserResetPassword, userResetPasswordSchema } from "@/schemas";
import { useAppContext } from "@/contexts";
import { api } from "@/services/api";

const ResetPasswordPage = () => {
  const { query, push } = useRouter();
  const { isLoading, setIsLoading } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserResetPassword>({
    resolver: zodResolver(userResetPasswordSchema)
  });

  const submit = async ({ password }: UserResetPassword) => {
    setIsLoading(true);
    const { token } = query;
    await api.patch(`/user/resetPassword/${token}`, { password });
    setIsLoading(false);
    toast.success("Senha alterada com sucesso");
    push("/login");
  };

  return (
    <main className="w-full min-h-screen bg-gray-8 flex justify-center items-center">
      <Section title="Alterar senha" form={
        <form onSubmit={handleSubmit(submit)} className="w-full pt-8 flex flex-col gap-5 font-inter">
          <p className="text-gray-2">Informe uma nova senha para sua conta</p>

          <Input
            as="input"
            id="password"
            type="password"
            label="Nova senha"
            placeholder="Digite sua nova senha"
            errorMessage={errors.password?.message}
            register={register("password")}
          />

          <Input
            as="input"
            id="confirmPass"
            type="password"
            label="Confirma sua senha"
            placeholder="Digite novamente sua senha"
            errorMessage={errors.confirmPass?.message}
            register={register("confirmPass")}
          />

          <Button type="submit" fullWidth style="button-brand">Alterar senha</Button>
        </form>
      } />

      {isLoading && <Loading />}
    </main>
  )
}

export default ResetPasswordPage;
