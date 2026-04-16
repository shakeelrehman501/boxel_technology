
import React from 'react'
import FeedbackCarousel from './FeedbackCarousel';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

function Feedback() {
  
  return (
    <div className=" w-full bg-secondary relative">
  {/* Dual Gradient Overlay (Bottom) Background */}
  <div
    className="absolute inset-0 z-0  dark:hidden"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.5) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.5) 1px, transparent 1px),
        radial-gradient(circle 500px at 100% 100%, rgba(139,92,246,0.05), transparent),
        radial-gradient(circle 500px at 100% 100%, rgba(59,130,246,0.05), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
  <div
    className="absolute inset-0 z-0 hidden dark:block"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.06) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.1), transparent),
        radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.1), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
     {/* Your Content/Components */}

    <AnimatedSection className="mt-20     py-15 space-y-10">
        
      <div className="w-full mx-auto   flex justify-center items-center">
        <AnimatedItem type='slideUp' index={0} className="text-4xl font-semibold text-secondary-foreground z-1">
          FeedBack
        </AnimatedItem>
      </div>
      <AnimatedItem type='slideUp' index={1}>
      <FeedbackCarousel/>
      </AnimatedItem>
    </AnimatedSection>
     
    </div>
  );
}
export default Feedback;
