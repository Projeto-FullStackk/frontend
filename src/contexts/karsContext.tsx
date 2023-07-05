import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { api, apiExternal } from "@/services/api";
import { iAdsRequest, iAdsUpdate, iCarData } from "@/schemas";
import { useAppContext } from "@/contexts";
import { Ad } from "./AuthContext";

interface iKarsContext {
  brands: string[];
  cars: iCarData[];
  getCarsDataAPI: (brand: string) => void;
  createAd: (data: iAdsRequest) => void;
  updateAd: (data: iAdsUpdate) => void;
  deleteAd: () => void;
  ads: Ad[];
  setAds: (ads: Ad[]) => void;
}

interface iKarsProvider {
  children: React.ReactNode;
}

const KarsContext = createContext<iKarsContext>({} as iKarsContext);

export const KarsProvider = ({ children }: iKarsProvider) => {
  const { handleCloseModal, setIsLoading, carUpdate } = useAppContext();
  const [brands, setBrands] = useState<string[]>([]);
  const [cars, setCars] = useState<iCarData[]>([]);
  const [ads, setAds] = useState<Ad[]>([]);
  const route = useRouter();

  useEffect(() => {
    apiExternal.get("/cars").then((res) => {
      const allBrands = [];

      for (const key in res.data) {
        const keyCapitalized = key
          .split(" ")
          .map((word) => word[0].toUpperCase().concat(word.slice(1)))
          .join(" ");

        allBrands.push(keyCapitalized);
      }

      setBrands(allBrands);
    });
  }, []);

  const getCarsDataAPI = (brand: string) => {
    apiExternal
      .get<iCarData[]>(`/cars?brand=${brand}`)
      .then((res) => setCars(res.data));
  };

  const createAd = (data: iAdsRequest) => {
    setIsLoading(true);
    api
      .post("/ads", data)
      .then((res) => {
        setAds([...ads, res.data]);
        handleCloseModal();
        toast.success("Anuncio criado com sucesso");
        route.replace(route.asPath);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível criar um anuncio!");
      })
      .finally(() => setIsLoading(false));
  };
  const updateAd = (data: iAdsUpdate) => {
    setIsLoading(true);

    api
      .patch(`/ads/${carUpdate?.id}`, data)
      .then((res) => {
        console.log(res.data);
        setAds([...ads, res.data]);
        handleCloseModal();
        toast.success("Anuncio editado com sucesso");
        route.replace(route.asPath);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível editar um anuncio!");
      })
      .finally(() => setIsLoading(false));
  };

  const deleteAd = () => {
    api
      .delete(`ads/${carUpdate?.id}`)
      .then(() => {
        toast.success("Deletado com sucesso");

        route.replace(route.asPath);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Anúncio não deletado");
      });
  };

  return (
    <KarsContext.Provider
      value={{
        brands,
        cars,
        getCarsDataAPI,
        createAd,
        updateAd,
        deleteAd,
        ads,
        setAds,
      }}
    >
      {children}
    </KarsContext.Provider>
  );
};

export const useKarsContext = () => useContext(KarsContext);
