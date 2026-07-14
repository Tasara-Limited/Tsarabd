'use client'; // Next.js বিল্ড এরর এড়াতে এটিকে ক্লায়েন্ট কম্পোনেন্ট করা হলো

import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AOSProvider } from '@/components/aos-provider';
import Loader from '@/components/Loader'; // সরাসরি Loader.tsx ইমপোর্ট

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // লোডারের টোটাল টাইমিং সিঙ্ক (৭ সেকেন্ড)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Tasara Limited - Global Plastic Materials Supply & Indenting Services</title>
        <meta name="description" content="Tasara Limited connects raw material suppliers with international buyers." />
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
        {/* Google Analytics */}
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

        {/* কন্ডিশনাল রেন্ডারিং: লোডিং অবস্থায় প্রিমিয়াম লোডার স্ক্রিন দেখাবে */}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <AOSProvider>
              <main>{children}</main>
            </AOSProvider>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
