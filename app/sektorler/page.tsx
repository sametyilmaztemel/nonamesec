import { Metadata } from "next";
import { SectorsContent } from "@/components/SectorsContent";

export const metadata: Metadata = {
  title: "Sektörler | Finans, Sağlık, Enerji, Kamu",
  description:
    "Finans, e-ticaret, sağlık, üretim, enerji, SaaS ve kamu sektörleri için uyarlanmış siber güvenlik çözümleri.",
};

export default function SectorsPage() {
  return <SectorsContent />;
}
