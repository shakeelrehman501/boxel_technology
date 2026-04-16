"use client";
import HeadingTitle from "@/components/MyComponents/HeadingTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import { serviceCardsData } from "@/lib/data/servicePageData";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  link:string;
  title: string;
  description: string;
  firstButton?: string;
  secondButton?: string;
  thirdButton?: string;
  className?: string;
}
function ServiceCard({
  image,
  link,
  title,
  description,
  className,
  firstButton = "Get Started",
  secondButton = "Get Started",
  thirdButton = "Get Started",
}: CardProps){
  return (
    <div
          className={`group hover:outline hover:outline-gray-700/10 dark:hover:outline-gray-700 hover:rounded-xl hover:shadow-[0_4px_6px_-2px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.10)] 
             w-full h-full max-w-116 min-w-72 min-h-132  text-secondary-foreground cursor-pointer ${className}  
          `}
        >
          <div className="flex flex-col items-center justify-around h-full ">
            <div className="flex justify-end item-end ">
              <Image
                src={image}
                alt={title}
                width={400}
                height={400}
                loading="lazy"
                className=" w-full max-w-70 h-full max-h-70 min-w-40 bg-white/0 
            object-contain
             transition-all duration-300 ease-in-out
            group-hover:scale-120 
            "
              />
            </div>
            <div
              className="  flex flex-col justify-end px-6 pb-6 rounded-lg transition-all duration-200 
            
            group-hover:border-secondary-foreground/5 "
            >
              <div className="flex flex-col gap-6 justify-between items-center text-center w-full  max-w-110">
                <div className="space-y-3">
                  <h1 className="text-lg font-bold text-secondary-foreground/90 ">
                    {title}
                  </h1>
                  <p className="text-sm text-secondary-foreground/70 pb-5">
                    {description}
                  </p>
                </div>
    
                <div className="text-sm w-full flex flex-wrap justify-center gap-2  ">
                  <button 
                    className="px-5 py-2 bg-transparent border rounded-full text-sm cursor-pointer 
                      hover:bg-secondary-foreground hover:text-secondary
                      hover:border-transparent   transition-all duration-200 ease-in-out  dark:hover:text-secondary"
                  >
                    {firstButton}
                  </button>
                  <button 
                    className="px-5 py-2 bg-transparent border rounded-full text-sm  cursor-pointer
                      hover:bg-secondary-foreground hover:text-secondary
                      hover:border-transparent   transition-all duration-200 ease-in-out  dark:hover:text-secondary"
                  >
                    {secondButton}
                  </button>
                  <button 
                    className="px-5 py-2 bg-transparent border rounded-full text-sm  cursor-pointer
                      hover:bg-secondary-foreground hover:text-secondary
                      hover:border-transparent   transition-all duration-200 ease-in-out  dark:hover:text-secondary"
                  >
                    {thirdButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

function Services() {
  return (
    <div className="pt-15 sm:pt-20 lg:pt-30 space-y-10">
      <HeadingTitle
        title="Services"
        description="We offer a comprehensive suite of digital services to bring your vision to life with precision and creativity."
        className="max-w-200"
      />
      <AnimatedSection className="w-full max-w-350 min-w-66 mx-auto  grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {serviceCardsData.map(
          (card, index) => (
            <Link href={card.link} key={card.id}>
            <AnimatedItem type="slideUp" index={index}>
            <ServiceCard
              {...card}
              className="w-80 h-96"
            />
            </AnimatedItem>
            </Link>
          ),
        )}
      </AnimatedSection>
    </div>
  );
}

export default Services;
