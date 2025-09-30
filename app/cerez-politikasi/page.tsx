import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Çerez türleri, kullanım amaçları ve tercih yönetimi hakkında bilgilendirme.",
};

export default function CookiePolicyPage() {
  return (
    <div className="container section-spacing space-y-6 text-sm text-[var(--color-muted)]">
      <h1 className="text-3xl font-bold text-[var(--color-light)]">Çerez Politikası (TR/EN)</h1>
      <p>
        Web sitemizde deneyiminizi iyileştirmek, istatistiki analiz yapmak ve pazarlama faaliyetlerini optimize etmek için
        çerez kullanıyoruz. Zorunlu çerezler hizmetin çalışması için gereklidir. Analitik ve pazarlama çerezlerini onay
        vererek yönetebilirsiniz.
      </p>
      <h2 className="text-xl font-semibold text-[var(--color-light)]">Çerez Türleri</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Zorunlu çerezler: Oturum yönetimi ve güvenlik</li>
        <li>Analitik çerezler: Trafik ölçümü ve performans analizleri</li>
        <li>Pazarlama çerezleri: Kampanya optimizasyonu</li>
      </ul>
      <p>
        Çerez tercihlerinizi site altındaki banner üzerinden yönetebilir, dilerseniz tarayıcınızın ayarlarıyla çerezleri
        silebilirsiniz.
      </p>
      <h2 className="text-xl font-semibold text-[var(--color-light)]">Cookie Policy (EN)</h2>
      <p>
        We use cookies to enhance your experience, perform analytics and optimize marketing activities. Necessary cookies
        are required for the website to function. You can opt in/out of analytics and marketing cookies via the preference
        center.
      </p>
    </div>
  );
}
