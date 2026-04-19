/*
 * ABOUT SECTION — Alen Danilina Portfolio
 * Design: Elegant, personal narrative with philosophy
 * Inspired by: Lisa Karim's approach — capturing character, story, essence
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
        {/* Personal greeting */}
        <div className="reveal mb-20 md:mb-28">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'oklch(0.4 0.01 60)',
              lineHeight: 1.8,
            }}
          >
            {lang === 'en' ? (
              <>Hello, this is <span style={{ fontWeight: 600 }}>Alen Danilina</span>'s page.</>
            ) : (
              <>Привет, это страница <span style={{ fontWeight: 600 }}>Алены Данилиной</span>.</>
            )}
          </p>
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

          {/* Right: Text and philosophy */}
          <div className="md:pt-8">
            {/* Main heading */}
            <h2
              className="reveal reveal-delay-1 mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.2,
                color: 'oklch(0.14 0.005 60)',
              }}
            >
              {lang === 'en' ? 'My goal is to capture you,' : 'Моя цель — запечатлеть вас,'}
              <br />
              {lang === 'en' ? 'your character, your story,' : 'ваш характер, вашу историю,'}
              <br />
              <span style={{ textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '0.3em' }}>
                {lang === 'en' ? 'your special essence' : 'вашу особенную сущность'}
              </span>
            </h2>

            {/* Body text */}
            <div
              className="reveal reveal-delay-2 space-y-6 mb-10"
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
                    As long as I can remember, photography has always been in my life. I tried a lot of different types of photography and understood that <span style={{ fontStyle: 'italic' }}>portrait genre was my passion</span> because it is the most honest and frank one.
                  </p>
                  <p>
                    My photographs are candid but elegant and sophisticated. I want to take really stylish, natural and <span style={{ textDecoration: 'underline' }}>timeless photos</span> of you.
                  </p>
                  <p>
                    I'm based in Istanbul, working in my own studio space where we can create the right atmosphere and feel at ease.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Сколько я себя помню, фотография всегда была в моей жизни. Я пробовала разные виды фотографии и поняла, что <span style={{ fontStyle: 'italic' }}>портретный жанр — моя страсть</span>, потому что это самый честный и откровенный жанр.
                  </p>
                  <p>
                    Мои фотографии — откровенные, но элегантные и изысканные. Я хочу создавать стильные, естественные и <span style={{ textDecoration: 'underline' }}>вечные фотографии</span> вас.
                  </p>
                  <p>
                    Я работаю в Стамбуле, в своей студии, где мы можем создать нужную атмосферу и чувствовать себя свободно.
                  </p>
                </>
              )}
            </div>

            {/* Closing signature */}
            <div className="reveal reveal-delay-3">
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'oklch(0.4 0.01 60)',
                  lineHeight: 1.8,
                }}
              >
                {lang === 'en' ? 'Looking forward to working with you' : 'С нетерпением жду работы с вами'}
                <br />
                <span style={{ fontWeight: 600 }}>Alen</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
