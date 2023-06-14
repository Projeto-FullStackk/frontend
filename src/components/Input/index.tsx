interface iInputProps {
  labelName: string;
  name: string;
  id: string;
  placeholder: string;
  width: string;
}

const Input = ({ labelName, name, id, placeholder, width }: iInputProps) => {
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
              name={name}
              id={id}
              autoComplete="username"
              className={`block ${width} px-4 flex-1 border-0 bg-transparent py-3 font-inter text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
