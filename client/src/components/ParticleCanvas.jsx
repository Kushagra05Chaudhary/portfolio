import { useEffect, useRef } from 'react';

class Particle {
  constructor(state) {
    this.state = state;
    this.reset(true);
  }
  reset(init = false) {
    const { W, H } = this.state;
    this.x = Math.random() * W;
    this.y = init ? Math.random() * H : H + 10;
    this.r = Math.random() * 2.4 + 0.6;
    this.vx = (Math.random() - 0.5) * 0.35;
    this.vy = -(Math.random() * 0.5 + 0.2);
    this.a = Math.random() * 0.6 + 0.15;
    this.phase = Math.random() * Math.PI * 2;
  }
  draw(ctx, isDark) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    const alpha = this.a * (0.8 + 0.5 * Math.sin(this.phase)); // Increased base alpha
    const r = isDark ? 79 : 30;
    const g = isDark ? 140 : 58;
    const b = isDark ? 255 : 138;
    ctx.fillStyle = `rgba(${r},${g},${b},${alpha * (isDark ? 0.9 : 0.8)})`; // Higher max opacity
    ctx.fill();
  }
  update() {
    this.phase += 0.015;
    const { mouse, W, H } = this.state;
    // mouse repulsion
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 120) {
      const force = ((120 - dist) / 120) * 0.6;
      this.vx += (dx / dist) * force;
      this.vy += (dy / dist) * force;
    }
    this.vx *= 0.98;
    this.vy *= 0.98;
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < -10 || this.x < -20 || this.x > W + 20) this.reset();
  }
}

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const state = { W: 0, H: 0, mouse: { x: -999, y: -999 } };
    let particles = [];
    const COUNT = window.innerWidth < 768 ? 35 : 70;

    const resize = () => {
      state.W = canvas.width = window.innerWidth;
      state.H = canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = Array.from({ length: COUNT }, () => new Particle(state));
    };

    let lastTime = 0;
    let raf;
    const animate = (t) => {
      ctx.clearRect(0, 0, state.W, state.H);
      const isDark = document.body.getAttribute('data-theme') === 'dark';

      // connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - d / 110) * (isDark ? 0.20 : 0.35); // Adjusted for darker color
            const cr = isDark ? 255 : 30;
            const cg = isDark ? 255 : 58;
            const cb = isDark ? 255 : 138;
            ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`;
            ctx.lineWidth = 1.0; // Slightly thicker lines
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update(t - lastTime);
        p.draw(ctx, isDark);
      });
      
      lastTime = t;
      raf = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      state.mouse.x = e.clientX;
      state.mouse.y = e.clientY;
    };

    resize();
    init();
    raf = requestAnimationFrame(animate);

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      aria-hidden="true" 
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}
    />
  );
};

export default ParticleCanvas;
