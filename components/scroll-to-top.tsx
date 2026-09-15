"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/** Opportunity pages inherit the home scroll position without this. */
export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, [pathname]);

  return null;
}
