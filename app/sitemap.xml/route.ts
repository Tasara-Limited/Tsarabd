import { NextResponse } from 'next/server';

export async function GET() {
  // Your sitemap XML as a plain string
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://www.tasarabd.com/</loc>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://www.tasarabd.com/about</loc>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.tasarabd.com/services</loc>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.tasarabd.com/contact</loc>
    <priority>0.5</priority>
  </url>

</urlset>`;

  // Return as raw XML with correct content type
  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
