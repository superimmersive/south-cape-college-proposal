import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { Chain } from "@/components/chain";
import { ConceptList } from "@/components/concept-list";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import { SowFullDocument } from "@/components/sow-full-document";
import { StartEnquiryButton } from "@/components/start-enquiry-button";
import type { OpportunityArea } from "@/content/concepts";
import { opportunityAreas, opportunityIndex } from "@/content/concepts";
import { commercialTerms, pocNotes, pocProcess } from "@/content/proposal";
import { poc } from "@/content/site";

type SowDocumentProps = {
  area: OpportunityArea;
};

function RichText({ text, className = "" }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className="font-medium text-fg">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </span>
  );
}

function SowBadges({ area }: { area: OpportunityArea }) {
  if (!area.badge && !area.future) return null;

  return (
    <>
      {area.badge && (
        <span className="rounded-full border border-accent/45 bg-ink/80 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-accent-soft backdrop-blur-sm">
          {area.badge}
        </span>
      )}
      {area.future && (
        <span className="rounded-full border border-accent/45 bg-ink/80 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-accent-soft backdrop-blur-sm">
          Potential future concept
        </span>
      )}
    </>
  );
}

async function readFullSow(area: OpportunityArea) {
  const dir = path.join(process.cwd(), "content", "sow");
  const candidates = [
    area.pocBrief?.fullSowFile,
    `${area.slug}.md`,
    `${area.slug}-statement-of-work.md`,
  ].filter((name): name is string => Boolean(name));

  for (const name of candidates) {
    try {
      return await readFile(path.join(dir, name), "utf8");
    } catch {
      // try the next candidate
    }
  }

  return "";
}

