"use client";

import { useUI } from "@/components/UIProvider";
import { getCaseStudies } from "@/content/cases";
import { SectionHeader } from "@/components/SectionHeader";

export function CaseStudiesContent() {
  const { language } = useUI();
  const studies = getCaseStudies(language);

  return (
    <div className="container section-spacing space-y-12">
      <SectionHeader
        eyebrow={language === "tr" ? "Başarı Hikayeleri" : "Success Stories"}
        title={language === "tr" ? "İş etkisine dönüşen güvenlik projeleri" : "Security programmes that deliver business impact"}
        description={
          language === "tr"
            ? "Her projede teknik bulguları iş hedefleriyle eşleştiriyor, ölçülebilir KPI'lar paylaşıyoruz."
            : "Every engagement maps technical findings to business objectives with measurable KPIs."
        }
      />
      <div className="space-y-10">
        {studies.map((cs) => (
          <article id={cs.slug} key={cs.slug} className="card p-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge">{cs.industry}</span>
              <h2 className="text-2xl font-semibold text-[var(--color-light)]">{cs.title}</h2>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                {language === "tr" ? "Problem" : "Challenge"}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{cs.challenge}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                {language === "tr" ? "Yaklaşım" : "Approach"}
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-[var(--color-muted)]">
                {cs.approach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                {language === "tr" ? "Teknik Bulguların İş Etkisi" : "Business Impact of Findings"}
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-[var(--color-muted)]">
                {cs.technicalFindings.map((finding) => (
                  <li key={finding}>{finding}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                {language === "tr" ? "Sonuç KPI'ları" : "Outcome KPIs"}
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-[var(--color-muted)]">
                {cs.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
            <blockquote>
              “{cs.quote}” — {cs.quoteAuthor}, {cs.quoteRole}
            </blockquote>
          </article>
        ))}
      </div>
    </div>
  );
}
