import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-[#00000080] flex justify-center items-center absolute top-0 left-0 z-[100] select-none">
      <div className="text-brand-2 animate-spin">
        <FaSpinner size={40}/>
      </div>
    </div>
  )
}

export default Loading;
