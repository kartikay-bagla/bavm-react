"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useMemo } from "react";

import { useEmblaCarouselControls } from "../hooks/useEmblaCarouselControls";

type HeroSlide = {
  image: string;
  headline: string;
  subheadline?: string;
};

type HeroProps = {
  slides: HeroSlide[];
  intervalMs?: number;
};

const DEFAULT_INTERVAL = 6000;

export default function Hero({ slides, intervalMs = DEFAULT_INTERVAL }: HeroProps) {
  const totalSlides = slides.length;

  const autoplay = useMemo(() => {
    if (totalSlides <= 1) {
      return undefined;
    }

    return Autoplay({
      delay: intervalMs,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    });
  }, [intervalMs, totalSlides]);

  const options = useMemo(
    () => ({
      loop: totalSlides > 1,
      align: "start" as const,
      duration: 40,
      dragFree: false,
    }),
    [totalSlides]
  );

  const plugins = useMemo(() => (autoplay ? [autoplay] : undefined), [autoplay]);

  const { emblaRef, selectedIndex, scrollTo } = useEmblaCarouselControls({
    options,
    plugins,
  });

  const activeSlide = useMemo(() => slides[selectedIndex] ?? null, [slides, selectedIndex]);

  if (!totalSlides) {
    return null;
  }

  return (
    <section className="relative isolate flex h-[70vh] min-h-[420px] w-full items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="h-full w-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={`${slide.image}-${index}`} className="relative flex-[0_0_100%]">
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70" aria-hidden="true" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-4 px-6 text-center">
        {activeSlide ? (
          <>
            <span className="text-sm uppercase tracking-[0.4em] text-white/70">BAVM Legal</span>
            <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl font-serif leading-tight">
              {activeSlide.headline}
            </h1>
            {activeSlide.subheadline ? (
              <p className="text-lg text-white/80 sm:text-xl md:text-2xl">
                {activeSlide.subheadline}
              </p>
            ) : null}
          </>
        ) : null}
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={`${slide.image}-${index}-indicator`}
            type="button"
            className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-white/90" : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <span className="sr-only" aria-live="polite">
        {activeSlide ? `${activeSlide.headline}. ${activeSlide.subheadline ?? ""}` : ""}
      </span>
    </section>
  );
}
