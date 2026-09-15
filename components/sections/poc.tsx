import { Chain } from "@/components/chain";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { OpportunityCards } from "@/components/sections/opportunity";
import { pocProcess } from "@/content/proposal";

export function Poc() {
  return (
    <Section
      id="poc"
      eyebrow="The first project"
      title="Proposed Proof of Concept"
      lede={
        <p>
          One training requirement, one clearly defined scope, one fixed cost.
          The Proof of Concept is designed to prove the value of the approach
          before anything larger is committed.
        </p>
      }
    >
      <ol className="grid gap-px overflow-hidden rounded-xl border border-hair bg-hair sm:grid-cols-2 lg:grid-cols-3 lg:rounded-none lg:border-0 lg:bg-transparent lg:gap-8">
          {pocProcess.map((item, index) => (
            <Reveal
              as="li"
              key={item.step}
              delay={index * 90}
              className="bg-ink p-6 transition-colors duration-500 hover:bg-ink-2 lg:border-t lg:border-hair lg:bg-transparent lg:p-0 lg:pt-7 lg:hover:bg-transparent"
            >
              <div className="flex items-baseline gap-3">
                <span className="numeral text-2xl text-accent">{item.step}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-hair lg:hidden" />
              </div>
              <h3 className="font-display mt-4 text-[1.05rem] leading-snug tracking-tight text-fg">
                {item.title}
              </h3>
              <p className="body-text mt-3 text-[0.9rem]">{item.description}</p>
            </Reveal>
          ))}
      </ol>

      <div id="opportunity" className="scroll-mt-28 mt-16 md:mt-20">
        <Reveal as="p" className="eyebrow mb-4">
          The opportunity
        </Reveal>
        <Reveal as="p" className="lede mb-10 max-w-3xl" delay={60}>
          Immersive training experiences around specific requirements identified
          by South Cape College. Each card opens a proposed Statement of Work.
          One area would be selected as the Proof of Concept.
        </Reveal>
        <OpportunityCards />
      </div>

      <div className="mt-16 md:mt-20">
        <Reveal as="p" className="eyebrow mb-6">
          If the POC succeeds
        </Reveal>
        <Chain
          emphasiseLast
          items={[
            {
              label: "MVP",
              note: "Plan and develop an MVP for a learning module.",
            },
            {
              label: "Larger Training Project",
              note: "Additional modules with broader curriculum coverage.",
            },
            {
              label: "Long-Term Partnership",
              note: "Ongoing development, student exposure and licensed tools.",
            },
          ]}
        />
      </div>
    </Section>
  );
}
