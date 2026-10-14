import { ReactNode } from 'react';

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
}: {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
  className?: string;
}) {
  const base =
    'inline-flex items-center gap-3 text-sm tracking-[0.08em] transition-colors duration-300 ease-editorial';

  const variants: Record<string, string> = {
    primary:
      'border border-champagne/60 px-7 py-3 text-paper hover:border-champagne hover:text-champagne',
    ghost: 'text-paper/80 hover:text-champagne',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
