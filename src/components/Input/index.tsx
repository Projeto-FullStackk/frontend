import { UseFormRegisterReturn } from "react-hook-form";
import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";
import SelectForm from "./SelectForm";

export interface iInputProps {
  as: "input" | "textarea" | "select"
  id: string
  label: string
  placeholder: string
  register: UseFormRegisterReturn
  errorMessage?: string
  type?: "text" | "email" | "password" | "date" | "tel" | "number"
  value?: string
  options?: string[]
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

      {
        as === "input" && (
          <InputForm
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            register={register}
          />
        )
      }

      {
        as === "textarea" && (
          <TextareaForm
            id={id}
            placeholder={placeholder}
            register={register}
          />
        )
      }

      {
        as === "select" && (
          <SelectForm
            id={id}
            register={register}
            options={options}
          />
        )
      }

      {
        errorMessage && (
          <span className="font-normal text-xs text-feedback-alert1">
            {errorMessage}
          </span>
        )
      }
    </div>
  )
}

export default Input;
