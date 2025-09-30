import { Metadata } from "next";
import { ServicesContent } from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Hizmetler | Penetrasyon Testi, SOC, KVKK, Eğitim",
  description:
    "Offensive + Defensive hizmet kataloğu: pentest, red team, MDR/SOC, olay müdahalesi, uyum danışmanlığı ve eğitimler. Kapsam bazlı çözümlerle tanışın.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
