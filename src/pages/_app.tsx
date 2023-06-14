import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { fontInter, fontLexend } from "@/styles/font";
import { AppProvider } from "@/contexts/appContext";
import { Footer, Header } from "@/components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <main className={`${fontLexend} ${fontInter}`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </AppProvider>
  );
};

export default App;
