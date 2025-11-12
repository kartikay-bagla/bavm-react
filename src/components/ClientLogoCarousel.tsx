"use client";

import Image from "next/image";
import { useMemo } from "react";

import { useEmblaCarouselControls } from "../hooks/useEmblaCarouselControls";
import { useResponsiveItemsPerSlide } from "../hooks/useResponsiveItemsPerSlide";

type ClientLogoCarouselProps = {
  logos: string[];
};

const DESKTOP_BREAKPOINT = 1024;
const DESKTOP_ITEMS = 5;
const MOBILE_ITEMS = 1;

export default function ClientLogoCarousel({ logos }: ClientLogoCarouselProps) {
  const itemsPerSlide = useResponsiveItemsPerSlide(MOBILE_ITEMS, [
    { minWidth: DESKTOP_BREAKPOINT, items: DESKTOP_ITEMS },
  ]);

  const options = useMemo(
    () => ({
      loop: logos.length > itemsPerSlide,
      align: "start" as const,
      containScroll: "trimSnaps" as const,
      slidesToScroll: itemsPerSlide,
      dragFree: false,
    }),
    [itemsPerSlide, logos.length]
  );

  const { emblaRef, scrollSnaps, selectedIndex, scrollPrev, scrollNext, scrollTo } =
    useEmblaCarouselControls({ options });

  if (logos.length === 0) {
    return null;
  }

  const itemWidth = `${100 / itemsPerSlide}%`;

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y select-none">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex-[0_0_auto] px-3 md:px-4"
              style={{ flexBasis: itemWidth, maxWidth: itemWidth }}
            >
              <div className="relative mx-auto h-24 w-full">
                <Image
                  src={logo}
                  alt="Client Logo"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 15vw, 80vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {scrollSnaps.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-primary shadow-md transition hover:bg-white"
            aria-label="Previous logos"
          >
            <span className="block h-5 w-5">&larr;</span>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-primary shadow-md transition hover:bg-white"
            aria-label="Next logos"
          >
            <span className="block h-5 w-5">&rarr;</span>
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={`logo-dot-${index}`}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to logo slide ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  selectedIndex === index
                    ? "bg-gray-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
