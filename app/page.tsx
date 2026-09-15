import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { About } from "@/components/sections/about";
import { Built } from "@/components/sections/built";
import { Engagement } from "@/components/sections/engagement";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Industry } from "@/components/sections/industry";
import { Poc } from "@/components/sections/poc";
import { Value } from "@/components/sections/value";
import { opportunityIndex } from "@/content/concepts";

export default function ProposalPage() {
  return (
    <>
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-[0.6875rem] focus:uppercase focus:tracking-[0.18em] focus:text-[#0a1420]"
      >
        Skip to proposal
      </a>

      <SiteNav />

      <main>
        <Hero />
        <Engagement />
        <Poc />
        <Value />
        <About />
        <Industry />
        <Built />
        <FinalCta />
      </main>

      <SiteFooter />
      <MobileCta areas={opportunityIndex} />
    </>
  );
}
