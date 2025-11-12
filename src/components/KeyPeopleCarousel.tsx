"use client";

import Image from "next/image";
import { useMemo } from "react";

import { useEmblaCarouselControls } from "../hooks/useEmblaCarouselControls";
import { useResponsiveItemsPerSlide } from "../hooks/useResponsiveItemsPerSlide";

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

  const truncateContent = (text: string | undefined, maxLength = 220) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trimEnd()}…`;
  };

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
              <article className="group flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white/95 p-6 text-center shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-square w-full max-w-[180px] overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-inner">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 200px, 60vw"
                  />
                </div>
                <div className="mt-4 h-1 w-12 rounded-full bg-primary/20 transition-colors duration-200 group-hover:bg-primary/40" />
                <h3 className="mt-4 text-lg font-bold font-serif text-primary">{person.name}</h3>
                <p className="text-sm text-gray-600">{person.title}</p>
                {person.content && (
                  <p className="mt-3 w-full text-sm text-gray-600 leading-relaxed text-left group-hover:text-gray-700">
                    {truncateContent(person.content)}
                  </p>
                )}
              </article>
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
