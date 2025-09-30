import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sızma Testi Sorumluluk Reddi",
  description: "Yetkilendirme, kapsam ve üretim etkisi sınırlamalarını açıklayan sorumluluk reddi beyanı.",
};

export default function PentestDisclaimerPage() {
  return (
    <div className="container section-spacing space-y-6 text-sm text-[var(--color-muted)]">
      <h1 className="text-3xl font-bold text-[var(--color-light)]">Sızma Testi Sorumluluk Reddi</h1>
      <p>
        Tüm sızma testleri ve red team faaliyetleri, müşteri tarafından sağlanan yazılı yetkilendirme ve kapsam dokümanı
        doğrultusunda yürütülür. Yetkilendirilmeyen varlıklarda gerçekleştirilen testlerden müşteri sorumludur.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Üretim ortamında test yapılacağı durumlarda müşterinin bakım penceresi belirlemesi zorunludur.</li>
        <li>Noname Security ekipleri yetkilendirilmeyen varlıklara erişim sağlamaz, tespit edilen yanlış yönlendirmeleri raporlar.</li>
        <li>Test süresince toplanan log ve ekran görüntüleri sadece raporlama amacıyla kullanılır ve proje sonunda imha edilir.</li>
        <li>Müşteri, test süresince üçüncü taraflara bilgi verilmesinden sorumludur.</li>
      </ul>
    </div>
  );
}
