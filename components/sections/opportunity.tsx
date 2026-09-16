import Link from "next/link";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import { opportunityAreas } from "@/content/concepts";

export function OpportunityCards() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {opportunityAreas.map((area, index) => (
        <Reveal
          as="li"
          key={area.slug}
          delay={Math.min(index, 8) * 60}
          className="flex flex-col"
        >
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 px-0.5">
            <span className="label text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            {area.badge && (
              <span className="rounded-full border border-accent/45 bg-accent/[0.08] px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-accent-soft">
                {area.badge}
              </span>
            )}
          </div>

          <Link
            href={`/opportunity/${area.slug}`}
            className="card card--hover flex flex-1 flex-col overflow-hidden"
          >
            <MediaFrame
              media={area.media}
              ratio="16 / 10"
              className="rounded-none border-0 border-b border-hair"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              compactPlaceholder
              zoom
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="h3">{area.title}</h3>
              <p className="body-text mt-3 flex-1 text-[0.9rem]">{area.summary}</p>

              <span className="btn btn--ghost btn--sm mt-6 self-start">
                Explore more
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
