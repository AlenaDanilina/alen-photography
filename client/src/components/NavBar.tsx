/*
 * NAVBAR — Alen Danilina Portfolio
 * Design: Minimal floating header, transparent → dark on scroll
 * Language switcher: top-right "EN · RU"
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('About', 'Обо мне') },
    { href: '#portfolio', label: t('Portfolio', 'Портфолио') },
    { href: '#pricing', label: t('Pricing', 'Стоимость') },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: t('Contact', 'Контакт') },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(26, 26, 26, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(248,246,242,0.08)' : 'none',
        }}
      >
        <div
          className="container flex items-center justify-between"
          style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
        >
          {/* Logo - Circular A */}
          <a
            href="#hero"
            className="transition-opacity duration-300"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1.5px solid rgba(248,246,242,0.6)',
              textDecoration: 'none',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'rgba(248,246,242,0.95)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(248,246,242,0.95)';
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(248,246,242,0.6)';
              e.currentTarget.style.opacity = '1';
            }}
          >
            A
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label-editorial transition-colors duration-300"
                style={{ color: 'rgba(248,246,242,0.55)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.95)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.55)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Language switcher + mobile menu */}
          <div className="flex items-center gap-6">
            {/* Language switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang('en')}
                className="label-editorial transition-colors duration-300"
                style={{
                  color: lang === 'en' ? 'rgba(248,246,242,0.95)' : 'rgba(248,246,242,0.35)',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
              >
                EN
              </button>
              <span style={{ color: 'rgba(248,246,242,0.25)', fontSize: '0.6rem' }}>·</span>
              <button
                onClick={() => setLang('ru')}
                className="label-editorial transition-colors duration-300"
                style={{
                  color: lang === 'ru' ? 'rgba(248,246,242,0.95)' : 'rgba(248,246,242,0.35)',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
              >
                RU
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none' }}
            >
              <span
                className="block transition-all duration-300"
                style={{
                  width: '22px',
                  height: '1px',
                  background: 'rgba(248,246,242,0.8)',
                  transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block transition-all duration-300"
                style={{
                  width: '22px',
                  height: '1px',
                  background: 'rgba(248,246,242,0.8)',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block transition-all duration-300"
                style={{
                  width: '22px',
                  height: '1px',
                  background: 'rgba(248,246,242,0.8)',
                  transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center md:hidden transition-all duration-500"
        style={{
          background: 'rgba(26,26,26,0.97)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          backdropFilter: 'blur(12px)',
        }}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="heading-display transition-opacity duration-300"
              style={{
                fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
                fontStyle: 'italic',
                color: 'rgba(248,246,242,0.9)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
