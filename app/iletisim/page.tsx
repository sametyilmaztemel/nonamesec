import { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "İletişim | Noname Security",
  description:
    "Teklif alın, hızlı randevu planlayın, ofisimizi ziyaret edin. +90 (212) 909 45 00 veya iletisim@nonamesecurity.com.tr",
};

export default function ContactPage() {
  return <ContactContent />;
}
