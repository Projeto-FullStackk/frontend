import { createContext, useContext, useEffect, useState } from "react";
import { api, apiExternal } from "@/services/api";
import { Car, iAds, iAdsRequest, iCarData } from "@/schemas";
import submit from "@/components/ModalAdsCreate/Form/submit";

interface iKarsContext {
  brands: string[];
  cars: iCarData[];
  getCarsDataAPI: (brand: string) => void;
  createAd: (data: iAdsRequest) => void;
}

interface iKarsProvider {
  children: React.ReactNode;
}

const KarsContext = createContext<iKarsContext>({} as iKarsContext);

export const KarsProvider = ({ children }: iKarsProvider) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [cars, setCars] = useState<iCarData[]>([]);
  const [ads, setAds] = useState<iAds[]>([]);

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
    api.post("/ads", { submit }).then((res) => {
      console.log(res.data);
      setAds(res.data);
    });
  };

  return (
    <KarsContext.Provider value={{ brands, cars, getCarsDataAPI, createAd }}>
      {children}
    </KarsContext.Provider>
  );
};

export const useKarsContext = () => useContext(KarsContext);
