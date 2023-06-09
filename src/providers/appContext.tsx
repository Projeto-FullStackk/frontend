import { createContext, useContext, useState } from "react";

interface AppContextInterface {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

interface iAppProvider {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export const AppProvider = ({ children }: iAppProvider) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ open, setOpen, handleOpenModal, handleCloseModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
