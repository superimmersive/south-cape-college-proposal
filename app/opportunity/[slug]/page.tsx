import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SowDocument } from "@/components/sow-document";
import { getOpportunityArea, opportunityAreas, opportunityIndex } from "@/content/concepts";
import { meta } from "@/content/site";

type SowPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return opportunityAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: SowPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getOpportunityArea(slug);
  if (!area) return { title: meta.title };

  return {
    title: `${area.title} | South Cape College × Superimmersive`,
    description: area.overview,
    robots: { index: false, follow: false },
  };
}

export default async function OpportunitySowPage({ params }: SowPageProps) {
  const { slug } = await params;
  const area = getOpportunityArea(slug);
  if (!area) notFound();

  return (
    <>
      <SiteNav />
      <main>
        <SowDocument area={area} />
      </main>
      <SiteFooter />
      <MobileCta areas={opportunityIndex} />
    </>
  );
}
