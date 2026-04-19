/*
 * PRICING SECTION — Alen Danilina Portfolio
 * Design: Centered single card, generous padding, warm off-white background
 * Light background → dark text
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';

const PRICING_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/305C0540-1_1ba1dd9b.webp';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <div className="reveal order-2 lg:order-1">
            <div className="portfolio-item" style={{ aspectRatio: '3/4', maxHeight: '65vh' }}>
              <img
                src={PRICING_IMAGE}
                alt="Studio shoot — Istanbul balcony"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Label */}
            <div className="reveal flex items-center gap-4 mb-8">
              <span className="deco-line" />
              <span className="label-editorial" style={{ color: 'oklch(0.72 0.04 60)' }}>
                {t('Pricing', 'Стоимость')}
              </span>
            </div>

            {/* Title + price */}
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
            <div className="reveal reveal-delay-3">
              <a href="#contact" className="btn-rounded-ghost">
                {t('Book a shoot', 'Записаться')}
              </a>
            </div>

            {/* Deposit note */}
            <p
              className="reveal reveal-delay-4 mt-6"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: 'oklch(0.65 0.015 60)',
                letterSpacing: '0.02em',
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
                fontSize: '0.8125rem',
                color: 'oklch(0.65 0.015 60)',
                letterSpacing: '0.02em',
              }}
            >
              {t('Model tests and brand collaborations — custom rates. Get in touch to discuss your project.', 'Для модельных тестов и брендовых съёмок — цена обговаривается индивидуально. Напишите, чтобы обсудить детали')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
