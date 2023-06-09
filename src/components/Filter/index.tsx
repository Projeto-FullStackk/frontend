import React, { useState } from "react";

import Button from "../Button";
import Modal from "../Modal";
import { useMedia } from "use-media";

interface FilterProps {
  cards: string;
}

const Filter = () => {
  const isWide: boolean = useMedia({ maxWidth: "768px" });

  const contentFilter = () => {
    return (
      <div className="w-full max-w-md ml-5 pl-2 flex flex-col gap-8 ">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Marca</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            <li className="cursor-pointer">General Motors</li>
            <li className="cursor-pointer">General Motors</li>
            <li className="cursor-pointer">General Motors</li>
            <li className="cursor-pointer">General Motors</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Modelo</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Cor</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Ano</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Combustível</h2>
          <ul className="font-medium text-base text-gray-3 ml-1">
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
            <li>General Motors</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Km</h2>
          <div className="flex gap-6">
            <Button
              style="button-grey"
              fullWidth={false}
              size="button-medium"
              type="button"
              onClick={() => {}}
              disabled={false}
            >
              Mínima
            </Button>
            <Button
              style="button-grey"
              fullWidth={false}
              size="button-medium"
              type="button"
              onClick={() => {}}
              disabled={false}
            >
              Máxima
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Preço</h2>
          <div className="flex gap-6">
            <Button
              style="button-grey"
              fullWidth={false}
              size="button-medium"
              type="button"
              onClick={() => {}}
              disabled={false}
            >
              Mínimo
            </Button>
            <Button
              style="button-grey"
              fullWidth={false}
              size="button-medium"
              type="button"
              onClick={() => {}}
              disabled={false}
            >
              Máximo
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {isWide ? (
        <Modal title="Filtros">{contentFilter()}</Modal>
      ) : (
        contentFilter()
      )}
    </>
  );
};

export default Filter;
