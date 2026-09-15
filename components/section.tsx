import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  /** Extra classes on the <section> element. */
  className?: string;
  /** Drop the top hairline, used for the section directly under the hero. */
  flush?: boolean;
  /** Sits opposite the heading on wide screens — usually a link or note. */
  aside?: ReactNode;
  labelledBy?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  className = "",
  flush = false,
  aside,
}: SectionProps) {
  const headingId = id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      className={`section ${flush ? "section--flush" : ""} ${className}`}
      aria-labelledby={title ? headingId : undefined}
    >
      <div className="shell">
        {(eyebrow || title || lede || aside) && (
          <header className="mb-12 md:mb-16">
            {eyebrow && (
              <Reveal as="p" className="eyebrow mb-6">
                {eyebrow}
              </Reveal>
            )}

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                {title && (
                  <Reveal as="h2" id={headingId} className="h2" delay={60}>
                    {title}
                  </Reveal>
                )}
                {lede && (
                  <Reveal as="div" className="lede mt-6" delay={120}>
                    {lede}
                  </Reveal>
                )}
              </div>

              {aside && (
                <Reveal className="lg:pb-2" delay={180}>
                  {aside}
                </Reveal>
              )}
            </div>
          </header>
        )}

        {children}
      </div>
    </section>
  );
}
