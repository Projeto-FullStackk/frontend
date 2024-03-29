import Link from "next/link";
import { useRouter } from "next/router";

const Title = () => {
  return (
    <Link href={"/"}>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-0 to-brand-1 hover:text-brand-2 select-none transition-colors">
        Motors <span className="text-base">shop</span>
      </h1>
    </Link>
  );
};

export default Title;
