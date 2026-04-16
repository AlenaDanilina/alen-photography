/*
 * CONTACT SECTION — Alen Danilina Portfolio
 * Design: Dark background, centered, generous whitespace
 * Dark background → white text
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';

export default function ContactSection() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section
      id="contact"
      className="py-28 md:py-40 relative overflow-hidden grain-overlay"
      ref={ref}
      style={{ background: 'oklch(0.14 0.005 60)' }}
    >
      {/* Ghost text */}
      <span
        className="ghost-text"
        style={{ bottom: '-2rem', right: '-1rem', opacity: 0.04, color: 'oklch(0.977 0.005 75)' }}
      >
        {t('Contact', 'Контакт')}
      </span>

      <div className="container">
        <div className="max-w-2xl mx-auto text-center">

          {/* Label */}
          <div className="reveal flex items-center justify-center gap-4 mb-8">
            <span className="deco-line" />
            <span className="label-editorial" style={{ color: 'oklch(0.72 0.04 60)' }}>
              {t('Contact', 'Контакт')}
            </span>
            <span className="deco-line" />
          </div>

          {/* Heading */}
          <h2
            className="reveal reveal-delay-1 heading-display mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontStyle: 'italic',
              color: 'oklch(0.977 0.005 75)',
              lineHeight: 1.05,
            }}
          >
            {t("Let's create\nsomething together.", 'Давайте создадим\nчто-то вместе.')}
          </h2>

          {/* Subtext */}
          <p
            className="reveal reveal-delay-2 mb-12"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'oklch(0.65 0.015 60)',
            }}
          >
            {t(
              'Reach out via Instagram or email. I respond within 24 hours.',
              'Напишите в Instagram или на почту. Отвечаю в течение 24 часов.'
            )}
          </p>

          {/* CTA */}
          <div className="reveal reveal-delay-3 mb-16">
            <a
              href="https://instagram.com/your.alen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-ghost"
            >
              {t('Book a shoot', 'Записаться')}
            </a>
          </div>

          {/* Social links */}
          <div
            className="reveal reveal-delay-4 flex items-center justify-center gap-8 flex-wrap"
            style={{ borderTop: '1px solid rgba(248,246,242,0.1)', paddingTop: '2rem' }}
          >
            <a
              href="https://instagram.com/your.alen"
              target="_blank"
              rel="noopener noreferrer"
              className="label-editorial transition-colors duration-300"
              style={{ color: 'oklch(0.65 0.015 60)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.977 0.005 75)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.65 0.015 60)')}
            >
              Instagram
            </a>
            <span style={{ color: 'oklch(0.35 0.01 60)' }}>·</span>
            <a
              href="mailto:alyondanilin32@gmail.com"
              className="label-editorial transition-colors duration-300"
              style={{ color: 'oklch(0.65 0.015 60)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.977 0.005 75)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.65 0.015 60)')}
            >
              Email
            </a>
            <span style={{ color: 'oklch(0.35 0.01 60)' }}>·</span>
            <a
              href="https://t.me/awakefrom"
              target="_blank"
              rel="noopener noreferrer"
              className="label-editorial transition-colors duration-300"
              style={{ color: 'oklch(0.65 0.015 60)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.977 0.005 75)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.65 0.015 60)')}
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