export async function SowDocument({ area }: SowDocumentProps) {
  const fullSow = await readFullSow(area);
  const others = opportunityAreas.filter((item) => item.slug !== area.slug);

  return (
    <article>
      <header className="relative overflow-hidden pb-12 pt-10 md:pb-16 md:pt-16">
        <div
          className="grid-bg pointer-events-none absolute inset-0 opacity-50"
          aria-hidden="true"
        />
        <div className="shell relative">
          {area.pocBrief && (
            <Reveal delay={90}>
              <MediaFrame
                media={area.media}
                ratio="16 / 10"
                ratioMd="21 / 9"
                sizes="100vw"
                videoControls
                overlay={<SowBadges area={area} />}
              />
            </Reveal>
          )}

          <Reveal as="h1" className="h1 mt-8 max-w-[44rem] md:mt-10" delay={100}>
            {area.title}
          </Reveal>

          <Reveal className="lede mt-6 max-w-3xl space-y-5" delay={150}>
            <p>{area.overview}</p>
            <p>{area.objective}</p>
          </Reveal>
        </div>
      </header>

      {!area.pocBrief && (
      <div className="shell pb-8">
        <Reveal>
          <MediaFrame
            media={area.media}
            ratio="16 / 10"
            ratioMd="21 / 9"
            sizes="100vw"
            videoControls
            overlay={<SowBadges area={area} />}
          />
        </Reveal>
      </div>
      )}

      {!area.pocBrief && (
      <section className="section section--flush" aria-labelledby="sow-scope">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-16">
          <Reveal>
            <p className="label" id="sow-scope">
              Proposed scope
            </p>
            <p className="body-text mt-4 max-w-xs text-[0.9rem]">
              Core functionality for a Proof of Concept. Final scope is agreed
              in writing before development begins.
            </p>
          </Reveal>
          <ConceptList items={area.scope} columns={area.scope.length > 3 ? 2 : 1} />
        </div>
      </section>
      )}

      {area.approach && !area.pocBrief && (
        <section className="section" aria-labelledby="sow-approach">
          <div className="shell">
            <Reveal as="p" className="eyebrow mb-6" id="sow-approach">
              Approach
            </Reveal>
            <Chain emphasiseLast items={area.approach} />
            {area.approachNote && (
              <Reveal className="mt-8" delay={120}>
                <p className="body-text max-w-2xl border-l border-accent/50 pl-5">
                  {area.approachNote}
                </p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {!area.pocBrief && (
        <>
      <section className="section" aria-labelledby="sow-includes">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal as="h2" className="h3" id="sow-includes">
              Included in a standard POC
            </Reveal>
            <ul className="mt-6 border-t border-hair">
              {[
                "Focused development against the agreed scope, timeline and budget.",
                "Internal testing and refinement of interaction, pacing and clarity.",
                "Hands-on demonstration to College staff and, where appropriate, learners.",
                "Joint evaluation of educational value and whether to extend the work.",
              ].map((item, index) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={index * 60}
                  className="flex gap-4 border-b border-hair py-4"
                >
                  <span className="label shrink-0 text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="body-text text-[0.95rem]">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal as="h2" className="h3">
              Not included unless agreed
            </Reveal>
            <ul className="mt-6 border-t border-hair">
              {pocNotes.slice(3).map((item, index) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={index * 60}
                  className="body-text border-b border-hair py-4 text-[0.95rem]"
                >
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="sow-commercial">
        <div className="shell">
          <Reveal as="h2" className="h2" id="sow-commercial">
            Commercial
          </Reveal>

          <Reveal className="mt-10">
            <dl className="grid divide-y divide-hair overflow-hidden rounded-xl border border-hair md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="p-8 md:p-10">
                <dt className="label">{poc.priceLabel}</dt>
                <dd className="numeral mt-4 text-4xl md:text-5xl">{poc.price}</dd>
              </div>
              <div className="p-8 md:p-10">
                <dt className="label">{poc.durationLabel}</dt>
                <dd className="numeral mt-4 text-4xl md:text-5xl">{poc.duration}</dd>
              </div>
            </dl>
          </Reveal>

          <ul className="mt-6 flex flex-wrap gap-3">
            {["Fixed scope", poc.duration, poc.price].map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-hair-strong px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-fg-soft"
              >
                {badge}
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-3xl space-y-5">
            {commercialTerms.map((term, index) => (
              <Reveal as="p" key={term} delay={index * 70} className="body-text">
                {term}
              </Reveal>
            ))}
            {area.future && (
              <Reveal as="p" className="body-text border-l border-accent/50 pl-5" delay={140}>
                This area is listed as a potential later module. It can still be
                selected as the first Proof of Concept if the College prefers it.
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="sow-process">
        <div className="shell">
          <Reveal as="h2" className="h2" id="sow-process">
            How it would run
          </Reveal>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-hair bg-hair sm:grid-cols-2 lg:grid-cols-3">
            {pocProcess.map((item, index) => (
              <Reveal
                as="li"
                key={item.step}
                delay={index * 70}
                className="bg-ink p-6"
              >
                <span className="numeral text-xl text-accent">{item.step}</span>
                <h3 className="font-display mt-3 text-[1.05rem] tracking-tight text-fg">
                  {item.title}
                </h3>
                <p className="body-text mt-2 text-[0.9rem]">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
        </>
      )}

      {area.pocBrief && (
        <section className="section" aria-labelledby="sow-poc-brief">
          <div className="shell">
            <Reveal as="h2" className="h2 max-w-[36rem]" id="sow-poc-brief">
              {area.pocBrief.title}
            </Reveal>
            <Reveal as="h3" className="h3 mt-8" delay={50}>
              {area.pocBrief.subtitle}
            </Reveal>
            <Reveal className="lede mt-6 max-w-3xl" delay={80}>
              <p>
                <RichText text={area.pocBrief.intro} />
              </p>
            </Reveal>

            <Reveal className="mt-10 max-w-3xl" delay={100}>
              <p className="body-text">{area.pocBrief.learnerLead}</p>
              <ul className="mt-4 border-t border-hair">
                {area.pocBrief.learnerItems.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-hair py-3.5"
                  >
                    <span className="label shrink-0 text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <RichText
                      text={item}
                      className="text-[0.95rem] leading-snug text-fg-soft"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>

            <dl className="mt-14 grid overflow-hidden rounded-xl border border-hair md:grid-cols-3">
              {area.pocBrief.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-hair p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <dt className="font-display text-2xl tracking-tight text-fg">
                    {fact.label}
                  </dt>
                  <dd className="body-text mt-3 text-[0.9rem]">{fact.note}</dd>
                </div>
              ))}
            </dl>
            <Reveal className="mt-8 max-w-3xl" delay={80}>
              <p className="body-text">
                <RichText text={area.pocBrief.limitation} />
              </p>
            </Reveal>

            <Reveal as="h3" className="h3 mt-14" delay={40}>
              {area.pocBrief.nextStepTitle}
            </Reveal>
            <Reveal className="lede mt-6 max-w-3xl" delay={70}>
              <p>{area.pocBrief.nextStep}</p>
            </Reveal>
            <Reveal className="mt-8" delay={110}>
              <Chain emphasiseLast items={area.pocBrief.chain} />
            </Reveal>

            <Reveal as="h3" className="h3 mt-14" delay={40} id="sow-expanded">
              Expanded Training Module
            </Reveal>
            <Reveal className="mt-8 max-w-3xl" delay={70}>
              <ConceptList items={area.scope} />
            </Reveal>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="sow-next">
        <div className="shell">
          <Reveal as="h2" className="h2 max-w-[28rem]" id="sow-next">
            Choose this as the Proof of Concept
          </Reveal>
          <Reveal className="lede mt-6" delay={70}>
            <p>
              Nothing on this page is an approved project. It is a proposed
              Statement of Work for discussion.
            </p>
          </Reveal>
          <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row" delay={120}>
            <StartEnquiryButton
              areaTitle={area.title}
              areas={opportunityIndex}
            />
            <SowFullDocument title={area.title} markdown={fullSow} />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="sow-others">
        <div className="shell">
          <Reveal as="h2" className="h3" id="sow-others">
            Other training areas
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={Math.min(index, 6) * 50}>
                <Link
                  href={`/opportunity/${item.slug}`}
                  className="card card--hover flex h-full flex-col p-5"
                >
                  <span className="font-display text-[1.02rem] tracking-tight text-fg">
                    {item.title}
                  </span>
                  <span className="link-arrow mt-4">
                    <span>Explore more</span>
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
