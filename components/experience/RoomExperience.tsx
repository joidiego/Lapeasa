'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { FIRM, ROOM_BACKGROUND, ROOM_WALLS } from '@/lib/constants';

const WALL_COUNT = ROOM_WALLS.length;
const STEP_COOLDOWN_MS = 750;
const WHEEL_THRESHOLD = 18;
const SWIPE_THRESHOLD = 42;

interface CardSize {
  width: number;
  height: number;
}

function useCardSize(): CardSize {
  const [size, setSize] = useState<CardSize>({ width: 680, height: 380 });

  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const width = Math.max(300, Math.min(820, vw * 0.58, vh * 0.66));
      const height = width * (768 / 1376);
      setSize({ width, height });
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  return size;
}

/**
 * Wrap i - active into the range [-1, 2]: -1 is the left neighbour, 0 is the
 * centered wall facing the camera, 1 is the right neighbour, and 2 is the
 * one wall that's currently "behind" the viewer (hidden, waiting to slide
 * in from the right on the next step).
 */
function relativeOffset(i: number, active: number): -1 | 0 | 1 | 2 {
  const raw = (((i - active) % WALL_COUNT) + WALL_COUNT) % WALL_COUNT;
  const wrapped = raw === WALL_COUNT - 1 ? -1 : raw;
  return wrapped as -1 | 0 | 1 | 2;
}

