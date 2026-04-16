/*
 * FOOTER — Alen Danilina Portfolio
 * Design: Minimal, dark, copyright + social links
 */

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        background: 'oklch(0.10 0.004 60)',
        borderTop: '1px solid rgba(248,246,242,0.06)',
        padding: '2rem 0',
      }}
    >
      <div
        className="container flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <span
          className="heading-display"
          style={{
            fontSize: '0.9375rem',
            fontStyle: 'italic',
            color: 'rgba(248,246,242,0.35)',
          }}
        >
          Alen Danilina
        </span>

        <span
          className="label-editorial"
          style={{ color: 'rgba(248,246,242,0.2)', fontSize: '0.5625rem' }}
        >
          © {new Date().getFullYear()} — {t('All rights reserved', 'Все права защищены')}
        </span>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/your.alen"
            target="_blank"
            rel="noopener noreferrer"
            className="label-editorial transition-colors duration-300"
            style={{ color: 'rgba(248,246,242,0.3)', fontSize: '0.5625rem' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.3)')}
          >
            Instagram
          </a>
          <a
            href="mailto:alyondanilin32@gmail.com"
            className="label-editorial transition-colors duration-300"
            style={{ color: 'rgba(248,246,242,0.3)', fontSize: '0.5625rem' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.3)')}
          >
            Email
          </a>
          <a
            href="https://t.me/awakefrom"
            target="_blank"
            rel="noopener noreferrer"
            className="label-editorial transition-colors duration-300"
            style={{ color: 'rgba(248,246,242,0.3)', fontSize: '0.5625rem' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,246,242,0.3)')}
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
