"use client";

import { useMemo } from "react";

import { useEmblaCarouselControls } from "../hooks/useEmblaCarouselControls";
import { useResponsiveItemsPerSlide } from "../hooks/useResponsiveItemsPerSlide";
import PersonCard from "./PersonCard";

type Person = {
  name: string;
  title: string;
  image: string;
  content?: string;
};

type KeyPeopleCarouselProps = {
  people: Person[];
};

const DESKTOP_BREAKPOINT = 1024;
const DESKTOP_ITEMS = 4;
const MOBILE_ITEMS = 1;

export default function KeyPeopleCarousel({ people }: KeyPeopleCarouselProps) {
  const itemsPerSlide = useResponsiveItemsPerSlide(MOBILE_ITEMS, [
    { minWidth: DESKTOP_BREAKPOINT, items: DESKTOP_ITEMS },
  ]);

  const options = useMemo(
    () => ({
      loop: people.length > itemsPerSlide,
      align: "start" as const,
      containScroll: "trimSnaps" as const,
      slidesToScroll: itemsPerSlide,
      dragFree: false,
    }),
    [itemsPerSlide, people.length]
  );

  const { emblaRef, scrollSnaps, scrollPrev, scrollNext, scrollTo, selectedIndex } =
    useEmblaCarouselControls({ options });

  const itemWidth = `${100 / itemsPerSlide}%`;

  if (people.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y select-none pb-8">
          {people.map((person) => (
            <div
              key={person.name}
              className="flex-[0_0_auto] px-4 md:px-5"
              style={{ flexBasis: itemWidth, maxWidth: itemWidth }}
            >
              <PersonCard person={person} truncateContent maxContentLength={220} />
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
            aria-label="Previous slide"
          >
            <span className="block h-5 w-5">&larr;</span>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-primary shadow-md transition hover:bg-white"
            aria-label="Next slide"
          >
            <span className="block h-5 w-5">&rarr;</span>
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
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
