import React from "react";
import Image from "next/image";
import MyButton from "@/components/MyComponents/MyButton";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="mt-32 sm:mt-40 lg:sm:mt-45 xl:mt-50 flex justify-center items-center flex-col-reverse lg:flex-row  lg:justify-between gap-5 pb-4 sm:pb-8 xl:pb-15">
      <AnimatedSection
        className="w-full pb-12 sm:pb-20 max-w-138 min-w-80 flex flex-col justify-center items-center  text-center  space-y-5
        sm:w-96 sm:space-y-6
        md:w-125 md:space-y-7
        lg:w-130 lg:justify-start lg:items-start lg:text-left lg:space-y-8 
        xl:w-138 xl:space-y-10"
      >
        <AnimatedItem type="slideLeft" index={0}>
          <Spotlight
            className="top-90 sm:top-120 md:top-120 lg:top-20 xl:top-20   2xl:-top-30 left-0  text-white dark:text-white/90 w-full "
            fill="currentColor"
          />
        </AnimatedItem>
        <div
          className="text-[50px] leading-12 font-semibold flex flex-col  tracking-tight text-secondary dark:text-secondary-foreground 
          sm:text-[80px] sm:leading-18 
          md:text-[90px] md:leading-20 
          lg:text-[80px] lg:leading-18 
          xl:text-[102px] xl:leading-22
          "
        >
          <AnimatedItem type="slideLeft" index={1} className="-ml-1.5">
            Boxel
          </AnimatedItem>
          <AnimatedItem type="slideLeft" index={2}>
            Technology
          </AnimatedItem>
        </div>
        <div
          className="  text-secondary dark:text-secondary-foreground
          text-sm 
           font-extralight
          sm:text-lg  
          md:text-xl"
        >
          <AnimatedItem type="slideLeft" index={3}>
            We are offers 3D modeling, game and product design, web/app
            development. We also help with UI/UX, game development, and social
            media marketing.
          </AnimatedItem>
        </div>
        <div className="flex gap-5">
          <AnimatedItem type="slideUp" index={4}>
            <Link href="/contact">
              <MyButton variant="solid"> Get in touch </MyButton>
            </Link>
          </AnimatedItem>
          <AnimatedItem type="slideUp" index={5}>
            <Link href="/portfolio">
              <MyButton variant="solidOutline"> View detail </MyButton>
            </Link>
          </AnimatedItem>
        </div>
      </AnimatedSection>
      <AnimatedSection className="flex  justify-end items-end">
        <AnimatedItem type="slideRight" index={0}>
          <Image
            src="/other_images/hero_3d.webp"
            alt="3D Model"
            width={2000}
            height={2000}
            priority={true}
            className="object-contain  max-w-190 min-w-80 w-60 sm:w-120 md:w-140 lg:w-140 xl:w-170 2xl:w-190"
          />
        </AnimatedItem>
      </AnimatedSection>
    </div>
  );
}

export default HeroSection;
