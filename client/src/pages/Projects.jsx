import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <main>
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-tag">Featured Work</span>
            <h2 className="section-title">
              Impact-Driven<br /><em>Engineering</em>
            </h2>
            <p className="section-desc">Projects built with deliberate architecture decisions and real-world scale in mind.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '24px' }}>
            
            {/* Project 1 - Featured (AskRen) */}
            <article className="project-card reveal-up" style={{ gridColumn: '1 / -1', background: 'var(--clr-glass)', backdropFilter: 'blur(20px)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '0' }}>
              <div style={{ padding: 'max(20px, 4vw)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--clr-accent-dark)', background: 'rgba(127,179,213,0.12)', border: '1px solid rgba(127,179,213,0.22)', borderRadius: '100px', padding: '3px 10px' }}>Full-Stack MERN Application</span>
                </div>
                <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--clr-text-primary)' }}>AskRen — Car Rental Platform</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--clr-text-sec)' }}>Designed and developed a complete vehicle rental management platform enabling users to browse available cars, manage bookings, and handle authentication securely.</p>
                
                <ul className="project-bullet-list">
                  <li>Implemented REST-based backend architecture for scalable data handling</li>
                  <li>Designed booking workflows with structured database relationships</li>
                  <li>Built responsive user interface focused on usability and performance</li>
                  <li>Applied modular code structure to improve maintainability</li>
                </ul>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                  {['React', 'Node.js', 'Express', 'MongoDB'].map(t => (
                    <span key={t} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', padding: '4px 10px', background: 'rgba(167,199,231,0.15)', border: '1px solid var(--clr-border)', borderRadius: '6px', color: 'var(--clr-text-sec)' }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '16px' }}>
                  <a href="#" className="proj-link btn-ghost" style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}><ExternalLink size={16} /> Live Demo</a>
                  <a href="#" className="proj-link btn-ghost" style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}><Github size={16} /> GitHub</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'max(20px, 4vw)', background: 'linear-gradient(135deg, var(--clr-glass) 0%, transparent 60%)', flexWrap: 'wrap' }}>
                 {/* Decorative architecture diagram */}
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--clr-glass)', backdropFilter: 'blur(12px)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-md)', padding: '20px', boxShadow: 'var(--shadow-sm)', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ padding: '9px 14px', borderRadius: '10px', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', background: 'rgba(167,199,231,0.15)', border: '1px solid var(--clr-border)', color: 'var(--clr-text-primary)' }}>React Client</div>
                    <span style={{ color: 'var(--clr-text-muted)' }}>→</span>
                    <div style={{ padding: '9px 14px', borderRadius: '10px', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', background: 'rgba(127,179,213,0.15)', border: '1px solid var(--clr-border)', color: 'var(--clr-text-primary)' }}>Express API</div>
                    <span style={{ color: 'var(--clr-text-muted)' }}>→</span>
                    <div style={{ padding: '9px 14px', borderRadius: '10px', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', background: 'rgba(77, 179, 61, 0.15)', border: '1px solid rgba(77, 179, 61, 0.35)', color: 'var(--clr-text-primary)' }}>MongoDB</div>
                 </div>
              </div>
            </article>

            {/* Standard Project 2 (VoIP) */}
            <ProjectCard 
              delay="0.1s"
              tag="Secure Real-Time Communication Platform"
              title="Encrypted VoIP Communication System"
              desc="Developed a secure peer-to-peer voice communication system using WebRTC with socket-based signaling for connection management."
              bullets={[
                "Implemented real-time audio communication using peer connection architecture",
                "Designed signaling server for secure session establishment",
                "Focused on connection stability and latency-aware data exchange",
                "Explored networking fundamentals through practical implementation"
              ]}
              tech={['WebRTC', 'Node.js', 'Socket.io']}
            />

            {/* Standard Project 3 (AI Plant Chatbot) */}
            <ProjectCard 
              delay="0.2s"
              tag="Intelligent Conversational Support System"
              title="AI Plant Care Assistant"
              desc="Built a plant care chatbot that provides contextual plant health guidance using rule-based logic combined with AI-powered response generation."
              bullets={[
                "Designed conversational flow for plant diagnosis and care recommendations",
                "Integrated Gemini AI API for dynamic response generation",
                "Implemented session management using MongoDB",
                "Built responsive UI for real-time interaction"
              ]}
              tech={['React', 'Node.js', 'MongoDB', 'Gemini API']}
            />
          </div>
        </div>
      </section>

      <style>{`
        .project-card:hover { transform: translateY(-6px) scale(1.005) !important; box-shadow: var(--shadow-xl) !important; border-color: var(--clr-border-hover) !important; }
        .project-bullet-list { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
        .project-bullet-list li { font-size: 13.5px; line-height: 1.6; color: var(--clr-text-sec); padding-left: 16px; position: relative; list-style: none; }
        .project-bullet-list li::before { content: ''; position: absolute; left: 0; top: 9px; width: 4px; height: 4px; border-radius: 50%; background: var(--clr-accent-dark); }
      `}</style>
    </main>
  );
};

const ProjectCard = ({ delay, tag, title, desc, bullets, tech }) => (
  <article className="project-card reveal-up glass-card" style={{ '--delay': delay, display: 'flex', flexDirection: 'column', gap: '16px', padding: 'max(20px, 4vw)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: 'rgba(214, 143, 85, 0.9)', background: 'rgba(214, 143, 85, 0.08)', border: '1px solid rgba(214, 143, 85, 0.15)', padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.02em', textTransform: 'uppercase', truncate: 'none', WebkitLineClamp: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{tag}</span>
    </div>
    <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--clr-text-primary)' }}>{title}</h3>
    <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--clr-text-sec)' }}>{desc}</p>
    <ul className="project-bullet-list">
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
    
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', paddingTop: '16px' }}>
      {tech.map(t => (
        <span key={t} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', padding: '4px 10px', background: 'rgba(167,199,231,0.15)', border: '1px solid var(--clr-border)', borderRadius: '6px', color: 'var(--clr-text-sec)' }}>{t}</span>
      ))}
    </div>
    <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
      <a href="#" className="proj-link btn-ghost" style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}><ExternalLink size={16} /> Live Demo</a>
      <a href="#" className="proj-link btn-ghost" style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}><Github size={16} /> GitHub</a>
    </div>
  </article>
);

export default Projects;
