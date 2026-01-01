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

  description:
    'Tasara Limited connects raw material suppliers with international buyers. Tasara offers a global network for sourcing high-quality plastic materials, providing indenting, procurement, and supply chain solutions tailored for diverse industries worldwide.',

  keywords:
    'Tasara, Tasarabd, plastic materials, indenting services, supply chain, global sourcing, polypropylene, polyethylene, polystyrene, procurement, Bangladesh, Tasara Bangladesh',

  alternates: {
    canonical: 'https://www.tasarabd.com',
  },

  openGraph: {
    title: 'Tasara Limited - Global Plastic Materials Supply & Indenting Services',
    description:
      'Your trusted partner in global plastic materials supply, indenting, and sourcing solutions from Bangladesh.',
    type: 'website',
    url: 'https://www.tasarabd.com',
    siteName: 'Tasara Limited',
    images: [
      {
        url: '/favicon-96x96.png',
        width: 800,
        height: 800,
        alt: 'Tasara Limited Logo',
      },
    ],
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tasara Limited - Plastics Supply & Indenting Business',
    description:
      'Tasara Limited offers global plastic materials supply, indenting, sourcing, and procurement services from Bangladesh.',
    images: ['/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#5bbad5' },
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
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
        {/* AOS CSS */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tasara Limited",
              "alternateName": "Global plastic materials supply and indenting services",
              "url": "https://www.tasarabd.com"
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* 1. The Loader Overlay */}
        <div id="global-loader">
          <div className="spinner"></div>
        </div>

        {/* 2. FAIL-SAFE SCRIPT: Forces white screen to hide even if AOS fails */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var hideLoader = function() {
              var loader = document.getElementById('global-loader');
              if (loader) { loader.style.display = 'none'; }
            };
            window.addEventListener('load', hideLoader);
            setTimeout(hideLoader, 3000); // Backup: hide after 3s
          })();
        ` }} />

        {/* 3. Your Original Google Analytics */}
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

        {/* 4. AOS JS and Loader Cleanup */}
        <Script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="afterInteractive"
          onLoad={() => {
            // @ts-ignore
            if (typeof AOS !== 'undefined') {
              AOS.init({
                duration: 1000,
                once: true,
              });
            }
            // Hide loader immediately once script is ready
            const loader = document.getElementById('global-loader');
            if (loader) { loader.style.display = 'none'; }
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
