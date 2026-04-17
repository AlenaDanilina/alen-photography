/*
 * PORTFOLIO SECTION — Alen Danilina Portfolio
 * Design: Masonry-style grid, large images, generous whitespace
 * All tab: shows one representative image per category; clicking opens that category
 * Category tabs: show all images in that category
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { useState, useEffect, useRef, useCallback } from 'react';

interface ImageItem {
  src: string;
  alt: string;
  category: { en: string; ru: string };
  aspect: string;
  span: string;
  isPreview?: boolean; // marks the representative image for "All" view
  objectPosition?: string; // custom object-position for cropping
}

const IMAGES: ImageItem[] = [
  // === PORTRAIT ===
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/000025_05c7a7a3.jpg',
    alt: 'Portrait — soft natural light',
    category: { en: 'Portrait', ru: 'Портрет' },
    aspect: '3/4',
    span: 'row-span-2',
    isPreview: true,
    objectPosition: 'center 30%',
  },
  {
    src: '/manus-storage/000052_1598e0ed.webp',
    alt: 'Portrait — girl on sofa, warm light',
    category: { en: 'Portrait', ru: 'Портрет' },
    aspect: '3/4',
    span: '',
  },
  {
    src: '/manus-storage/000021_ffe8bb51.webp',
    alt: 'Portrait — natural smile, plants background',
    category: { en: 'Portrait', ru: 'Портрет' },
    aspect: '3/4',
    span: '',
  },
  {
    src: '/manus-storage/000028_c42afaac.webp',
    alt: 'Portrait — blue sweater, wooden floor',
    category: { en: 'Portrait', ru: 'Портрет' },
    aspect: '3/4',
    span: '',
  },
  {
    src: '/manus-storage/000032_53a58127.webp',
    alt: 'Portrait — blue sweater & flowing skirt',
    category: { en: 'Portrait', ru: 'Портрет' },
    aspect: '3/4',
    span: '',
  },
  {
    src: '/manus-storage/000023_736cee82.webp',
    alt: 'Portrait — sequin top, golden light',
    category: { en: 'Portrait', ru: 'Портрет' },
    aspect: '3/4',
    span: '',
    objectPosition: 'center 20%',
  },
  {
    src: '/manus-storage/305C0570_24e4db09.webp',
    alt: 'Portrait — dark coat, profile shot',
    category: { en: 'Portrait', ru: 'Портрет' },
    aspect: '3/4',
    span: '',
  },

  // === MODEL TESTS ===
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/IMG_1758_56bda2f1.JPG',
    alt: 'Model Tests — chandelier & white dress on sofa',
    category: { en: 'Model Tests', ru: 'Модельные тесты' },
    aspect: '3/4',
    span: '',
    isPreview: true,
  },
  {
    src: '/manus-storage/305C1144_e669f7e6.webp',
    alt: 'Model Tests — flowing dress, movement',
    category: { en: 'Model Tests', ru: 'Модельные тесты' },
    aspect: '3/4',
    span: '',
  },
  {
    src: '/manus-storage/Scan-18_20e2ac6d.webp',
    alt: 'Model Tests — polaroid, black outfit',
    category: { en: 'Model Tests', ru: 'Модельные тесты' },
    aspect: '3/4',
    span: '',
  },
  {
    src: '/manus-storage/Scan-1333_1868298f.webp',
    alt: 'Model Tests — double polaroid',
    category: { en: 'Model Tests', ru: 'Модельные тесты' },
    aspect: '3/4',
    span: '',
  },
  {
    src: '/manus-storage/305C0688-1_8692edc1.webp',
    alt: 'Model Tests — sitting on vintage trunk',
    category: { en: 'Model Tests', ru: 'Модельные тесты' },
    aspect: '3/4',
    span: '',
    objectPosition: 'center 25%',
  },
  {
    src: '/manus-storage/305C0932_e55092c0.webp',
    alt: 'Model Tests — freckles, b&w portrait',
    category: { en: 'Model Tests', ru: 'Модельные тесты' },
    aspect: '3/4',
    span: '',
  },

  // === FASHION ===
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/000014_879d066f.webp',
    alt: 'Fashion — black dress & fur collar',
    category: { en: 'Fashion', ru: 'Мода' },
    aspect: '3/4',
    span: '',
    isPreview: true,
    objectPosition: 'center 20%',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/000015_0c5486e6.webp',
    alt: 'Fashion — bold pose & red tights',
    category: { en: 'Fashion', ru: 'Мода' },
    aspect: '3/4',
    span: '',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/IMG_1759_211f1e44.JPG',
    alt: 'Fashion — floral sofa & white dress',
    category: { en: 'Fashion', ru: 'Мода' },
    aspect: '3/4',
    span: '',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/DSC05829-32_1a007cc2.webp',
    alt: 'Fashion — winter shearling & sunglasses',
    category: { en: 'Fashion', ru: 'Мода' },
    aspect: '3/4',
    span: '',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/305C0248fff_36880a9c.webp',
    alt: 'Fashion — white blazer & wet hair',
    category: { en: 'Fashion', ru: 'Мода' },
    aspect: '3/4',
    span: '',
  },
];

const CATEGORIES_EN = ['All', 'Fashion', 'Portrait', 'Model Tests'];
const CATEGORIES_RU = ['Все', 'Мода', 'Портрет', 'Модельные тесты'];

export default function PortfolioSection() {
  const { t, lang } = useLanguage();
  const ref = useReveal();
  const [activeCategory, setActiveCategory] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = lang === 'en' ? CATEGORIES_EN : CATEGORIES_RU;

  // "All" view: show only preview images (one per category)
  // Category view: show all images in that category
  const filteredImages = activeCategory === 0
    ? IMAGES.filter((img) => img.isPreview)
    : IMAGES.filter((img) =>
        lang === 'en'
          ? img.category.en === CATEGORIES_EN[activeCategory]
          : img.category.ru === CATEGORIES_RU[activeCategory]
      );

  // Find category index by image's category name
  const getCategoryIndex = (img: ImageItem): number => {
    const catEN = img.category.en;
    return CATEGORIES_EN.indexOf(catEN);
  };

  const handleImageClick = (img: ImageItem) => {
    if (activeCategory === 0) {
      // In "All" view, clicking navigates to that category
      const idx = getCategoryIndex(img);
      if (idx > 0) setActiveCategory(idx);
    }
  };

  // After switching tabs, make new grid items visible with a small staggered delay
  // This fixes the bug where reveal elements stay invisible after tab switch
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Small timeout to let React render the new items
    const timer = setTimeout(() => {
      const items = grid.querySelectorAll('.portfolio-item');
      items.forEach((item, i) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, i * 80);
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [activeCategory]);

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

        {/* Grid — 3 columns for All view, 2 columns for category views */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 gap-4 md:gap-5 ${
            activeCategory === 0
              ? 'md:grid-cols-3'
              : 'md:grid-cols-2'
          }`}
          style={{
            justifyItems: 'center',
          }}
        >
          {filteredImages.map((img, i) => (
            <div
              key={`${activeCategory}-${img.src}`}
              className={`reveal portfolio-item w-full${activeCategory === 0 ? ' cursor-pointer' : ''}`}
              style={{
                transitionDelay: `${i * 0.12}s`,
                aspectRatio: '3/4',
                position: 'relative',
              }}
              onClick={() => handleImageClick(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  aspectRatio: '3/4',
                  objectPosition: img.objectPosition || 'center center',
                }}
              />

              {/* "View collection" overlay for All view — visible on hover */}
              {activeCategory === 0 && (
                <div
                  className="portfolio-overlay"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '2rem 1.5rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    pointerEvents: 'none',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      fontStyle: 'italic',
                      color: 'oklch(0.977 0.005 75)',
                      fontWeight: 300,
                    }}
                  >
                    {lang === 'en' ? img.category.en : img.category.ru}
                  </span>
                  <span
                    className="label-editorial"
                    style={{
                      color: 'oklch(0.72 0.04 60)',
                      fontSize: '0.5625rem',
                    }}
                  >
                    {t('View collection →', 'Смотреть →')}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
