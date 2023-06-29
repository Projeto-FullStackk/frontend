import { fontInter } from "@/styles/font";

interface iButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button" | undefined;
  size?: "button-big" | "button-medium" | undefined;
  fullWidth?: boolean | undefined;
  disabled?: boolean | undefined;
  onClick?: () => void | undefined;
  style:
    | "button-brand"
    | "button-brand-opacity"
    | "button-brand-outline"
    | "button-black"
    | "button-black-outline"
    | "button-grey"
    | "button-grey-outline"
    | "button-white"
    | "button-white-outline"
    | "button-link"
    | "button-alert"
    | "button-sucess";
}

const Button = ({
  children,
  style,
  fullWidth,
  disabled,
  onClick,
  size,
  type,
}: iButtonProps) => {
  const buttonWidth = fullWidth ? "w-full" : "w-max";

  return (
    <button
      type={type ?? "button"}
      disabled={disabled ?? false}
      onClick={onClick ?? undefined}
      className={`${fontInter.className} ${buttonWidth} ${style} h-max rounded-[0.25rem] font-semibold transition-colors ${
        size ?? "button-big"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
