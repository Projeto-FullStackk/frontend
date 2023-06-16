import { Footer, FormRegister, Header, Section } from "..";

const RegisterPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-gray-8">
        <Section title="Cadastro" form={<FormRegister />} />
      </main>
    </>
  );
};

export default RegisterPage;
