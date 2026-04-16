import React from 'react'
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
interface Props {
    title: string,
    description?: string,
    className?:string
}

function HeadingTitle({title="Title", description, className}:Props) {
  return (
      <AnimatedSection className={`w-full px-3 sm:px-8  mx-auto text-center space-y-6 pt-5 ${className}`}>
          <div className="space-y-4 sm:space-y-6 ">
            <AnimatedItem type='slideUp' index={0} className="text-4xl sm:text-[40px]  font-bold leading-10">{title}</AnimatedItem>
            <AnimatedItem type='slideUp' index={1} className="text-lg sm:text-[20px] font-light leading-6 sm:leading-8 ">
              {description}
            </AnimatedItem>
          </div>
          </AnimatedSection>
  )
}

export default HeadingTitle
