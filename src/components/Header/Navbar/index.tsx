import Link from "next/link";
import { Button } from "@/components";

const Navbar = () => {
  return (
    <nav className="w-full py-8 flex flex-col gap-11 md:w-max md:py-3 md:pl-11 md:border-l-2 md:border-gray-6 md:flex-row md:items-center">
      <Link href="/login" className="font-semibold text-base text-gray-2 pointer-events-none">
        Fazer Login
      </Link>

      {/* 📌
        Em ambos Links foram adicionados ao final do className 
        a propriedade pointer-events-none apenas para impedir que façam 
        o evento de REDIRECIONAMENTO para as páginas.
      */}

      <Link href="/register" className="w-full pointer-events-none md:w-max">
        <Button style="button-grey-outline" fullWidth>
          Cadastrar
        </Button>
      </Link>
    </nav>
  )
}

export default Navbar;
