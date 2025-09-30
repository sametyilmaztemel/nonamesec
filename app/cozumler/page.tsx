import Link from "next/link";
import { Metadata } from "next";
import { solutions } from "@/content/solutions";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Çözümler | Noname Threat AI",
  description:
    "Yapay zekâ destekli anomali tespiti ve SOC entegrasyonu ile Noname Threat AI çözümümüzü keşfedin.",
};

export default function SolutionsPage() {
  return (
    <div className="container section-spacing space-y-10">
      <SectionHeader
        eyebrow="Çözümler"
        title="AI destekli güvenlik çözümlerimiz"
        description="Threat AI modülümüz ağ trafiği ve loglardan davranışsal anomalileri tespit ederek SOC ekibinizin yükünü azaltır."
      />
      <div className="grid-cards">
        {solutions.map((solution) => (
          <Link key={solution.slug} href={`/cozumler/${solution.slug}`} className="card p-6 space-y-3">
            <div className="badge">AI Modülü</div>
            <h2 className="text-xl font-semibold text-[var(--color-light)]">{solution.name}</h2>
            <p className="text-sm text-[var(--color-muted)]">{solution.heroSummary}</p>
            <span className="text-sm text-[var(--color-accent)]">Detayları incele →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
