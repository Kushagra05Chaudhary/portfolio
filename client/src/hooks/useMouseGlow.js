import { useEffect } from 'react';

export const useMouseGlow = (containerRef, cardSelector = '.glass-card, .edu-card, .project-card, .cert-card, .philo-card') => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e) => {
      const cards = containerRef.current.querySelectorAll(cardSelector);
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [containerRef, cardSelector]);
};
