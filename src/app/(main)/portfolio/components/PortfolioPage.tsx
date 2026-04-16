
"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PortfolioTabsCard from "./PortfolioTabsCard";
import Tabs from "./Tabs";
import { cardsData } from "@/lib/data/portfolioPageData";
import { CategoryType } from "@/lib/data/portfolioPageData";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

function Portfolio() {
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get("active_section");
  const [activeTab, setActiveTab] = useState<CategoryType>((tabFromUrl as CategoryType) || "3d_game");
  useEffect(() => {
    if (tabFromUrl) {
      setActiveTab(tabFromUrl as CategoryType);
    }
  }, [tabFromUrl]);
  const filteredCards = cardsData[activeTab]
  return (
    <main className="w-full  ">
            <div className="w-full bg-primary dark:bg-secondary  h-24"></div>
      <div
        className="text-secondary dark:text-secondary-foreground  text-center
        w-full  dark:bg-secondary"
      >
        <div className="bg-secondary dark:bg-secondary-foreground/5 w-full py-10  ">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <AnimatedSection className="w-full max-w-350 min-w-66 mx-auto px-4 2xl:px-0 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8 ">
            {filteredCards.map((card, index) => (
              <AnimatedItem key={card.id} type="slideUp" index={index}  >
                  <PortfolioTabsCard 
                  card={card} 
                  activeTab={activeTab}
                />
              </AnimatedItem>
            ))}
          </AnimatedSection>
          
        </div>
      </div>
    
    </main>
  );
}

export default Portfolio;
