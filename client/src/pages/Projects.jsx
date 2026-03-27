import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Github, X } from 'lucide-react';

const Projects = () => {
  const [gallery, setGallery] = useState(null);

  const askRenImages = [
    '/projects/askren/user/Screenshot 2026-02-21 130407.png',
    '/projects/askren/user/Screenshot (100).png',
    '/projects/askren/user/Screenshot (127).png',
    '/projects/askren/owner/Screenshot (107).png',
    '/projects/askren/owner/Screenshot (112).png',
    '/projects/askren/admin/Screenshot (116).png',
    '/projects/askren/admin/Screenshot (120).png'
  ];
  const voipImages = ['/projects/voip/voip-1.svg', '/projects/voip/voip-2.svg'];
  const plantImages = ['/projects/ai-plant/ai-plant-1.svg', '/projects/ai-plant/ai-plant-2.svg'];

  const openGallery = (title, images) => {
    setGallery({ title, images, index: 0 });
  };

  const closeGallery = () => setGallery(null);

  const showNextImage = () => {
    if (!gallery || gallery.images.length < 2) return;
    setGallery((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  const showPreviousImage = () => {
    if (!gallery || gallery.images.length < 2) return;
    setGallery((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

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
                  <button type="button" onClick={() => openGallery('AskRen — Car Rental Platform', askRenImages)} className="proj-link btn-ghost" style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}><Eye size={16} /> View</button>
                  <a href="https://github.com/Kushagra05Chaudhary/Car_rental" target="_blank" rel="noreferrer" className="proj-link btn-ghost" style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}><Github size={16} /> GitHub</a>
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
              githubUrl="https://github.com/Kushagra05Chaudhary/Encrypted-Secret-VOIP"
              images={voipImages}
              onView={openGallery}
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
              images={plantImages}
              onView={openGallery}
            />
          </div>
        </div>
      </section>

      {gallery && (
        <div className="proj-gallery-backdrop" onClick={closeGallery} role="dialog" aria-modal="true" aria-label={`${gallery.title} images`}>
          <div className="proj-gallery-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="proj-gallery-head">
              <h3>{gallery.title}</h3>
              <button type="button" className="proj-gallery-close btn-ghost" onClick={closeGallery} aria-label="Close gallery">
                <X size={16} />
              </button>
            </div>

            <div className="proj-gallery-stage">
              {gallery.images.length > 1 && (
                <button type="button" className="proj-nav-btn btn-ghost" onClick={showPreviousImage} aria-label="Previous image">
                  <ChevronLeft size={18} />
                </button>
              )}

              <img src={gallery.images[gallery.index]} alt={`${gallery.title} screenshot ${gallery.index + 1}`} className="proj-gallery-image" />

              {gallery.images.length > 1 && (
                <button type="button" className="proj-nav-btn btn-ghost" onClick={showNextImage} aria-label="Next image">
                  <ChevronRight size={18} />
                </button>
              )}
            </div>

            {gallery.images.length > 1 && (
              <div className="proj-gallery-thumbs">
                {gallery.images.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    className={`proj-thumb ${idx === gallery.index ? 'active' : ''}`}
                    onClick={() => setGallery((prev) => ({ ...prev, index: idx }))}
                  >
                    <img src={img} alt={`${gallery.title} thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .project-card:hover { transform: translateY(-6px) scale(1.005) !important; box-shadow: var(--shadow-xl) !important; border-color: var(--clr-border-hover) !important; }
        .project-bullet-list { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
        .project-bullet-list li { font-size: 13.5px; line-height: 1.6; color: var(--clr-text-sec); padding-left: 16px; position: relative; list-style: none; }
        .project-bullet-list li::before { content: ''; position: absolute; left: 0; top: 9px; width: 4px; height: 4px; border-radius: 50%; background: var(--clr-accent-dark); }
        .proj-link { border: 1px solid var(--clr-border); }
        .proj-gallery-backdrop { position: fixed; inset: 0; z-index: 1200; display: flex; align-items: center; justify-content: center; padding: 20px; background: rgba(10, 15, 25, 0.66); backdrop-filter: blur(6px); }
        .proj-gallery-modal { width: min(980px, 100%); padding: 18px; border-radius: 20px; }
        .proj-gallery-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 14px; }
        .proj-gallery-head h3 { font-family: 'Space Grotesk', sans-serif; font-size: 20px; color: var(--clr-text-primary); }
        .proj-gallery-close { width: 36px; height: 36px; border-radius: 10px; padding: 0; display: inline-flex; align-items: center; justify-content: center; }
        .proj-gallery-stage { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 12px; }
        .proj-gallery-image { width: 100%; max-height: min(62vh, 520px); object-fit: contain; border-radius: 14px; border: 1px solid var(--clr-border); background: linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02)); }
        .proj-nav-btn { width: 40px; height: 40px; padding: 0; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; }
        .proj-gallery-thumbs { margin-top: 12px; display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; }
        .proj-thumb { width: 88px; height: 58px; border-radius: 10px; padding: 0; border: 1px solid var(--clr-border); overflow: hidden; background: transparent; opacity: 0.75; transition: all 0.25s ease; }
        .proj-thumb.active { border-color: var(--clr-border-hover); opacity: 1; }
        .proj-thumb img { width: 100%; height: 100%; object-fit: cover; }
        @media (max-width: 720px) {
          .proj-gallery-modal { padding: 14px; }
          .proj-gallery-head h3 { font-size: 17px; }
          .proj-gallery-stage { grid-template-columns: 1fr; }
          .proj-nav-btn { justify-self: center; border-radius: 100px; width: 78px; }
        }
      `}</style>
    </main>
  );
};

const ProjectCard = ({ delay, tag, title, desc, bullets, tech, githubUrl = '#', images = [], onView }) => (
  <article className="project-card reveal-up glass-card" style={{ '--delay': delay, display: 'flex', flexDirection: 'column', gap: '16px', padding: 'max(20px, 4vw)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--clr-accent-dark)', background: 'rgba(127,179,213,0.12)', border: '1px solid rgba(127,179,213,0.22)', borderRadius: '100px', padding: '3px 10px', truncate: 'none', WebkitLineClamp: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{tag}</span>
    </div>
    <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--clr-text-primary)' }}>{title}</h3>
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
      <button type="button" onClick={() => onView(title, images)} className="proj-link btn-ghost" style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}><Eye size={16} /> View</button>
      <a href={githubUrl} target="_blank" rel="noreferrer" className="proj-link btn-ghost" style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}><Github size={16} /> GitHub</a>
    </div>
  </article>
);

export default Projects;
