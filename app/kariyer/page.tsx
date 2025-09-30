import { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";

const positions = [
  {
    title: "Senior Penetrasyon Test Uzmanı",
    summary: "Web, API, mobil ve bulut pentestlerinde 5+ yıl deneyimli, OSCP/OSWE sertifikalı uzman.",
    requirements: [
      "OWASP WSTG ve PTES deneyimi",
      "CI/CD ve DevSecOps süreçlerine hakimiyet",
      "Müşteri sunumu ve raporlama becerisi",
    ],
  },
  {
    title: "SOC Analyst L2",
    summary: "24/7 MDR operasyonlarında shift liderliği yapacak, MITRE ATT&CK'e hakim analist.",
    requirements: [
      "SIEM (Splunk, Sentinel) deneyimi",
      "EDR/XDR tuning ve olay analiz yetkinliği",
      "Threat hunting pratiği",
    ],
  },
  {
    title: "Uyum Danışmanı",
    summary: "KVKK, ISO 27001, PCI DSS projelerinde deneyimli, politika yazımına hakim danışman.",
    requirements: [
      "ISMS kurulum ve iç denetim tecrübesi",
      "Regülasyon ve hukuki çerçeve bilgisi",
      "Sunum ve paydaş yönetimi becerileri",
    ],
  },
  {
    title: "Eğitim Koordinatörü",
    summary: "Siber güvenlik farkındalık ve teknik eğitim programlarını yönetecek koordinatör.",
    requirements: [
      "Eğitim tasarımı ve LMS yönetimi",
      "Katılımcı iletişimi ve operasyon",
      "TR/EN çift dilde iletişim",
    ],
  },
];

export const metadata: Metadata = {
  title: "Kariyer | Noname Security",
  description:
    "Offensive, defensive, uyum ve eğitim ekiplerimize katılmak için açık pozisyonları inceleyin. Hibrit çalışma, sertifikasyon desteği.",
};

export default function CareersPage() {
  return (
    <div className="container section-spacing space-y-12">
      <SectionHeader
        eyebrow="Kariyer"
        title="Saldırganları geride bırakmak için bize katılın"
        description="Hibrit çalışma, sertifikasyon bütçesi, global projeler ve sürekli öğrenme ortamı sunuyoruz."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {positions.map((position) => (
          <article key={position.title} className="card flex h-full flex-col gap-4 p-6">
            <div>
              <h2 className="text-xl font-semibold text-[var(--color-light)]">{position.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{position.summary}</p>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-muted)]">
              {position.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="mailto:careers@nonamesecurity.com.tr" className="btn-secondary mt-auto">
              Başvurunu gönder / Apply now
            </Link>
          </article>
        ))}
      </div>
      <div className="card p-6 space-y-3 text-sm text-[var(--color-muted)]">
        <p>Talent pool’a katılmak için CV’nizi careers@nonamesecurity.com.tr adresine iletebilirsiniz.</p>
        <p>Gizlilik güvencemiz: CV’niz sadece ilgili ekiplerle paylaşılır. / Your privacy matters: We share your CV only with relevant stakeholders.</p>
      </div>
    </div>
  );
}
