import { ReactNode, createContext } from "react";
import { useRouter } from "next/router";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { setCookie } from "nookies";
import { LoginData, UserData } from "@/schemas/users.schema";

interface iProps {
  children: ReactNode;
}

interface iAuthProvider {
  register: (userData: UserData) => void;
  login: (loginData: LoginData) => void;
}

const AuthContext = createContext<iAuthProvider>({} as iAuthProvider);

const AuthProvider = ({ children }: iProps) => {
  const router = useRouter();

  const register = (userData: UserData) => {
    api
      .post("/users", userData)
      .then(() => {
        toast.success("Cadastro realizado com successo", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha no cadastro", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const login = (loginData: LoginData) => {
    api
      .post("/login", loginData)
      .then((response) => {
        setCookie(null, "kenziefy.token", response.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
      })
      .then(() => {
        toast.success("Login realizado com successo", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Erro ao logar, verifique e o e-mail e a senha estão corretos !",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };
  return (
    <AuthContext.Provider value={{ register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
