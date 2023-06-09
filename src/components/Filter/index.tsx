import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button";
import Modal from "../Modal";

interface FilterProps {
  cards: string;
}

const Filter = () => {
  const [filterIsVisible, setFilterIsVisible] = useState(false);

  return (
    <>
      <div className="w-full max-w-md ml-5 pl-2">
        <div>
          <div>
            <h2 className="font-bold">Marca</h2>
            <ul>
              <li>General Motors</li>
              <li>General Motors</li>
              <li>General Motors</li>
              <li>General Motors</li>
            </ul>
          </div>
          <div>
            <h2>Modelo</h2>
            <ul>
              <li>General Motors</li>
              <li>General Motors</li>
              <li>General Motors</li>
              <li>General Motors</li>
            </ul>
          </div>
          <div>
            <h2>Cor</h2>
            <ul>
              <li>General Motors</li>
              <li>General Motors</li>
              <li>General Motors</li>
              <li>General Motors</li>
            </ul>
          </div>
          <div>
            <h2>Ano</h2>
            <ul>
              <li>General Motors</li>
              <li>General Motors</li>
              <li>General Motors</li>
              <li>General Motors</li>
            </ul>
          </div>
          <div>
            <h2>Combustível</h2>
            <ul>
              <li>General Motors</li>
              <li>General Motors</li>
              <li>General Motors</li>
              <li>General Motors</li>
            </ul>
          </div>
          <div>
            <h2>Km</h2>
            <div>
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
          <div>
            <h2>Preço</h2>
            <div>
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
      </div>
      <Modal title="Filtros"></Modal>
    </>
  );
};

export default Filter;
