import React, { useState, useEffect } from "react";
import { useMedia } from "use-media";
import { useAppContext } from "@/contexts";
import { Button, Modal } from "@/components";
import { Car } from "@/schemas";

interface FilterProps {
  cars: Car[];
}

const Filter = ({ cars }: FilterProps) => {
  const { handleOpenModal, handleCloseModal } = useAppContext();
  const isWide: boolean = useMedia({ maxWidth: "1024px" });

  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [fuels, setFuels] = useState<string[]>([]);

  useEffect(() => {
    const uniqueBrands = cars
      .map((car) => car.brand)
      .filter((brand, index, array) => array.indexOf(brand) === index);
    setBrands(uniqueBrands);

    const uniqueModels = cars
      .map((car) => car.name)
      .filter((model, index, array) => array.indexOf(model) === index);
    setModels(uniqueModels);

    const uniqueColors = cars
      .map((car) => car.color)
      .filter((color, index, array) => array.indexOf(color) === index);
    setColors(uniqueColors);

    const uniqueYears = cars
      .map((car) => car.year)
      .filter((year, index, array) => array.indexOf(year) === index);
    setYears(uniqueYears);

    const uniqueFuels = cars
      .map((car) => car.fuel)
      .filter((fuel, index, array) => array.indexOf(fuel) === index);
    setFuels(uniqueFuels);
  }, [cars]);

  const contentFilter = () => {
    return (
      <div className="w-full max-w-[255px]  pl-2 flex flex-col gap-8 py-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Marca</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            {brands.map((brand) => (
              <li key={brand} className="cursor-pointer">
                {brand}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Modelo</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            {models.map((model) => (
              <li key={model} className="cursor-pointer">
                {model}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Cor</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            {colors.map((color) => (
              <li key={color} className="cursor-pointer">
                {color}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Ano</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            {years.map((year) => (
              <li key={year} className="cursor-pointer">
                {year}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Combustível</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            {fuels.map((fuel) => (
              <li key={fuel} className="cursor-pointer">
                {fuel}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Km</h2>
          <div className="flex gap-6">
            <input
              type="number"
              id="min-km"
              placeholder="Mínima"
              className="w-full bg-[#CED4DA] px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#868E96] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <input
              type="number"
              id="min-km"
              placeholder="Máxima"
              className="w-full bg-[#CED4DA] px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#868E96] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Preço</h2>
          <div className="flex gap-6">
            <input
              type="number"
              id="min-km"
              placeholder="Mínimo"
              className="w-full bg-[#CED4DA] px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#868E96] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <input
              type="number"
              id="min-km"
              placeholder="Máximo"
              className="w-full bg-[#CED4DA] px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#868E96] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
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
