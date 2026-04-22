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
                    My name is Alena, and I'm a photographer. For me, photography has always been about more than simply creating a beautiful image. What matters to me is not only how a person looks, but also their mood, energy, gaze, presence, and the way all of it comes together within a single frame.
                  </p>
                  <p>
                    I live in Istanbul, and this city has deeply influenced the way I see. It has taught me to notice light, textures, atmosphere, and the quiet beauty of subtle moments. I'm drawn to natural softness, understated elegance, and images that feel open, intimate, and alive.
                  </p>
                  <p>
                    For me, photography is a way of preserving a feeling that cannot be recreated. I want a photoshoot to feel less like a performance for the camera and more like an experience where you can see yourself as beautiful, alive, and close to yourself.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Я — Алёна, фотограф, работающий с портретами, модельными тестами и съёмками для брендов.
                  </p>
                  <p>
                    Для меня важны свет, эстетика и естественное ощущение человека в кадре. Я снимаю на плёнку, цифровую камеру и Полароид.
                  </p>
                  <p>
                    Я работаю в Стамбуле, в своём пространстве — европейской квартире в Джихангире с французским балконом — где можно создать нужную атмосферу и чувствовать себя свободно.
                  </p>
                  <p>
                    Моя цель — показать вас так, как я вас вижу, вашей лучшей версией себя.
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
