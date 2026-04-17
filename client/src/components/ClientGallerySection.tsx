/*
 * CLIENT GALLERY SECTION — Alen Danilina Portfolio
 * Design: Full-width cinematic banner with two overlapping gallery covers
 * and a prominent CTA linking to the external Vigbo gallery.
 * Dark background → light text, consistent with editorial aesthetic.
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';

const GALLERY_IMAGE_1 = '/manus-storage/vigbo_gallery_cover_ada_final_26ce82df.webp';
const GALLERY_IMAGE_2 = '/manus-storage/vigbo_gallery_cover_ada_3f32489f.webp';
const VIGBO_URL = 'https://694535fb124cb0-64023476.gallery.photo';

export default function ClientGallerySection() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section
      id="gallery"
      className="py-28 md:py-40 relative overflow-hidden"
      ref={ref}
      style={{ background: 'oklch(0.11 0.005 60)' }}
    >
      {/* Subtle grain */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Ghost text */}
      <span
        className="ghost-text"
        style={{
          top: '50%',
          left: '-2rem',
          transform: 'translateY(-50%)',
          opacity: 0.025,
          color: 'oklch(0.977 0.005 75)',
          fontSize: 'clamp(6rem, 14vw, 12rem)',
        }}
      >
        {t('Gallery', 'Галерея')}
      </span>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left side — stacked/overlapping gallery previews */}
          <div className="reveal relative" style={{ minHeight: 'clamp(380px, 55vw, 560px)' }}>
            {/* Back image — slightly offset */}
            <div
              className="portfolio-item absolute"
              style={{
                top: '0',
                left: '0',
                width: '62%',
                maxHeight: '80%',
                aspectRatio: '3/4',
                zIndex: 1,
              }}
            >
              <img
                src={GALLERY_IMAGE_1}
                alt="Client gallery — Ada Final"
                loading="lazy"
                style={{
                  filter: 'brightness(0.85)',
                }}
              />
            </div>

            {/* Front image — overlapping */}
            <div
              className="portfolio-item absolute"
              style={{
                bottom: '0',
                right: '5%',
                width: '58%',
                maxHeight: '80%',
                aspectRatio: '3/4',
                zIndex: 2,
                boxShadow: '-12px 12px 40px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src={GALLERY_IMAGE_2}
                alt="Client gallery — Ada"
                loading="lazy"
                style={{
                  filter: 'brightness(0.9)',
                }}
              />
            </div>
          </div>

          {/* Right side — text + CTA */}
          <div>
            {/* Label */}
            <div className="reveal flex items-center gap-4 mb-8">
              <span className="deco-line" />
              <span className="label-editorial" style={{ color: 'oklch(0.72 0.04 60)' }}>
                {t('Client Work', 'Клиентам')}
              </span>
            </div>

            {/* Heading */}
            <h2
              className="reveal reveal-delay-1 heading-display mb-6"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontStyle: 'italic',
                color: 'oklch(0.977 0.005 75)',
                lineHeight: 1.1,
              }}
            >
              {t('Client Galleries', 'Клиентские галереи')}
            </h2>

            {/* Description */}
            <p
              className="reveal reveal-delay-2 mb-10"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'oklch(0.6 0.015 60)',
                maxWidth: '28rem',
              }}
            >
              {t(
                'Browse finished client sessions — delivered portraits, fashion editorials, and personal stories, exactly how you would see a publish result.',
                'Готовые клиентские съёмки — портреты, фэшн-эдиториалы и личные истории — именно так, как вы увидите готовый результат.'
              )}
            </p>

            {/* CTA button */}
            <div className="reveal reveal-delay-3">
              <a
                href={VIGBO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-ghost"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                {t('View galleries', 'Смотреть галереи')}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
