"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface Props {
  slug: string;
  gallery: string[];
  category: string;
}

export default function Gallery({ slug, gallery, category }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentThumb = thumbRefs.current[currentImageIndex];

    if (currentThumb) {
      currentThumb.scrollIntoView({
        behavior: "smooth",
        inline: "nearest", // 🔥 important (center mein laye ga)
        block: "nearest",
      });
    }
  }, [currentImageIndex]);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1,
    );
  };
  const router = useRouter();
  const searchParams = useSearchParams();
  const active_section = searchParams.get("active_section");
  return (
    <div className=" w-full bg-secondary relative">
      {/* Dual Gradient Overlay (Bottom) Background */}
      <div
        className="absolute inset-0 z-0  dark:hidden"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.5) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.5) 1px, transparent 1px),
        radial-gradient(circle 500px at 100% 100%, rgba(139,92,246,0), transparent),
        radial-gradient(circle 500px at 100% 100%, rgba(59,130,246,0), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      <div
        className="absolute inset-0  z-0 hidden dark:block"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.06) 0px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.06) 0px, transparent 1px),
        radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.1), transparent),
        radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.1), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />

      <div className="z-50 h-full min-h-screen  bg-primary-foreground dark:bg-gray-900">
        {/* X button */}

        <header className="fixed top-0 left-0 right-0 bg-gray-200 dark:bg-gray-800   border-gray-800 z-20">
          <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
            <div>
              <h1 className="text-gray-700 dark:text-gray-300 sm:text-lg font-bold">
                {slug}
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-[12px] sm:text-[14px] lg:text-[15px] mt-1">
                {category}
              </p>
            </div>
            <button
              onClick={() => {
                router.push(
                  `/portfolio/?active_section=${active_section ?? "3d_game"}`,
                );
              }}
              className="text-gray-700 hover:text-gray-600 hover:bg-gray-300 dark:text-gray-300 dark:hover:text-gray-100 transition-colors p-2 rounded-lg dark:hover:bg-gray-700"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </header>

        <main className="min-h-screen pt-20.5  px-4 sm:px-6 lg:px-8">
          <div className="max-w-350 mx-auto lg:px-8 z-10  ">
            {/* Main Image */}
            <div className="relative bg-gray-300 border border-gray-300 dark:border-gray-800  dark:bg-gray-400 rounded-lg overflow-hidden mb-2.5 ">
              <div>
                <Image
                  src={gallery[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  // alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full max-h-[78vh] object-contain rounded-lg"
                /> 
              </div>

              {/* Navigation Buttons */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-2 sm:left-5 opacity-80 top-1/2 -translate-y-1/2 bg-primary-foreground/70 hover:bg-primary-foreground/90 text-secondary-foreground dark:bg-gray-900/80 dark:hover:bg-gray-900 dark:text-white p-2 sm:p-2.5 lg:p-3 rounded-full transition-all duration-200 backdrop-blur-sm shadow-2xl"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-5 opacity-80 top-1/2 -translate-y-1/2 bg-primary-foreground/70 hover:bg-primary-foreground/90 text-secondary-foreground dark:bg-gray-900/80 dark:hover:bg-gray-900 dark:text-white p-2 sm:p-2.5 lg:p-3 rounded-full transition-all duration-200 backdrop-blur-sm shadow-2xl"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute  bottom-1 sm:bottom-4 left-1/2 -translate-x-1/2 bg-primary-foreground/70 dark:bg-gray-900/80 backdrop-blur-sm dark:text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[12px] sm:text-sm">
                {currentImageIndex + 1} / {gallery.length}
              </div>
            </div>






            {/* <div className="relative bg-gray-300 border border-gray-300 dark:border-gray-800  dark:bg-gray-400 rounded-lg overflow-hidden mb-2.5 ">
              <div>
                <Image
                  src={gallery[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  
                  className="w-full h-full max-h-[78vh] object-contain rounded-lg"
                />
                
              </div>

              
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-2 sm:left-5 opacity-80 top-1/2 -translate-y-1/2 bg-primary-foreground/70 hover:bg-primary-foreground/90 text-secondary-foreground dark:bg-gray-900/80 dark:hover:bg-gray-900 dark:text-white p-2 sm:p-2.5 lg:p-3 rounded-full transition-all duration-200 backdrop-blur-sm shadow-2xl"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-5 opacity-80 top-1/2 -translate-y-1/2 bg-primary-foreground/70 hover:bg-primary-foreground/90 text-secondary-foreground dark:bg-gray-900/80 dark:hover:bg-gray-900 dark:text-white p-2 sm:p-2.5 lg:p-3 rounded-full transition-all duration-200 backdrop-blur-sm shadow-2xl"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </button>
                </>
              )}

             
              <div className="absolute  bottom-1 sm:bottom-4 left-1/2 -translate-x-1/2 bg-primary-foreground/70 dark:bg-gray-900/80 backdrop-blur-sm dark:text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[12px] sm:text-sm">
                {currentImageIndex + 1} / {gallery.length}
              </div>
            </div> */}

            {/* Thumbnail Strip */}

            {gallery.length > 1 && (
              <div
                className={`w-full max-w-7xl flex  
            ${gallery.length > 10 ? "justify-start" : "justify-start lg:justify-center"}
            mx-auto relative  overflow-x-auto scroll-smooth px-2 gap-3 z-50  pb-1.5`}
                onWheel={(e) => {
                  e.currentTarget.scrollLeft += e.deltaY;
                }}
              >
                {gallery.map((image, index) => (
                  <button
                    key={index}
                    ref={(el) => {
                      thumbRefs.current[index] = el;
                    }}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`
                    shrink-0 w-24 h-24 z-100  rounded-lg overflow-hidden border-2 transition-all duration-200
                    ${
                      index === currentImageIndex
                        ? "border-blue-500 opacity-100 "
                        : "border-gray-700 opacity-50 hover:opacity-75"
                    }
                  `}
                  >
                    <div className="relative w-full h-full">
                      {loading && (
                        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
                      )}

                      <Image
                        src={image}
                        width={300}
                        height={200}
                        alt={`Gallery ${index + 1}`}
                        loading="lazy"
                        onLoadingComplete={() => setLoading(false)}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                          loading ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
