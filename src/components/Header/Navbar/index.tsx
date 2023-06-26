import Link from "next/link";
import { Button } from "@/components";
import { useAuth } from "@/contexts";
import { useCallback, useState } from "react";
import { Router, useRouter } from "next/router";

const Navbar = () => {
  const { userLogged, logout } = useAuth();
  const [meuDropOpen, setMenuDropOpen] = useState(false);
  const router = useRouter();
  let initials = "";
  if (userLogged && userLogged.name) {
    const names = userLogged.name.split(" ");
    initials = names[0][0] + names[1][0];
  }
  const toggleMenuDropDown = useCallback(() => {
    setMenuDropOpen((curr) => !curr);
  }, []);
  return (
    <nav className="w-full py-8 flex flex-col gap-11 md:w-max md:py-3 md:pl-11 md:border-l-2 md:border-gray-6 md:flex-row md:items-center">
      {userLogged ? (
        <div
          onClick={toggleMenuDropDown}
          className="group relative w-full h-full flex justify-center items-center gap-2"
        >
          <div
            className={`
            cursor-pointer
            group/item
            w-6
            h-6
            lg:w-10
            lg:h-10
            border-brand-1
            border-2
            rounded-full
            flex
            justify-center
            items-center
            transition
            text-white
            group-hover:border-neutral-400
            bg-brand-1
          `}
          >
            {initials}
          </div>
          <div
            className="
            cursor-pointer
            group/item
            text-gray-2
            transition
            group-hover:text-gray-3
            "
          >
            {userLogged?.name}
          </div>
          {meuDropOpen ? (
            <div className="bg-gray-9 shadow-custom w-48 absolute left-0 top-10 p-5 rounded-lg flex flex-col gap-3  justify-start items-start">
              <button
                type="button"
                className="text-base font-normal text-gray-2 transition  hover:text-gray-3 hover:underline"
              >
                Editar Perfil
              </button>
              <button
                type="button"
                className="text-base font-normal text-gray-2 transition  hover:text-gray-3 hover:underline"
              >
                Editar Endereço
              </button>
              {userLogged?.isSeller ? (
                <button
                  type="button"
                  className="text-base font-normal text-gray-2 transition  hover:text-gray-3 hover:underline"
                  onClick={() => router.push(`/profile/${userLogged?.id}`)}
                >
                  Meus Anúncios
                </button>
              ) : null}

              <button
                onClick={logout}
                type="button"
                className="text-base font-normal text-gray-2 transition  hover:text-gray-3 hover:underline"
              >
                Sair
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <>
          <Link
            href="/login"
            className="font-semibold text-base text-gray-2 cursor-pointer"
          >
            Fazer Login
          </Link>

          <Link href="/register" className="w-full cursor-pointer md:w-max">
            <Button style="button-grey-outline" fullWidth>
              Cadastrar
            </Button>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
