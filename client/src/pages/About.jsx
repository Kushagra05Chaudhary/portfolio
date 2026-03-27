import { useEffect, useRef, useState } from 'react';
import { BrainCircuit, Rocket } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const achievementsRef = useRef(null);
  const cardRefs = useRef([]);
  const [isAchievementsVisible, setIsAchievementsVisible] = useState(false);
  const [leetCount, setLeetCount] = useState(0);

  useEffect(() => {
    if (!achievementsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAchievementsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(achievementsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAchievementsVisible) return;

    const target = 200;
    const duration = 1400;
    const start = performance.now();
    let rafId;

    const tick = (t) => {
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setLeetCount(Math.floor(target * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isAchievementsVisible]);

  useEffect(() => {
    const listeners = [];

    cardRefs.current.forEach((card) => {
      if (!card) return;

      const onMouseMove = (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const px = x / rect.width - 0.5;
        const py = y / rect.height - 0.5;

        card.style.setProperty('--ach-rx', `${(-py * 7).toFixed(2)}deg`);
        card.style.setProperty('--ach-ry', `${(px * 9).toFixed(2)}deg`);
        card.style.setProperty('--ach-mx', `${x}px`);
        card.style.setProperty('--ach-my', `${y}px`);
      };

      const onMouseLeave = () => {
        card.style.setProperty('--ach-rx', '0deg');
        card.style.setProperty('--ach-ry', '0deg');
        card.style.setProperty('--ach-mx', '50%');
        card.style.setProperty('--ach-my', '50%');
      };

      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);
      listeners.push(() => {
        card.removeEventListener('mousemove', onMouseMove);
        card.removeEventListener('mouseleave', onMouseLeave);
      });
    });

    return () => listeners.forEach((cleanup) => cleanup());
  }, [isAchievementsVisible]);

  return (
    <main>
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">
          
          {/* ⭐ SECTION 2 — ABOUT */}
          <div className="reveal-up" style={{ maxWidth: '820px', margin: '0 auto 100px auto', textAlign: 'center' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>About Me</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.15, marginBottom: '24px' }}>
              Building Scalable Systems & <br />Real-World Applications
            </h2>
            <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--clr-text-sec)', display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left', background: 'var(--clr-glass)', padding: '40px', borderRadius: '24px', border: '1px solid var(--clr-border)', boxShadow: 'var(--shadow-sm)', backdropFilter: 'blur(12px)' }}>
              <p>I am a Computer Science undergraduate focused on developing full-stack applications that combine structured backend engineering with intuitive user experiences. My work emphasizes building reliable systems, secure real-time communication platforms, and performance-aware web applications.</p>
              <p>Through hands-on projects, I continuously explore how modern software is architected, optimized, and deployed. I am particularly interested in backend system design, networking concepts, and scalable application development.</p>
              <p>My goal is to grow into an engineer who can design and build production-ready systems by applying strong computer science fundamentals to practical problems.</p>
              
              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <a href="#philosophy" className="btn btn-primary" data-magnetic>
                  <span className="btn-text">Explore My Engineering Philosophy</span>
                </a>
              </div>
            </div>
          </div>

          {/* ⭐ SECTION 3 — ENGINEERING PHILOSOPHY */}
          <div id="philosophy" className="section-header reveal-up" style={{ scrollMarginTop: '100px' }}>
            <span className="section-tag">Core Principles</span>
            <h2 className="section-title">
              Engineering <br /><em>Philosophy</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '20px', marginBottom: '100px', alignItems: 'stretch' }}>
            <div className="philo-card glass-card reveal-up" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--clr-accent-dark)', background: 'rgba(127,179,213,0.10)', border: '1px solid rgba(127,179,213,0.22)', borderRadius: '100px', padding: '4px 12px', width: 'fit-content', marginBottom: '14px' }}>01</div>
              <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '20px', fontWeight: 700, color: 'var(--clr-text-primary)' }}>Learn → Build → Refine</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--clr-text-sec)', marginTop: '8px', flex: 1 }}>I believe true understanding comes from building practical systems and continuously improving them. Each implementation helps translate theoretical knowledge into engineering intuition.</p>
            </div>
            <div className="philo-card glass-card reveal-up" style={{ '--delay': '0.1s', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--clr-accent-dark)', background: 'rgba(127,179,213,0.10)', border: '1px solid rgba(127,179,213,0.22)', borderRadius: '100px', padding: '4px 12px', width: 'fit-content', marginBottom: '14px' }}>02</div>
              <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '20px', fontWeight: 700, color: 'var(--clr-text-primary)' }}>Simplicity Enables Scalability</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--clr-text-sec)', marginTop: '8px', flex: 1 }}>Before optimizing for scale or performance, I focus on writing clean, structured, and maintainable code. Simple systems are easier to debug, evolve, and scale effectively.</p>
            </div>
            <div className="philo-card glass-card reveal-up" style={{ '--delay': '0.2s', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--clr-accent-dark)', background: 'rgba(127,179,213,0.10)', border: '1px solid rgba(127,179,213,0.22)', borderRadius: '100px', padding: '4px 12px', width: 'fit-content', marginBottom: '14px' }}>03</div>
              <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '20px', fontWeight: 700, color: 'var(--clr-text-primary)' }}>Systems Thinking Over Feature Thinking</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--clr-text-sec)', marginTop: '8px', flex: 1 }}>Rather than treating problems as isolated features, I aim to understand how components interact within a larger architecture. This perspective helps build software that is reliable, extensible, and production-ready.</p>
            </div>
          </div>

          {/* ⭐ SECTION 4 — EXPERIENCE & JOURNEY */}
          <div className="section-header reveal-up">
            <span className="section-tag">Career Journey</span>
            <h2 className="section-title">
              Experience &<br /><em>Growth</em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '800px', margin: '0 auto' }}>

            {/* Timeline Item 1 — Full Stack Development Projects */}
            <div className="reveal-up" style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '28px' }}>
                <div style={{ width: '14px', height: '14px', flexShrink: 0, borderRadius: '50%', background: 'linear-gradient(135deg, var(--clr-primary), var(--clr-accent-dark))', border: '3px solid white', boxShadow: '0 0 0 3px var(--clr-primary), var(--shadow-sm)', position: 'relative', zIndex: 1 }}></div>
                <div style={{ width: '2px', flex: 1, background: 'linear-gradient(to bottom, var(--clr-primary), rgba(167,199,231,0.1))', marginTop: '8px', minHeight: '60px' }}></div>
              </div>
              <div className="glass-card" style={{ marginBottom: '28px', padding: '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '20px', fontWeight: 700, color: 'var(--clr-text-primary)' }}>Full-Stack Development Projects</h3>
                    <p style={{ fontSize: '14px', color: 'var(--clr-accent-dark)', fontWeight: 500, marginTop: '2px' }}>Self-Driven Engineering Practice</p>
                  </div>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: 'var(--clr-text-muted)', whiteSpace: 'nowrap' }}>2024 – Present</span>
                </div>
                <ul className="timeline-list">
                  <li>Developed <strong>AskRen</strong>, a full-stack car rental platform implementing authentication workflows, booking management logic, and REST-based backend architecture.</li>
                  <li>Built an <strong>Encrypted VoIP Communication System</strong> focused on secure real-time peer-to-peer communication using WebRTC and socket-based signaling.</li>
                  <li>Designed responsive frontends integrated with structured backend APIs and optimized database schemas.</li>
                  <li>Practiced performance-aware development by improving API efficiency and ensuring stable real-time data exchange.</li>
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                  {['React', 'Node.js', 'Express', 'MongoDB', 'WebRTC', 'Socket.io', 'TypeScript'].map(tag => (
                    <span key={tag} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', padding: '3px 10px', background: 'rgba(167,199,231,0.15)', border: '1px solid var(--clr-border)', borderRadius: '6px', color: 'var(--clr-text-sec)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Item 2 — Independent Project Development */}
            <div className="reveal-up" style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '24px', '--delay': '0.15s' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '28px' }}>
                <div style={{ width: '14px', height: '14px', flexShrink: 0, borderRadius: '50%', background: 'linear-gradient(135deg, var(--clr-primary), var(--clr-accent-dark))', border: '3px solid white', boxShadow: '0 0 0 3px var(--clr-primary), var(--shadow-sm)', position: 'relative', zIndex: 1 }}></div>
                <div style={{ width: '2px', flex: 1, background: 'linear-gradient(to bottom, var(--clr-primary), rgba(167,199,231,0.1))', marginTop: '8px', minHeight: '60px' }}></div>
              </div>
              <div className="glass-card" style={{ marginBottom: '28px', padding: '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '20px', fontWeight: 700, color: 'var(--clr-text-primary)' }}>Independent Project Development</h3>
                    <p style={{ fontSize: '14px', color: 'var(--clr-accent-dark)', fontWeight: 500, marginTop: '2px' }}>Personal Engineering Practice</p>
                  </div>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: 'var(--clr-text-muted)', whiteSpace: 'nowrap' }}>2023 – Present</span>
                </div>
                <ul className="timeline-list">
                  <li>Built multiple academic and real-world inspired software projects to strengthen understanding of backend architecture and system design principles.</li>
                  <li>Focused on translating theoretical computer science concepts such as networking and operating systems into practical implementation.</li>
                  <li>Continuously improving code structure, scalability thinking, and software reliability through iterative project development.</li>
                </ul>
              </div>
            </div>

            {/* Timeline Item 3 — Education */}
            <div className="reveal-up" style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '24px', '--delay': '0.3s' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '28px' }}>
                <div style={{ width: '14px', height: '14px', flexShrink: 0, borderRadius: '50%', background: 'linear-gradient(135deg, var(--clr-primary), var(--clr-accent-dark))', border: '3px solid white', boxShadow: '0 0 0 3px var(--clr-primary), var(--shadow-sm)', position: 'relative', zIndex: 1 }}></div>
              </div>
              <div className="glass-card" style={{ marginBottom: '28px', padding: '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '20px', fontWeight: 700, color: 'var(--clr-text-primary)' }}>Bachelor of Technology — Computer Science Engineering</h3>
                    <p style={{ fontSize: '14px', color: 'var(--clr-accent-dark)', fontWeight: 500, marginTop: '2px' }}>Lovely Professional University</p>
                  </div>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: 'var(--clr-text-muted)', whiteSpace: 'nowrap' }}>2023 – 2027</span>
                </div>
                <ul className="timeline-list">
                  <li>Developing strong foundations in networking, operating systems, and computational theory.</li>
                  <li>Applying academic knowledge through full-stack project development and system-oriented engineering practice.</li>
                  <li>Building long-term focus toward backend engineering and scalable system architecture.</li>
                </ul>
              </div>
            </div>

          </div>

          <section ref={achievementsRef} className={`achievements-section ${isAchievementsVisible ? 'is-visible' : ''}`}>
            <div className="achievements-bg-grid" aria-hidden="true"></div>
            <div className="achievements-particles" aria-hidden="true">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    left: `${(i * 17) % 100}%`,
                    top: `${(i * 29) % 100}%`,
                    animationDuration: `${10 + i * 0.35}s`,
                    animationDelay: `${i * -0.4}s`
                  }}
                ></span>
              ))}
            </div>

            <div className="section-header reveal-up" style={{ marginBottom: '36px' }}>
              <span className="section-tag">Achievements</span>
              <h2 className="section-title">
                Floating Milestones <br /><em>In My Orbit</em>
              </h2>
            </div>

            <div className="achievements-timeline">
              <div className="achievements-rail" aria-hidden="true"></div>

              <article className="ach-row" style={{ '--delay': '0s' }}>
                <div className="ach-node ach-node-blue">
                  <BrainCircuit size={18} />
                </div>
                <div ref={(el) => { cardRefs.current[0] = el; }} className="ach-card achieve-card">
                  <div className="ach-shimmer" aria-hidden="true"></div>
                  <div className="ach-ripple" aria-hidden="true"></div>
                  <div className="ach-trail" aria-hidden="true"></div>

                  <div className="ach-meta">
                    <span className="ach-subtitle">LeetCode Practice</span>
                    <span className="ach-badge">Consistency • Problem Solving</span>
                  </div>

                  <h3 className="ach-title">Solved 200+ DSA Problems</h3>
                  <p className="ach-desc">Built strong problem-solving rhythm through consistent algorithm practice and pattern-based revision.</p>

                  <div className="ach-counter" aria-label="LeetCode solved problems">
                    <span>{leetCount}</span>
                    <span className="ach-counter-plus">+</span>
                  </div>
                </div>
              </article>

              <article className="ach-row" style={{ '--delay': '0.14s' }}>
                <div className="ach-node ach-node-orange">
                  <Rocket size={18} />
                </div>
                <div ref={(el) => { cardRefs.current[1] = el; }} className="ach-card ach-pulse-border achieve-card">
                  <div className="ach-shimmer" aria-hidden="true"></div>
                  <div className="ach-ripple" aria-hidden="true"></div>
                  <div className="ach-trail" aria-hidden="true"></div>

                  <div className="ach-meta">
                    <span className="ach-subtitle">Real-world innovation challenge</span>
                    <span className="ach-badge ach-badge-violet">Hardware + IoT Thinking</span>
                  </div>

                  <h3 className="ach-title">Participated in IoT Hackathon</h3>
                  <p className="ach-desc">Collaborated in a rapid prototyping environment to solve practical problems under strict time constraints.</p>
                </div>
              </article>
            </div>
          </section>
        </div>

        <style>{`
          .timeline-list { display: flex; flex-direction: column; gap: 8px; }
          .timeline-list li { font-size: 14px; line-height: 1.65; color: var(--clr-text-sec); padding-left: 16px; position: relative; list-style: none; }
          .timeline-list li::before { content: ''; position: absolute; left: 0; top: 9px; width: 5px; height: 5px; border-radius: 50%; background: var(--clr-primary); }
          .timeline-list li strong { font-weight: 600; color: var(--clr-text-primary); }
        `}</style>
      </section>
    </main>
  );
};

export default About;
