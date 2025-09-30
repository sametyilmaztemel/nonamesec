import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSectorBySlug, getSectors } from "@/content/sectors";
import { SectorDetailContent } from "@/components/SectorDetailContent";

export function generateStaticParams() {
  return getSectors("tr").map((sector) => ({ slug: sector.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const sector = getSectorBySlug(params.slug, "tr");
  if (!sector) {
    return {};
  }
  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    alternates: {
      canonical: `https://www.nonamesecurity.com.tr/sektorler/${sector.slug}`,
    },
  };
}

export default function SectorDetailPage({ params }: { params: { slug: string } }) {
  const exists = getSectorBySlug(params.slug, "tr");
  if (!exists) {
    notFound();
  }
  return <SectorDetailContent slug={params.slug} />;
}
