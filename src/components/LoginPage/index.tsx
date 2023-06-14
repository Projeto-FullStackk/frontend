import { Footer, Header, Section, FormLogin } from "..";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-8">
      <Header />
      <Section title="Login" form={<FormLogin />} />
      <Footer />
    </main>
  );
};

export default LoginPage;
