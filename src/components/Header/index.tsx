import { useState } from "react";
import useMedia from "use-media";
import { fontInter } from "@/styles/font";
import Title from "./Title";
import MobileButton from "./MobileButton";
import Navbar from "./Navbar";

const Header = () => {
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const isWide: boolean = useMedia({ maxWidth: "768px" });

  const handleShowNavbar = () => setIsShowNavbar(!isShowNavbar);

  return (
    <header
      className={`${fontInter.className} w-full px-4 py-5 bg-gray-10 border-2 border-gray-6 sticky top-0 left-0 md:py-0 z-50`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <Title />

        {isWide && (
          <MobileButton
            isShowNavbar={isShowNavbar}
            onClick={handleShowNavbar}
          />
        )}

        {isWide ? isShowNavbar && <Navbar /> : <Navbar />}
      </div>
    </header>
  );
};

export default Header;
