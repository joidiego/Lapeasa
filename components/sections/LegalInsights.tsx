'use client';

import { useCallback, useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

type Insight = {
  number: string;
  category: string;
  title: string;
  basis: string;
  paragraphs: string[];
};

type Header = {
  author: string;
  readMore: string;
  basisLabel: string;
  disclaimer: string;
};

/**
 * Kartu berukuran sama (grid stretch + ringkasan dipotong 5 baris), jadi
 * panjang tulisan tidak menggeser tata letak. Teks lengkap dibuka di jendela
 * dengan area baca yang bisa di-scroll sendiri.
 */
export default function LegalInsights({ items, header }: { items: Insight[]; header: Header }) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close]);

  const current = active !== null ? items[active] : undefined;

  return (
    <>
      <ul className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
        {items.map((item, i) => (
          <li key={item.number} className="flex">
            <article className="group flex w-full flex-col border border-champagne/30 px-6 py-8 transition-colors duration-500 ease-editorial hover:border-champagne/70 md:px-8 md:py-10">
              <p className="text-[11px] tracking-[0.24em] text-champagne">
                {item.number} &middot; {item.category}
              </p>
              <h3 className="mt-3 line-clamp-3 min-h-[5.5rem] font-display text-2xl leading-[1.25] text-paper md:min-h-[6.5rem] md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 line-clamp-5 text-sm leading-relaxed text-paper/60">
                {item.paragraphs[0]}
              </p>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-xs tracking-[0.16em] text-champagne transition-all duration-300 hover:gap-3"
              >
                {header.readMore.toUpperCase()}
                <ArrowRight size={14} />
              </button>
            </article>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-heroDark/85 p-4 backdrop-blur-sm md:p-10"
          onClick={close}
        >
          <div
            className="relative flex max-h-full w-full max-w-2xl flex-col border border-champagne/60 bg-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Tutup"
              onClick={close}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center text-paper/60 transition-colors hover:text-champagne"
            >
              <X size={22} />
            </button>

            <div className="overflow-y-auto px-6 pb-8 pt-10 md:px-10 md:pb-10 md:pt-12">
              <p className="text-[11px] tracking-[0.24em] text-champagne">{current.category}</p>
              <h3 className="mt-3 pr-8 font-display text-2xl leading-[1.25] text-paper md:text-3xl">
                {current.title}
              </h3>
              <p className="mt-3 text-xs tracking-[0.08em] text-paper/45">
                {header.author} &middot; {header.basisLabel}: {current.basis}
              </p>
              <span aria-hidden className="mt-6 block h-px w-12 bg-champagne/60" />

              <div className="mt-6 space-y-5 text-sm leading-[1.85] text-paper/75 md:text-[15px]">
                {current.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <p className="mt-8 border-t border-champagne/25 pt-5 text-xs leading-relaxed text-paper/45">
                {header.disclaimer}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
