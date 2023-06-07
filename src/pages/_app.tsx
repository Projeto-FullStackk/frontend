import "@/styles/globals.css";
import font from "@/styles/font";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default App;
