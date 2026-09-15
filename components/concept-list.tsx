import { Reveal } from "./reveal";

type ConceptListProps = {
  items: string[];
  /** Split across two columns on wide screens. */
  columns?: 1 | 2;
  className?: string;
};

export function ConceptList({
  items,
  columns = 1,
  className = "",
}: ConceptListProps) {
  return (
    <ul
      className={`border-t border-hair ${
        columns === 2 ? "sm:grid sm:grid-cols-2 sm:gap-x-10" : ""
      } ${className}`}
    >
      {items.map((item, index) => (
        <Reveal
          as="li"
          key={item}
          delay={index * 70}
          className="flex items-baseline gap-4 border-b border-hair py-3.5"
        >
          <span className="label shrink-0 text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[0.95rem] leading-snug text-fg-soft">{item}</span>
        </Reveal>
      ))}
    </ul>
  );
}
