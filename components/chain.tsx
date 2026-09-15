import { Fragment } from "react";
import { Reveal } from "./reveal";

export type ChainItem = {
  label: string;
  note?: string;
};

type ChainProps = {
  items: ChainItem[];
  className?: string;
  /** Give the final step the accent treatment. */
  emphasiseLast?: boolean;
};

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 rotate-90 text-fg-muted md:rotate-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

/** Horizontal on wide screens, vertical on phones. Used for short progressions. */
export function Chain({ items, className = "", emphasiseLast = false }: ChainProps) {
  return (
    <ol
      className={`flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-0 ${className}`}
    >
      {items.map((item, index) => {
        const last = index === items.length - 1;
        const accent = emphasiseLast && last;

        return (
          <Fragment key={item.label}>
            {index > 0 && (
              <li
                aria-hidden="true"
                className="flex justify-center py-1 md:px-3 md:py-0"
              >
                <Arrow />
              </li>
            )}
            <Reveal
              as="li"
              delay={index * 90}
              className={`card flex-1 px-5 py-4 ${
                accent ? "border-accent/45 bg-accent/[0.07]" : ""
              }`}
            >
              <p
                className={`font-display text-sm leading-snug tracking-tight md:text-[0.95rem] ${
                  accent ? "text-accent-soft" : "text-fg"
                }`}
              >
                {item.label}
              </p>
              {item.note && (
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-fg-muted">
                  {item.note}
                </p>
              )}
            </Reveal>
          </Fragment>
        );
      })}
    </ol>
  );
}
