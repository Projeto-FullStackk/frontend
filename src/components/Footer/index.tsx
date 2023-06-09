import { MdKeyboardArrowUp } from "react-icons/md";
import { fontInter } from "@/styles/font";

const Footer = () => {
  
  const returnToTop = () => window.scroll(0, 0);

  return (
    <footer className={`${fontInter.className} w-full px-4 py-11 bg-gray-0`}>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-[60px] md:flex-row md:justify-between">
        <p className="font-bold text-2xl text-white">
          Motors <span className="text-base">shop</span>
        </p>

        <p className="font-normal text-sm text-white">
          &copy; 2023 - Todos os direitos reservados.
        </p>

        <button onClick={returnToTop} className="w-[50px] h-[50px] bg-gray-1 rounded text-white flex justify-center items-center">
          <MdKeyboardArrowUp size={24} />
        </button>
      </div>
    </footer>
  )
}

export default Footer;
