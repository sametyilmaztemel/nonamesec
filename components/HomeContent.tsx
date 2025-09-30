"use client";

import Link from "next/link";
import { useUI } from "@/components/UIProvider";
import { getHomeContent } from "@/content/home";
import { SectionHeader } from "@/components/SectionHeader";
import { blogPosts, ebooks } from "@/content/resources";
import { getCaseStudies } from "@/content/cases";

export function HomeContent() {
  const { language } = useUI();
  const home = getHomeContent(language);

  return (
    <div className="section-stack">
      <section className="section-shell section-shell--hero">
        <div className="container">
          <div className="hero-bg shadow-elevated grid gap-12 p-10 md:grid-cols-2 md:p-14 lg:p-16">
            <div className="space-y-6">
              <div className="badge">
                {language === "tr" ? "Offensive + Defensive" : "Offensive + Defensive"}
              </div>
              <h1 className="text-4xl font-bold leading-tight text-[var(--color-light)]">
                {home.hero.title}
              </h1>
              <p className="text-lg leading-relaxed text-[var(--color-muted)]">{home.hero.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href={home.hero.primaryCta.href} className="btn-primary">
                  {home.hero.primaryCta.label}
                </Link>
                <Link href={home.hero.secondaryCta.href} className="btn-secondary">
                  {home.hero.secondaryCta.label}
                </Link>
              </div>
              <ul className="grid gap-3 text-sm text-[var(--color-muted)] md:grid-cols-3">
                {home.hero.highlights.map((item) => (
                  <li key={item} className="card-light rounded-xl px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card gradient-border flex flex-col gap-6 p-6 md:p-8">
              <div>
                <p className="section-eyebrow">{language === "tr" ? "Slogan" : "Tagline"}</p>
                <h2 className="text-2xl font-semibold">
                  {language === "tr" ? "Marka Vaadi" : "Brand Promise"}
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                {home.slogans.map((item) => (
                  <li key={item} className="surface-pill rounded-xl px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="surface-accent rounded-xl p-4 text-sm">{home.hero.title}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="card p-8 md:p-10 lg:p-12">
            <SectionHeader
              eyebrow={language === "tr" ? "Güven" : "Trust"}
              title={language === "tr" ? "Bize güvenen kurumlar ve yetkinlik rozeti" : "Who trusts us"}
              description={
                language === "tr"
                  ? "Ekibimiz OSCP, OSWE, CRTO, CEH ve CISSP gibi sertifikalara sahip; global ölçeğe hazırız."
                  : "Our team holds OSCP, OSWE, CRTO, CEH and CISSP certifications; we are ready for global scale."
              }
              align="center"
            />
            <div className="section-content-gap grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  {language === "tr" ? "Müşteri Portföyü" : "Client Portfolio"}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-[var(--color-muted)] sm:grid-cols-3">
                  {home.trustBadges.clients.map((client) => (
                    <div key={client} className="logo-tile flex h-16 items-center justify-center rounded-xl px-4 text-center">
                      {client}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  {language === "tr" ? "Sertifikasyonlar" : "Certifications"}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  {home.trustBadges.certifications.map((badge) => (
                    <span key={badge} className="badge">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-[var(--color-muted)]">
                  {language === "tr"
                    ? "Sertifikasyon rozet placeholderları: OSCP, OSWE, CRTO, CEH, CISSP, ISO 27001."
                    : "Certification placeholders: OSCP, OSWE, CRTO, CEH, CISSP, ISO 27001."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="hizmetler">
        <div className="container">
          <SectionHeader
            eyebrow={language === "tr" ? "Hizmetler" : "Services"}
            title={
              language === "tr"
                ? "Saldırı yüzeyinizi kapatan uçtan uca hizmet yelpazesi"
                : "An end-to-end service stack that closes every attack surface"
            }
            description={
              language === "tr"
                ? "Pentest ve red team'den SOC/MDR, olay müdahalesi, uyum danışmanlığı ve eğitimlere kadar tek çatı altında."
                : "From pentest and red team to SOC/MDR, incident response, compliance and training under one roof."
            }
          />
          <div className="section-content-gap-lg grid-cards">
            {home.servicesSummary.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="card flex h-full flex-col gap-4 p-6 transition hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-light)]">{service.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-muted)]">{service.problem}</p>
                </div>
                <p className="text-sm text-[var(--color-accent)]">{service.outcome}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm text-[var(--color-muted)]">
                  <span>{language === "tr" ? "Detaylara git" : "View details"}</span>
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <SectionHeader
            eyebrow={language === "tr" ? "Nasıl Çalışırız" : "How We Work"}
            title={language === "tr" ? "4 adımda saldırı yüzeyinizi kapatın" : "Close your attack surface in four steps"}
            description={
              language === "tr"
                ? "Kurum kültürünüze uyumlu, tekrar edilebilir ve ölçümlenebilir bir çalışma modeli sunuyoruz."
                : "A repeatable, measurable model that flexes to your organisation’s culture."
            }
          />
          <div className="section-content-gap-lg grid gap-6 md:grid-cols-4">
            {home.processSteps.map((step, index) => (
              <div key={step.title} className="card flex h-full flex-col gap-4 p-6">
                <span className="badge">
                  {language === "tr" ? `Adım ${index + 1}` : `Step ${index + 1}`}
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-light)]">{step.title}</h3>
                <p className="text-sm text-[var(--color-muted)]">{step.description}</p>
                <div className="mt-auto space-y-1 text-xs text-[var(--color-muted)]">
                  <div>
                    <strong>{language === "tr" ? "Süre:" : "Timeline:"}</strong> {step.timeline}
                  </div>
                  <div>
                    <strong>{language === "tr" ? "Sorumlu:" : "Owners:"}</strong> {step.owners}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <SectionHeader
            eyebrow={language === "tr" ? "Başarı Hikayeleri" : "Success Stories"}
            title={language === "tr" ? "Kanıtlanmış sonuçlar" : "Proven outcomes"}
            description={
              language === "tr"
                ? "Teknik bulguları iş etkisine çeviriyor, KPI'larla sonuçları görünür kılıyoruz."
                : "We translate technical findings into business impact with measurable KPIs."
            }
          />
          <div className="section-content-gap grid gap-8 md:grid-cols-2">
            {getCaseStudies(language).map((c) => (
              <article key={c.slug} className="card flex h-full flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-light)]">{c.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{c.challenge}</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-muted)]">
                  {c.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
                <blockquote className="mt-auto">
                  “{c.quote}” — {c.quoteAuthor}, {c.quoteRole}
                </blockquote>
                <Link href={`/basari-hikayeleri#${c.slug}`} className="text-sm text-[var(--color-accent)]">
                  {language === "tr" ? "Hikayeyi incele" : "Read the story"} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
            <div>
              <SectionHeader
                eyebrow={language === "tr" ? "Kaynaklar" : "Resources"}
                title={
                  language === "tr"
                    ? "Ekibinizi güncel tutacak içerikler"
                    : "Content to keep your team ahead"
                }
                description={
                  language === "tr"
                    ? "En son blog yazıları ve indirilebilir checklist'lerle güvenlik yatırımınızın etkisini artırın."
                    : "Boost the impact of your security programme with the latest articles and checklists."
                }
              />
              <div className="section-content-gap grid gap-6">
                {blogPosts(language).map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="card flex h-full flex-col gap-3 p-6 lg:p-7"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">{language === "tr" ? "Blog" : "Blog"}</p>
                    <h3 className="text-lg font-semibold text-[var(--color-light)]">{post.title}</h3>
                    <p className="text-sm text-[var(--color-muted)]">{post.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm text-[var(--color-accent)]">
                      {language === "tr" ? "Okumaya devam et" : "Continue reading"} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="card flex flex-col gap-4 p-6 lg:p-7">
              <h3 className="text-lg font-semibold text-[var(--color-light)]">{home.leadMagnet.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">{home.leadMagnet.description}</p>
              <Link href={home.leadMagnet.href} className="btn-primary w-full">
                {language === "tr" ? "İndir" : "Download"}
              </Link>
              <div className="text-xs text-[var(--color-muted)]">
                {language === "tr"
                  ? "E-posta adresinizi bırakarak indirilebilir içeriğe erişin; biz de sizi yeni kaynaklardan haberdar edelim."
                  : "Share your email to access the asset and receive future updates."}
              </div>
              <div className="section-divider space-y-3 border-t pt-4">
                <h4 className="text-sm font-semibold text-[var(--color-light)]">
                  {language === "tr" ? "Diğer içerikler" : "More resources"}
                </h4>
                <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                  {ebooks(language).map((ebook) => (
                    <li key={ebook.href}>
                      <Link href={ebook.href} className="text-[var(--color-accent)]">
                        {ebook.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--tight">
        <div className="container">
          <div className="card flex flex-col gap-6 p-10 text-center md:p-12">
            <SectionHeader
              eyebrow={home.closing.eyebrow}
              title={home.closing.title}
              description={home.closing.description}
              align="center"
            />
            <div className="flex flex-wrap items-center justify-center gap-4">
              {home.closing.contactCtas.map((cta) => (
                <Link key={cta.href} href={cta.href} className="btn-primary">
                  {cta.label}
                </Link>
              ))}
              <Link href={home.closing.secondaryCta.href} className="btn-secondary">
                {home.closing.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
