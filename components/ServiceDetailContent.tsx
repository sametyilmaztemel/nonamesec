"use client";

import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { useUI } from "@/components/UIProvider";
import type { LanguageCode } from "@/components/UIProvider";
import type { ExampleFinding } from "@/content/types";
import { getServiceBySlug } from "@/content/services";

export function ServiceDetailContent({ slug }: { slug: string }) {
  const { language } = useUI();
  const service = getServiceBySlug(slug, language);

  if (!service) {
    return (
      <div className="container section-spacing">
        <p className="text-sm text-[var(--color-muted)]">
          {language === "tr" ? "Hizmet bulunamadı." : "Service not found."}
        </p>
      </div>
    );
  }

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.serviceType,
      provider: {
        "@type": "Organization",
      	name: "Noname Security",
        url: "https://www.nonamesecurity.com.tr",
      },
      areaServed: {
        "@type": "Country",
        name: language === "tr" ? "Türkiye" : "Turkey",
      },
      description: service.schemaDescription,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="container section-spacing space-y-12">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { label: language === "tr" ? "Ana Sayfa" : "Home", href: "/" },
          { label: language === "tr" ? "Hizmetler" : "Services", href: "/hizmetler" },
          { label: service.name },
        ]}
      />
      <header className="space-y-6">
        <div className="badge">{service.serviceType}</div>
        <h1 className="text-4xl font-bold text-[var(--color-light)]">{service.heroTitle}</h1>
        <p className="max-w-3xl text-lg text-[var(--color-muted)] leading-relaxed">
          {service.heroSummary}
        </p>
        <div className="flex flex-wrap gap-4">
          {service.ctas.map((cta) => (
            <Link key={cta.href} href={cta.href} className="btn-primary">
              {cta.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <SectionHeader
              eyebrow={language === "tr" ? "Kapsam" : "Scope"}
              title={language === "tr" ? "Bu hizmet neleri içeriyor?" : "What’s included?"}
            />
            <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-[var(--color-muted)]">
              {service.coverage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              eyebrow={language === "tr" ? "Metodoloji" : "Methodology"}
              title={language === "tr" ? "Uyguladığımız standartlar" : "Standards we follow"}
            />
            <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-[var(--color-muted)]">
              {service.methodology.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              eyebrow={language === "tr" ? "Teslimatlar" : "Deliverables"}
              title={language === "tr" ? "Proje sonunda neler elde edersiniz?" : "What you receive"}
            />
            <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-[var(--color-muted)]">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader
              eyebrow={language === "tr" ? "Müşteriden Beklenenler" : "What we need from you"}
              title={language === "tr" ? "Proje öncesi hazırlıklar" : "Pre-engagement preparations"}
            />
            <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-[var(--color-muted)]">
              {service.expectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6 space-y-3">
            <h2 className="text-xl font-semibold text-[var(--color-light)]">
              {language === "tr" ? "Zaman & Etkililik" : "Timeline & Impact"}
            </h2>
            <p className="text-sm text-[var(--color-muted)]">{service.timeline}</p>
            <p className="text-sm text-[var(--color-muted)]">{service.effectiveness}</p>
          </div>
          <div className="card p-6 space-y-4">
            <h2 className="text-xl font-semibold text-[var(--color-light)]">
              {language === "tr" ? "Örnek Bulgu" : "Sample Finding"}
            </h2>
            <div
              className={`badge-risk ${
                service.exampleFinding.riskLevel === "orta"
                  ? "medium"
                  : service.exampleFinding.riskLevel === "düşük"
                  ? "low"
                  : ""
              }`}
            >
              {language === "tr" ? "Risk seviyesi" : "Risk level"}: {riskLabel(service.exampleFinding.riskLevel, language)}
            </div>
            <h3 className="text-lg font-semibold">{service.exampleFinding.title}</h3>
            <p className="text-sm text-[var(--color-muted)]">
              {language === "tr" ? "İş etkisi" : "Business impact"}: {service.exampleFinding.impact}
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              {language === "tr" ? "Önerilen düzeltme" : "Recommended remediation"}: {service.exampleFinding.remediation}
            </p>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="card p-6 space-y-3">
            <h2 className="text-lg font-semibold text-[var(--color-light)]">
              {language === "tr" ? "Fiyatlandırma yaklaşımı" : "Pricing approach"}
            </h2>
            <p className="text-sm text-[var(--color-muted)]">{service.pricing}</p>
          </div>
          <div className="card p-6 space-y-3">
            <h2 className="text-lg font-semibold text-[var(--color-light)]">CTA</h2>
            <div className="flex flex-col gap-3">
              {service.ctas.map((cta) => (
                <Link key={`side-${cta.href}`} href={cta.href} className="btn-secondary">
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="card p-6 space-y-3">
            <h2 className="text-lg font-semibold text-[var(--color-light)]">Schema</h2>
            <p className="text-xs text-[var(--color-muted)]">
              {language === "tr"
                ? "Bu sayfa Service ve FAQPage şemalarını JSON-LD olarak yayınlar."
                : "Service and FAQPage schemas are published as JSON-LD on this page."}
            </p>
          </div>
        </aside>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow={language === "tr" ? "SSS" : "FAQ"}
          title={language === "tr" ? "Sık Sorulan Sorular" : "Frequently Asked Questions"}
        />
        <FAQAccordion items={service.faqs} />
      </section>
    </div>
  );
}

function riskLabel(level: ExampleFinding["riskLevel"], language: LanguageCode) {
  const labels = {
    kritik: { tr: "KRİTİK", en: "CRITICAL" },
    yüksek: { tr: "YÜKSEK", en: "HIGH" },
    orta: { tr: "ORTA", en: "MEDIUM" },
    düşük: { tr: "DÜŞÜK", en: "LOW" },
  } as const;
  return (labels[level]?.[language] ?? level.toUpperCase());
}
