import { ReactNode } from 'react';

/**
 * Ornamental square frame — a clean 1:1 square with a double gold outline,
 * a small lotus flourish centered on the top edge, matching swirl ticks
 * either side of it, quarter-leaf accents in each corner, and a small
 * accent on the bottom edge. Same champagne line-art language as
 * ArchFrame, but square instead of arch/oval — used for the lawyers
 * carousel so the card reads as a standard-size portrait square, not an
 * oversized mirror frame.
 *
 * Aspect ratio is fixed at 1/1 — keep any wrapper using this at
 * aspect-square or the border proportions will skew.
 */

export default function SquareFrame({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative aspect-square ${className}`}>
      {/* Photo (or any content), inset slightly so the gold border reads
          as a frame around the image rather than sitting on top of it */}
      <div className="absolute inset-[6%] overflow-hidden">{children}</div>

      {/* Decorative square outline + edge/corner accents, drawn on top */}
      <svg
        viewBox="0 0 300 300"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        {/* double gold outline */}
        <rect x={14} y={14} width={272} height={272} fill="none" stroke="#B79458" strokeWidth={1.6} />
        <rect x={22} y={22} width={256} height={256} fill="none" stroke="#B79458" strokeWidth={1} opacity={0.6} />

        {/* corner leaf accents */}
        <path d="M14,14 L34,14 M14,14 L14,34 M14,14 C20,16 24,20 26,26" fill="none" stroke="#B79458" strokeWidth={1.1} />
        <path d="M286,14 L266,14 M286,14 L286,34 M286,14 C280,16 276,20 274,26" fill="none" stroke="#B79458" strokeWidth={1.1} />
        <path d="M286,286 L266,286 M286,286 L286,266 M286,286 C280,284 276,280 274,274" fill="none" stroke="#B79458" strokeWidth={1.1} />
        <path d="M14,286 L34,286 M14,286 L14,266 M14,286 C20,284 24,280 26,274" fill="none" stroke="#B79458" strokeWidth={1.1} />

        {/* lotus flourish, centered on the top edge */}
        <g transform="translate(150 14)">
          <path d="M0,-18 L5,-2 L0,-6 L-5,-2 Z" fill="#B79458" />
          <path
            d="M-15,3 C-9,-5 -4,-4 0,1 C4,-4 9,-5 15,3 C9,1 4,3 0,7 C-4,3 -9,1 -15,3 Z"
            fill="none"
            stroke="#B79458"
            strokeWidth={1.2}
          />
          <circle cx={0} cy={-20} r={2} fill="none" stroke="#B79458" strokeWidth={1} />
        </g>

        {/* small swirl ticks either side of the lotus */}
        <path d="M112,14 C102,9 93,13 88,21" fill="none" stroke="#B79458" strokeWidth={1} opacity={0.7} />
        <path d="M188,14 C198,9 207,13 212,21" fill="none" stroke="#B79458" strokeWidth={1} opacity={0.7} />

        {/* bottom edge accent */}
        <path d="M136,286 L150,277 L164,286" fill="none" stroke="#B79458" strokeWidth={1.2} />
        <circle cx={150} cy={272} r={1.6} fill="#B79458" />
      </svg>
    </div>
  );
}
