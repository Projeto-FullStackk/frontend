import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { fontInter, fontLexend } from "@/styles/font";
import { AppProvider } from "@/contexts/appContext";
import { Footer, Header } from "@/components";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AuthProvider>
        <AppProvider>
          <main className={`${fontLexend.className} ${fontInter.className}`}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </main>
        </AppProvider>
      </AuthProvider>
    </>
  );
};

export default App;
