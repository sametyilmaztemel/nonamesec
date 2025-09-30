import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug } from "@/content/services";
import { ServiceDetailContent } from "@/components/ServiceDetailContent";

const SERVICE_SLUGS = [
  "penetrasyon-testi",
  "red-team",
  "sosyal-muhendislik",
  "uygulama-guvenligi",
  "bulut-guvenligi",
  "soc-mdr",
  "olay-mudahalesi",
  "danismanlik",
  "egitimler",
];

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug, "tr");
  if (!service) {
    return {};
  }
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.ogTitle,
      description: service.ogDescription,
      images: [
        {
          url: service.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://www.nonamesecurity.com.tr/hizmetler/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const exists = getServiceBySlug(params.slug, "tr");
  if (!exists) {
    notFound();
  }
  return <ServiceDetailContent slug={params.slug} />;
}
