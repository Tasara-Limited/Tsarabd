import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const dynamic = 'force-dynamic';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tasarabd.com'),

  title: 'Tasara Limited - Global Plastic Materials Supply & Indenting Services',

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
        url: '/favicon-96x96.png', // your logo file
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
    images: ['https://www.tasarabd.com/logo.png'],
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
    icon: [
      { url: '/favicon.ico', rel: 'icon' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#5bbad5',
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
