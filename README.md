# Meridian & Voss — Premium Law Firm Website

A single-page law firm website built with Next.js (App Router), TypeScript,
Tailwind CSS, and GSAP. Frontend-only — no backend, database, or auth.

The hero is a custom **3D room experience**: a still, blurred room forms the
backdrop, and four framed photos "float" in front of it — one per wall.
Swiping or scrolling horizontally rotates the camera to the next wall, like
turning inside a cube. Scrolling vertically behaves like a normal page and
carries on into the sections below.

## 1. Requirements

- Node.js 18.18+ (Node 20 LTS recommended)
- npm 9+

## 2. Install & run

```bash
# unzip the project, then inside the folder:
npm install
npm run dev
```

Open http://localhost:3000.

For a production build:

```bash
npm run build
npm start
```

> The build fetches "Cormorant Garamond" and "Inter" from Google Fonts at
> build time via `next/font/google`. This requires normal internet access —
> if you build inside a fully offline/sandboxed environment, the build will
> fail on the font fetch. It works normally on a regular dev machine, CI
> runner, or hosting provider (Vercel, etc.).

## 3. How the room experience works

Component: `components/experience/RoomExperience.tsx`.

- **Background layer** — `public/images/room/wall-bg.webp`, blurred and
  tinted with a soft white wash, stays fixed behind everything as the
  ambient backdrop. It doesn't move.
- **Hallway layout** — three walls are always visible at once: the current
  wall sits flat and centered facing the camera, its two neighbours are
  angled away into the distance on either side (a real CSS 3D perspective —
  `perspective` on the container, each wall transformed with
  `translateX() rotateY() scale()`), like standing in a corridor. The one
  remaining wall (there are four in total) waits just out of frame to the
  right, ready to slide in.
- **Floating photos with a liquid edge and baked-in copy** — each wall's
  photo (`public/images/room/wall-front.webp`, `wall-right.webp`,
  `wall-back.webp`, `wall-left.webp`) is masked with an organic,
  hand-generated "flowing" edge (`public/images/room/masks/blob-0.png` …
  `blob-3.png`) plus a soft blurred white glow behind it, so the edge reads
  like a milky liquid bleed rather than a hard photo crop. Every wall — not
  just the centered one — shows its own eyebrow/title/body text directly on
  the photo (from `ROOM_WALLS` in `lib/constants.ts`), with a dark gradient
  scrim behind it for legibility. Text on the left/right neighbour walls
  hugs the inner edge (toward screen center) so it stays readable even when
  part of that wall runs off-screen. Each photo also has a slow, subtle idle
  float animation.
- **Rotation** — changing walls re-computes each wall's position (left /
  center / right / hidden) and the browser's own CSS transition animates
  between the old and new positions — no JS animation loop needed.
- **Input handling**:
  - Trackpad/mouse: horizontal wheel movement (`deltaX`) steps to the next
    wall; vertical wheel movement is left untouched so the page scrolls
    normally into the sections below.
  - Touch: a clearly horizontal swipe steps walls; a vertical swipe scrolls
    the page as usual.
  - Keyboard: Left/Right arrow keys step walls (works anywhere on the page).
  - A cooldown (~750ms) after each step stops a single swipe/scroll gesture
    from skipping through multiple walls at once.
- **Info banner** — the bottom overlay shows the current wall's eyebrow and
  title on a hand-drawn silk "cloth" banner: two layered wavy SVG shapes in
  milky ivory tones, each animated with a slow, independent drift
  (`cloth-drift-a` / `cloth-drift-b` in `globals.css`) so the banner reads as
  fabric stirring in a breeze rather than a static shape. A 4-dot indicator
  below it shows (and lets you jump to) the current wall.
- **Reduced motion**: if `prefers-reduced-motion` is set, the whole
  interactive scene is replaced with a simple static 2×2 grid of the four
  wall images — no rotation, no interaction required.

This was verified visually (not just compiled) using a headless Chromium
session in the build sandbox — see section 7.

### Replacing the room images

1. Export four new photos, ideally close to **1376×768** (the current
   source ratio), and a fifth for the background.
2. Drop them into `public/images/room/`, keeping the same filenames
   (`wall-front.webp`, `wall-right.webp`, `wall-back.webp`, `wall-left.webp`,
   `wall-bg.webp`) — or update the paths in `ROOM_WALLS` / `ROOM_BACKGROUND`
   in `lib/constants.ts` if you rename them.
