import { Metadata } from "next";
import { aboutContent } from "@/content/about";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Hakkımızda | Noname Security",
  description:
    "Offensive + Defensive yetkinlikleri bir araya getiren ekibimizi tanıyın. Misyon, vizyon, ekip, iş ortaklıkları ve sertifikalarımız.",
};

export default function AboutPage() {
  return (
    <div className="container section-spacing space-y-16">
      <header className="space-y-6">
        <div className="badge">Hakkımızda</div>
        <h1 className="text-4xl font-bold text-[var(--color-light)]">
          Saldırgan zihniyetini savunma disiplinine dönüştüren ekip
        </h1>
        <p className="max-w-3xl text-lg text-[var(--color-muted)] leading-relaxed">
          {aboutContent.mission}
        </p>
      </header>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-[var(--color-light)]">Misyon</h2>
          <p className="mt-3 text-sm text-[var(--color-muted)]">{aboutContent.mission}</p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-[var(--color-light)]">Vizyon</h2>
          <p className="mt-3 text-sm text-[var(--color-muted)]">{aboutContent.vision}</p>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Değerler" title="Bizi farklı kılan prensipler" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {aboutContent.values.map((value) => (
            <div key={value.title} className="card p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[var(--color-light)]">{value.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Ekip" title="Uzmanlık alanlarımız" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutContent.team.map((team) => (
            <div key={team.title} className="card p-6 space-y-3">
              <h3 className="text-lg font-semibold text-[var(--color-light)]">{team.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">{team.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {team.badges.map((badge) => (
                  <span key={badge} className="badge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-light)]">İş Ortaklıkları</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-muted)]">
            {aboutContent.partners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
        <div className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-light)]">Sertifikalar</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-muted)]">
            {aboutContent.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
