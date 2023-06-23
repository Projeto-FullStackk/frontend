import { useRouter } from "next/router";
import { NextRequest } from "next/server";
import { createContext, useContext, useState } from "react";

interface InitialUrlValues {
  brand: string | string[];
  model: string | string[];
  color: string | string[];
  year: string | string[];
  fuel: string | string[];
  minKm: string | string[];
  maxKm: string | string[];
  minPrice: string | string[];
  maxPrice: string | string[];
}

interface AppContextInterface {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
  initialUrlValues: InitialUrlValues;
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

  const router = useRouter();
  const [initialUrlValues] = useState({
    brand: router.query.brand || "all",
    model: router.query.model || "all",
    color: router.query.color || "all",
    year: router.query.year || "all",
    fuel: router.query.fuel || "all",
    minKm: router.query.minKm || "all",
    maxKm: router.query.maxKm || "all",
    minPrice: router.query.minPrice || "all",
    maxPrice: router.query.maxPrice || "all",
  });
  console.log(initialUrlValues);
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
        initialUrlValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
