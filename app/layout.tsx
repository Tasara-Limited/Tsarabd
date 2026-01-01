import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const dynamic = 'force-dynamic';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tasarabd.com'),
  title: 'Tasara Limited - Global Plastic Materials Supply & Indenting Services',
  applicationName: 'Tasara Limited',
  description: 'Tasara Limited connects raw material suppliers with international buyers. Tasara offers a global network for sourcing high-quality plastic materials.',
  keywords: 'Tasara, Tasarabd, plastic materials, indenting services, supply chain, global sourcing',
  alternates: { canonical: 'https://www.tasarabd.com' },
  openGraph: {
    title: 'Tasara Limited - Global Plastic Materials Supply & Indenting Services',
    description: 'Your trusted partner in global plastic materials supply.',
    type: 'website',
    url: 'https://www.tasarabd.com',
    siteName: 'Tasara Limited',
    images: [{ url: '/favicon-96x96.png', width: 800, height: 800, alt: 'Tasara Limited Logo' }],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* AOS CSS - Loading this in head is best for preventing "flash of unstyled content" */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tasara Limited",
              "url": "https://www.tasarabd.com"
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* 1. Loader Overlay */}
        <div id="global-loader">
          <div className="spinner"></div>
        </div>

        {/* 2. Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q0NG6R2H6G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q0NG6R2H6G');
          `}
        </Script>

        {/* 3. AOS & Loader Combined Fix */}
        <Script
          id="aos-init-and-loader"
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="afterInteractive"
          onLoad={() => {
            // Initialize AOS safely
            if ((window as any).AOS) {
              (window as any).AOS.init({
                duration: 800,
                once: true,
              });
            }
            
            // Immediately hide the loader
            const loader = document.getElementById('global-loader');
            if (loader) {
              loader.style.display = 'none';
            }
          }}
        />

        {/* 4. Fail-safe: If the script above takes too long, hide loader on window load */}
        <Script id="loader-fallback" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              var loader = document.getElementById('global-loader');
              if (loader) loader.style.display = 'none';
            });
            // Final safety: definitely hide after 3 seconds
            setTimeout(function() {
              var loader = document.getElementById('global-loader');
              if (loader) loader.style.display = 'none';
            }, 3000);
          `}
        </Script>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
