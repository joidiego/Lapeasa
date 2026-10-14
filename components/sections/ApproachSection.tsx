import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { APPROACH_PRINCIPLES } from '@/lib/constants';

export default function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/sections/approach-bg.webp"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/50" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/25 to-ink/85" aria-hidden />

      <Container className="relative">
        <SectionTitle eyebrow="HOW WE WORK" align="center">
          KODE ETIK & KOMITMEN INTERNAL
        </SectionTitle>

        <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH_PRINCIPLES.map((p) => (
            <div key={p.number} className="text-center lg:text-left">
              <p className="font-display text-5xl text-champagne/80">{p.number}</p>
              <h3 className="mt-4 font-display text-2xl text-paper">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{p.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
