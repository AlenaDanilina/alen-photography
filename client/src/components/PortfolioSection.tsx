/*
 * PORTFOLIO SECTION — Alen Danilina Portfolio
 * Design: Masonry-style grid, large images, generous whitespace
 * Hover: subtle scale + caption fade
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { useState } from 'react';

const IMAGES = [
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/000025_05c7a7a3.jpg',
    alt: 'Portrait — soft natural light',
    category: { en: 'Portrait', ru: 'Портрет' },
    aspect: '3/4',
    span: 'row-span-2',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/portfolio-2-7EthysiPyCukvKhjYcrTr4.webp',
    alt: 'Editorial — golden hour',
    category: { en: 'Editorial', ru: 'Эдиториал' },
    aspect: '3/4',
    span: '',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/portfolio-4-KtB6sPNBoSwk8aDarbruLn.webp',
    alt: 'Studio walk — trench coat',
    category: { en: 'Fashion', ru: 'Мода' },
    aspect: '4/3',
    span: '',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/portfolio-3-27T8RhNMDFLowhiS5Rff3x.webp',
    alt: 'Natural light portrait — floor',
    category: { en: 'Portrait', ru: 'Портрет' },
    aspect: '3/4',
    span: '',
  },
];

const CATEGORIES_EN = ['All', 'Fashion', 'Portrait', 'Editorial'];
const CATEGORIES_RU = ['Все', 'Мода', 'Портрет', 'Эдиториал'];

export default function PortfolioSection() {
  const { t, lang } = useLanguage();
  const ref = useReveal();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = lang === 'en' ? CATEGORIES_EN : CATEGORIES_RU;

  const filteredImages = activeCategory === 0
    ? IMAGES
    : IMAGES.filter((img) =>
        lang === 'en'
          ? img.category.en === CATEGORIES_EN[activeCategory]
          : img.category.ru === CATEGORIES_RU[activeCategory]
      );

  return (
    <section
      id="portfolio"
      className="py-28 md:py-40"
      ref={ref}
      style={{ background: 'oklch(0.14 0.005 60)' }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="deco-line" style={{ background: 'oklch(0.72 0.04 60)' }} />
              <span className="label-editorial" style={{ color: 'oklch(0.72 0.04 60)' }}>
                {t('Portfolio', 'Портфолио')}
              </span>
            </div>
            <h2
              className="heading-display"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontStyle: 'italic',
                color: 'oklch(0.977 0.005 75)',
              }}
            >
              {t('Selected Work', 'Избранные работы')}
            </h2>
          </div>

          {/* Category filter */}
          <div className="flex gap-6 flex-wrap">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(i)}
                className="label-editorial transition-colors duration-300"
                style={{
                  color: activeCategory === i
                    ? 'oklch(0.977 0.005 75)'
                    : 'oklch(0.55 0.015 60)',
                  borderBottom: activeCategory === i
                    ? '1px solid oklch(0.72 0.04 60)'
                    : '1px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {filteredImages.map((img, i) => (
            <div
              key={img.src}
              className="reveal portfolio-item"
              style={{
                transitionDelay: `${i * 0.12}s`,
                aspectRatio: i === 0 || i === 3 ? '3/4' : i === 2 ? '4/3' : '3/4',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{ aspectRatio: i === 0 || i === 3 ? '3/4' : i === 2 ? '4/3' : '3/4' }}
              />
              <div className="caption">
                <span
                  className="label-editorial"
                  style={{ color: 'rgba(248,246,242,0.8)', fontSize: '0.6rem' }}
                >
                  {lang === 'en' ? img.category.en : img.category.ru}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-16 text-center">
          <a
            href="#contact"
            className="btn-editorial-ghost"
            style={{ borderColor: 'rgba(248,246,242,0.3)' }}
          >
            {t('Book a shoot', 'Записаться на съёмку')}
          </a>
        </div>
      </div>
    </section>
  );
}
