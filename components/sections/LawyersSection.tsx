import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import SquareFrame from '@/components/ui/SquareFrame';
import { LAWYERS } from '@/lib/constants';

const DISPLAY_LAWYERS = LAWYERS;

export default function LawyersSection() {
  return (
    <section id="lawyers" className="bg-ink py-28 md:py-40">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionTitle eyebrow="THE TEAM">Penasihat Hukum</SectionTitle>
        </div>

        {/* All advisors are shown at once as a wrapping grid — no
            horizontal scroll track and no prev/next arrows. Every card
            gets the same fixed width so all photos render at one
            consistent size instead of following each image's own
            natural size. */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-14">
          {DISPLAY_LAWYERS.map((lawyer, i) => (
            <div key={lawyer.name} className="w-[200px] sm:w-[220px] lg:w-[240px]">
              <LawyerCard lawyer={lawyer} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LawyerCard({
  lawyer,
  index,
}: {
  lawyer: (typeof LAWYERS)[number];
  index: number;
}) {
  return (
    <article className="group text-center">
      <div
        className="will-change-transform"
        style={{
          animation: 'float-card 6s ease-in-out infinite',
          animationDelay: `${index * 0.35}s`,
        }}
      >
        <SquareFrame className="transition-transform duration-500 ease-editorial group-hover:-translate-y-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lawyer.image}
            alt={lawyer.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.06]"
          />
        </SquareFrame>
      </div>

      <h3 className="mt-5 font-display text-xl text-paper">{lawyer.name}</h3>

      <p className="mt-1 text-xs tracking-[0.1em] text-champagne">
        {lawyer.position.toUpperCase()}
      </p>

      <p className="mt-1 text-xs text-paper/60">{lawyer.practice}</p>
    </article>
  );
}
