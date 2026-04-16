import { Suspense } from "react";
import Portfolio from "./components/PortfolioPage";

export default function Page() {
  return (
    <>
      <Suspense
        fallback={
          <main className="w-full h-full min-h-screen bg-primary dark:bg-primary-foreground/20">
            
            <div className="text-secondary dark:text-secondary-foreground pt-30 dark:bg-secondary">
              <div className="h-full min-h-screen bg-primary-foreground dark:bg-primary-foreground/10 flex flex-col items-center pt-30 sm:pt-60 lg:pt-70 gap-6">
                <div className="w-20 h-20 border-[3px] border-gray-300 border-t-black dark:border-gray-600 dark:border-t-white rounded-full animate-spin"></div>

                <p className="text-lg tracking-wide opacity-70 text-gray-800 dark:text-gray-200">
                  Loading...
                </p>
              </div>
            </div>
          </main>
        }
      >
        <Portfolio />
      </Suspense>
    </>
  );
}
