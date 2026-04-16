import React from 'react'
import { TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import Image from "next/image";

function ContactInformation() {
  return (
    <AnimatedSection>
      <div className="relative  w-full  min-w-70 max-w-120 h-120">
          <Image
            src="/other_images/team.webp"
            alt=""
            width={300}
            height={300}
            loading='lazy'
            className="rounded-2xl brightness-50   w-full h-full object-cover object-center
        "
          />
          <AnimatedItem type='slideLeft' index={0} className="absolute top-8 left-6 lg:top-12 lg:left-12 flex flex-col gap-2 pr-4">
          <h5 className="text-2xl font-semibold tracking-tight text-white">
              Contact information
          </h5>
          <p className="text-sm sm:text-normal text-white/80">
            Were here to answer any questions you may have about our services or process
          </p>
          </AnimatedItem>
          <div className="absolute bottom-8 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-3 sm:gap-5 text-white
          
          ">
            <a className="w-fit" href="https://wa.me/923216800902">
              <AnimatedItem type='slideLeft' index={1} className="flex items-center gap-4 group w-fit">
                <FaPhone className='text-lg sm:text-2xl'/>
                <p className="text-sm sm:text-xl font-light group-hover:text-primary">+92 321 6800902</p>
              </AnimatedItem>
            </a>
            <a className="w-fit" href="mailto:jamil@boxeltechnology.com">
              <AnimatedItem type='slideLeft' index={2} className="flex items-center gap-4 group w-fit">
                <TbMailFilled className='text-2xl'/>
                <p className="text-sm sm:text-xl font-light group-hover:text-primary pr-4">jamil@boxeltechnology.com</p>
              </AnimatedItem>
            </a>
            <a className="w-fit" href="https://www.google.com/maps/place/Boxel+Technology/@30.5374615,72.1293627,17z/data=!3m1!4b1!4m6!3m5!1s0x392351004c78a97d:0x87bd099ffe169247!8m2!3d30.5374569!4d72.1319376!16s%2Fg%2F11xcfksbgs?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D">
              <AnimatedItem type='slideLeft' index={3} className="flex items-center gap-4 group w-fit">
                <FaLocationDot className='text-2xl'/>
                <p className="text-sm sm:text-xl group-hover:text-primary pr-5 font-light">Abdul Hakīm Trade Center, Punjab, Pakistan</p>
              </AnimatedItem>
            </a>
          </div>
        </div>
    </AnimatedSection>
  )
}

export default ContactInformation
