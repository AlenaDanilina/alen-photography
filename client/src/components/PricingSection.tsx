/*
 * PRICING SECTION — Alen Danilina Portfolio
 * Design: Card-based layout with images and content side-by-side
 * Desktop: 2 cards side-by-side with images, Mobile: stacked cards
 * Light background → dark text
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';

const PORTRAIT_STUDIO_IMAGE = '/manus-storage/305C04211_9c25378c.webp';
const PHOTO_WALK_IMAGE = '/manus-storage/14_56f877b3.webp';
const MODEL_TEST_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663565548147/GHTrY7qThXL6554NwimgBs/pricing-model-test-gj4KwJYfTFjYCopVWpb3Bq.webp';

const featuresPortraitEN = [
  'Film + digital',
  '30–40 selected images',
  'Full retouch',
  'Studio, film & development included',
  '2–3 hours, no strict timing',
  'Guidance with posing & styling',
  'Access to studio wardrobe, outfit curation',
];

const featuresPhotoWalkEN = [
  'Film + digital (digital priority)',
  'Limited to 1.5 hours — no studio, outdoor locations or your location',
  '30–40 selected images',
  'Guidance with posing & styling',
  'Outfit curation',
  'Light retouch',
];

const featuresPortraitRU = [
  'Плёнка + digital',
  '30–40 отобранных кадров',
  'Авторская ретушь',
  'Студия, плёнка и проявка включены',
  '2–3 часа, без жёстких ограничений',
  'Помощь с позированием и образами',
  'Доступ к студийному гардеробу, сбор образов',
];

const featuresPhotoWalkRU = [
  'Плёнка + digital (приоритет digital)',
  'Максимум 1.5 часа — без студии, уличные локации или ваша локация',
  '30–40 отобранных кадров',
  'Помощь с позированием и образами',
  'Сбор образов',
  'Лёгкая ретушь',
];

export default function PricingSection() {
  const { t, lang } = useLanguage();
  const ref = useReveal();

  const portraitFeatures = lang === 'en' ? featuresPortraitEN : featuresPortraitRU;
  const photoWalkFeatures = lang === 'en' ? featuresPhotoWalkEN : featuresPhotoWalkRU;

  return (
    <section
      id="pricing"
      className="py-28 md:py-40 relative overflow-hidden"
      ref={ref}
    >
      <div className="container">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-12">
          <span className="deco-line" />
          <span className="label-editorial" style={{ color: 'oklch(0.72 0.04 60)' }}>
            {lang === 'en' ? 'PACKAGES' : 'ПАКЕТЫ'}
          </span>
        </div>

        {/* Title */}
        <h2 className="reveal text-5xl md:text-6xl font-serif font-light mb-20 md:mb-28">
          {lang === 'en' ? 'Pricing' : 'Цены'}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:auto-rows-fr">
          {/* Portrait Shooting Card */}
          <div className="reveal group h-full">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              {/* Image */}
              <div className="relative overflow-hidden h-96 md:h-[500px]">
                <img
                  src={PORTRAIT_STUDIO_IMAGE}
                  alt="Portrait shooting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-serif font-light mb-2">
                    {lang === 'en' ? 'Portrait Shooting' : 'Портретная съёмка'}
                  </h3>
                  <p className="text-3xl md:text-4xl font-serif font-light text-gray-400">
                    350€
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {portraitFeatures.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm md:text-base text-gray-700">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="btn-rounded-ghost w-full mt-auto">
                  {lang === 'en' ? 'Get in Touch' : 'Написать'}
                </button>
              </div>
            </div>
          </div>

          {/* Photo Walk Card */}
          <div className="reveal group h-full">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              {/* Image */}
              <div className="relative overflow-hidden h-96 md:h-[500px]">
                <img
                  src={PHOTO_WALK_IMAGE}
                  alt="Photo walk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-serif font-light mb-2">
                    {lang === 'en' ? 'Photo Walk' : 'Фотопрогулка'}
                  </h3>
                  <p className="text-3xl md:text-4xl font-serif font-light text-gray-400">
                    270€
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {photoWalkFeatures.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm md:text-base text-gray-700">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="btn-rounded-ghost w-full mt-auto">
                  {lang === 'en' ? 'Get in Touch' : 'Написать'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="reveal mt-16 md:mt-24 pt-12 md:pt-16 border-t border-gray-200">
          <div className="max-w-2xl">
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
              {lang === 'en' 
                ? '50€ deposit to confirm your booking.'
                : '50€ депозит для подтверждения бронирования.'}
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {lang === 'en'
                ? 'Model tests and brand collaborations — custom rates. Get in touch to discuss your project.'
                : 'Тесты моделей и сотрудничество с брендами — индивидуальные ставки. Напишите, чтобы обсудить ваш проект.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
