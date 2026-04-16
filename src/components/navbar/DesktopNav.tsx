"use client"
import React from "react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { PhoneIcon, ContactIcon } from "@/icons";
import MyButton from "@/components/MyComponents/MyButton";
import NavLinks from "./NavLinks";
import Link from "next/link";

interface Props {
  isScrolled: boolean;
  activeSection: string;
  onClick: (id: string) => void;
}
const DesktopNav = ({
  isScrolled,
  activeSection,
  onClick,
}: Props) => {
  return (
    <>
      <NavLinks
        variant="desktop"
        isScrolled={isScrolled}
        activeSection={activeSection}
        onClick={onClick}
      />
      <div className="hidden lg:flex gap-6 items-center">
        <ModeToggle />
        <a href="https://wa.me/923216800902">
        <div  
          className="group flex justify-center items-center gap-1 cursor-pointer">
          <PhoneIcon className="w-5" />
          <span className={`
              ${
            isScrolled ? "group-hover:text-primary" : "group-hover:text-blue-200 dark:group-hover:text-primary "
          } 
            `}>+92 321 6800902</span>
          </div>
          </a>
        
        <div
          className={`w-0.5 h-6 bg-gray-300 ${
            isScrolled ? "bg-secondary-foreground/40" : ""
          }`}
        />
        <Link href="/contact">
        <MyButton
          leftIcon={<ContactIcon className="w-5 h-5" />}
          variant={isScrolled ? "fill" : "solid"}
        >
          Contact us
        </MyButton>
        </Link>
      </div>
    </>
  );
};

export default DesktopNav;
