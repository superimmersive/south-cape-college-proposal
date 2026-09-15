"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealTag =
  | "div"
  | "section"
  | "article"
  | "figure"
  | "header"
  | "li"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3";

type RevealProps = {
  children?: ReactNode;
  as?: RevealTag;
  delay?: number;
  line?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
  "aria-hidden"?: boolean;
};

/**
 * Scroll-in animation. Content is always visible on the first paint so a
 * hydration or script failure can never leave a blank page. The visible class
 * is owned by React state — never mutated on the DOM directly.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  line = false,
  className,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      setVisible(true);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const box = node.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    const failsafe = window.setTimeout(() => setVisible(true), 1200);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  const classes = [className, visible ? "is-visible" : null].filter(Boolean).join(" ");

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={classes || undefined}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
      {...(line ? { "data-reveal-line": "" } : { "data-reveal": "" })}
      {...rest}
    >
      {children}
    </Tag>
  );
}
