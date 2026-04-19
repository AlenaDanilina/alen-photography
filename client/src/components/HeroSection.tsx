/*
 * HERO SECTION — Alen Danilina Portfolio
 * Design: Split layout inspired by Vercel version
 * Desktop: Two images side-by-side with centered text, buttons in corners, social icons
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
              fontSize: '0.875rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(248,246,242,1)',
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

        {/* Left bottom button */}
        <div
          className="absolute bottom-12 left-6 z-20"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.3s',
          }}
        >
          <a href="#portfolio" className="btn-rounded-ghost">
            {t('Portfolio', 'Портфолио')} →
          </a>
        </div>

        {/* Right bottom button */}
        <div
          className="absolute bottom-12 right-6 z-20"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.3s',
          }}
        >
          <a href="#contact" className="btn-rounded-ghost">
            {t('Get in touch', 'Оставить запрос')} →
          </a>
        </div>

        {/* Left side social icons */}
        <div
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-6"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(-50%)' : 'translateY(calc(-50% + 16px))',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.4s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.4s',
          }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded-ghost"
            style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
          </a>
          <a
            href="https://telegram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded-ghost"
            style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 2L2 13.46l6.82 2.06L17.31 6.7M9 13.46l8.55 7.89" />
            </svg>
          </a>
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
              fontSize: '0.7rem',
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
          <div style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'oklch(0.977 0.005 75)',
                margin: 0,
                lineHeight: 1,
              }}
            >
              PHOTO
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2.5rem',
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
              fontWeight: 300,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              color: 'rgba(248,246,242,0.7)',
              textTransform: 'uppercase',
              textAlign: 'left',
              margin: '0.5rem 0 2rem 0',
            }}
          >
            ALEN DANILINA
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn-rounded-ghost"
          >
            {t('Get in touch', 'Оставить запрос')}
          </a>
        </div>
      </div>
    </section>
  );
}
