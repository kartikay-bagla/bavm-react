import { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

export type UseEmblaCarouselControlsArgs = {
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
};

export type UseEmblaCarouselControlsReturn = {
  emblaRef: (node: HTMLElement | null) => void;
  emblaApi: EmblaCarouselType | undefined;
  selectedIndex: number;
  scrollSnaps: number[];
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
};

export function useEmblaCarouselControls(
  { options, plugins }: UseEmblaCarouselControlsArgs = {}
): UseEmblaCarouselControlsReturn {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const handleReInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      handleSelect();
    };

    handleReInit();

    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleReInit);

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleReInit);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.reInit(options, plugins);
  }, [emblaApi, options, plugins]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  return {
    emblaRef,
    emblaApi,
    selectedIndex,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
  };
}
