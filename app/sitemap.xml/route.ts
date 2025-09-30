import { NextResponse } from "next/server";
import { getServices } from "@/content/services";
import { getSectors } from "@/content/sectors";
import { solutions } from "@/content/solutions";
import { blogPosts, webinars } from "@/content/resources";

const BASE_URL = "https://www.nonamesecurity.com.tr";

export async function GET() {
  const staticPages = [
    "",
    "en",
    "hizmetler",
    "sektorler",
    "kaynaklar",
    "basari-hikayeleri",
    "hakkimizda",
    "kariyer",
    "iletisim",
    "cozumler",
    "kvkk-aydinlatma",
    "cerez-politikasi",
    "sozlesmeler",
    "guvenlik-taahhudu",
    "sizma-testi-sorumluluk-reddi",
  ];

  const services = getServices("tr");
  const sectors = getSectors("tr");
  const blogEntries = blogPosts("tr").filter((item) => item.href.startsWith("/"));
  const webinarEntries = webinars("tr").filter((item) => item.href.startsWith("/"));

  const urls = [
    ...staticPages.map((path) => `${BASE_URL}/${path}`.replace(/\/$/, "")),
    ...services.map((service) => `${BASE_URL}/hizmetler/${service.slug}`),
    ...sectors.map((sector) => `${BASE_URL}/sektorler/${sector.slug}`),
    ...solutions.map((solution) => `${BASE_URL}/cozumler/${solution.slug}`),
    ...blogEntries.map((post) => `${BASE_URL}${post.href}`),
    ...webinarEntries.map((item) => `${BASE_URL}${item.href}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((loc) => `  <url><loc>${loc}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
