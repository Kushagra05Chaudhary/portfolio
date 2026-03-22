import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    const dot = document.getElementById('cursor-dot');
    if (!glow || !dot || window.innerWidth < 768) return;

    let mx = -200, my = -200;
    let gx = -200, gy = -200;
    let raf;

    const tick = () => {
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      if (glow) {
        glow.style.left = `${gx}px`;
        glow.style.top = `${gy}px`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) {
        dot.style.left = `${mx}px`;
        dot.style.top = `${my}px`;
      }
    };

    const handleHoverEls = () => {
      const hoverEls = document.querySelectorAll('a, button, input, textarea, [data-magnetic], .skill-pill, .project-card, .achieve-card, .philo-card, .ticker-item');
      hoverEls.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', () => glow && (glow.style.opacity = '1'));
    document.addEventListener('mouseleave', () => glow && (glow.style.opacity = '0'));
    
    tick();
    
    // Mutation observer for dynamically added elements
    const observer = new MutationObserver(handleHoverEls);
    observer.observe(document.body, { childList: true, subtree: true });
    handleHoverEls();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor-glow" aria-hidden="true" style={{
        position: 'fixed', width: '400px', height: '400px', borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
        background: 'radial-gradient(circle, rgba(167,199,231,0.18) 0%, transparent 65%)',
        transition: 'opacity 0.3s', margin: '-200px 0 0 -200px'
      }}></div>
      <div id="cursor-dot" aria-hidden="true" style={{
        position: 'fixed', width: '8px', height: '8px', borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
        background: 'var(--clr-accent-dark)', mixBlendMode: 'multiply',
        transition: 'width 0.25s, height 0.25s, background 0.25s', margin: '-4px 0 0 -4px'
      }}></div>
      
      {/* Global hover style override */}
      <style>{`
        body.cursor-hover #cursor-dot {
          width: 24px !important;
          height: 24px !important;
          background: var(--clr-primary) !important;
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};

export default Cursor;
