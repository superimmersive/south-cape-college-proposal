import Image from "next/image";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { aboutParagraphs, missionParagraphs } from "@/content/proposal";
import { brand, founder } from "@/content/site";

export function About() {
  return (
    <Section id="about" eyebrow="The company" title="About Superimmersive">
      <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-start lg:gap-16">
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

        <Reveal delay={120} className="lg:sticky lg:top-28">
          <div className="card overflow-hidden">
            <div
              className="media ticks rounded-none border-0 border-b border-hair"
              style={{ "--ratio": "4 / 5" } as React.CSSProperties}
            >
              {founder.portrait ? (
                <Image
                  src={founder.portrait}
                  alt={`${founder.name}, ${founder.title}`}
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover"
                />
              ) : (
                <MediaPlaceholder label={founder.name} note="Founder portrait" compact />
              )}
            </div>

            <div className="p-7">
              <p className="font-display text-xl tracking-tight text-fg">
                {founder.name}
              </p>
              <p className="label mt-2">{founder.title}</p>

              <p className="label mt-7 mb-4">Capabilities</p>
              <ul className="flex flex-wrap gap-2">
                {founder.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="rounded-md border border-hair px-2.5 py-1.5 text-[0.78rem] text-fg-soft"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
