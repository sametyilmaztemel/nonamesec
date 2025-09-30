import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Noname Security | Offensive + Defensive security partner",
  description:
    "Stay ahead of adversaries with Noname Security: penetration testing, red teaming, SOC/MDR, incident response and compliance expertise.",
};

export default function EnHomePage() {
  return <HomeContent />;
}
