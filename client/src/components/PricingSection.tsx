/*
 * PRICING SECTION — Alen Danilina Portfolio
 * Design: 3-column on desktop (image-content-image), 2-column on mobile (image-content)
 * Light background → dark text
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';

const PORTRAIT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/305C0540-1_1ba1dd9b.webp';
const PHOTO_WALK_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/9_ba665827.webp';

const featuresEN = [
  'Film + digital',
  '30–40 selected images',
  'Full retouch',
  'Studio, film & development included',
  '2–3 hours, no strict timing',
  'Guidance with posing & styling',
  'Access to studio wardrobe, outfit curation',
];

const featuresRU = [
  'Плёнка + digital',
  '30–40 отобранных кадров',
  'Авторская ретушь',
  'Студия, плёнка и проявка включены',
  '2–3 часа, без жёстких ограничений',
  'Помощь с позированием и образами',
  'Доступ к студийному гардеробу, сбор образов',
];

export default function PricingSection() {
  const { t, lang } = useLanguage();
  const ref = useReveal();

  const features = lang === 'en' ? featuresEN : featuresRU;

  return (
    <section
      id="pricing"
      className="py-28 md:py-40 relative overflow-hidden"
      ref={ref}
    >

      <div className="container">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-12">
          <span className="deco-line" />
          <span className="label-editorial" style={{ color: 'oklch(0.72 0.04 60)' }}>
            {t('Packages', 'Пакеты')}
          </span>
        </div>

        {/* Mobile: 2-column (image-content) */}
        <div className="md:hidden grid grid-cols-1 gap-8 items-start">
          {/* Mobile Image */}
          <div className="reveal order-2">
            <div className="portfolio-item" style={{ aspectRatio: '3/4', maxHeight: '65vh' }}>
              <img
                src={PORTRAIT_IMAGE}
                alt="Studio shoot — Istanbul balcony"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile Content */}
          <div className="order-1">
            {/* Portrait Shooting */}
            <div className="reveal reveal-delay-1 mb-10">
              <h2
                className="heading-display mb-3"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontStyle: 'italic' }}
              >
                {t('Portrait shooting', 'Портретная съёмка')}
              </h2>
              <div
                className="heading-display"
                style={{
                  fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                  fontWeight: 300,
                  color: 'oklch(0.14 0.005 60)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                350€
              </div>
            </div>

            {/* Features list */}
            <ul className="reveal reveal-delay-2 space-y-4 mb-12">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '1rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.5rem',
                    }}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="reveal reveal-delay-3 mb-12">
              <a href="#contact" className="btn-rounded-ghost">
                {t('Book a shoot', 'Записать')}
              </a>
            </div>

            {/* Photo walk option */}
            <div className="reveal reveal-delay-3 pt-12 border-t" style={{ borderColor: 'oklch(0.87 0.01 75)' }}>
              <div className="mb-10">
                <h2
                  className="heading-display mb-3"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontStyle: 'italic' }}
                >
                  {t('Photo walk', 'Фотопрогулка')}
                </h2>
                <div
                  className="heading-display"
                  style={{
                    fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                    fontWeight: 300,
                    color: 'oklch(0.14 0.005 60)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  270€
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li
                  className="flex items-start gap-4"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '1rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.5rem',
                    }}
                  />
                  Limited to 1.5 hours — no studio, outdoor locations or your location
                </li>
                <li
                  className="flex items-start gap-4"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '1rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.5rem',
                    }}
                  />
                  30–40 selected images
                </li>
                <li
                  className="flex items-start gap-4"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '1rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.5rem',
                    }}
                  />
                  Guidance with posing & styling
                </li>
                <li
                  className="flex items-start gap-4"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '1rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.5rem',
                    }}
                  />
                  Outfit curation
                </li>
                <li
                  className="flex items-start gap-4"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '1rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.5rem',
                    }}
                  />
                  Light retouch
                </li>
              </ul>
            </div>

            {/* Deposit note */}
            <p
              className="reveal reveal-delay-4 mt-8"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: '0.9375rem',
                color: 'oklch(0.65 0.015 60)',
                letterSpacing: '0.02em',
                lineHeight: 1.6,
              }}
            >
              {t('50€ deposit to confirm your booking.', 'Предоплата 50€ для подтверждения записи.')}
            </p>

            {/* Custom pricing note */}
            <p
              className="reveal reveal-delay-4 mt-4"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: '0.9375rem',
                color: 'oklch(0.65 0.015 60)',
                letterSpacing: '0.02em',
                lineHeight: 1.6,
              }}
            >
              {t('Model tests and brand collaborations — custom rates. Get in touch to discuss your project.', 'Для модельных тестов и брендовых съёмок — цена обговаривается индивидуально. Напишите, чтобы обсудить детали')}
            </p>
          </div>
        </div>

        {/* Desktop: 3-column (image-content-image) */}
        <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-12 items-start">

          {/* Left Image - Portrait Shooting */}
          <div className="reveal">
            <div className="portfolio-item" style={{ aspectRatio: '3/4', maxHeight: '55vh' }}>
              <img
                src={PORTRAIT_IMAGE}
                alt="Studio shoot — Istanbul balcony"
                loading="lazy"
              />
            </div>
          </div>

          {/* Center Content */}
          <div>
            {/* Portrait Shooting */}
            <div className="reveal reveal-delay-1 mb-10">
              <h2
                className="heading-display mb-3"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontStyle: 'italic' }}
              >
                {t('Portrait shooting', 'Портретная съёмка')}
              </h2>
              <div
                className="heading-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 300,
                  color: 'oklch(0.14 0.005 60)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                350€
              </div>
            </div>

            {/* Features list */}
            <ul className="reveal reveal-delay-2 space-y-3 mb-10">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.35rem',
                    }}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="reveal reveal-delay-3 mb-10">
              <a href="#contact" className="btn-rounded-ghost">
                {t('Book a shoot', 'Записать')}
              </a>
            </div>

            {/* Photo walk option */}
            <div className="reveal reveal-delay-3 pt-10 border-t" style={{ borderColor: 'oklch(0.87 0.01 75)' }}>
              <div className="mb-8">
                <h2
                  className="heading-display mb-2"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontStyle: 'italic' }}
                >
                  {t('Photo walk', 'Фотопрогулка')}
                </h2>
                <div
                  className="heading-display"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 300,
                    color: 'oklch(0.14 0.005 60)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  270€
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.35rem',
                    }}
                  />
                  Limited to 1.5 hours — no studio, outdoor locations or your location
                </li>
                <li
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.35rem',
                    }}
                  />
                  30–40 selected images
                </li>
                <li
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.35rem',
                    }}
                  />
                  Guidance with posing & styling
                </li>
                <li
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.35rem',
                    }}
                  />
                  Outfit curation
                </li>
                <li
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    color: 'oklch(0.4 0.01 60)',
                    borderBottom: '1px solid oklch(0.87 0.01 75)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <span
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      background: 'oklch(0.72 0.04 60)',
                      marginTop: '0.35rem',
                    }}
                  />
                  Light retouch
                </li>
              </ul>
            </div>

            {/* Deposit note */}
            <p
              className="reveal reveal-delay-4 mt-8 text-sm"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: '0.875rem',
                color: 'oklch(0.65 0.015 60)',
                letterSpacing: '0.02em',
                lineHeight: 1.6,
              }}
            >
              {t('50€ deposit to confirm your booking.', 'Предоплата 50€ для подтверждения записи.')}
            </p>

            {/* Custom pricing note */}
            <p
              className="reveal reveal-delay-4 mt-3 text-sm"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: '0.875rem',
                color: 'oklch(0.65 0.015 60)',
                letterSpacing: '0.02em',
                lineHeight: 1.6,
              }}
            >
              {t('Model tests and brand collaborations — custom rates. Get in touch to discuss your project.', 'Для модельных тестов и брендовых съёмок — цена обговаривается индивидуально. Напишите, чтобы обсудить детали')}
            </p>
          </div>

          {/* Right Image - Photo walk */}
          <div className="reveal">
            <div className="portfolio-item" style={{ aspectRatio: '3/4', maxHeight: '55vh' }}>
              <img
                src={PHOTO_WALK_IMAGE}
                alt="Fashion photo walk — Istanbul"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
