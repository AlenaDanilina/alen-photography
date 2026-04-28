/*
 * ABOUT SECTION — Alen Danilina Portfolio
 * Design: Elegant, personal narrative
 * Light background → dark text, serif typography
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';

const ABOUT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/scan0022-4_f03ad71d.webp';

export default function AboutSection() {
  const { t, lang } = useLanguage();
  const ref = useReveal();

  return (
    <section id="about" className="py-28 md:py-40 overflow-hidden" ref={ref} style={{ background: 'oklch(0.977 0.005 75)' }}>
      <div className="container">
        {/* Section heading */}
        <div className="reveal mb-20 md:mb-28">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.2,
              color: 'oklch(0.14 0.005 60)',
            }}
          >
            {t('About Me', 'Обо мне')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Image */}
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
          </div>

          {/* Right: Text */}
          <div className="md:pt-8">
            {/* Body text */}
            <div
              className="reveal reveal-delay-1 space-y-6 mb-10"
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
                  <p>
                    I'm Alen — a photographer based in Istanbul, working across portraits, fashion, and model tests.
                  </p>
                  <p>
                    I shoot on film, digital, and Polaroid, and I'm drawn to light, aesthetics, and natural presence in the frame. I work from my own space — a European-style apartment in Cihangir with a French balcony — where we can create the right mood and you can feel at ease.
                  </p>
                  <p>
                    I guide you through the entire process — from styling and outfit selection to posing down to every detail. My goal is to show you at your best — the way I see <strong>you</strong>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Я — Алёна, фотограф, работающий с портретами, модельными тестами и съёмками для брендов.
                  </p>
                  <p>
                    Для меня важны свет, эстетика и естественное присутствие человека в кадре. В основном я снимаю на плёнку, а также использую цифровую камеру и Полароид.
                  </p>
                  <p>
                    Я работаю в Стамбуле, в своём пространстве — европейской квартире в Джихангире с французским балконом — где можно создать нужную атмосферу и чувствовать себя свободно.
                  </p>
                  <p>
                    Моя цель — показать вас вашей лучшей версией, не меняя идентичности — подчеркнуть вашу красоту и помочь вам раскрыться.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
