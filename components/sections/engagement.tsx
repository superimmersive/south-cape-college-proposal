import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { engagementTimeline } from "@/content/proposal";

const stateCopy: Record<string, string> = {
  done: "Completed",
  next: "Invited",
  proposed: "Proposed",
  future: "Potential",
};

function Node({ state }: { state: string }) {
  const base = "relative block h-3 w-3 rounded-full";

  if (state === "done") {
    return (
      <span className={`${base} bg-accent`}>
        <span className="absolute -inset-2 rounded-full border border-accent/35" />
      </span>
    );
  }

  if (state === "next") {
    return <span className={`${base} border border-accent bg-ink`} />;
  }

  if (state === "proposed") {
    return <span className={`${base} border border-dashed border-accent bg-ink`} />;
  }

  return <span className={`${base} border border-hair-strong bg-ink`} />;
}

export function Engagement() {
  return (
    <Section
      id="overview"
      eyebrow="Where the conversation stands"
      title="From Demonstration to Collaboration"
      lede={
        <div className="space-y-5">
          <p>
            Superimmersive recently had the opportunity to demonstrate its
            immersive technology and VR applications to South Cape
            College&apos;s 4IR team.
          </p>
          <p>
            Superimmersive then returned and demonstrated the technology as part
            of the College&apos;s technology exhibition.
          </p>
          <p>
            This proposal represents the next step: developing a focused Proof of
            Concept around a training requirement selected by South Cape College.
          </p>
        </div>
      }
    >
      <div className="relative mt-4">
        {/* Desktop rail */}
        <Reveal
          line
          aria-hidden
          className="absolute left-0 right-0 top-[0.3rem] hidden h-px bg-hair md:block"
        />

        <ol className="grid gap-8 md:grid-cols-6 md:gap-4">
          {engagementTimeline.map((item, index) => (
            <Reveal
              as="li"
              key={item.label}
              delay={index * 110}
              className="relative flex gap-4 md:block"
            >
              {/* Mobile rail */}
              {index < engagementTimeline.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[0.34rem] top-4 h-full w-px bg-hair md:hidden"
                />
              )}

              <span className="relative mt-1 shrink-0 md:mt-0 md:block">
                <Node state={item.state} />
              </span>

              <div className="md:mt-6">
                <p className="label">{stateCopy[item.state]}</p>
                <p className="font-display mt-2 text-base leading-snug tracking-tight text-fg md:text-[1.05rem]">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal className="mt-12" delay={220}>
        <p className="body-text max-w-2xl border-l border-accent/50 pl-5 text-fg-muted">
          Nothing beyond the demonstration and the technology exhibition has been
          agreed. The Proof of Concept described here is a proposal for
          discussion.
        </p>
      </Reveal>
    </Section>
  );
}
