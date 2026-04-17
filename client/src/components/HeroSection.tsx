/*
 * HERO SECTION — Alen Danilina Portfolio
 * Design: Full-viewport, text anchored lower-left, Ken Burns on image
 * Dark image → white text (high contrast)
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const HERO_IMAGE = '/manus-storage/305C0932_de765cbd.webp';

export default function HeroSection() {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => {
      setLoaded(true);
      setTimeout(() => setTextVisible(true), 300);
    };
    // Fallback if image fails
    img.onerror = () => {
      setLoaded(true);
      setTimeout(() => setTextVisible(true), 300);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden grain-overlay"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* Background image with Ken Burns */}
      <div
        className="absolute inset-0 bg-[#1A1A1A]"
        style={{ transition: 'opacity 1.2s ease' }}
      >
        {loaded && (
          <img
            src={HERO_IMAGE}
            alt="Alen Danilina — Fashion Photographer"
            className="ken-burns w-full h-full object-cover"
            style={{
              objectPosition: window.innerWidth < 768 ? 'center center' : 'center 35%',
            }}
          />
        )}
        {/* Vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.1) 50%, rgba(26,26,26,0.3) 100%)',
          }}
        />
      </div>

      {/* Content — lower left */}
      <div className="relative h-full flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-16 lg:px-24">
        <div
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Label */}
          <p
            className="label-editorial mb-4 md:mb-6"
            style={{
              color: 'rgba(248,246,242,0.6)',
              transitionDelay: '0s',
            }}
          >
            {t('Istanbul', 'Стамбул')} / {t('Portraits Fashion Model Tests', 'Портреты Мода Модельные тесты')}
          </p>

          {/* Name */}
          <h1
            className="heading-display text-white mb-2"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}
          >
            Alen Danilina
          </h1>

          {/* Subtitle */}
          <p
            className="label-editorial mb-10 md:mb-12"
            style={{
              color: 'rgba(248,246,242,0.7)',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}
          >
            {t('Photographer', 'Фотограф')}
          </p>

          {/* CTA */}
          <div
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.35s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.35s',
            }}
          >
            <a href="#contact" className="btn-editorial-ghost">
              {t('Book a shoot', 'Записаться')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 md:right-16 lg:right-24 flex flex-col items-center gap-2"
        style={{
          opacity: textVisible ? 0.5 : 0,
          transition: 'opacity 1s ease 0.8s',
        }}
      >
        <span className="label-editorial text-white" style={{ fontSize: '0.5625rem' }}>
          {t('Scroll', 'Листать')}
        </span>
        <div
          className="w-px bg-white"
          style={{
            height: '3rem',
            animation: 'scrollLine 2s ease-in-out infinite',
          }}
        />
        <style>{`
          @keyframes scrollLine {
            0%, 100% { transform: scaleY(1); opacity: 0.5; }
            50% { transform: scaleY(0.4); opacity: 0.2; }
          }
        `}</style>
      </div>
    </section>
  );
}
