import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/Navbar";
const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar
          screenType="mobile"
          navbarType="aut"
          inicials="NP"
          name="Nome Pessoa"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
