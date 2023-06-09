import "@/styles/globals.css";
import { fontInter, fontLexend } from "@/styles/font";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${fontLexend.className} ${fontInter.className}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
