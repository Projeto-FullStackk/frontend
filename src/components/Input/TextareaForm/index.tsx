import { iTextareaFormProps } from "../interfaces";

const TextareaForm = ({
  id,
  disabled,
  placeholder,
  register,
}: iTextareaFormProps) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      autoComplete="off"
      {...register}
      className="w-full h-20 px-4 py-3 border-2 border-gray-7 rounded text-base text-gray-1 outline-none resize-none transition-colors placeholder-shown:text-gray-3 hover:bg-gray-8 hover:border-gray-7 focus:bg-white focus:border-brand-1"
    >
    </textarea>
  )
}

export default TextareaForm;
