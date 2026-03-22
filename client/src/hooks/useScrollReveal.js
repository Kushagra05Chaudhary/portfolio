import { useEffect, useRef } from 'react';

export const useScrollReveal = (selector = '.reveal-up, .reveal-fade, .edu-timeline-item, .timeline-item') => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Optional: once in view, we could unobserve to save performance
          // observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '50px' });

    // Try observing immediately
    let elements = containerRef.current.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));

    // Fallback: observe again after a short delay to catch any late-rendered children
    const timeoutId = setTimeout(() => {
      if (containerRef.current) {
        elements = containerRef.current.querySelectorAll(selector);
        elements.forEach(el => observer.observe(el));
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [selector]);

  return containerRef;
};
