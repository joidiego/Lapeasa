import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import Container from '@/components/ui/Container';
import { FIRM, GALLERY_HEADER, GALLERY_IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${GALLERY_HEADER.eyebrow} — ${FIRM.name}`,
  description: GALLERY_HEADER.tagline,
};

export default function GaleriPage() {
  const [featured, ...rest] = GALLERY_IMAGES;

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
              {GALLERY_HEADER.eyebrow}
            </h1>
            <span aria-hidden className="mx-auto mt-3 block h-px w-14 bg-paper/30" />
            <p className="mx-auto mt-5 max-w-xl text-xs tracking-[0.08em] text-paper/60 md:text-sm">
              {GALLERY_HEADER.tagline.toUpperCase()}
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-5xl md:mt-28">
            {featured && <GalleryTile item={featured} large />}

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-10 md:grid-cols-3">
              {rest.map((item) => (
                <GalleryTile key={item.image} item={item} />
              ))}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

function GalleryTile({
  item,
  large = false,
}: {
  item: (typeof GALLERY_IMAGES)[number];
  large?: boolean;
}) {
  return (
    <figure className="group overflow-hidden rounded-sm border border-champagne/30">
      <div className={`overflow-hidden ${large ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.caption}
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.06]"
        />
      </div>
      <figcaption className="border-t border-champagne/20 px-4 py-3 text-xs tracking-[0.08em] text-paper/70">
        {item.caption.toUpperCase()}
      </figcaption>
    </figure>
  );
}
