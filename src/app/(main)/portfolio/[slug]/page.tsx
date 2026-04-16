// [slug]/page.tsx
import { Suspense } from "react";
import Gallery from "./Gallery";
import { cardsData } from "@/lib/data/portfolioPageData";
import { CardType } from "@/lib/data/portfolioPageData";

type Props = {
  params: { slug: string };
};

// This tells Next.js which slugs to pre-render
export async function generateStaticParams() {
  const allCards: CardType[] = Object.values(cardsData).flat();
  return allCards.map((card) => ({
    slug: card.slug,
    category: card.category,
  }));
}

export default async function NewPage({ params }: Props) {
  const { slug } = await params;

  const allCards: CardType[] = Object.values(cardsData).flat();
  const card = allCards.find((c) => c.slug === slug);
  const gallery = card?.gallery || [];
  const category = card?.category || "category";

  return (
    <div className="w-full min-h-screen inset-0 absolute z-50">
      
      <Suspense fallback={
          <main className="w-full h-full min-h-screen bg-primary dark:bg-primary-foreground/20">
            <div className="text-secondary dark:text-secondary-foreground  dark:bg-secondary">
              <div className="h-full min-h-screen bg-primary-foreground dark:bg-primary-foreground/10 flex flex-col items-center pt-40 sm:pt-80 lg:pt-90 gap-6">
                <div className="w-20 h-20 border-[3px] border-gray-300 border-t-black dark:border-gray-600 dark:border-t-white rounded-full animate-spin"></div>

                <p className="text-lg tracking-wide opacity-70 text-gray-800 dark:text-gray-200">
                  Loading...
                </p>
              </div>
            </div>
          </main>
        }>
        <Gallery slug={slug} gallery={gallery} category={category}  />
      </Suspense>
    </div>
  );
}