import HeadingTitle from "@/components/MyComponents/HeadingTitle";
import AboutCard from "./components/AboutCard";
import TeamCard from "./components/TeamCard";
import Image from "next/image";
import { teamsData } from "@/lib/data/aboutPageData";
import { projectCardData } from "@/lib/data/aboutPageData";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

function About() {
  return (
    <main className="w-full bg-secondary  ">
        <div className="w-full bg-primary dark:bg-secondary  h-24"></div>
      <div className="w-full mx-auto max-w-350">
        <Image
          src="/other_images/banner.webp"
          alt="3D Model"
          width={1000}
          height={1000}
          loading="lazy"
          className="object-cover  object-top w-full h-76 rounded-lg mt-5 mb-5 "
        />
        <div className=" pt-5">
          <HeadingTitle
            title="Our Mission"
            description="We help businesses grow through creative graphics and user-friendly designs. We create games and web apps that look great and perform smoothly."
            className="px-8 sm:px-20 lg:px-25 xl:px-35"
          />
        </div>
        <AnimatedSection className="w-full  flex flex-wrap justify-center gap-6 md:gap-8 xl:gap-12 mt-13.5 items-center  ">
          {projectCardData.map((card, index) => (
            <AnimatedItem key={card.id} type="slideLeft" index={index}>
              <AboutCard {...card} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
        <div className="pt-13.5">
          <HeadingTitle
            title="Meet The Team"
            description="Our team of designers, developers, and 3D artists bring different ideas to every project."
            className="px-8 sm:px-20 lg:px-25 xl:px-35"
          />
        </div>

        <AnimatedSection className="w-full  flex flex-wrap justify-center 2xl:justify-start  max-w-350  mx-auto px-0.5  gap-4 mt-13.5 pb-13.5  ">
          {teamsData.map((member, index) => (
            <AnimatedItem key={member.id} type="slideUp" index={index}>
              <TeamCard {...member} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </main>
  );
}

export default About;
