"use client";

import Link from "next/link";
import { useUI } from "@/components/UIProvider";
import { getServices } from "@/content/services";
import { SectionHeader } from "@/components/SectionHeader";

export function ServicesContent() {
  const { language } = useUI();
  const services = getServices(language);

  return (
    <div className="container section-spacing space-y-12">
      <SectionHeader
        eyebrow={language === "tr" ? "Hizmetler" : "Services"}
        title={
          language === "tr"
            ? "Tüm saldırı yüzeyiniz için entegre güvenlik hizmetleri"
            : "Integrated security services for your entire attack surface"
        }
        description={
          language === "tr"
            ? "Saldırgan simülasyonlarından 24/7 savunma operasyonlarına, uyum danışmanlığından eğitimlere kadar tek ekip."
            : "One team covering adversary simulation, 24/7 defence operations, compliance advisory and training."
        }
      />
      <div className="grid-cards">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/hizmetler/${service.slug}`}
            className="card flex h-full flex-col gap-4 p-6"
          >
            <div className="badge">{service.serviceType}</div>
            <div>
              <h2 className="mt-2 text-xl font-semibold text-[var(--color-light)]">{service.name}</h2>
              <p className="mt-3 text-sm text-[var(--color-muted)]">{service.heroSummary}</p>
            </div>
            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              {service.coverage.slice(0, 3).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <span className="mt-auto inline-flex items-center gap-2 text-sm text-[var(--color-accent)]">
              {language === "tr" ? "Detaylara git" : "View details"} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
