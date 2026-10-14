import { Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import { STATS } from '@/lib/constants';

export default function StatsSection() {
  return (
    <section className="bg-ink-soft py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-paper/15">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:px-6">
              <p className="font-display text-4xl font-medium text-champagne md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] tracking-[0.18em] text-paper/60 md:text-xs">
                {stat.label.toUpperCase()}
              </p>
            </div>
          ))}

          <div className="text-center md:px-6">
            <p className="font-display text-4xl font-medium text-champagne md:text-5xl">4.9</p>
            <div className="mt-2 flex justify-center gap-0.5 text-champagne" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 text-[11px] tracking-[0.18em] text-paper/60 md:text-xs">
              RATING KLIEN
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
