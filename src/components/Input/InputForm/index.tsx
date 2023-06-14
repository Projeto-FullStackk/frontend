import { iInputProps } from "..";

type iInputFormProps = Pick<
  iInputProps,
  "id" | "type" | "placeholder" | "register" | "value"
>

const InputForm = ({ id, type, placeholder, register, value }: iInputFormProps) => {
  return (
    <input 
      id={id}
      type={type ?? "text"}
      placeholder={placeholder}
      value={value}
      autoComplete="off"
      {...register}
      className="w-full px-4 py-3 border-2 border-gray-7 rounded text-base text-gray-1 outline-none transition-colors placeholder-shown:text-gray-3 hover:bg-gray-8 hover:border-gray-8 focus:bg-white focus:border-brand-1"
    />
  )
}

export default InputForm;