3. The organic edge masks are independent of the photos, so you can reuse
   the existing `masks/blob-*.png` as-is. New blob shapes can be regenerated
   with any tool that outputs a white-on-transparent PNG silhouette (used as
   a CSS `mask-image`).

## 4. Where to edit content

Everything text-based lives in `lib/constants.ts`:

- `FIRM` — name, tagline, contact details (shown in the room's top overlay
  and in the Contact section).
- `ROOM_WALLS` — the four wall entries (`eyebrow`, `title`, `description`,
  image path, mask path). `description` isn't rendered on screen yet but is
  there if you want to extend the bottom overlay with more copy.
- `NAV_LINKS`, `PRACTICE_AREAS`, `LAWYERS`, `CASES`, `APPROACH_PRINCIPLES` —
  same as before, unchanged.

All copy currently in the project (firm name, wall titles, about text,
practice descriptions, lawyer bios, etc.) is **placeholder text** — replace
it with real copy in that one file.

**Lawyer photos:** `components/sections/LawyersSection.tsx` renders a
gradient + initials placeholder per lawyer (there's a commented-out
`<Image>` block ready to uncomment once you have real portraits — see the
comment in that file).

## 5. Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css         Base styles, keyframes, reduced-motion handling

components/
  navigation/Navbar.tsx    Fixed nav, scroll-aware, mobile overlay menu
  navigation/Footer.tsx
  experience/RoomExperience.tsx   The 3D room hero (see section 3)
  sections/                About, Practice Areas, Lawyers, Cases,
                            Approach, Contact
  ui/                       Button, Container, SectionTitle — shared

lib/
  constants.ts         ALL firm content + room config lives here

public/
  images/room/          Room background, 4 wall photos, edge masks
  images/sections/       Section-specific background photos (e.g. Practice Areas desk shot)
  logo/                 Favicon / logo assets
```

## 6. Design system quick reference

- Colors (`tailwind.config.ts`): `ink` (near-black), `paper` (warm ivory),
  `champagne` (muted gold accent, used sparingly for lines, active states,
  and small highlights only).
- Type: display headings use Cormorant Garamond (`font-display`), UI/body
  text uses Inter (`font-body`).
- Motion: the room experience is the main interactive moment; everything
  else uses restrained hover/reveal motion. Everything respects
  `prefers-reduced-motion`.

## 7. Lawyers carousel & Approach background

`components/sections/LawyersSection.tsx` renders all 7 advisors as a
horizontal swipe/scroll carousel (native CSS scroll-snap), matching the
homepage's horizontal-navigation feel: trackpad/mouse horizontal wheel
movement scrolls the carousel while vertical wheel movement still scrolls
the page normally, touch swipe works natively, and there are arrow buttons
(desktop) plus dot indicators (mobile) that stay in sync via an
IntersectionObserver. Falls back to a static grid under
`prefers-reduced-motion`. Each card uses `public/images/lawyers/lawyer-bg.webp`
as a shared backdrop with the advisor's name/position/practice/bio
overlaid — replace that image (and add individual portraits per advisor via
the `image` field in `LAWYERS`) once real photos are available.

`components/sections/ApproachSection.tsx` now has a full-bleed background
(`public/images/sections/approach-bg.webp`) with the same dark-overlay
treatment as Practice Areas, so the text stays fully legible.

## 8. Notes on the sandbox build check

This project was built and verified with `npx tsc --noEmit` and
`npm run build` in a network-restricted sandbox that couldn't reach
`fonts.googleapis.com`, so the font fetch step was temporarily stubbed out
to confirm the rest of the app compiles and statically generates
successfully (it did — 4/4 pages, no type errors). The shipped
`app/layout.tsx` uses the normal `next/font/google` imports, which will
fetch fonts at build time on any machine with regular internet access.

Unlike the initial version of this component, the hallway/coverflow
interaction **was** visually verified — a headless Chromium session (via
Playwright) loaded the production build and captured screenshots before and
after simulated horizontal swipes, a vertical scroll (confirmed it scrolls
the page normally into the About section, not the room), a 390×844 mobile
viewport, and the `prefers-reduced-motion` fallback. All behaved as
described above. Fine-tuning knobs (step speed, swipe sensitivity, card
size, banner size) are grouped near the top of
`components/experience/RoomExperience.tsx` and in the `ClothBanner` /
`HallwayWall` helpers if you want to adjust the feel further.
