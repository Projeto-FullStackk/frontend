import { ChangeEvent, useCallback, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adsCreateSchema, iAdsCreate, iAdsRequest } from "@/schemas";
import { useAppContext, useAuth, useKarsContext } from "@/contexts";
import { Button, Input, Loading } from "@/components";
import showError from "./showError";
import refineBodySubmit from "./refineBodySubmit";

const Form = () => {
  const { brands, cars, getCarsDataAPI, createAd } = useKarsContext();
  const { userLogged } = useAuth();
  const { isLoading } = useAppContext();
  const [limitImages, setLimitImages] = useState(0);
  const [disabledNameInput, setDisabledNameInput] = useState(true);
  const [disabledDetailsInput, setDisabledDetailsInput] = useState(true);
  const [yearCar, setYearCar] = useState("");
  const [fuelCar, setFuelCar] = useState("");
  const [priceCar, setPriceCar] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<iAdsCreate>({
    resolver: zodResolver(adsCreateSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const addNewImageInput = () => {
    setLimitImages(limitImages + 1);
    append({ url: "" });
  };

  const removeLastImageInput = () => {
    setLimitImages(limitImages - 1);
    remove(limitImages - 1);
  };

  const handleChangeBrand = (e: ChangeEvent<HTMLSelectElement>) => {
    const brandSelected = e.target.value.toLowerCase();
    getCarsDataAPI(brandSelected);

    return setDisabledNameInput(false);
  };

  const handleChangeNameBrand = (e: ChangeEvent<HTMLSelectElement>) => {
    const nameBrandSelected = e.target.value;

    const { fuel, year, value } = cars.find(
      (car) => car.name === nameBrandSelected
    )!;

    setYearCar(year);

    setFuelCar(fuel === 1 ? "Gasolina" : fuel === 2 ? "Etanol" : "Elétrico");

    setPriceCar(
      value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );

    return setDisabledDetailsInput(false);
  };

  const submit = (formData: iAdsCreate) => {
    const brand = formData.brand.toLowerCase();
    const year = +yearCar;
    const fuel = fuelCar;
    const priceTf = +priceCar.replace(/[^\d,]+/g, "").replace(",", ".");

    const data: iAdsRequest = {
      ...refineBodySubmit(formData),
      brand,
      year,
      fuel,
      priceTf,
      userId: userLogged!.id,
      published: true,
    };

    createAd(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full flex flex-col gap-6"
    >
      <Input
        id="brand"
        as="select"
        label="Marca"
        placeholder="Selecione uma Marca"
        options={brands}
        onChange={handleChangeBrand}
        errorMessage={errors.brand?.message}
        register={register("brand")}
      />

      <Input
        id="name"
        as="select"
        label="Modelo"
        placeholder="Selecione o modelo"
        disabled={disabledNameInput}
        options={cars.map((car) => car.name)}
        onChange={handleChangeNameBrand}
        register={register("name")}
      />

      <div className="w-full flex justify-between items-center gap-3">
        <div className="w-1/2">
          <Input
            id="year"
            as="input"
            type="number"
            label="Ano"
            placeholder="2018"
            disabled={disabledDetailsInput}
            value={yearCar}
            register={register("year")}
          />
        </div>

        <div className="w-1/2">
          <Input
            id="fuel"
            as="input"
            type="text"
            label="Combustível"
            placeholder="Gasolina / Etanol"
            disabled={disabledDetailsInput}
            value={fuelCar}
            register={register("fuel")}
          />
        </div>
      </div>

      <div className="w-full flex justify-between items-center gap-3">
        <div className="w-1/2">
          <Input
            id="km"
            as="input"
            type="number"
            label="Quilometragem"
            placeholder="30.000"
            register={register("km")}
          />
        </div>

        <div className="w-1/2">
          <Input
            id="color"
            as="input"
            type="text"
            label="Cor"
            placeholder="Branco"
            register={register("color")}
          />
        </div>
      </div>

      {errors.km || errors.color
        ? showError("Obrigatório informar os campos de detalhes acima")
        : null}

      <div className="w-full flex justify-between items-center gap-3">
        <div className="w-1/2">
          <Input
            id="pricetf"
            as="input"
            type="text"
            label="Preço tabela FIPE"
            placeholder="R$ 48.000,00"
            value={priceCar}
            disabled={disabledDetailsInput}
            register={register("priceTf")}
          />
        </div>

        <div className="w-1/2">
          <Input
            id="price"
            as="input"
            type="text"
            label="Preço"
            placeholder="R$ 50.000,00"
            register={register("price")}
          />
        </div>
      </div>

      {errors.price && showError(errors.price.message!)}

      <Input
        id="description"
        as="textarea"
        label="Descrição"
        placeholder="Opcional"
        register={register("description")}
        errorMessage={errors.description?.message}
      />
      <div className="flex flex-col gap-2 items-center">
        <div className="w-full flex gap-3 items-center">
          <Input
            id="coverImage"
            as="input"
            type="text"
            label="Imagem de capa"
            placeholder="https://image.com"
            register={register("coverImage")}
            errorMessage={errors.coverImage?.message}
          />
        </div>

        {fields.map((field, index) => {
          return (
            <>
              <div className="w-full flex gap-3 items-center">
                <Input
                  key={field.id}
                  id={field.id}
                  as="input"
                  type="text"
                  label={`${index + 1}° Imagem da galeria`}
                  placeholder="https://image.com"
                  register={register(`images.${index}.url`)}
                />
              </div>
            </>
          );
        })}
      </div>

      <Button
        style="button-brand-opacity"
        size="button-medium"
        onClick={addNewImageInput}
        fullWidth
        disabled={limitImages === 6 ? true : false}
      >
        Adicionar campo para imagem da galeria
      </Button>

      {limitImages > 0 && (
        <Button
          style="button-grey"
          size="button-medium"
          onClick={removeLastImageInput}
          fullWidth
        >
          Remover campo de imagem
        </Button>
      )}

      <div className="w-full flex justify-between gap-2 md:justify-end">
        <div className="w-1/2 min-w-max md:w-max">
          <Button style="button-grey" size="button-medium" fullWidth>
            Cancelar
          </Button>
        </div>

        <div className="w-1/2 min-w-max md:w-max">
          <Button
            style="button-brand"
            type="submit"
            size="button-medium"
            fullWidth
          >
            Criar anúncio
          </Button>
        </div>
      </div>

      {isLoading && <Loading />}
    </form>
  );
};

export default Form;
