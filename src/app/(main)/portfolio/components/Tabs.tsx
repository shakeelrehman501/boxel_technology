"use client";
import { tabsData } from "@/lib/data/portfolioPageData";
import { CategoryType } from "@/lib/data/portfolioPageData";
import { useRouter, usePathname } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
type Props = {
  activeTab: CategoryType;
  setActiveTab: (tab: CategoryType) => void;
};
function Tabs({ activeTab, setActiveTab, }: Props) {
  const router = useRouter();
const pathname = usePathname();
  return (
    <AnimatedSection className="flex flex-wrap justify-center gap-3">
      {tabsData.map((tab, index) => (
        <AnimatedItem key={tab.value} type="slideDown" index={index}>
        <button
          onClick={() => {
            setActiveTab(tab.value as CategoryType);
             router.push(`${pathname}?active_section=${tab.value}`);
          }}
          type="button"
          className={`px-6 py-1 border  border-primary/40 dark:border-primary-foreground/40 rounded-full text-[15px] sm:text-xl font-semibold   hover:border-transparent  transition-all duration-300 ease-in-out  dark:hover:text-secondary
          ${activeTab === tab.value ? "bg-primary border-transparent text-secondary  dark:bg-primary-foreground dark:text-secondary" : "text-secondary-foreground hover:text-primary-foreground hover:bg-primary/60 dark:hover:bg-primary-foreground/60"}
            `}
        >
          {tab.label}
        </button>
        </AnimatedItem>
      ))}
    </AnimatedSection>
  );
}

export default Tabs;
