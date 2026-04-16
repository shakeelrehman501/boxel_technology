import Image from "next/image";
import { feedbackCardItems } from "@/lib/data/servicePageData"
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

interface Props {
  CarouselContent: React.ElementType;
  CarouselItem: React.ElementType;
  active: number;
}

function FeedbackCard({ CarouselContent, CarouselItem, active }: Props) {
  return (
    <>
    <CarouselContent className="flex items-center  my-10 mx-3  ">
      {feedbackCardItems.map((item, index) => {
        const isActive = index === active;
        return (
          <CarouselItem
            key={index}
            className="basis-[80%] px-4 
                  sm:px-6
                  md:basis-[55%] md:px-7
                  lg:basis-[50%] lg:px-8 
                  xl:basis-[40%]  
                  2xl:basis-[30%]  
                  "
          >
            <Card
              className={`relative transition-all duration-300 cursor-grab
                    ${isActive ? "scale-110 shadow-xl" : "opacity-90"}
                      text-xs w-full  p-4 flex 
                      sm:text-sm sm:p-5
                      lg:text-[16px] lg:p-6
                    `}
            >
              {isActive && (
                <>
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-secondary-foreground/50" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-secondary-foreground/50" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-secondary-foreground/50" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-secondary-foreground/50" />
                </>
              )}

              <CardContent className="p-0">
                <div className="space-y-8">
                  <div>
                    <h1 className="">{item.review}</h1>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 sm:gap-4 justify-center items-center">
                      <div className="w-5 h-5 p-4 bg-red-300 text-black rounded-full flex justify-center items-center">
                        <h1 className="font-semibold">{item.firstCharacter}</h1>
                      </div>
                        <div className="space-y-0.5">
                          <h1
                            className="font-semibold text-xs 
                            sm:text-[16px]">
                            {item.name}
                          </h1>
                        </div>          
                    </div>
                    <div className="">
                      <Image
                        src="/other_images/ReviewStar.png"
                        width={400}
                        height={400}
                        alt="Star"
                        loading="lazy"
                        className="w-14
                          sm:w-20
                          md:w-24
                          lg:w-30
                          xl:w-36
                          object-contain"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        );
      })}
       
    </CarouselContent>
    <AnimatedItem type="scale" index={0}>
      <div className="w-full max-w-fit mx-auto mt-6 md:mt-12">
        <a 
  href="https://www.trustpilot.com/review/boxeltechnology.com?utm_medium=trustbox&amp;utm_source=TrustBoxReviewCollector" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex  items-center px-4 py-3 text-[12px] sm:text-[14px] xl:text-[16px] sm:px-6 sm:py-4 gap-2 border bg-[#00AE74] hover:bg-[#00AE74]/90 text-white hover:scale-105   font-semibold  rounded-lg shadow-lg transition-all duration-300"
>
  <span>Review us on</span> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M12 2l2.9 6.9L22 9.3l-5 4.8 1.5 7L12 17.8 5.5 21l1.5-7-5-4.8 7.1-.4L12 2z"/>
  </svg>
     <span>Trustpilot</span>
</a>
      </div>
    </AnimatedItem>
    </>
  );
}

export default FeedbackCard;
