import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UIProvider } from "@/components/UIProvider";
import { BackgroundMesh } from "@/components/BackgroundMesh";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "600"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.nonamesecurity.com.tr"),
  title: {
    default: "Noname Security | Offensive + Defensive security partner",
    template: "%s | Noname Security",
  },
  description:
    "Ankara-based Noname Security delivers penetration testing, red teaming, SOC/MDR, incident response and ISO 27001/KVKK consulting across EMEA.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Noname Security",
    title: "Noname Security | Offensive + Defensive Security",
    description:
      "Partner with Noname Security for penetration testing, red teaming, SOC/MDR, incident response and compliance consulting.",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Noname Security Hero",
      },
    ],
  },
  alternates: {
    canonical: "https://www.nonamesecurity.com.tr/en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noname Security",
    description:
      "Offensive + Defensive security services for modern enterprises.",
    images: ["/og/default.jpg"],
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[var(--color-background)] text-[var(--color-light)]`}
        suppressHydrationWarning
      >
        <UIProvider defaultLanguage="en">
          <BackgroundMesh />
          <Header />
          <main id="ana-icerik" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
