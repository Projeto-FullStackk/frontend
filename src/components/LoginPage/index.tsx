import { Footer, Header, Section, FormLogin } from "..";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-8">
      <Section title="Login" form={<FormLogin />} />
    </main>
  );
};

export default LoginPage;
