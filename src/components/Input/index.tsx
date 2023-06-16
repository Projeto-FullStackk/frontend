import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";
import SelectForm from "./SelectForm";
import { iInputProps } from "./interfaces";

const Input = ({
  as,
  id,
  label,
  register,
  disabled,
  errorMessage,
  onChange,
  options,
  placeholder,
  type,
  value,
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
            disabled={disabled}
            register={register}
          />
        )
      }

      {
        as === "textarea" && (
          <TextareaForm
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            register={register}
          />
        )
      }

      {
        as === "select" && (
          <SelectForm
            id={id}
            placeholder={placeholder}
            options={options}
            disabled={disabled}
            onChange={onChange}
            register={register}
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
