import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/content/solutions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const solution = solutions.find((item) => item.slug === params.slug);
  if (!solution) {
    return {};
  }
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    openGraph: {
      title: solution.ogTitle,
      description: solution.ogDescription,
      images: [
        {
          url: solution.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function SolutionDetail({ params }: { params: { slug: string } }) {
  const solution = solutions.find((item) => item.slug === params.slug);

  if (!solution) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: solution.name,
    description: solution.metaDescription,
    brand: {
      "@type": "Brand",
      name: "Noname Security",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "TRY",
        price: "0",
      },
      url: `https://www.nonamesecurity.com.tr/cozumler/${solution.slug}`,
      availability: "https://schema.org/PreOrder",
    },
  };

  return (
    <div className="container section-spacing space-y-12">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Çözümler", href: "/cozumler" },
          { label: solution.name },
        ]}
      />
      <header className="space-y-6">
        <div className="badge">AI Modülü</div>
        <h1 className="text-4xl font-bold text-[var(--color-light)]">{solution.heroTitle}</h1>
        <p className="max-w-3xl text-lg text-[var(--color-muted)] leading-relaxed">{solution.heroSummary}</p>
        <div className="flex flex-wrap gap-3">
          {solution.ctas.map((cta) => (
            <Link key={cta.href} href={cta.href} className="btn-primary">
              {cta.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <SectionHeader eyebrow="Öne çıkan özellikler" title="Davranışsal anomali tespitine odaklanın" />
          <div className="space-y-4">
            {solution.highlights.map((item) => (
              <div key={item.title} className="card p-5 space-y-2">
                <h2 className="text-lg font-semibold text-[var(--color-light)]">{item.title}</h2>
                <p className="text-sm text-[var(--color-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="placeholder-frame">
            Noname Threat AI dashboard placeholder (1200x630). Görsel entegrasyonu için tasarım ekibi ile çalışın.
          </div>
          <div className="card p-6 space-y-3">
            <h2 className="text-lg font-semibold text-[var(--color-light)]">Sorumlu kullanım</h2>
            <p className="text-sm text-[var(--color-muted)]">{solution.responsibleUse}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Kullanım senaryoları" title="Hangi durumlarda ideal?" />
          <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-[var(--color-muted)]">
            {solution.useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeader eyebrow="Sınırlar" title="Neleri göz önünde bulundurmalısınız?" />
          <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-[var(--color-muted)]">
            {solution.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
