import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import { heroMedia } from "@/content/capabilities";
import { heroBackground } from "@/content/project-background";

export function Hero() {
  const media = { ...heroMedia, ...heroBackground() };

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      <div
        className="grid-bg pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(85% 60% at 12% -10%, rgba(126,159,192,0.18), transparent 60%), radial-gradient(70% 50% at 100% 0%, rgba(243,245,249,0.05), transparent 65%)",
        }}
      />

      <div className="shell relative">
        <Reveal as="p" className="eyebrow">
          South Cape College × Superimmersive
        </Reveal>

        <Reveal as="h1" className="h1 mt-8 max-w-[54rem]" delay={80}>
          Immersive Technology for the Future of Skills Development
        </Reveal>

        <Reveal className="lede mt-8" delay={160}>
          <p>
            A proposed industry collaboration to develop immersive training
            experiences around South Cape College&apos;s existing curriculum,
            facilities and 4IR initiatives.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" delay={220}>
          <a href="#overview" className="btn btn--primary">
            Explore the Proposal
          </a>
          <a href="#work" className="btn btn--ghost">
            View Our Work
          </a>
        </Reveal>

        <Reveal className="mt-14 md:mt-20" delay={120}>
          <MediaFrame
            media={media}
            ratio="16 / 10"
            ratioMd="21 / 9"
            sizes="100vw"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
