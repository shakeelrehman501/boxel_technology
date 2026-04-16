"use client";

import { useState } from "react";
import { Logo } from "@/icons";
import DesktopNav from "./DesktopNav";
import LaptopNav from "./LaptopNav";
import MobileNav from "./MobileNav";
import SideBar from "./SideBar";
import { useScroll } from "@/hooks/useScroll"; // import custom hook
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isScrolled = useScroll(50); // hook returns boolean

  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatedSection>
      <header className="w-full">
        <AnimatedItem type="fade" index={0} className="fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out">
          <div
            className={`max-w-350 w-full mx-auto flex justify-between items-center  
       ${
         isScrolled
           ? "bg-secondary dark:bg-[#172023] text-secondary-foreground py-2 sm:py-0 pl-6 sm:pl-8 pr-3  rounded-full shadow-xl outline outline-gray-200 dark:outline-none  translate-y-4 scale-98 2xl:scale-100 transition-all duration-400 ease-in-out "
           : "px-6 md:px-3 2xl:px-0 text-primary-foreground  transition-all duration-400 ease-in-out   sm:py-5 pt-4 sm:pt-3 "
       }`}
          >
            {/* Logo */}
            <Link href='/'>
            <Logo
            onClick={handleClick}
              className={`w-24 sm:w-28 2xl:w-32 cursor-pointer ${
                isScrolled
                  ? "text-primary dark:text-primary-foreground"
                  : "text-primary-foreground"
              }`}
            />
            </Link>
            {/* Desktop Navbar */}
            <DesktopNav
              isScrolled={isScrolled}
              activeSection={activeSection}
              onClick={setActiveSection}
            />

            {/* Laptop / Tablet */}
            <LaptopNav
              isScrolled={isScrolled}
              setIsOpen={setIsOpen}/>

            {/* Mobile */}
            <MobileNav 
            isScrolled={isScrolled} 
            setIsOpen={setIsOpen} />
          </div>
        </AnimatedItem>
      </header>
      </AnimatedSection>

      {/* Sidebar */}
      <SideBar
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        activeSection={activeSection}
        setActive={setActiveSection}
      />
      
    </>
  );
};

export default Navbar;
