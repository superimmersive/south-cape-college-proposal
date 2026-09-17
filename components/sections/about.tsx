import { MediaPlaceholder } from "@/components/media-placeholder";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { aboutParagraphs, missionParagraphs } from "@/content/proposal";
import { brand, founder } from "@/content/site";
import { withBase } from "@/lib/base-path";

export function About() {
  return (
    <Section id="about" eyebrow="The company" title="About Superimmersive">
      <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-start lg:gap-16">
        <Reveal delay={120} className="lg:col-start-2 lg:row-start-1 lg:sticky lg:top-28">
          <div className="card grid grid-cols-[1fr_8rem] overflow-hidden sm:grid-cols-[1fr_10rem] lg:grid-cols-1">
            <div
              className="media ticks order-last rounded-none border-0 border-hair max-lg:aspect-auto max-lg:h-full max-lg:min-h-[11rem] max-lg:border-l lg:order-none lg:border-b"
              style={{ "--ratio": "4 / 5" } as React.CSSProperties}
            >
              {founder.portrait ? (
                <img
                  src={`${withBase(founder.portrait)}?v=9`}
                  alt={`${founder.name}, ${founder.title}`}
                  className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                />
              ) : (
                <MediaPlaceholder label={founder.name} note="Founder portrait" compact />
              )}
            </div>

            <div className="flex flex-col justify-center p-4 sm:p-5 lg:p-7">
              <p className="font-display text-lg tracking-tight text-fg lg:text-xl">
                {founder.name}
              </p>
              <p className="label mt-1.5 lg:mt-2">{founder.title}</p>

              <p className="label mt-4 mb-2.5 lg:mt-7 lg:mb-4">Capabilities</p>
              <ul className="flex flex-wrap gap-1.5 lg:gap-2">
                {founder.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="rounded-md border border-hair px-2 py-1 text-[0.72rem] text-fg-soft lg:px-2.5 lg:py-1.5 lg:text-[0.78rem]"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-10">
          <div className="max-w-3xl space-y-6">
            {aboutParagraphs.map((paragraph, index) => (
              <Reveal
                as="p"
                key={paragraph}
                delay={index * 80}
                className={index === 0 ? "lede" : "body-text"}
              >
                {paragraph}
              </Reveal>
            ))}

            <Reveal className="mt-4 flex flex-wrap gap-3" delay={240}>
              {[brand.ownership, brand.experience, "George, Western Cape"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-hair px-4 py-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-fg-soft"
                  >
                    {tag}
                  </span>
                ),
              )}
            </Reveal>
          </div>

          <div>
            <Reveal as="p" className="eyebrow">
              Direction
            </Reveal>
            <Reveal as="h3" className="h3 mt-4" delay={50}>
              Our Mission
            </Reveal>
            <div className="mt-6 space-y-5">
              {missionParagraphs.map((paragraph, index) => (
                <Reveal
                  as="p"
                  key={paragraph}
                  delay={80 + index * 80}
                  className="body-text border-t border-hair pt-5 text-[0.95rem]"
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
