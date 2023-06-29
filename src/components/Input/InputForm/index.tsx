import { iInputFormProps } from "../interfaces";

const InputForm = ({
  id,
  disabled,
  type,
  placeholder,
  register,
  value,
}: iInputFormProps) => {
  return (
    <input
      id={id}
      type={type ?? "text"}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      autoComplete="off"
      {...register}
      className="w-full px-4 py-3 border-2 border-gray-7 rounded text-base text-gray-1 outline-none transition-colors placeholder-shown:text-gray-3 hover:bg-gray-8 hover:border-gray-8 focus:bg-white focus:border-brand-1 disabled:bg-gray-8"
    />
  );
};

export default InputForm;
