/*
 * HERO SECTION — Alen Danilina Portfolio
 * Design: Split layout inspired by Vercel version
 * Desktop: Two images side-by-side with centered text
 * Mobile: Single image with text overlay
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const HERO_IMAGE_LEFT = '/manus-storage/305C0932-hq_80d09f15.webp';
const HERO_IMAGE_RIGHT = '/manus-storage/IMG_1759(1)_e21380dc.JPG';

export default function HeroSection() {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setLoaded(true);
    setTimeout(() => setTextVisible(true), 300);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* Desktop: Split layout */}
      <div className="hidden md:flex h-full">
        {/* Left image */}
        <div className="flex-1 relative overflow-hidden bg-[#1A1A1A]">
          {loaded && (
            <img
              src={HERO_IMAGE_LEFT}
              alt="Alen Danilina"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 55%' }}
            />
          )}
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(26,26,26,0.5) 0%, rgba(26,26,26,0) 50%)',
            }}
          />
        </div>

        {/* Center text overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(248,246,242,0.6)',
              marginBottom: '3rem',
              transitionDelay: '0s',
            }}
          >
            {t('Istanbul / Portraits Fashion Model Tests', 'Стамбул / Портреты Мода Модельные тесты')}
          </p>

          {/* Main heading */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '4rem',
                fontWeight: 400,
                color: 'oklch(0.977 0.005 75)',
                margin: '0 0 0.5rem 0',
                lineHeight: 1,
              }}
            >
              PHOTO
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '4rem',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'oklch(0.977 0.005 75)',
                margin: 0,
                lineHeight: 1,
              }}
            >
              ABOUT YOU
            </p>
          </div>

          {/* Name */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              color: 'rgba(248,246,242,0.7)',
              textTransform: 'uppercase',
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}
          >
            ALEN DANILINA
          </p>
        </div>

        {/* Right image */}
        <div className="flex-1 relative overflow-hidden bg-[#1A1A1A]">
          {loaded && (
            <img
              src={HERO_IMAGE_RIGHT}
              alt="Alen Danilina — Portraits"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center center' }}
            />
          )}
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(26,26,26,0.5) 0%, rgba(26,26,26,0) 50%)',
            }}
          />
        </div>
      </div>

      {/* Mobile: Single image */}
      <div className="md:hidden h-full relative bg-[#1A1A1A]">
        {loaded && (
          <img
            src={HERO_IMAGE_LEFT}
            alt="Alen Danilina"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 55%' }}
          />
        )}
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.1) 50%, rgba(26,26,26,0.3) 100%)',
          }}
        />

        {/* Mobile text overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end pb-12 px-6"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: '0.55rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(248,246,242,0.6)',
              marginBottom: '1.5rem',
              textAlign: 'left',
            }}
          >
            {t('Istanbul / Portraits Fashion Model Tests', 'Стамбул / Портреты Мода Модельные тесты')}
          </p>

          {/* Main heading */}
          <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2rem',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'oklch(0.977 0.005 75)',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Alen Danilina
            </p>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              color: 'rgba(248,246,242,0.7)',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              textAlign: 'left',
            }}
          >
            {t('Photographer', 'Фотограф')}
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn-rounded-ghost"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.3s',
              alignSelf: 'flex-start',
            }}
          >
            {t('Book a shot', 'Записаться')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 z-20"
        style={{
          opacity: textVisible ? 0.5 : 0,
          transition: 'opacity 1s ease 0.8s',
        }}
      >
        <span className="label-editorial text-white" style={{ fontSize: '0.5625rem' }}>
          {t('Scroll', 'Листать')}
        </span>
      </div>
    </section>
  );
}
