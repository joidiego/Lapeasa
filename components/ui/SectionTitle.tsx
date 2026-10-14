import { ReactNode } from 'react';

export default function SectionTitle({
  eyebrow,
  children,
  align = 'left',
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p className="mb-4 text-xs tracking-[0.28em] text-champagne">{eyebrow}</p>
      )}
      <h2 className="font-display text-balance text-4xl font-medium leading-[1.08] text-paper md:text-5xl lg:text-6xl">
        {children}
      </h2>
    </div>
  );
}
