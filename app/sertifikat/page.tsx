import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import Container from '@/components/ui/Container';
import CertificateShowcase from '@/components/sections/CertificateShowcase';
import { FIRM } from '@/lib/constants';
import { CERTIFICATES, CERTIFICATE_HEADER } from '@/lib/certificates';

export const metadata: Metadata = {
  title: `${CERTIFICATE_HEADER.eyebrow} — ${FIRM.name}`,
  description: CERTIFICATE_HEADER.tagline,
};

export default function SertifikatPage() {
  return (
    <>
      <Navbar transparentOnTop={false} />

      <main className="bg-ink pb-28 pt-32 md:pb-40 md:pt-40">
        <Container>
          <Link
            href="/"
            className="link-underline inline-flex items-center gap-2 text-xs tracking-[0.14em] text-paper/60 hover:text-champagne"
          >
            <ArrowLeft size={14} />
            KEMBALI KE BERANDA
          </Link>

          <div className="mt-10 text-center">
            <h1 className="inline-block font-display text-2xl tracking-[0.1em] text-paper md:text-3xl">
              {CERTIFICATE_HEADER.eyebrow}
            </h1>
            <span aria-hidden className="mx-auto mt-3 block h-px w-14 bg-paper/30" />
            <p className="mx-auto mt-5 max-w-xl text-xs tracking-[0.08em] text-paper/60 md:text-sm">
              {CERTIFICATE_HEADER.tagline.toUpperCase()}
            </p>
            <p className="mt-8 font-display text-sm tracking-[0.2em] text-champagne">
              {String(CERTIFICATES.length).padStart(2, '0')} KOLEKSI SERTIFIKAT
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl md:mt-20">
            <CertificateShowcase items={CERTIFICATES} />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
