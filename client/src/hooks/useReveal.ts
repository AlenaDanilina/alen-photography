import React, { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useReveal(): React.RefObject<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all .reveal elements within the ref
    const revealEls = el.querySelectorAll('.reveal');
    revealEls.forEach((revealEl: Element) => observer.observe(revealEl));

    // Also observe the ref itself if it has the class
    if (el.classList && el.classList.contains('reveal')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useRevealOnce(threshold = 0.12): React.RefObject<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
