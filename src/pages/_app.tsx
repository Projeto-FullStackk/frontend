import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { fontInter, fontLexend } from "@/styles/font";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${fontLexend} ${fontInter}`}>
      <Component {...pageProps} />
    </main>
  )
}

export default App;
