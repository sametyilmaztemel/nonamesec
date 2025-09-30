import { NextResponse } from "next/server";

export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://www.nonamesecurity.com.tr/sitemap.xml
`;
  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
