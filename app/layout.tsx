import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { FIRM } from '@/lib/constants';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const title = `${FIRM.name} — Strategic Legal Counsel`;
const description =
  'Independent legal counsel providing strategic representation across complex corporate, commercial, and dispute matters.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.example.com'),
  title,
  description,
  icons: {
    icon: '/logo/favicon.svg',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: FIRM.name,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
