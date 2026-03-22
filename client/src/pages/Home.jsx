import { useState } from 'react';

import ResumeModal from '../components/ResumeModal';

const Home = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main>
      <section className="hero hero-container" style={{ position: 'relative', minHeight: 'calc(100vh - var(--navbar-h))', display: 'flex', alignItems: 'center' }}>

        {/* Glass orbs & Soft Center Glow */}
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '40vw', height: '40vw', background: 'radial-gradient(circle, var(--clr-glow) 0%, transparent 60%)', filter: 'blur(80px)', opacity: 0.35, zIndex: 1, pointerEvents: 'none' }}></div>
        <div className="glass-orb glass-orb-1" style={{ animation: 'orbFloat 18s linear infinite', position: 'absolute', borderRadius: '50%', background: 'radial-gradient(circle, var(--clr-glow) 0%, transparent 70%)', filter: 'blur(1px)', pointerEvents: 'none', zIndex: 1 }}></div>
        <div className="glass-orb glass-orb-2" style={{ animation: 'orbFloat 22s linear infinite reverse', position: 'absolute', borderRadius: '50%', background: 'radial-gradient(circle, var(--clr-glow) 0%, transparent 70%)', filter: 'blur(1px)', pointerEvents: 'none', animationDelay: '-6s', zIndex: 1 }}></div>

        <div className="hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="hero-badge reveal-fade" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--clr-glass)', border: '1px solid var(--clr-border)', backdropFilter: 'blur(12px)', borderRadius: '100px', padding: '8px 18px', fontSize: '13px', fontWeight: 500, color: 'var(--clr-text-sec)', width: 'auto', maxWidth: '100%', boxShadow: 'var(--shadow-sm)', flexWrap: 'wrap' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4CAF90', boxShadow: '0 0 0 3px rgba(76,175,144,0.25)' }}></span>
            <span>Available for internships & engineering opportunities</span>
          </div>

          <h1 className="hero-headline" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(42px, 10vw, 96px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--clr-text-primary)', display: 'flex', flexDirection: 'column', gap: '0.05em', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            <span className="reveal-fade" style={{ fontWeight: 900 }}>Engineering</span>
            <span className="reveal-fade" style={{ color: 'transparent', WebkitTextStroke: '2px var(--clr-text-primary)', textShadow: '0 0 20px rgba(255,255,255,0.1)', fontWeight: 800, animationDelay: '0.1s', lineHeight: 1.2, whiteSpace: 'normal', wordBreak: 'break-word' }}>Real-World Systems</span>
            <span className="reveal-fade" style={{ fontWeight: 800, background: 'linear-gradient(135deg, var(--clr-text-primary) 20%, var(--clr-accent) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animationDelay: '0.2s' }}>That Scale.</span>
          </h1>

          <p className="hero-sub reveal-fade" style={{ fontSize: 'clamp(16px, 1.5vw, 18px)', lineHeight: 1.7, color: 'var(--clr-text-sec)', maxWidth: '640px', animationDelay: '0.3s' }}>
             I’m <strong>Kushagra Chaudhary</strong> — a computer science student focused on building scalable full-stack applications, secure real-time communication systems, and performance-driven backend architectures.
             <span style={{ display: 'block', marginTop: '10px', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', letterSpacing: '0.05em', color: 'var(--clr-text-muted)' }}>
               Full-Stack Development · System Design · Real-Time Systems · Backend Engineering
             </span>
           </p>

          <div className="hero-ctas reveal-fade-slow" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', animationDelay: '0.4s' }}>
            <a href="#projects" className="btn btn-primary" data-magnetic>
              <span className="btn-text">View Projects</span>
            </a>
            <button onClick={() => setIsResumeOpen(true)} className="btn btn-ghost" data-magnetic>
              <span className="btn-text">Download Resume</span>
            </button>
          </div>

          <div className="tech-ticker reveal-fade-slow" style={{ display: 'flex', alignItems: 'center', gap: '24px', maxWidth: '100%', animationDelay: '0.5s', marginTop: '12px' }}>
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', color: 'var(--clr-text-muted)', whiteSpace: 'nowrap' }}>STACK</span>
            </div>
            
            {/* Mask container to prevent overlap and provide fade effect */}
            <div style={{ overflow: 'hidden', flex: 1, maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', padding: '24px 0' }}>
              <div style={{ display: 'flex', gap: '16px', whiteSpace: 'nowrap', width: 'max-content', animation: 'tickerScroll 35s linear infinite' }}>
                {['React', 'Node.js', 'MongoDB', 'TypeScript', 'WebRTC', 'Socket.io', 'System Design'].map((skill, i) => (
                  <div key={`${i}-${skill}`} className="tech-pill" style={{ animation: 'floatGentle 4s ease-in-out infinite', animationDelay: `${(i % 5) * 0.3}s` }}>{skill}</div>
                ))}
                {/* Duplicate array for seamless scrolling */}
                {['React', 'Node.js', 'MongoDB', 'TypeScript', 'WebRTC', 'Socket.io', 'System Design'].map((skill, i) => (
                  <div key={`dup-${i}-${skill}`} className="tech-pill" style={{ animation: 'floatGentle 4s ease-in-out infinite', animationDelay: `${(i % 5) * 0.3}s` }}>{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <style>{`
        @keyframes tickerScroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-50% - 8px)); } }
        @keyframes orbFloat {
          0%   { transform: translate(0,0); }
          33%  { transform: translate(30px, 20px); }
          66%  { transform: translate(15px, 40px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </main>
  );
};

export default Home;
