/*
 * PHILOSOPHY SECTION — Alen Danilina Portfolio
 * Design: Minimalist quote section with elegant typography
 * Inspired by: Reference aesthetic — philosophical, personal, timeless
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';

export default function PhilosophySection() {
  const { t, lang } = useLanguage();
  const ref = useReveal();

  return (
    <section
      id="philosophy"
      className="py-32 md:py-48 overflow-hidden"
      ref={ref}
      style={{
        background: 'oklch(0.93 0.01 75)',
      }}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Quote */}
          <blockquote
            className="reveal text-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.8,
              color: 'oklch(0.14 0.005 60)',
              marginBottom: '2rem',
            }}
          >
            {lang === 'en' ? (
              <>
                "It's one thing to make a picture of what a person looks like,
                <br />
                it's another thing to make a portrait of who they are"
              </>
            ) : (
              <>
                «Одно дело — сфотографировать, как выглядит человек,
                <br />
                другое дело — создать портрет того, кто он есть»
              </>
            )}
          </blockquote>

          {/* Attribution */}
          <p
            className="reveal reveal-delay-1 text-center"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: 'oklch(0.4 0.01 60)',
              textTransform: 'uppercase',
            }}
          >
            {lang === 'en' ? 'Paul Caponigro' : 'Пол Капониро'}
          </p>

          {/* Divider */}
          <div
            className="reveal reveal-delay-2 my-12 flex justify-center"
            style={{
              height: '1px',
              width: '4rem',
              background: 'oklch(0.72 0.04 60)',
              margin: '3rem auto',
            }}
          />

          {/* Philosophy statement */}
          <p
            className="reveal reveal-delay-3 text-center"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'oklch(0.4 0.01 60)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {lang === 'en' ? (
              <>
                This is my approach to photography. I believe that every person has a unique story, character, and essence that deserves to be captured with honesty and elegance. My goal is not just to take a picture, but to create a timeless portrait that reveals who you truly are.
              </>
            ) : (
              <>
                Это мой подход к фотографии. Я верю, что каждый человек имеет уникальную историю, характер и сущность, которые заслуживают быть запечатленными с честностью и элегантностью. Моя цель — не просто сделать снимок, а создать вечный портрет, который раскрывает, кто вы на самом деле.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
