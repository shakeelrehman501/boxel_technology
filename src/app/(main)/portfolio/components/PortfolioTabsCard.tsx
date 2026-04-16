"use client";
import { useState } from "react";
import { CardType } from "@/lib/data/portfolioPageData";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

interface Props {
  card: CardType;
  activeTab: string;
}
function PortfolioTabsCard({ card, activeTab }: Props) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Link
        href={{
          pathname: `/portfolio/${card.slug}`,
          query: { active_section: activeTab }, // 👈 active tab yahan bhej do
        }}
      >
        <div
          className={`group mx-auto w-full max-w-118 min-w-72 max-h-116 overflow-hidden rounded-xl cursor-pointer`}
        >
          <div className="relative w-full h-full">
            {/* Skeleton */}
            {loading && (
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
            )}

            {/* Image */}
            <Image
              src={card.thumbnail}
              alt=""
              width={400}
              height={400}
              loading="lazy"
              onLoadingComplete={() => setLoading(false)}
              className={`object-cover w-full h-full transition-all duration-500 group-hover:scale-130 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Animated Gradient Overlay */}
            <div className="absolute w-full h-full bg-linear-to-b from-black/0 to-black/90   flex flex-col justify-between group-hover:top-0 top-full duration-300">
              {/* Icon */}

              <div className="absolute bottom-10 right-15 w-14 h-14 bg-gray-200 shadow-2xl dark:bg-gray-300 rounded-full flex items-center justify-center group-hover:animate-[moveX_1.5s_ease-in-out_infinite]">
                <IoIosArrowRoundForward className="w-10 h-10 text-secondary-foreground/90 dark:text-secondary/90 " />
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
              {/* Title */}
              <div className="w-fit">
                <p className="text-2xl dark:text-secondary-foreground font-bold"></p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PortfolioTabsCard;
