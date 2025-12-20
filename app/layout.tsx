import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tasarabd.com'),
  title: 'Tasara Limited - Global Plastic Materials Supply & Indenting Services',
  description: 'Tasara Limited connects raw material suppliers with international buyers. ISO 9001 certified supply, indenting, and procurement services for plastic materials since 2014.',
  keywords: 'plastic materials, indenting services, supply chain, polypropylene, polyethylene, polystyrene, global sourcing, Bangladesh',
  openGraph: {
    title: 'Tasara Limited - Global Plastic Materials Supply',
    description: 'Your trusted partner in global plastic materials supply and indenting services',
    type: 'website',
  },



  icons: {
    icon: [
      { url: '/favicon.ico' }, // Standard favicon
      {
        url: '/favicon-96x96.png', // Use this if you want to specify a specific size
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/favicon.svg', // SVG for modern browsers
        type: 'image/svg+xml',
      },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg', // Reuse your SVG for Safari pinned tab
        color: '#5bbad5', // Optional: change color for Safari pinned tab
      },
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
