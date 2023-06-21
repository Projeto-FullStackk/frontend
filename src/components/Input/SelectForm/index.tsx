import { iSelectFormProps } from "../interfaces";

const SelectForm = ({
  id,
  register,
  options,
  placeholder,
  onChange,
  disabled,
}: iSelectFormProps) => {
  return (
    <select
      id={id}
      {...register}
      onChange={onChange}
      disabled={disabled}
      defaultValue={''}
      className="w-full px-4 py-3 border-2 border-gray-7 rounded text-base text-gray-1 outline-none transition-colors placeholder-shown:text-gray-3 hover:bg-gray-8 hover:border-gray-7 focus:bg-white focus:border-brand-1 disabled:bg-gray-8"
    >

      {placeholder && (
        <option value="" disabled>{placeholder}</option>
      )}

      {options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      
    </select>
  )
}

export default SelectForm;
