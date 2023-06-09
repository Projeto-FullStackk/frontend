import Image from "next/image";
import Button from "../Button";

enum ScreenType {
  Desktop = "desktop",
  Mobile = "mobile",
}
enum NavbarType {
  Default = "def",
  Authenticated = "aut",
  authenticatedUserConfigHover = "autUCH",
}

interface iNavbarProps {
  screenType: "desktop" | "mobile";
  navbarType: "def" | "aut" | "autUCH";
  inicials: string;
  name: string;
}

const Navbar = ({ screenType, navbarType, inicials, name }: iNavbarProps) => {
  if (screenType === ScreenType.Desktop) {
    if (navbarType === NavbarType.Default) {
      return (
        <nav className="flex center h-20 center items-center w-full justify-between pr-16 pl-16 border-b-2 ">
          <Image alt="logo" src="/images/logo.svg" width={153} height={26} />
          <div className=" flex border-l-2 space-x-10 h-20 items-center pl-10">
            <Button style="button-link" size="button-big">
              Fazer Login
            </Button>
            <Button style="button-grey-outline" size="button-medium">
              {" "}
              Cadastrar{" "}
            </Button>
          </div>
        </nav>
      );
    } else if (navbarType === NavbarType.Authenticated) {
      return (
        <nav className="flex center h-20 items-center w-full justify-between pr-16 pl-16 border-b-2 ">
          <Image alt="logo" src="/images/logo.svg" width={153} height={26} />
          <div className=" flex border-l-2 space-x-1 h-20 items-center pl-10">
            <p className="bg-brand-1 rounded-full h-8 w-8 text-center text-white pt-1">
              {inicials}
            </p>
            <p className="font-normal">{name}</p>
          </div>
        </nav>
      );
    }
  } else {
    return (
      <nav className="h-20 border-b-2 flex items-center w-full justify-between pr-4 pl-4 ">
        <Image alt="logo" src="/images/logo.svg" width={153} height={26} />
        <button>
          <Image
            alt="bars"
            src="/images/bars.svg"
            width={16}
            height={21}
            className="m-2.5"
          />
        </button>
      </nav>
    );
  }
};

export default Navbar;
