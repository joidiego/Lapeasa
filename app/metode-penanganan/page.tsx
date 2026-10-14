import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import Container from '@/components/ui/Container';
import MethodContactReveal from '@/components/sections/MethodContactReveal';
import { FIRM, METHOD_HEADER, METHOD_STEPS } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${METHOD_HEADER.eyebrow} — ${FIRM.name}`,
  description: METHOD_HEADER.tagline,
};

export default function MetodePenangananPage() {
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
              {METHOD_HEADER.eyebrow}
            </h1>
            <span aria-hidden className="mx-auto mt-3 block h-px w-14 bg-paper/30" />
            <p className="mx-auto mt-5 max-w-xl text-xs tracking-[0.08em] text-paper/60 md:text-sm">
              {METHOD_HEADER.tagline.toUpperCase()}
            </p>
          </div>

          <ol className="relative mx-auto mt-24 max-w-5xl md:mt-32">
            {/* Vertical spine: left edge on mobile, dead-center on desktop. */}
            <div
              aria-hidden
              className="absolute bottom-2 left-4 top-2 w-px bg-champagne/30 md:left-1/2 md:-translate-x-1/2"
            />

            <div className="flex flex-col gap-14 md:gap-20">
              {METHOD_STEPS.map((step, i) => (
                <MethodStep key={step.number} step={step} side={i % 2 === 0 ? 'right' : 'left'} />
              ))}
            </div>
          </ol>

          <div className="mt-24 grid gap-10 md:mt-32 md:grid-cols-12 md:items-center md:gap-16">
            <div className="overflow-hidden rounded-sm md:col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lawyers/lawyer-bg.webp"
                alt="Ruang kerja tim hukum kami"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="md:col-span-7">
              <MethodContactReveal />
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

function MethodStep({
  step,
  side,
}: {
  step: (typeof METHOD_STEPS)[number];
  side: 'left' | 'right';
}) {
  return (
    <li className="relative list-none">
      {/* Mobile: stacked, circle + label on one line, box below, everything
          left of the spine's left-edge position. */}
      <div className="flex gap-5 md:hidden">
        <StepNumber number={step.number} />
        <div className="flex-1 pt-1">
          <p className="text-xs font-medium tracking-[0.1em] text-paper">{step.label}</p>
          <div className="mt-3 rounded-sm border border-champagne/40 px-5 py-4">
            <p className="text-sm leading-relaxed text-paper/70">{step.description}</p>
          </div>
        </div>
      </div>

      {/* Desktop: zigzag either side of the centered spine. */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10">
        <div className="flex justify-end">{side === 'left' && <StepContent step={step} side="left" />}</div>
        <StepNumber number={step.number} />
        <div>{side === 'right' && <StepContent step={step} side="right" />}</div>
      </div>
    </li>
  );
}

function StepNumber({ number }: { number: string }) {
  return (
    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne font-display text-sm text-ink md:h-11 md:w-11 md:text-base">
      {number}
    </span>
  );
}

function StepContent({
  step,
  side,
}: {
  step: (typeof METHOD_STEPS)[number];
  side: 'left' | 'right';
}) {
  return (
    <div className={`flex w-full max-w-md items-center gap-6 ${side === 'left' ? 'flex-row-reverse' : ''}`}>
      <span aria-hidden className="h-px w-6 shrink-0 bg-champagne/50 lg:w-14" />
      <p
        className={`w-28 shrink-0 text-xs font-medium leading-snug tracking-[0.08em] text-paper lg:w-40 ${
          side === 'left' ? 'text-right' : 'text-left'
        }`}
      >
        {step.label}
      </p>
      <div className="min-w-0 flex-1 rounded-sm border border-champagne/40 px-5 py-4">
        <p className={`text-sm leading-relaxed text-paper/70 ${side === 'left' ? 'text-right' : 'text-left'}`}>
          {step.description}
        </p>
      </div>
    </div>
  );
}
