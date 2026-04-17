/*
 * FAQ SECTION — Alen Danilina Portfolio
 * Design: Accordion with generous spacing, thin dividers
 * Light background → dark text
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { useReveal } from '@/hooks/useReveal';
import { useState } from 'react';

const faqEN = [
  {
    q: 'How do I book a shoot?',
    a: 'A 50€ deposit is required, the rest is paid after the shoot.',
  },
  {
    q: 'When will I receive the photos?',
    a: 'Up to 10 days for film, 14 days for digital photography.',
  },
  {
    q: 'Can I get the originals?',
    a: 'Yes, upon request. Please let me know in advance.',
  },
  {
    q: 'Is fast delivery available?',
    a: 'Yes, within 3 days — +70€.',
  },
  {
    q: 'How long does the shoot take?',
    a: 'Usually 2–3 hours, no strict time limits.',
  },
  {
    q: 'Where does the shoot take place?',
    a: 'In my space in Istanbul (European-style apartment in Cihangir, with a French balcony — I send a video upon request).',
  },
  {
    q: 'Do you help with posing?',
    a: 'Yes, I fully guide your movements during the shoot, down to precise body positioning.',
  },
  {
    q: 'Do you help with styling?',
    a: 'Yes, you can use my personal wardrobe, or we pick outfits in advance from your own clothes, or buy something new.',
  },
  {
    q: 'Is makeup included?',
    a: 'No, it\'s booked separately. I can recommend makeup artists I know upon request.',
  },
];

const faqRU = [
  {
    q: 'Как происходит запись?',
    a: 'Предоплата 50€, остальное оплачивается после съёмки.',
  },
  {
    q: 'Когда будут готовы фотографии?',
    a: 'До 10 дней после съёмки, если это плёнка, 14 дней, если цифровая фотография.',
  },
  {
    q: 'Можно ли получить исходники?',
    a: 'Да, по запросу. Лучше сообщить мне об этом заранее.',
  },
  {
    q: 'Можно ли получить быстрее?',
    a: 'Да, ускоренная отдача (до 3 дней) — +70€.',
  },
  {
    q: 'Сколько длится съёмка?',
    a: 'Обычно 2–3 часа, но мы не ограничены по времени.',
  },
  {
    q: 'Где проходит съёмка?',
    a: 'В моём пространстве в Стамбуле (квартира в европейском стиле в районе Cihangir, есть французский балкон — отправляю видео по запросу).',
  },
  {
    q: 'Помогаешь ли ты с позированием?',
    a: 'Да, я полностью направляю ваши движения во время съёмки, вплоть до точечного положения вашего тела.',
  },
  {
    q: 'Помогаешь ли ты со стилизацией?',
    a: 'Да, можно использовать мой авторский гардероб, либо же мы подбираем образы заранее из вещей, которые у вас есть, либо же что-то докупаем.',
  },
  {
    q: 'Визажист входит в стоимость?',
    a: 'Нет, оплачивается отдельно. Я могу порекомендовать своих знакомых визажистов по запросу.',
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item reveal`} style={{ transitionDelay: `${index * 0.05}s` }}>
      <button
        className="faq-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: '0.9375rem' }}>
          {question}
        </span>
        <span className={`faq-icon ${open ? 'open' : ''}`} aria-hidden="true" />
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { t, lang } = useLanguage();
  const ref = useReveal();

  const faqs = lang === 'en' ? faqEN : faqRU;

  return (
    <section
      id="faq"
      className="py-28 md:py-40 relative overflow-hidden"
      ref={ref}
      style={{ background: 'oklch(0.96 0.006 75)' }}
    >
      {/* Ghost text */}
      <span
        className="ghost-text"
        style={{ top: '5%', left: '-1rem', opacity: 0.04 }}
      >
        FAQ
      </span>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left — label + heading */}
          <div className="lg:col-span-4">
            <div className="reveal flex items-center gap-4 mb-8">
              <span className="deco-line" />
              <span className="label-editorial" style={{ color: 'oklch(0.72 0.04 60)' }}>
                FAQ
              </span>
            </div>
            <h2
              className="reveal reveal-delay-1 heading-display"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontStyle: 'italic',
                lineHeight: 1.1,
              }}
            >
              {t('Questions\n& Answers', 'Вопросы\nи ответы')}
            </h2>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <div style={{ borderTop: '1px solid oklch(0.87 0.01 75)' }}>
              {faqs.map((item, i) => (
                <FAQItem
                  key={i}
                  question={item.q}
                  answer={item.a}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
