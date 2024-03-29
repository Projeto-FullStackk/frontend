import React, { useState, useEffect } from "react";
import { useMedia } from "use-media";
import { useAppContext } from "@/contexts";
import { Button, Modal } from "@/components";
import { useRouter } from "next/router";
import { iFilter } from "@/schemas";

interface FilterProps {
  filters: iFilter;
}

const Filter = ({ filters }: FilterProps) => {
  const { handleOpenModal, handleCloseModal } = useAppContext();
  const isWide: boolean = useMedia({ maxWidth: "1024px" });
  const router = useRouter();

  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [fuels, setFuels] = useState<string[]>([]);

  const transformCapitalize = (word: string): string => {
    const firstWord = word.split(" ")[0];
    if (firstWord) {
      const firstLetterUpperCase = firstWord[0].toLocaleUpperCase();
      return firstLetterUpperCase + firstWord.slice(1);
    } else {
      return "";
    }
  };

  useEffect(() => {
    const { allBrands, allModels, allYears, allFuels, allColors } = filters;

    setBrands(allBrands.map((brand) => transformCapitalize(brand)));
    setModels(allModels.map((model) => transformCapitalize(model)));
    setYears(allYears);
    setFuels(allFuels.map((fuel) => transformCapitalize(fuel)));
    setColors(allColors);
  }, [filters]);

  const handleFilter = (key: string, value: string | number, reset = false) => {
    const newQuery = reset
      ? { [key]: value, page: 1 }
      : { ...router.query, [key]: value, page: 1 };
    router.push(
      {
        pathname: "/",
        query: newQuery,
      },
      undefined,
      { shallow: true }
    );
  };
  const handleClearFilters = () => {
    router.push(
      {
        pathname: "/",
        query: {},
      },
      undefined,
      { shallow: true }
    );
  };

  const contentFilter = () => {
    return (
      <div className="w-full max-w-[255px]  pl-2 flex flex-col gap-8 py-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Marca</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            {brands.map((brand) => (
              <li
                key={brand}
                className="cursor-pointer"
                onClick={() => handleFilter("brand", brand, true)}
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Modelo</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            {models.map((model) => (
              <li
                key={model}
                className="cursor-pointer"
                onClick={() => handleFilter("model", model)}
              >
                {model}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Cor</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            {colors.map((color) => (
              <li
                key={color}
                className="cursor-pointer"
                onClick={() => handleFilter("color", color)}
              >
                {color}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Ano</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            {years.map((year) => (
              <li
                key={year}
                className="cursor-pointer"
                onClick={() => handleFilter("year", year)}
              >
                {year}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Combustível</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            {fuels.map((fuel) => (
              <li
                key={fuel}
                className="cursor-pointer"
                onClick={() => handleFilter("fuel", fuel)}
              >
                {fuel}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Km</h2>
          <div className="flex gap-6">
            <input
              onBlur={(e) => handleFilter("minKm", e.target.value)}
              type="number"
              id="min-km"
              placeholder="Mínima"
              className="w-full bg-[#CED4DA] px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#868E96] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <input
              onBlur={(e) => handleFilter("maxKm", e.target.value)}
              type="number"
              id="max-km"
              placeholder="Máxima"
              className="w-full bg-[#CED4DA] px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#868E96] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Preço</h2>
          <div className="flex gap-6">
            <input
              onBlur={(e) => handleFilter("minPrice", e.target.value)}
              type="number"
              id="min-price"
              placeholder="Mínimo"
              className="w-full bg-[#CED4DA] px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#868E96] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <input
              onBlur={(e) => handleFilter("maxPrice", e.target.value)}
              type="number"
              id="max-price"
              placeholder="Máximo"
              className="w-full bg-[#CED4DA] px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#868E96] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {Object.keys(router.query).length > 0 && (
          <Button
            style="button-brand"
            fullWidth={true}
            onClick={handleClearFilters}
          >
            Limpar Filtros
          </Button>
        )}
        {isWide ? (
          <div className="w-full max-w-[279px] flex items-center justify-center">
            <Button
              style="button-brand"
              fullWidth={true}
              onClick={handleCloseModal}
            >
              Ver Anúncios
            </Button>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      {isWide ? (
        <>
          <div className="w-full max-w-[279px] flex items-center justify-center">
            <Button
              style="button-brand"
              fullWidth={true}
              onClick={handleOpenModal}
            >
              Filtros
            </Button>
          </div>
          <Modal title="Filtros">{contentFilter()}</Modal>
        </>
      ) : (
        contentFilter()
      )}
    </>
  );
};

export default Filter;
