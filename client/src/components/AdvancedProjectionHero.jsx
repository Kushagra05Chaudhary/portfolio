import React, { useEffect, useRef, useState } from 'react';
import '../styles/AdvancedProjectionHero.css';

const AdvancedProjectionHero = ({ imageUrl = '/profile_image.png' }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHoveringRing, setIsHoveringRing] = useState(false);

  // High performance tracking using refs and requestAnimationFrame
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let rafId;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let targetScroll = 0, currentScroll = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handleScroll = () => {
      // Normalize scroll loosely based on typical hero height
      targetScroll = Math.min(window.scrollY / 800, 1); 
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Canvas setup for Neural Network & Particles
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let nodes = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initCanvas();
    };

    class NeuralNode {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.radius = Math.random() * 1.5 + 0.5;
        this.pulse = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const alpha = 0.2 + 0.2 * Math.sin(this.pulse);
        ctx.fillStyle = `rgba(140, 200, 255, ${alpha})`;
        ctx.fill();
      }
    }

    class PhysicsParticle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 100; // Depth for parallax
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -(Math.random() * 0.5 + 0.1); // Slow upward drift
        this.radius = Math.random() * 1.5 + 0.5;
        this.life = Math.random() * Math.PI * 2;
        this.isWarm = Math.random() > 0.85; // 15% warm accents
      }
      update(coreX, coreY) {
        // Mouse parallax
        this.x -= currentX * (100 / (this.z + 1));
        this.y -= currentY * (100 / (this.z + 1));
        
        // Base drift
        this.x += this.vx;
        this.y += this.vy;
        this.life += 0.01;

        // Occasional magnetic attraction to core (bottom center)
        const dx = coreX - this.x;
        const dy = coreY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 300 && Math.sin(this.life) > 0.8) {
          this.vx += (dx / dist) * 0.02;
          this.vy += (dy / dist) * 0.02;
        }

        // Reset if off screen
        if (this.y < -50 || this.x < -50 || this.x > width + 50) {
          this.y = height + 50;
          this.x = Math.random() * width;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Smooth opacity fading
        const alpha = (0.2 + 0.3 * Math.sin(this.life)) * (1 - currentScroll * 0.5); 
        
        if (this.isWarm) {
          ctx.fillStyle = `rgba(220, 150, 80, ${alpha})`;
          ctx.shadowColor = `rgba(220, 150, 80, ${alpha * 2})`;
        } else {
          ctx.fillStyle = `rgba(80, 200, 255, ${alpha})`;
          ctx.shadowColor = `rgba(80, 200, 255, ${alpha * 2})`;
        }
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const initCanvas = () => {
      nodes = Array.from({ length: 40 }, () => new NeuralNode());
      particles = Array.from({ length: 60 }, () => new PhysicsParticle());
    };

    window.addEventListener('resize', resize);
    resize();

    const renderLoop = () => {
      // 1. Interpolate CSS Variables (Spatial Parallax & Scroll)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      currentScroll += (targetScroll - currentScroll) * 0.08;

      container.style.setProperty('--mx', currentX);
      container.style.setProperty('--my', currentY);
      container.style.setProperty('--scrollY', currentScroll);

      // 2. Render Canvas
      ctx.clearRect(0, 0, width, height);
      
      // Node connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        nodes[i].draw();
        
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = (1 - dist / 150) * 0.15 * (1 - currentScroll * 0.5);
            ctx.strokeStyle = `rgba(140, 200, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Parallax center for core
      const coreX = width / 2;
      const coreY = height * 0.7; // Approx where core is

      // Particles
      particles.forEach(p => {
        p.update(coreX, coreY);
        p.draw();
      });

      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="ap-container" ref={containerRef}>
      
      {/* Background Canvas: Cinematic Neural Network & Physics Field */}
      <canvas 
        ref={canvasRef} 
        className="ap-canvas-bg"
        style={{
          transform: `translate3d(calc(var(--mx) * -15px), calc(var(--my) * -15px), 0)`
        }}
      />

      {/* Cinematic Fog Layer */}
      <div className="ap-light-fog"></div>

      <div className="ap-projection-stage">
        
        {/* Plasma Reactor Core Platform */}
        <div 
          className="ap-reactor-core"
          style={{
            // Platform shifts subtly in depth, glow expands on scroll
            transform: `rotateX(75deg) translate3d(calc(var(--mx) * -8px), calc(var(--my) * -8px), calc(var(--scrollY) * -50px)) scale(calc(1 + var(--scrollY) * 0.1))`
          }}
        >
          <div className="ap-core-base"></div>
          <div className="ap-core-turbulence"></div>
          
          <div className="ap-energy-waves-container">
            <div className="ap-energy-wave wave-1"></div>
            <div className="ap-energy-wave wave-2"></div>
            <div className="ap-energy-wave wave-3"></div>
          </div>
          
          <div className="ap-orbital-rings">
            <div className="ap-ring ap-ring-inner"></div>
            <div className="ap-ring ap-ring-middle"></div>
            <div className="ap-ring ap-ring-outer"></div>
          </div>
          
          <div className="ap-magnetic-streams">
            <div className="ap-stream ap-stream-left"></div>
            <div className="ap-stream ap-stream-right"></div>
          </div>
        </div>

        {/* Strong Vertical Energy Beam */}
        <div className="ap-vertical-beam">
          <div className="ap-beam-core"></div>
          <div className="ap-beam-scatter"></div>
          <div className="ap-beam-turbulence"></div>
        </div>

        {/* Mid-Materialization Avatar */}
        <div 
          className="ap-avatar-container"
          style={{
            // Avatar remains stable vs mouse, but increases vertical float distance on scroll
            transform: `translate3d(calc(var(--mx) * -3px), calc(var(--my) * -3px + var(--scrollY) * -50px), 0)`
          }}
        >
          {/* Core Ground Shadow */}
          <div className="ap-avatar-shadow" style={{ opacity: `calc(1 - var(--scrollY) * 0.5)` }}></div>

          <div className="ap-avatar-wrapper">
            <div className="ap-materialize-effect">
              <div className="ap-hologram-scanline"></div>
              <div className="ap-hologram-glitch"></div>
            </div>

            <img src={imageUrl} alt="AI Projection" className="ap-avatar-img" />
            
            <div className="ap-data-point pt-1"></div>
            <div className="ap-data-point pt-2"></div>
            
            {/* Interactive Orbital Energy Field */}
            <div 
              className={`ap-interactive-orbit ${isHoveringRing ? 'orbit-active' : ''}`}
              onMouseEnter={() => setIsHoveringRing(true)}
              onMouseLeave={() => setIsHoveringRing(false)}
              style={{
                // Orbit tilts based on cursor direction, depth shifts on scroll
                transform: `rotateX(72deg) rotateY(calc(var(--mx) * 15deg)) rotateZ(calc(var(--my) * -10deg)) translateZ(calc(var(--scrollY) * 30px))`
              }}
            >
              <div className="ap-orbit-glow-ring"></div>
              {/* Particles following ring path on hover */}
              <div className="ap-orbit-tracer t-1"></div>
              <div className="ap-orbit-tracer t-2"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdvancedProjectionHero;
