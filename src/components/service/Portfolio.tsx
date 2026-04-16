"use client";
import React from "react";

import { portfolioCard } from "@/lib/data/servicePageData";
import HeadingTitle from "@/components/MyComponents/HeadingTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
}

function PortfolioCard({ title, image }: Props) {
  return (
    <div className="group relative w-full max-w-118 min-w-72 max-h-116 overflow-hidden rounded-xl cursor-pointer">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        loading="lazy"
        className="object-cover w-full h-full transition-transform duration-400 group-hover:scale-130"
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute w-full h-full bg-linear-to-b from-black/0 to-black/90 top-full  flex flex-col justify-between pl-10 pb-15 group-hover:top-0 duration-300">
        <div className="flex justify-end mt-6 mr-12">
          {/* Icon */}
          <div className="w-14 h-14   bg-gray-100 dark:bg-gray-200  shadow-2xl rounded-full flex items-center justify-center group-hover:animate-[moveX_1.5s_ease-in-out_infinite]">
            <IoIosArrowRoundForward className="w-10 h-10  text-secondary-foreground/90 dark:text-secondary/90" />
          </div>
          <style jsx>{`
            @keyframes moveX {
              0%,
              100% {
                transform: translateX(0px);
              }
              50% {
                transform: translateX(20px);
              }
            }
          `}</style>
        </div>
        {/* Title */}
        <div className="w-fit">
          <p className="text-2xl text-secondary/90 dark:text-secondary-foreground/90 font-bold">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <main className="w-full pt-15 sm:pt-20 lg:pt-30">
      <div className="space-y-10">
        <HeadingTitle
          title="Portfolio"
          description="Explore our collection of innovative projects that highlight our expertise with companies around the world and creative solutions."
          className="max-w-200"
        />
        <AnimatedSection className="w-full max-w-350 min-w-66 mx-auto  grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 text-secondary  ">
          {portfolioCard.map((card, index) => (
            <Link href={card.link} key={card.id}>
              <AnimatedItem
                key={card.id}
                type="slideUp"
                index={index}
                className="flex  justify-center"
              >
                <PortfolioCard title={card.title} image={card.image} />
              </AnimatedItem>
            </Link>
          ))}
        </AnimatedSection>
      </div>
    </main>
  );
}

export default Portfolio;
