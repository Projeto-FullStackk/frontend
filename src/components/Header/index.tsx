import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import useMedia from "use-media";
import { api } from "@/services/api";
import { useAuth } from "@/contexts";
import { fontInter } from "@/styles/font";
import Title from "./Title";
import Navbar from "./Navbar";
import MobileButton from "./MobileButton";

const Header = () => {
  const { setUserLogged } = useAuth();
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const isWide: boolean = useMedia({ maxWidth: "768px" });

  useEffect(() => {
    const cookie = parseCookies();

    const token = cookie["motorShop.token"];

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      api.get("user")
        .then(({ data }) => setUserLogged(data[0]))
        .catch((error) => console.log(error));
    }
    else {
      setUserLogged(null);
    }
  }, []);

  const handleShowNavbar = () => setIsShowNavbar(!isShowNavbar);

  return (
    <header
      className={`${fontInter.className} w-full px-4 py-5 bg-gray-10 border-2 border-gray-6 sticky top-0 left-0 md:py-0 z-40`}
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
