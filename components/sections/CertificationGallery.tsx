'use client';

import { useCallback, useEffect, useState } from 'react';
import { Award, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

type Certification = {
  title: string;
  issuer: string;
  year: string;
  number: string;
  image: string;
};

/**
 * Layout guarantees (so adding / swapping photos never shifts anything):
 *  - every card is the same width (CSS grid, equal columns, equal row height)
 *  - the media area has a FIXED aspect ratio; photos use object-contain, so
 *    landscape, portrait or square certificates are shown whole, never
 *    cropped and never able to stretch the card
 *  - the text block has a reserved height (title clamped to 2 lines)
 *  - a missing photo renders a placeholder of the exact same dimensions
 */
export default function CertificationGallery({ items }: { items: Certification[] }) {
  const [active, setActive] = useState<number | null>(null);

  // Only certificates with a photo can be opened in the viewer.
  const viewable = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => Boolean(item.image));

  const close = useCallback(() => setActive(null), []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setActive((cur) => {
        if (cur === null || viewable.length === 0) return cur;
        const pos = viewable.findIndex((v) => v.index === cur);
        return viewable[(pos + dir + viewable.length) % viewable.length]?.index ?? cur;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const current = active !== null ? items[active] : null;

  return (
    <>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={`${item.title}-${i}`} className="flex">
            <CertCard item={item} index={i} onOpen={() => setActive(i)} />
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

          {viewable.length > 1 && (
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
                {current.issuer.toUpperCase()} &middot; {current.year}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

function CertCard({
  item,
  index,
  onOpen,
}: {
  item: Certification;
  index: number;
  onOpen: () => void;
}) {
  const hasImage = Boolean(item.image);

  const media = (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-soft">
      {hasImage ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-700 ease-editorial group-hover:scale-[1.04] md:p-5"
          />
          <span
            aria-hidden
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-ink/90 text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <Expand size={14} />
          </span>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          <Award size={34} strokeWidth={1.1} className="text-champagne/70" />
          <p className="px-6 text-[10px] tracking-[0.2em] text-paper/45">
            FOTO SERTIFIKAT BELUM DITAMBAHKAN
          </p>
        </div>
      )}

      {/* Corner brackets: same ornament whether or not a photo exists. */}
      <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-champagne/70" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-champagne/70" />
    </div>
  );

  return (
    <article className="group flex w-full flex-col border border-champagne/30 bg-ink transition-all duration-500 ease-editorial hover:-translate-y-1 hover:border-champagne/70 hover:shadow-[0_18px_40px_-20px_rgba(122,93,43,0.45)]">
      {hasImage ? (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Perbesar ${item.title}`}
          className="group block w-full cursor-zoom-in text-left"
        >
          {media}
        </button>
      ) : (
        media
      )}

      <div className="flex flex-1 flex-col border-t border-champagne/20 px-5 pb-5 pt-4">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg text-champagne">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-[11px] tracking-[0.18em] text-paper/50">{item.year}</span>
        </div>

        {/* min-h reserves two title lines so cards in a row always align */}
        <h3 className="mt-2 line-clamp-2 min-h-[3.2rem] font-display text-xl leading-[1.3] text-paper">
          {item.title}
        </h3>

        <p className="mt-2 truncate text-xs tracking-[0.1em] text-paper/70">{item.issuer.toUpperCase()}</p>
        <p className="mt-auto truncate pt-3 text-[11px] tracking-[0.06em] text-paper/45">{item.number}</p>
      </div>
    </article>
  );
}
