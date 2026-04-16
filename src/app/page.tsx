import HeroSection from "@/components/service/Hero";
import Services from "@/components/service/Services";
import Portfolio from "@/components/service/Portfolio";
import Feedback from "@/components/service/Feedback";


export default function Home() {
  return (
    <>
      <main className="w-full  ">
        <div className="max-w-350 px-3 2xl:px-0 mx-auto">
          <HeroSection />
        </div>
          <div className="bg-secondary px-3  2xl:px-0 ">
          <Services />
          <Portfolio />
            <Feedback />
          </div>
      </main>
    </>
  );
}
