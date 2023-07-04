import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { destroyCookie, parseCookies, setCookie } from "nookies";
import {
  LoginData,
  UserData,
  UserAdress,
  UserUpdate,
  userUpdateSchema,
  userAdressSchema,
} from "@/schemas";
import { api } from "../services/api";

interface iProps {
  children: ReactNode;
}
export interface Address {
  id: string;
  zipCode: string;
  state: string;
  city: string;
  country: string;
  street: string;
  number: string;
  complement: string;
}

export interface Ad {
  id: string;
  brand: string;
  name: string;
  year: number;
  fuel: string;
  km: string;
  color: string;
  priceTf: number;
  price: number;
  description: string;
  coverImage: string;
  firstImage: string;
  secondImage: string;
  thirdImage: null | string;
  fourthImage: null | string;
  fifthImage: null | string;
  sixthImage: null | string;
  userId: string;
  user: UserLogged;
  published: boolean;
}

export interface UserLogged {
  id: string;
  createdAt: string;
  name: string;
  isAdmin: boolean;
  email: string;
  phone: string;
  cpf: string;
  birthDate: string;
  isSeller: boolean;
  description: string;
  addressId: string;
  reset_token: null | string;
  Address: Address;
  ads: Ad[];
}

interface iAuthProvider {
  register: (userData: UserData) => void;
  login: (loginData: LoginData) => void;
  userLogged: UserLogged | null;
  setUserLogged: Dispatch<SetStateAction<UserLogged | null>>;
  logout: () => void;
  updateUser: (userData: UserUpdate) => void;
  updateAdress: (userData: UserAdress) => void;
  deleteUser: () => void;
}

const AuthContext = createContext<iAuthProvider>({} as iAuthProvider);

const AuthProvider = ({ children }: iProps) => {
  const router = useRouter();
  const [userLogged, setUserLogged] = useState<UserLogged | null>(null);
  const cookie = parseCookies();

  const token = cookie["motorShop.token"];

  const register = (userData: UserData) => {
    const address = {
      zipCode: userData.zipCode,
      country: userData.country,
      state: userData.state,
      city: userData.city,
      street: userData.street,
      complement: userData.complement,
      number: userData.number,
    };

    const user = {
      name: userData.name,
      email: userData.email,
      cpf: userData.cpf,
      phone: userData.phone,
      birthDate: userData.birthDate,
      description: userData.description,
      password: userData.confirmPass,
      address: address,
    };

    api
      .post("user", user)
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
  const updateAdress = (userData: UserAdress) => {
    const data = { ...userLogged, address: userData };

    delete data.Address;
    api
      .patch(`user/${userLogged?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Atualização realizada com successo", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        /* router.push("/"); */
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha na atualização", {
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
  const updateUser = (userData: UserUpdate) => {
    const validData = userUpdateSchema.parse(userData);

    api
      .patch(`user/${userLogged?.id}`, validData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        window.location.reload();
        toast.success("Atualização realizada com successo", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha na atualização", {
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
      .post("auth", loginData)
      .then((response) => {
        setCookie(null, "motorShop.token", response.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
        return response.data.token;
      })
      .then((token) => {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        api.get("user").then((response) => {
          console.log(response.data[0]);
          setUserLogged(response.data[0]);
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

        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Erro ao logar, verifique se o e-mail e a senha estão corretos !",
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
  const deleteUser = () => {
    api
      .delete(`user/${userLogged?.id}`)
      .then(() => {
        toast.success("Deletado com sucesso", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error("User não deletado", {
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

  const logout = () => {
    destroyCookie(null, "motorShop.token", { path: "/" });
    setUserLogged(null);
  };
  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        userLogged,
        setUserLogged,
        logout,
        updateUser,
        updateAdress,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
