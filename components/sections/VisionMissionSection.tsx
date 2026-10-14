import Container from '@/components/ui/Container';
import { MISSION, VISION, VISION_MISSION_IMAGE } from '@/lib/constants';

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="bg-ink py-28 md:py-40">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
          {/* Left: floating photo — replace /public/images/about/visi-misi.jpg */}
          <div className="mx-auto w-full max-w-md md:mx-0">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
              style={{ animation: 'float-image 7s ease-in-out infinite' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={VISION_MISSION_IMAGE}
                alt="Tim LAPEASA LOW OFFICE & Partners"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-champagne/20" aria-hidden />
            </div>
          </div>

          {/* Right: swaying copy */}
          <div style={{ animation: 'sway-text 8s ease-in-out infinite' }}>
            <p className="text-xs tracking-[0.28em] text-champagne">VISI &amp; MISI</p>

            <h2 className="mt-4 font-display text-balance text-4xl font-medium leading-[1.1] text-paper md:text-5xl">
              Visi Kami
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-paper/75">{VISION}</p>

            <h3 className="mt-10 font-display text-2xl text-paper">Misi Kami</h3>
            <ul className="mt-5 space-y-4">
              {MISSION.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-champagne" aria-hidden>
                    —
                  </span>
                  <span className="text-base leading-relaxed text-paper/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-24 h-px w-full" aria-hidden />
      </Container>
    </section>
  );
}
