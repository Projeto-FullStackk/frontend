import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { iAdsUpdate } from "@/schemas";
import { adsUpdateSchema } from "@/schemas/ads";
import { useAppContext, useKarsContext } from "@/contexts";
import { Button, Input, Loading } from "@/components";
import showError from "../../ModalAdsCreate/Form/showError";
import refineBodySubmit from "./refineBodySubmit";
import { fontInter } from "@/styles/font";

const Form = () => {
  const { updateAd, deleteAd } = useKarsContext();
  const { isLoading, carUpdate } = useAppContext();
  const [limitImages, setLimitImages] = useState(0);
  const [disabledDetailsInput] = useState(true);
  const [yearCar, setYearCar] = useState("");
  const [fuelCar, setFuelCar] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<iAdsUpdate>({
    resolver: zodResolver(adsUpdateSchema.deepPartial()),
    defaultValues: {
      brand: carUpdate?.brand,
      name: carUpdate?.name,
      fuel: carUpdate?.fuel,
      km: Number(carUpdate?.km),
      color: carUpdate?.color,
      priceTf: carUpdate?.priceTf.toString(),
      price: carUpdate?.price.toString(),
      published: carUpdate?.published ? "verdadeiro" : "falso",
    },
  });
  console.log(errors);
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

  const submit = (formData: iAdsUpdate, event: any) => {
    event.preventDefault();

    if (formData.images && formData.images.length > 0) {
      const data: iAdsUpdate = {
        ...refineBodySubmit(formData),
        coverImage: formData.coverImage
          ? formData.coverImage
          : carUpdate?.coverImage,
        km: formData.km,
        price: formData.price,
        published: formData.published
          ? formData.published
          : carUpdate?.published,
      };

      updateAd(data);
    }
    else {
      const data: iAdsUpdate = {
        coverImage: formData.coverImage
          ? formData.coverImage
          : carUpdate?.coverImage,
        km: formData.km,
        price: formData.price,
        published: formData.published ? formData.published : carUpdate?.published,
      };
  
      updateAd(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full flex flex-col gap-6"
    >
      <Input
        id="brand"
        as="input"
        label="Marca"
        placeholder={carUpdate?.brand}
        disabled={true}
        errorMessage={errors.brand?.message}
        register={register("brand")}
      />

      <Input
        id="name"
        as="input"
        label="Modelo"
        placeholder={carUpdate?.name}
        disabled={true}
        errorMessage={errors.name?.message}
        register={register("name")}
      />

      <div className="w-full flex justify-between items-center gap-3">
        <div className="w-1/2">
          <Input
            id="year"
            as="input"
            type="number"
            label="Ano"
            placeholder={String(carUpdate?.year)}
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
            placeholder={carUpdate!.km}
            register={register("km")}
          />
        </div>

        <div className="w-1/2">
          <Input
            id="color"
            as="input"
            type="text"
            label="Cor"
            placeholder={carUpdate!.color}
            disabled={disabledDetailsInput}
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
            placeholder={`R$ 48.000,00`}
            value={carUpdate?.priceTf}
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
            placeholder={String(carUpdate!.price)}
            register={register("price")}
          />
        </div>
      </div>

      {errors.price && showError(errors.price.message!)}

      <label>Publicado </label>
      <div className="flex gap-2.5">
        <label
          className={`${fontInter.className} cursor-pointer text-center w-full button-brand h-max rounded-[0.25rem] font-semibold transition-colors button-medium`}
        >
          Sim{" "}
          <input
            type="radio"
            className="hidden"
            value={"verdadeiro"}
            {...register("published")}
          />
        </label>

        <label
          className={`${fontInter.className} cursor-pointer text-center w-full button-grey h-max rounded-[0.25rem] font-semibold transition-colors button-medium`}
        >
          Não{" "}
          <input
            type="radio"
            className="hidden"
            value={"falso"}
            {...register("published")}
          />
        </label>
      </div>

      <Input
        id="coverImage"
        as="input"
        type="text"
        label="Imagem de capa"
        placeholder="https://image.com"
        register={register("coverImage")}
        errorMessage={errors.coverImage?.message}
      />

      {fields.map((field, index) => {
        return (
          <Input
            key={field.id}
            id={field.id}
            as="input"
            type="text"
            label={`${index + 1}° Imagem da galeria`}
            placeholder="https://image.com"
            register={register(`images.${index}.url`)}
          />
        );
      })}

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
          <Button
            style="button-grey"
            size="button-medium"
            fullWidth
            onClick={() => deleteAd()}
          >
            Excluir Anúncio
          </Button>
        </div>

        <div className="w-1/2 min-w-max md:w-max">
          <Button
            style="button-brand"
            type="submit"
            size="button-medium"
            fullWidth
          >
            Salvar alterações
          </Button>
        </div>
      </div>

      {isLoading && <Loading />}
    </form>
  );
};

export default Form;
