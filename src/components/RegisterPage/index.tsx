import { Footer, FormRegister, Header, Section } from "..";

const RegisterPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-gray-8">
        <Header />
        <Section title="Cadastro" form={<FormRegister />} />
        <Footer />
      </main>
    </>
  );
};

export default RegisterPage;
