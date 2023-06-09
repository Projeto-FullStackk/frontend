import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Button } from "@/components";

interface iMobileButtonProps {
  onClick: () => void
  isShowNavbar: boolean
}

const MobileButton = ({ onClick, isShowNavbar }: iMobileButtonProps) => {
  return (
    <Button style="button-white" size="button-medium" onClick={onClick}>
      {isShowNavbar ? <MdClose /> : <FaBars />}
    </Button>
  )
}

export default MobileButton;