export default function RoomExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isAnimatingRef = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const [activeWall, setActiveWall] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  const cardSize = useCardSize();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  const step = (direction: 1 | -1) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setActiveWall((prev) => ((prev + direction) % WALL_COUNT + WALL_COUNT) % WALL_COUNT);
    window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, STEP_COOLDOWN_MS);
  };

  const goTo = (index: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setActiveWall(((index % WALL_COUNT) + WALL_COUNT) % WALL_COUNT);
    window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, STEP_COOLDOWN_MS);
  };

  useEffect(() => {
    if (prefersReduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > WHEEL_THRESHOLD) {
        e.preventDefault();
        step(e.deltaX > 0 ? 1 : -1);
      }
      // Vertical intent is intentionally left alone so the page scrolls
      // normally into the sections below.
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      touchStart.current = { x: t.clientX, y: t.clientY };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!touchStart.current) return;
      const t = e.touches[0];
      if (!t) return;
      const dx = t.clientX - touchStart.current.x;
      const dy = t.clientY - touchStart.current.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
        e.preventDefault();
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current) return;
      const t = e.changedTouches[0];
      if (!t) return;
      const dx = t.clientX - touchStart.current.x;
      const dy = t.clientY - touchStart.current.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
        step(dx < 0 ? 1 : -1);
      }
      touchStart.current = null;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };

    section.addEventListener('wheel', onWheel, { passive: false });
    section.addEventListener('touchstart', onTouchStart, { passive: true });
    section.addEventListener('touchmove', onTouchMove, { passive: false });
    section.addEventListener('touchend', onTouchEnd);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      section.removeEventListener('wheel', onWheel);
      section.removeEventListener('touchstart', onTouchStart);
      section.removeEventListener('touchmove', onTouchMove);
      section.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced]);

  const current = ROOM_WALLS[activeWall] ?? ROOM_WALLS[0]!;

  if (prefersReduced) {
    return (
      <section id="top" className="relative overflow-hidden bg-heroDark px-6 pb-16 pt-32 md:px-10">
        <RoomBackground />
        <div className="relative mx-auto max-w-content">
          <p className="mb-3 text-xs tracking-[0.3em] text-champagne-bright">EST. {FIRM.founded}</p>
          <h1 className="font-display text-balance text-5xl font-medium leading-[0.98] text-heroLight md:text-7xl">
            {FIRM.name}
          </h1>
          <p className="mt-6 max-w-md text-lg text-heroLight/75">{FIRM.tagline}</p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ROOM_WALLS.map((wall) => (
              <figure key={wall.id} className="overflow-hidden rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={wall.image} alt={wall.title} className="h-full w-full object-cover" />
                <figcaption className="mt-3">
                  <p className="text-xs tracking-[0.2em] text-champagne-bright">{wall.eyebrow}</p>
                  <p className="mt-1 font-display text-xl text-champagne-bright">{wall.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-label="Firm introduction — swipe to look around the room"
      className="relative h-[100svh] w-full touch-pan-y select-none overflow-hidden bg-heroDark"
    >
      <RoomBackground />

      {/* Top overlay: firm identity */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 px-6 pt-28 md:px-10 md:pt-32">
        <div className="mx-auto max-w-content">
          <p className="mb-3 text-xs tracking-[0.3em] text-champagne-bright">EST. {FIRM.founded}</p>
          <h1 className="font-display text-balance text-4xl font-medium leading-[0.98] text-heroLight sm:text-5xl md:text-6xl">
            {FIRM.name}
          </h1>
          <p className="mt-4 max-w-sm text-base text-heroLight/75 md:text-lg">{FIRM.tagline}</p>
        </div>
      </div>

      {/* Hallway scene: 3 walls always visible (left / center / right).
          Positioned in the lower ~78% of the section so it never collides
          with the firm name/tagline above it. */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center"
        style={{ top: '21%', perspective: '1700px', perspectiveOrigin: '50% 46%' }}
      >
        {ROOM_WALLS.map((wall, i) => (
          <HallwayWall
            key={wall.id}
            wall={wall}
            offset={relativeOffset(i, activeWall)}
            size={cardSize}
          />
        ))}
      </div>

      {/* Bottom overlay: cloth banner with current wall info + indicators */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col items-center pb-9 md:pb-12">
        <div key={current.id} className="relative flex w-full max-w-xl justify-center px-6">
          <ClothBanner />
          <div className="relative z-10 px-8 py-6 text-center">
            <p className="text-[11px] tracking-[0.3em] text-champagne-bright">{current.eyebrow}</p>
            <p className="text-balance mt-2 font-display text-xl text-champagne-bright sm:text-2xl md:text-3xl">{current.title}</p>
          </div>
        </div>

        <div className="pointer-events-auto mt-6 flex items-center gap-3">
          {ROOM_WALLS.map((wall, i) => (
            <button
              key={wall.id}
              type="button"
              aria-label={`Show ${wall.label}`}
              aria-current={i === activeWall}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ease-editorial ${
                i === activeWall ? 'w-8 bg-champagne-bright' : 'w-4 bg-heroLight/30 hover:bg-heroLight/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomBackground() {
  return (
    <div className="absolute inset-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ROOM_BACKGROUND}
        alt=""
        aria-hidden
        className="h-full w-full scale-105 object-cover"
        style={{ filter: 'blur(7px) brightness(1.04) saturate(0.9)' }}
      />
      <div className="absolute inset-0 bg-heroLight/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-heroDark/25 via-heroDark/10 to-heroDark/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-heroDark/50 via-transparent to-heroDark/50" />
    </div>
  );
}

/**
 * One wall of the hallway. `offset` is -1 (left neighbour), 0 (centered,
 * facing the camera), 1 (right neighbour), or 2 (hidden, waiting behind the
 * viewer). Position/rotation/scale are plain inline styles so the browser's
 * own CSS transition interpolates between states — no JS tweening needed.
 */
function HallwayWall({
  wall,
  offset,
  size,
}: {
  wall: (typeof ROOM_WALLS)[number];
  offset: -1 | 0 | 1 | 2;
  size: CardSize;
}) {
  const byOffset: Record<number, CSSProperties> = {
    0: { transform: 'translateX(0%) rotateY(0deg) scale(1)', opacity: 1, zIndex: 30 },
    [-1]: {
      transform: 'translateX(-84%) rotateY(50deg) scale(0.78)',
      opacity: 1,
      zIndex: 20,
    },
    1: {
      transform: 'translateX(84%) rotateY(-50deg) scale(0.78)',
      opacity: 1,
      zIndex: 20,
    },
    2: {
      transform: 'translateX(170%) rotateY(-50deg) scale(0.6)',
      opacity: 0,
      zIndex: 10,
    },
  };

  const maskStyle: CSSProperties = {
    WebkitMaskImage: `url(${wall.mask})`,
    maskImage: `url(${wall.mask})`,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  };

  return (
    <div
      className="absolute"
      style={{
        width: size.width,
        height: size.height,
        marginLeft: -size.width / 2,
        marginTop: -size.height / 2,
        top: '50%',
        left: '50%',
        transition: 'transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease',
        pointerEvents: offset === 0 ? 'auto' : 'none',
        ...byOffset[offset],
      }}
    >
      <div className="relative h-full w-full" style={{ animation: 'float-card 7s ease-in-out infinite' }}>
        {/* milky white glow bleeding out from the organic edge */}
        <div
          aria-hidden
          className="absolute -inset-5 bg-heroLight/90"
          style={{ ...maskStyle, filter: 'blur(22px)', opacity: 0.55 }}
        />
        <div
          aria-hidden
          className="absolute -inset-2 bg-heroLight"
          style={{ ...maskStyle, filter: 'blur(8px)', opacity: 0.7 }}
        />
        {/* the image itself */}
        <div
          className="absolute inset-0 bg-cover bg-center shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          style={{ backgroundImage: `url(${wall.image})`, ...maskStyle }}
        />
        {/* legibility scrim + single-line label, baked onto the photo
            itself. Always bottom-left, regardless of which side of the
            carousel this card sits on. */}
        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-left md:p-8" style={maskStyle}>
          <div className="absolute inset-0 bg-gradient-to-t from-heroDark/85 via-heroDark/15 to-transparent" />
          <p className="relative text-xs font-medium tracking-[0.28em] text-champagne-bright md:text-sm">
            {wall.eyebrow}
          </p>
        </div>

        {/* Only the centered wall (offset 0) receives pointer events at
            all (see the outer div's pointerEvents above), so this overlay
            only ever catches clicks when its wall is already facing the
            viewer — tapping a side wall never accidentally navigates. */}
        {wall.href && (
          <Link
            href={wall.href}
            className="absolute inset-0 z-10 cursor-pointer"
            style={maskStyle}
            aria-label={`${wall.eyebrow} — ${wall.title}`}
          />
        )}
      </div>
    </div>
  );
}

/**
 * A soft, milky-white silk ribbon behind the info text, with two layered
 * wavy shapes that drift slowly to feel like cloth stirring in a breeze.
 */
function ClothBanner() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 640 220"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      style={{ filter: 'drop-shadow(0 18px 40px rgba(0,0,0,0.28))' }}
    >
      <defs>
        <linearGradient id="clothGradientBack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EFE8D8" />
          <stop offset="100%" stopColor="#FBF8F0" />
        </linearGradient>
        <linearGradient id="clothGradientFront" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="55%" stopColor="#F6F0E3" />
          <stop offset="100%" stopColor="#FFFDF7" />
        </linearGradient>
      </defs>

      <path
        d="M0,70 C110,20 180,120 320,80 C460,40 540,110 640,60 L640,170 C520,220 440,140 320,175 C200,210 100,150 0,190 Z"
        fill="url(#clothGradientBack)"
        opacity="0.75"
        style={{ animation: 'cloth-drift-a 9s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}
      />
      <path
        d="M0,90 C130,50 210,140 320,100 C430,60 500,130 640,90 L640,185 C500,225 420,155 320,185 C220,215 110,165 0,200 Z"
        fill="url(#clothGradientFront)"
        opacity="0.95"
        style={{ animation: 'cloth-drift-b 7s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}
      />
    </svg>
  );
}
