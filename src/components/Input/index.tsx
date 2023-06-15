import { UseFormRegisterReturn } from "react-hook-form";
import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";
import SelectForm from "./SelectForm";
import { KeyboardEventHandler } from "react";

export interface iInputProps {
  as: "input" | "textarea" | "select";
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  type?: "text" | "email" | "password" | "date" | "tel" | "number";
  value?: string;
  options?: string[];
}

const Input = ({
  as,
  id,
  label,
  placeholder,
  register,
  errorMessage,
  type,
  value,
  options,
}: iInputProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={id} className="font-medium text-sm text-gray-1">
        {label}
      </label>

      {as === "input" && (
        <InputForm
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          register={register}
        />
      )}

      {as === "textarea" && (
        <TextareaForm id={id} placeholder={placeholder} register={register} />
      )}

      {as === "select" && (
        <SelectForm id={id} register={register} options={options} />
      )}

      {errorMessage && (
        <span className="font-normal text-xs text-feedback-alert1">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

interface inputProps {
  labelName: string;
  id: string;
  placeholder: string;
  width: string;
  register: UseFormRegisterReturn;
  eventFunction?: KeyboardEventHandler<HTMLInputElement>;
}

const AuthInput = ({
  labelName,
  id,
  placeholder,
  width,
  register,
  eventFunction,
}: inputProps) => {
  return (
    <div className="flex flex-col gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-4">
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900 font-inter"
        >
          {labelName}
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="text"
              id={id}
              autoComplete="username"
              className={`block ${width} px-4 flex-1 border-0 bg-transparent py-3 font-inter text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
              placeholder={placeholder}
              {...register}
              onKeyDown={eventFunction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Input, AuthInput };
