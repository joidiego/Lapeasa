'use client';

import { useCallback, useEffect, useState } from 'react';
import { Award, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import type { Certificate } from '@/lib/certificates';

/**
 * Tampilan "pigura": setiap sertifikat berada di dalam bingkai ganda emas
 * dengan matte (passe-partout) berukuran TETAP (rasio 7:5). Foto memakai
 * object-contain sehingga landscape / portrait / persegi selalu muat utuh
 * tanpa mengubah ukuran kartu. Placeholder memakai dimensi yang sama persis.
 */
export default function CertificateShowcase({ items }: { items: Certificate[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  const step = useCallback(
    (dir: 1 | -1) => {
      const withImage = items.map((c, i) => (c.image ? i : -1)).filter((i) => i >= 0);
      setActive((cur) => {
        if (cur === null || withImage.length === 0) return cur;
        const pos = withImage.indexOf(cur);
        return withImage[(pos + dir + withImage.length) % withImage.length] ?? cur;
      });
    },
    [items],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close, step]);

  const current = active !== null ? items[active] : undefined;
  const imageCount = items.filter((c) => c.image).length;

  return (
    <>
      <ul className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
        {items.map((item, i) => (
          <li key={`${item.title}-${i}`}>
            <Frame item={item} index={i} onOpen={() => setActive(i)} />
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-heroDark/90 p-4 backdrop-blur-sm md:p-10"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Tutup"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-heroLight/80 transition-colors hover:text-champagne-bright md:right-8 md:top-8"
          >
            <X size={26} />
          </button>

          {imageCount > 1 && (
            <>
              <button
                type="button"
                aria-label="Sebelumnya"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-heroLight/80 transition-colors hover:text-champagne-bright md:left-8"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                type="button"
                aria-label="Berikutnya"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-heroLight/80 transition-colors hover:text-champagne-bright md:right-8"
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.image}
              alt={current.title}
              className="max-h-[78vh] w-auto max-w-full border border-champagne-bright/40 bg-white object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-display text-xl text-heroLight md:text-2xl">{current.title}</p>
              <p className="mt-1 text-xs tracking-[0.14em] text-heroLight/60">
                {current.issuer.toUpperCase()} &middot; {current.date.toUpperCase()}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

function Frame({
  item,
  index,
  onOpen,
}: {
  item: Certificate;
  index: number;
  onOpen: () => void;
}) {
  const hasImage = Boolean(item.image);

  const picture = (
    <div className="relative border border-champagne/60 p-2 transition-colors duration-500 ease-editorial group-hover:border-champagne md:p-2.5">
      <div className="relative border border-champagne/30 bg-ink-panel p-4 shadow-[inset_0_2px_14px_rgba(11,10,9,0.08)] md:p-6">
        {/* Area foto berukuran tetap */}
        <div className="relative aspect-[7/5] w-full overflow-hidden bg-ink shadow-[0_6px_22px_-8px_rgba(11,10,9,0.35)]">
          {hasImage ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
              />
              <span
                aria-hidden
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-ink/90 text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <Expand size={14} />
              </span>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <Award size={38} strokeWidth={1} className="text-champagne/70" />
              <p className="px-6 text-[10px] tracking-[0.2em] text-paper/45">
                FOTO SERTIFIKAT BELUM DITAMBAHKAN
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <article className="group">
      {hasImage ? (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Perbesar ${item.title}`}
          className="block w-full cursor-zoom-in text-left"
        >
          {picture}
        </button>
      ) : (
        picture
      )}

      {/* Keterangan: tinggi dicadangkan agar baris selalu sejajar */}
      <div className="mt-6 flex gap-5">
        <span className="font-display text-4xl leading-none text-champagne/80">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1 border-l border-champagne/30 pl-5">
          <p className="text-[10px] tracking-[0.24em] text-champagne">{item.category.toUpperCase()}</p>
          <h3 className="mt-1.5 line-clamp-2 min-h-[3.2rem] font-display text-xl leading-[1.3] text-paper md:text-2xl md:min-h-[3.6rem]">
            {item.title}
          </h3>
          <p className="mt-2 truncate text-xs tracking-[0.08em] text-paper/60">
            {item.issuer} &middot; {item.date}
          </p>
        </div>
      </div>
    </article>
  );
}
