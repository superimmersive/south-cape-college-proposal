import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { organisations } from "@/content/logos";
import { withBase } from "@/lib/base-path";

export function Industry() {
  return (
    <Section
      eyebrow="Track record"
      title="Industry Experience"
      lede={
        <p>
          11+ years of professional experience across technical art, 3D
          development, software and immersive technology.
        </p>
      }
    >
      <Reveal>
        <ul className="grid grid-cols-2 border-l border-t border-hair sm:grid-cols-3 lg:grid-cols-5">
          {organisations.map((organisation, index) => (
            <Reveal
              as="li"
              key={organisation.name}
              delay={Math.min(index, 12) * 45}
              className="group relative flex min-h-[5.75rem] items-center justify-center border-b border-r border-hair px-[25px] py-[15px] transition-colors duration-500 hover:bg-ink-2"
            >
              {organisation.logo ? (
                <span className="absolute inset-x-[25px] inset-y-[15px]">
                  {/* Native img so Next's image cache cannot keep a stale black mark. */}
                  <img
                    src={`${withBase(organisation.logo)}?v=6`}
                    alt={organisation.name}
                    className={`h-full w-full object-contain object-center opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${
                      organisation.invert ? "brightness-0 invert" : ""
                    }`}
                    style={
                      !organisation.invert && organisation.brightness
                        ? { filter: `brightness(${organisation.brightness})` }
                        : undefined
                    }
                  />
                </span>
              ) : (
                <span className="text-center font-display text-[0.8rem] uppercase leading-tight tracking-[0.12em] text-fg-soft transition-colors duration-500 group-hover:text-fg">
                  {organisation.name}
                </span>
              )}
            </Reveal>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-7" delay={120}>
        <p className="label">
          Selected organisations associated with previous professional work.
        </p>
        <p className="body-text mt-4 max-w-2xl text-[0.95rem] text-fg-muted">
          This work was delivered across studio engagements and contract roles
          over an 11-year career. It is not a claim that each organisation listed
          is a direct Superimmersive client.
        </p>
      </Reveal>
    </Section>
  );
}
