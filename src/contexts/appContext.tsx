import { useRouter } from "next/router";
import { NextRequest } from "next/server";
import { createContext, useContext, useState } from "react";
import { Car } from "@/schemas";

interface AppContextInterface {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
  modalType: string;
  setModalType: (str: string) => void;
  carUpdate: Car | undefined;
  setCarUpdate: (obj: Car) => void;
}

interface iAppProvider {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export const AppProvider = ({ children }: iAppProvider) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalType, setModalType] = useState<string>("");
  const [carUpdate, setCarUpdate] = useState<Car>();
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        open,
        setOpen,
        handleOpenModal,
        handleCloseModal,
        isLoading,
        setIsLoading,
        modalType,
        setModalType,
        carUpdate,
        setCarUpdate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
