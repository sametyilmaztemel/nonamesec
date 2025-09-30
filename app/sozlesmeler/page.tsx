import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sözleşmeler",
  description: "Hizmet sözleşmesi, NDA, sorumluluk reddi ve hizmet şartları hakkında özet bilgiler.",
};

export default function ContractsPage() {
  return (
    <div className="container section-spacing space-y-6 text-sm text-[var(--color-muted)]">
      <h1 className="text-3xl font-bold text-[var(--color-light)]">Sözleşmeler</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>Hizmet Sözleşmesi: Proje kapsamı, SLA’lar, teslimatlar, ücretlendirme.</li>
        <li>NDA (Gizlilik Anlaşması): Tarafların gizlilik yükümlülükleri ve istisnalar.</li>
        <li>Sorumluluk Reddi: Sızma testleri ve red team faaliyetlerinde yetkilendirme sınırları.</li>
        <li>Veri İşleme Sözleşmesi: KVKK uyumlu veri işleme ve aktarım hükümleri.</li>
      </ul>
      <p>
        Detaylı sözleşme örnekleri talep üzerine sunulur. Lütfen <a className="text-[var(--color-accent)]" href="mailto:legal@nonamesecurity.com.tr">legal@nonamesecurity.com.tr</a> adresi üzerinden bizimle iletişime geçin.
      </p>
    </div>
  );
}
