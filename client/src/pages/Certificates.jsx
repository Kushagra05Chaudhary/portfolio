import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ResumeModal from '../components/ResumeModal';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const primaryTrack = [
    {
      icon: '🌐',
      title: 'Computer Communications Specialization',
      institution: 'University of Colorado (Coursera)',
      focus: 'Core networking, TCP/IP, and distributed systems.',
      year: '2024',
      file: 'Computer_Communications_Specialization.pdf'
    },
    {
      icon: '⚙️',
      title: 'Digital Systems: Logic to Processors',
      institution: 'Universitat Autònoma de Barcelona (Coursera)',
      focus: 'Foundational computer architecture and processor design.',
      year: '2024',
      file: 'Digital_Systems_Logic_to_Processors.pdf'
    },
    {
      icon: '💻',
      title: 'Introduction to Hardware & Operating Systems',
      institution: 'IBM (Coursera)',
      focus: 'OS structures and system resource management.',
      year: '2024',
      file: 'Introduction_to_Hardware_and_Operating_Systems.pdf'
    },
    {
      icon: '🧮',
      title: 'Computational Theory & Finite Automata',
      institution: 'Infosys Springboard',
      focus: 'Formal logic and theoretical foundations of computation.',
      year: '2025',
      file: 'Computational_Theory_and_Finite_Automata.pdf'
    },
    {
      icon: '📡',
      title: 'Computer Networking Fundamentals',
      institution: 'Google (Coursera)',
      focus: 'Practical internet architecture and protocols.',
      year: '2024',
      file: 'Computer_Networking_Fundamentals.pdf'
    }
  ];

  const secondaryTrack = [
    {
      icon: '🧠',
      title: 'Generative AI Fundamentals',
      institution: 'NASSCOM / Infosys',
      focus: 'Modern AI workflows and applied intelligence tools.',
      year: '2025',
      file: 'Generative_AI_Fundamentals.pdf'
    }
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: '100px', paddingBottom: '80px', position: 'relative' }}>
        <div className="container">
          <div className="section-header reveal-up" style={{ marginBottom: '64px' }}>
            <span className="section-tag">Continuous Growth</span>
            <h2 className="section-title">
              Technical Learning &<br /><em>Certifications</em>
            </h2>
            <p className="section-desc">Structured learning paths focusing on computer science fundamentals, backend architecture, and system engineering.</p>
          </div>

          <div className="timeline-grid">

            {/* Primary Track */}
            <div className="track-column">
              <h3 className="track-title reveal-up">Systems & Networking Foundations</h3>
              <div className="track-timeline">
                <div className="timeline-line"></div>
                {primaryTrack.map((cert, idx) => (
                  <div key={idx} className="timeline-item reveal-up" style={{ '--delay': `${idx * 0.1}s` }}>
                    <div className="timeline-node"></div>
                    <div className="cert-card" onClick={() => setSelectedCert(cert)} style={{ cursor: 'pointer' }}>
                      <div className="cert-header">
                        <div className="cert-icon">{cert.icon}</div>
                        <span className="cert-year">{cert.year}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                        <h4 className="cert-title">{cert.title}</h4>
                        <ArrowUpRight size={18} style={{ color: 'var(--clr-text-muted)', flexShrink: 0, marginTop: '2px', transition: 'color 0.3s, transform 0.3s' }} className="cert-arrow" />
                      </div>
                      <div className="cert-inst">{cert.institution}</div>
                      <p className="cert-focus">{cert.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Track */}
            <div className="track-column secondary-track">
              <h3 className="track-title reveal-up" style={{ '--delay': '0.3s' }}>Emerging Technologies</h3>
              <div className="track-timeline">
                <div className="timeline-line"></div>
                {secondaryTrack.map((cert, idx) => (
                  <div key={idx} className="timeline-item reveal-up" style={{ '--delay': `${0.4 + idx * 0.1}s` }}>
                    <div className="timeline-node"></div>
                    <div className="cert-card" onClick={() => setSelectedCert(cert)} style={{ cursor: 'pointer' }}>
                      <div className="cert-header">
                        <div className="cert-icon">{cert.icon}</div>
                        <span className="cert-year">{cert.year}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                        <h4 className="cert-title">{cert.title}</h4>
                        <ArrowUpRight size={18} style={{ color: 'var(--clr-text-muted)', flexShrink: 0, marginTop: '2px', transition: 'color 0.3s, transform 0.3s' }} className="cert-arrow" />
                      </div>
                      <div className="cert-inst">{cert.institution}</div>
                      <p className="cert-focus">{cert.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .timeline-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 64px;
          align-items: start;
        }

        @media (max-width: 900px) {
          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .track-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: var(--clr-text-primary);
          margin-bottom: 32px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--clr-border);
          letter-spacing: -0.01em;
        }

        .secondary-track {
          transform: translateY(40px);
        }
        
        @media (max-width: 900px) {
          .secondary-track { transform: translateY(0); }
        }

        .track-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .timeline-line {
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 17px;
          width: 2px;
          background: linear-gradient(180deg, var(--clr-accent) 0%, rgba(120,160,255,0.1) 100%);
          border-radius: 2px;
          z-index: 0;
        }

        .timeline-item {
          position: relative;
          padding-left: 54px;
          display: flex;
        }

        .timeline-node {
          position: absolute;
          left: 12px;
          top: 24px;
          width: 12px;
          height: 12px;
          background: var(--clr-bg);
          border: 2px solid var(--clr-accent);
          border-radius: 50%;
          z-index: 1;
          box-shadow: 0 0 10px rgba(79, 140, 255, 0.4);
        }

        .cert-card {
          flex: 1;
          background: var(--clr-glass);
          backdrop-filter: blur(12px);
          border: 1px solid var(--clr-border);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s cubic-bezier(0.1, 0, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
        }

        .cert-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 16px;
          box-shadow: inset 0 0 0 1px rgba(120,160,255,0);
          transition: box-shadow 0.3s ease;
          pointer-events: none;
        }

        .cert-card:hover {
          transform: translateY(-4px) scale(1.01);
          border-color: rgba(120,160,255,0.3);
          box-shadow: 0 12px 30px rgba(0,0,0,0.1), 0 0 20px rgba(120,160,255,0.05);
        }

        .cert-card:hover::before {
          box-shadow: inset 0 0 0 1px rgba(120,160,255,0.15);
        }

        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .cert-icon {
          width: 38px;
          height: 38px;
          background: rgba(120,160,255,0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .cert-year {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: var(--clr-accent);
          background: rgba(120,160,255,0.1);
          padding: 4px 10px;
          border-radius: 100px;
        }

        .cert-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--clr-text-primary);
          margin-bottom: 4px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .cert-inst {
          font-size: 12px;
          color: var(--clr-text-muted);
          margin-bottom: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cert-focus {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--clr-text-sec);
          margin: 0;
        }

        [data-theme="light"] .cert-card {
          background: rgba(255, 255, 255, 0.7);
          border-color: rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
        }
        
        [data-theme="light"] .cert-card:hover {
          border-color: rgba(79, 140, 255, 0.3);
          box-shadow: 0 12px 24px rgba(0,0,0,0.06), 0 0 16px rgba(79, 140, 255, 0.08);
        }
        
        .cert-card:hover .cert-arrow {
          color: var(--clr-accent) !important;
          transform: translate(2px, -2px);
        }
      `}</style>

      <ResumeModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        pdfUrl={selectedCert ? `/certificates/${encodeURIComponent(selectedCert.file)}` : ''}
        title={selectedCert ? `${selectedCert.title}.pdf` : ''}
      />
    </main>
  );
};

export default Certificates;
