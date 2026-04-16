

import { FiMenu } from "react-icons/fi";
import { ModeToggle } from "@/components/ui/ModeToggle";
import MyButton from "@/components/MyComponents/MyButton";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolled: boolean
}
const MobileNav = ({
  setIsOpen, 
  isScrolled
}: Props) => {
  return (
    <div className="sm:hidden flex justify-center items-center gap-5 py-2">
            <ModeToggle />
            <MyButton
              onClick={() => setIsOpen(true)}
              variant={isScrolled ? "fillIcon" : "solidIcon"}
            >
              <FiMenu className="w-5 h-5" />
            </MyButton>
          </div>
  )
}

export default MobileNav
