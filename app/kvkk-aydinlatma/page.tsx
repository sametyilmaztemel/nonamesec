import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Veri sorumlusu bilgileri, işleme amaçları, saklama süreleri ve haklarınızı açıklayan KVKK aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <div className="container section-spacing space-y-6 text-sm text-[var(--color-muted)]">
      <h1 className="text-3xl font-bold text-[var(--color-light)]">KVKK Aydınlatma Metni</h1>
      <p>
        Noname Security olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla,
        müşterilerimizin, potansiyel müşterilerimizin, tedarikçilerimizin ve web sitesi ziyaretçilerimizin kişisel
        verilerini hukuka ve dürüstlük kurallarına uygun şekilde işleriz.
      </p>
      <h2 className="text-xl font-semibold text-[var(--color-light)]">İşleme Amaçları</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Hizmet tekliflendirme ve sözleşme süreçlerinin yürütülmesi</li>
        <li>Destek ve olay müdahalesi taleplerinin yönetilmesi</li>
        <li>Regülasyon yükümlülüklerinin yerine getirilmesi</li>
        <li>Pazarlama izinleri kapsamında iletişim faaliyetleri</li>
      </ul>
      <h2 className="text-xl font-semibold text-[var(--color-light)]">Veri Saklama Süreleri</h2>
      <p>
        İmzalanan sözleşmeler 10 yıl, teklif talepleri 3 yıl, destek kayıtları 5 yıl süreyle saklanır. Süre sonunda
        anonimleştirilir veya imha edilir.
      </p>
      <h2 className="text-xl font-semibold text-[var(--color-light)]">Haklarınız</h2>
      <p>
        KVKK madde 11 gereğince verilerinize erişme, düzeltme, silme ve itiraz etme haklarınız bulunmaktadır. haklarınızı
        kullanmak için <a className="text-[var(--color-accent)]" href="mailto:kvkk@nonamesecurity.com.tr">kvkk@nonamesecurity.com.tr</a>
        adresine yazabilirsiniz.
      </p>
      <h2 className="text-xl font-semibold text-[var(--color-light)]">Başvuru Kanalları</h2>
      <p>
        Yazılı başvurularınızı İvedik OSB Mah. Teknopark Ankara, 2224 Cad. No:1, Yenimahalle / Ankara adresimize,
        elektronik başvurularınızı kayıtlı e-posta (KEP) hesabımıza
        gönderebilirsiniz.
      </p>
    </div>
  );
}
