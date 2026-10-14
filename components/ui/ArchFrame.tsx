import { ReactNode } from 'react';

/**
 * Ornamental "mirror arch" frame — an ogee-topped, oval-bottomed silhouette
 * with a double gold outline and small dot/leaf accents, echoing a
 * decorative mirror motif. The clip shape lives once in <ArchFrameDefs />
 * (mounted a single time per page) and every <ArchFrame> just references it,
 * so the browser only parses the path once no matter how many cards exist.
 *
 * Aspect ratio is fixed at 2/3 (matches the path's 320x480 design grid) —
 * keep any wrapper using this at aspect-[2/3] or the clip will skew.
 */

const OUTER_PATH =
  'M160,8 C142,8 134,26 134,40 C134,49 137,54 132,59 C108,74 88,96 78,124 C68,152 63,182 63,215 C63,320 63,380 63,392 C63,420 78,442 100,458 C118,470 138,476 160,476 C182,476 202,470 220,458 C242,442 257,420 257,392 C257,380 257,320 257,215 C257,182 252,152 242,124 C232,96 212,74 188,59 C183,54 186,49 186,40 C186,26 178,8 160,8 Z';

const INNER_PATH =
  'M160,20 C148,20 142,32 142,42 C142,49 144,53 140,56 C122,68 107,85 99,107 C91,129 87,153 87,178 C87,265 87,315 87,325 C87,347 99,364 116,376 C130,386 145,391 160,391 C175,391 190,386 204,376 C221,364 233,347 233,325 C233,315 233,265 233,178 C233,153 229,129 221,107 C213,85 198,68 180,56 C176,53 178,49 178,42 C178,32 172,20 160,20 Z';

export function ArchFrameDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <clipPath id="arch-frame-clip" clipPathUnits="objectBoundingBox">
          <path
            d="M0.5,0.01667 C0.44375,0.01667 0.41875,0.05417 0.41875,0.08333 C0.41875,0.10208 0.42812,0.1125 0.4125,0.12292 C0.3375,0.15417 0.275,0.2 0.24375,0.25833 C0.2125,0.31667 0.19687,0.37917 0.19687,0.44792 C0.19687,0.66667 0.19687,0.79167 0.19687,0.81667 C0.19687,0.875 0.24375,0.92083 0.3125,0.95417 C0.36875,0.97917 0.43125,0.99167 0.5,0.99167 C0.56875,0.99167 0.63125,0.97917 0.6875,0.95417 C0.75625,0.92083 0.80312,0.875 0.80312,0.81667 C0.80312,0.79167 0.80312,0.66667 0.80312,0.44792 C0.80312,0.37917 0.7875,0.31667 0.75625,0.25833 C0.725,0.2 0.6625,0.15417 0.5875,0.12292 C0.57188,0.1125 0.58125,0.10208 0.58125,0.08333 C0.58125,0.05417 0.55625,0.01667 0.5,0.01667 Z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function ArchFrame({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[2/3] ${className}`}>
      {/* Photo (or any content) clipped to the arch silhouette */}
      <div className="h-full w-full" style={{ clipPath: 'url(#arch-frame-clip)' }}>
        {children}
      </div>

      {/* Decorative double gold outline + dot/leaf accents, drawn on top */}
      <svg
        viewBox="0 0 320 480"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <path d={OUTER_PATH} fill="none" stroke="#B79458" strokeWidth={1.6} />
        <path d={INNER_PATH} fill="none" stroke="#B79458" strokeWidth={1} opacity={0.65} />
        <circle cx={160} cy={8} r={3.2} fill="none" stroke="#B79458" strokeWidth={1.3} />
        <path
          d="M148,464 L160,476 L172,464 C164,471 156,471 148,464 Z"
          fill="#B79458"
        />
      </svg>
    </div>
  );
}
