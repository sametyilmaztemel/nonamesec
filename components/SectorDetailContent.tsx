"use client";

import Link from "next/link";
import { useUI } from "@/components/UIProvider";
import { getSectorBySlug } from "@/content/sectors";
import { getServices } from "@/content/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";

export function SectorDetailContent({ slug }: { slug: string }) {
  const { language } = useUI();
  const sector = getSectorBySlug(slug, language);
  const services = getServices(language);

  if (!sector) {
    return (
      <div className="container section-spacing">
        <p className="text-sm text-[var(--color-muted)]">
          {language === "tr" ? "Sektör bulunamadı." : "Sector not found."}
        </p>
      </div>
    );
  }

  return (
    <div className="container section-spacing space-y-12">
      <Breadcrumbs
        items={[
          { label: language === "tr" ? "Ana Sayfa" : "Home", href: "/" },
          { label: language === "tr" ? "Sektörler" : "Industries", href: "/sektorler" },
          { label: sector.name },
        ]}
      />
      <header className="space-y-6">
        <div className="badge">{sector.name}</div>
        <h1 className="text-4xl font-bold text-[var(--color-light)]">{sector.heroTitle}</h1>
        <p className="max-w-3xl text-lg text-[var(--color-muted)] leading-relaxed">
          {sector.summary}
        </p>
        <div className="flex flex-wrap gap-3">
          {sector.ctas.map((cta) => (
            <Link key={cta.href} href={cta.href} className="btn-primary">
              {cta.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow={language === "tr" ? "Sorunlar" : "Pain Points"}
            title={language === "tr" ? "Sektörde öne çıkan riskler" : "Key risks in this sector"}
          />
          <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-[var(--color-muted)]">
            {sector.painPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeader
            eyebrow={language === "tr" ? "Yaklaşım" : "Our Approach"}
            title={language === "tr" ? "Noname Security nasıl destek oluyor?" : "How we help"}
          />
          <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-[var(--color-muted)]">
            {sector.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold text-[var(--color-light)]">
          {language === "tr" ? "Öne çıkan KPI" : "Standout KPI"}
        </h2>
        <p className="text-sm text-[var(--color-muted)]">{sector.kpi}</p>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow={language === "tr" ? "Önerilen Hizmetler" : "Recommended Services"}
          title={language === "tr" ? "En uygun hizmet kombinasyonları" : "Best-fit service combinations"}
        />
        <div className="flex flex-wrap gap-3">
          {sector.featuredServices.map((serviceSlug) => {
            const svc = services.find((service) => service.slug === serviceSlug);
            if (!svc) return null;
            return (
              <Link key={serviceSlug} href={`/hizmetler/${serviceSlug}`} className="btn-secondary">
                {svc.name}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
