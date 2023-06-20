import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiMailSendLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { Button, Input, Loading, Section } from "@/components";
import { UserEmail, userEmailSchema } from "@/schemas";
import { useAppContext } from "@/contexts";
import { api } from "@/services/api";

const EmailConfirmPage = () => {
  const [ emailConfirm, setEmailConfirm ] = useState<string | null>(null);
  const { isLoading, setIsLoading } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserEmail>({
    resolver: zodResolver(userEmailSchema)
  });

  const submit = async ({ email }: UserEmail) => {
    setIsLoading(true);
    
    try {
      await api.post("/user/resetPassword", { email });
      setEmailConfirm(email);
    }
    catch (error) {
      toast.error("Este endereço de email não está cadastrado");
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-8 flex justify-center items-center">
      <Section title={emailConfirm ? "Email enviado" : "Esqueceu sua senha?"} form={
        emailConfirm
          ? (
            <div className="w-full pt-8 flex flex-col gap-5 items-center">
              <p className="text-gray-2">
                Foi enviado um email para {emailConfirm} um link para redefinir uma nova senha. Acesse-o para recuperar a sua conta
              </p>

              <RiMailSendLine size={40} />
            </div>
          )
          : (
            <form onSubmit={handleSubmit(submit)} className="w-full pt-8 flex flex-col gap-5 font-inter">
              <p className="text-gray-2">Para que consiga recuperar o acesso a sua conta é preciso informar seu email cadastrado</p>

              <Input
                as="input"
                id="email"
                label="Email"
                placeholder="Digite seu email cadastrado"
                errorMessage={errors.email?.message}
                register={register("email")}
              />

              <Button type="submit" fullWidth style="button-brand">Confirmar email</Button>
            </form>
          )
      } />

      {isLoading && <Loading />}
    </main>
  )
}

export default EmailConfirmPage;
