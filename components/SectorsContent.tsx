"use client";

import Link from "next/link";
import { useUI } from "@/components/UIProvider";
import { getSectors } from "@/content/sectors";
import { getServices } from "@/content/services";
import { SectionHeader } from "@/components/SectionHeader";

export function SectorsContent() {
  const { language } = useUI();
  const sectors = getSectors(language);
  const services = getServices(language);

  return (
    <div className="container section-spacing space-y-12">
      <SectionHeader
        eyebrow={language === "tr" ? "Sektörler" : "Industries"}
        title={
          language === "tr"
            ? "Her sektör için regülasyon ve operasyon farkındalığı"
            : "Regulatory and operational insight for every industry"
        }
        description={
          language === "tr"
            ? "Finans, e-ticaret, sağlık, üretim, enerji, SaaS ve kamu sektörlerine özgü riskleri biliyor, uygun hizmet kombinasyonlarını sunuyoruz."
            : "We understand the risks unique to finance, retail, healthcare, manufacturing, energy, SaaS and public-sector organisations, pairing them with the right services."
        }
      />
      <div className="grid gap-8 lg:grid-cols-2">
        {sectors.map((sector) => (
          <article key={sector.slug} className="card flex h-full flex-col gap-4 p-6">
            <div className="badge">{sector.name}</div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--color-light)]">{sector.heroTitle}</h2>
              <p className="mt-3 text-sm text-[var(--color-muted)]">{sector.summary}</p>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-muted)]">
              {sector.painPoints.slice(0, 3).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 text-xs">
              {sector.featuredServices.map((slug) => {
                const svc = services.find((item) => item.slug === slug);
                if (!svc) return null;
                return (
                  <span key={slug} className="badge">
                    {svc.name}
                  </span>
                );
              })}
            </div>
            <Link
              href={`/sektorler/${sector.slug}`}
              className="mt-auto text-sm text-[var(--color-accent)]"
            >
              {language === "tr" ? "Detaylara git" : "View details"} →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
