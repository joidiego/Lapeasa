import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import Container from '@/components/ui/Container';
import CertificationGallery from '@/components/sections/CertificationGallery';
import { CERTIFICATIONS, CERTIFICATION_HEADER, FIRM } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${CERTIFICATION_HEADER.eyebrow} — ${FIRM.name}`,
  description: CERTIFICATION_HEADER.tagline,
};

export default function SertifikasiPage() {
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
              {CERTIFICATION_HEADER.eyebrow}
            </h1>
            <span aria-hidden className="mx-auto mt-3 block h-px w-14 bg-paper/30" />
            <p className="mx-auto mt-5 max-w-xl text-xs tracking-[0.08em] text-paper/60 md:text-sm">
              {CERTIFICATION_HEADER.tagline.toUpperCase()}
            </p>
          </div>

          {/* Ringkasan jumlah — otomatis mengikuti jumlah data. */}
          <div className="mx-auto mt-14 flex max-w-xs items-center justify-center gap-5 border-y border-champagne/30 py-5 md:mt-20">
            <span className="font-display text-5xl leading-none text-champagne">
              {String(CERTIFICATIONS.length).padStart(2, '0')}
            </span>
            <span className="text-left text-xs leading-snug tracking-[0.18em] text-paper/70">
              SERTIFIKASI
              <br />
              &amp; LEGALITAS
            </span>
          </div>

          <div className="mx-auto mt-16 max-w-6xl md:mt-20">
            <CertificationGallery items={CERTIFICATIONS} />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
