import { useEffect, useMemo, useState } from "react";

export type ResponsiveBreakpoint = {
  minWidth: number;
  items: number;
};

export function useResponsiveItemsPerSlide(
  defaultItems: number,
  breakpoints: ResponsiveBreakpoint[]
): number {
  const orderedBreakpoints = useMemo(() => {
    return [...breakpoints].sort((a, b) => a.minWidth - b.minWidth);
  }, [breakpoints]);

  const [itemsPerSlide, setItemsPerSlide] = useState(defaultItems);

  useEffect(() => {
    const resolveItemsPerSlide = () => {
      if (typeof window === "undefined") {
        return defaultItems;
      }

      let resolved = defaultItems;
      for (const breakpoint of orderedBreakpoints) {
        if (window.innerWidth >= breakpoint.minWidth) {
          resolved = breakpoint.items;
        }
      }
      return resolved;
    };

    const updateItemsPerSlide = () => {
      setItemsPerSlide((prev) => {
        const resolved = resolveItemsPerSlide();
        return prev === resolved ? prev : resolved;
      });
    };

    updateItemsPerSlide();

    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, [defaultItems, orderedBreakpoints]);

  return itemsPerSlide;
}
