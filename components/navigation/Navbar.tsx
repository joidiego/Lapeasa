'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FIRM, NAV_LINKS } from '@/lib/constants';

export default function Navbar({
  transparentOnTop = true,
}: {
  // Pages that open directly on the dark hero (home) want the navbar
  // transparent + light-text until the user scrolls past it. Inner pages
  // with no dark hero (e.g. /metode-penanganan) should pass `false` so the
  // navbar is solid/dark-text from the start instead of light-on-light.
  transparentOnTop?: boolean;
}) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const scrolled = !transparentOnTop || scrolledPast;

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolledPast(y > 40);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
          scrolled ? 'bg-ink/90 backdrop-blur-sm py-4' : 'bg-transparent py-7'
        }`}
      >
        <nav className="mx-auto flex w-full max-w-content items-center justify-between px-6 md:px-10 lg:px-16">
          <a href="/" className="shrink-0" aria-label={`${FIRM.name} — home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/logo.png"
              alt={FIRM.name}
              className="h-11 w-auto md:h-12"
            />
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`link-underline text-xs tracking-[0.14em] transition-colors duration-500 ease-editorial hover:text-champagne-bright ${
                    scrolled ? 'text-paper/85' : 'text-heroLight/85'
                  }`}
                >
                  {link.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`transition-colors duration-500 ease-editorial md:hidden ${
              scrolled ? 'text-paper' : 'text-heroLight'
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink transition-opacity duration-400 ease-editorial md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            className={`font-display text-3xl text-paper transition-all duration-300 ease-editorial hover:text-champagne ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
