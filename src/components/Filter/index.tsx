import React, { useState } from "react";
import { useMedia } from "use-media";
import { useAppContext } from "@/contexts";
import { Button, Modal } from "@/components";

interface FilterProps {
  cards: string;
}

const Filter = () => {
  const { handleOpenModal } = useAppContext();
  const isWide: boolean = useMedia({ maxWidth: "1024px" });

  const contentFilter = () => {
    return (
      <div className="w-full max-w-[255px]  pl-2 flex flex-col gap-8 py-5">
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
