'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { PRACTICE_AREAS } from '@/lib/constants';

export default function PracticeAreas() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="practice-areas" className="relative overflow-hidden bg-ink py-28 md:py-40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/sections/practice-areas-bg.webp"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/88" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" aria-hidden />

      <Container className="relative">
        <SectionTitle eyebrow="WHAT WE DO">BIDANG PRAKTIK HUKUM</SectionTitle>

        <ul className="mt-16 grid gap-x-16 md:grid-cols-2">
          {PRACTICE_AREAS.map((area, i) => (
            <li
              key={area.number}
              className="hairline border-t"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <a
                href="#contact"
                className="group flex items-baseline justify-between gap-6 px-6 py-7 md:px-8"
              >
                <span className="flex items-baseline gap-6">
                  <span
                    className={`font-display text-sm transition-colors duration-300 ease-editorial ${
                      activeIndex === i ? 'text-champagne' : 'text-paper/40'
                    }`}
                  >
                    {area.number}
                  </span>
                  <span className="link-underline font-display text-2xl text-paper transition-colors duration-300 ease-editorial group-hover:text-champagne md:text-3xl">
                    {area.title}
                  </span>
                </span>

                <span
                  className={`hidden max-w-xs text-right text-sm leading-relaxed text-paper/55 transition-opacity duration-300 ease-editorial md:block ${
                    activeIndex === i ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {area.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
