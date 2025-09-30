import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Güvenlik Taahhüdü",
  description: "TLS 1.3, HSTS, güvenli çerezler, rate limiting ve güvenlik test süreçlerimiz hakkında taahhütlerimiz.",
};

export default function SecurityCommitmentPage() {
  return (
    <div className="container section-spacing space-y-6 text-sm text-[var(--color-muted)]">
      <h1 className="text-3xl font-bold text-[var(--color-light)]">Güvenlik Taahhüdü</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>Tüm iletişim kanallarımız TLS 1.3 ve HSTS ile korunur.</li>
        <li>Güvenli çerezler SameSite=Lax, HttpOnly ve Secure özellikleriyle ayarlanır.</li>
        <li>Form entegrasyonlarında rate limiting ve bot koruması uygularız.</li>
        <li>Üçüncü taraf entegrasyonlarını yıllık olarak gözden geçirir, minimum hak prensibini uygularız.</li>
        <li>Güvenlik ihlali durumunda 24 saat içinde bildirim yaparız.</li>
      </ul>
    </div>
  );
}
