import { Reveal } from "@/components/reveal";
import { ProposalPdfButton } from "@/components/proposal-pdf-button";
import { StartEnquiryButton } from "@/components/start-enquiry-button";
import { opportunityIndex } from "@/content/concepts";
import { contact, founder } from "@/content/site";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div
        className="grid-bg pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(80% 70% at 50% 100%, rgba(126,159,192,0.16), transparent 65%)",
        }}
      />

      <div className="shell relative">
        <Reveal as="p" className="eyebrow">
          Next step
        </Reveal>

        <Reveal as="h2" id="contact-title" className="h1 mt-8 max-w-[46rem]" delay={70}>
          Let&apos;s Build the First One.
        </Reveal>

        <Reveal className="lede mt-8" delay={130}>
          <p>
            The next step is to identify a training requirement that would be
            suitable for the initial Proof of Concept.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" delay={190}>
          <StartEnquiryButton areas={opportunityIndex} />
          <ProposalPdfButton className="btn btn--ghost" />
        </Reveal>

        <Reveal className="mt-16 md:mt-20" delay={120}>
          <div className="grid gap-8 border-t border-hair pt-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="label">Contact</p>
              <p className="font-display mt-5 text-2xl tracking-tight text-fg">
                {founder.name}
              </p>
              <p className="body-text mt-2 text-[0.95rem]">
                {founder.title}, {founder.company}
              </p>
              {contact.location && (
                <p className="label mt-4">{contact.location}</p>
              )}
            </div>

            <dl className="space-y-4">
              {contact.email && (
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-hair pb-4">
                  <dt className="label w-20">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[0.95rem] text-fg underline-offset-4 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
              )}

              {contact.phone && (
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-hair pb-4">
                  <dt className="label w-20">Phone</dt>
                  <dd>
                    <a
                      href={contact.phoneHref || `tel:${contact.phone}`}
                      className="text-[0.95rem] text-fg underline-offset-4 hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </dd>
                </div>
              )}

              {contact.website && (
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                  <dt className="label w-20">Web</dt>
                  <dd>
                    <a
                      href={contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.95rem] text-fg underline-offset-4 hover:underline"
                    >
                      {contact.websiteLabel || contact.website}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
