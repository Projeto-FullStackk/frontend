import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { fontInter, fontLexend } from "@/styles/font";
import { AppProvider } from "@/providers/appContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <main className={`${fontLexend} ${fontInter}`}>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
};

export default App;
