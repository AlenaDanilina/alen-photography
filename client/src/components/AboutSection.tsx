/*
 * ABOUT SECTION — Alen Danilina Portfolio
 * Design: Split panel — image left (offset), text right
 * Light background → dark text
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';

const ABOUT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/scan0022-4_f03ad71d.webp';

export default function AboutSection() {
  const { t, lang } = useLanguage();
  const ref = useReveal();

  return (
    <section id="about" className="py-28 md:py-40 overflow-hidden" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image — left, slightly taller */}
          <div className="reveal relative">
            <div
              className="portfolio-item"
              style={{ aspectRatio: '3/4', maxHeight: '70vh' }}
            >
              <img
                src={ABOUT_IMAGE}
                alt="Alen Danilina — Photographer"
                loading="lazy"
              />
            </div>
            {/* Ghost text behind image */}
            <span
              className="ghost-text"
              style={{ bottom: '-1rem', left: '-1rem', zIndex: -1 }}
            >
              {t('Film', 'Плёнка')}
            </span>
          </div>

          {/* Text — right, offset down */}
          <div className="md:pt-20">
            {/* Section label */}
            <div className="reveal flex items-center gap-4 mb-8">
              <span className="deco-line" />
              <span className="label-editorial" style={{ color: 'oklch(0.72 0.04 60)' }}>
                {t('About', 'Обо мне')}
              </span>
            </div>

            {/* Heading */}
            <h2
              className="reveal reveal-delay-1 heading-display mb-8"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontStyle: 'italic' }}
            >
              {t('Light, aesthetics,\nand presence.', 'Свет, эстетика\nи присутствие.')}
            </h2>

            {/* Body text */}
            <div
              className="reveal reveal-delay-2 space-y-5"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                lineHeight: 1.9,
                color: 'oklch(0.4 0.01 60)',
              }}
            >
              {lang === 'en' ? (
                <>
                  <p>I'm Alen, a photographer working with portraits, model tests, and brand shoots.</p>
                  <p>
                    My focus is on light, aesthetics, and capturing a natural yet intentional presence in the frame.
                    I usually shoot on film, digital, and Polaroid.
                  </p>
                  <p>
                    I'm based in Istanbul and work in my own studio space, where we can create the right mood and feel ourselves comfortable.
                  </p>
                </>
              ) : (
                <>
                  <p>Я — Алена, фотограф, работающий с портретами, модельными тестами и съёмками для брендов.</p>
                  <p>
                    Для меня важна эстетика, свет и ощущение человека в кадре.
                    Обычно я снимаю на плёнку, цифру и поларойд.
                  </p>
                  <p>
                    Я работаю в Стамбуле, в своём пространстве, где мы можем спокойно создать нужную атмосферу и чувствовать себя комфортно.
                  </p>
                </>
              )}
            </div>

            {/* Signature detail */}
            <div className="reveal reveal-delay-3 mt-10 flex items-center gap-6">
              <span className="deco-line" />
              <span
                className="heading-display"
                style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'oklch(0.72 0.04 60)' }}
              >
                {t('Istanbul, Turkey', 'Стамбул, Турция')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
