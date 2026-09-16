import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import {
  capabilities,
  showcasePresentedLinks,
} from "@/content/capabilities";
import { withProjectBackgrounds } from "@/content/project-background";
import { withBase } from "@/lib/base-path";

export function Built() {
  const items = withProjectBackgrounds(capabilities);
  const presented = showcasePresentedLinks.filter(
    (item) => item.label && item.href,
  );

  return (
    <Section
      id="work"
      eyebrow="Capability"
      title="Showcase"
      lede={
        <p>
          Superimmersive combines technical art, 3D development, software and
          immersive technology to create interactive experiences for training,
          education and industry.
        </p>
      }
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((capability, index) => (
          <Reveal
            as="li"
            key={capability.title}
            delay={index * 90}
            className="card card--hover overflow-hidden"
          >
            <MediaFrame
              media={capability.media}
              ratio="16 / 10"
              className="rounded-none border-0 border-b border-hair"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              zoom
            />
            <div className="flex items-baseline justify-between gap-4 px-6 py-6">
              <div>
                <h3 className="h3">{capability.title}</h3>
                <p className="body-text mt-2.5 text-[0.95rem]">
                  {capability.description}
                </p>
              </div>
              <span className="label shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>

      {presented.length > 0 ? (
        <Reveal className="mt-12 md:mt-16" delay={80}>
          <p className="eyebrow">Presented to 4IR</p>
          <p className="body-text mt-4 max-w-3xl text-[0.95rem]">
            Materials shown during the demonstration, including training footage
            that is not otherwise on this site. They are not the proposed Proof
            of Concept.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {presented.map((item) => (
              <a
                key={item.href}
                href={withBase(item.href)}
                className="btn btn--ghost btn--sm whitespace-normal text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </Reveal>
      ) : null}
    </Section>
  );
}
