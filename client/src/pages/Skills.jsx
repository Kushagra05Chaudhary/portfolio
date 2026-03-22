import SkillGraph from '../components/SkillGraph';

const Skills = () => {
  return (
    <main>
      <section className="section" style={{ paddingTop: '80px', position: 'relative', background: 'linear-gradient(180deg, transparent 0%, rgba(127,179,213,0.08) 30%, rgba(127,179,213,0.15) 50%, rgba(127,179,213,0.08) 70%, transparent 100%)' }}>
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-tag">Engineering Depth</span>
            <h2 className="section-title">
              Skills &<br /><em>Expertise</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div className="reveal-fade" style={{ display: 'flex', justifyContent: 'center' }}>
              <SkillGraph />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <SkillCategory 
                title="Frontend Development" 
                delay="0s"
                skills={[
                  'React',
                  'TypeScript',
                  'Modern CSS (Flexbox, Grid, Responsive Design)',
                  'UI Performance Optimization'
                ]} 
              />
              <SkillCategory 
                title="Backend Development" 
                delay="0.1s"
                skills={[
                  'Node.js',
                  'Express.js',
                  'REST API Architecture',
                  'Real-Time Communication Systems'
                ]} 
              />
              <SkillCategory 
                title="Databases" 
                delay="0.2s"
                skills={[
                  'MongoDB',
                  'Basic SQL Concepts',
                  'Database Schema Design'
                ]} 
              />
              <SkillCategory 
                title="Computer Science Foundations" 
                delay="0.3s"
                skills={[
                  'Computer Networking',
                  'Operating Systems Fundamentals',
                  'Computational Theory',
                  'System Design Basics'
                ]} 
              />
              <SkillCategory 
                title="Tools & Technologies" 
                delay="0.4s"
                skills={[
                  'Git & GitHub',
                  'Postman',
                  'Socket.io',
                  'WebRTC'
                ]} 
              />
              <SkillCategory 
                title="Currently Learning" 
                delay="0.5s"
                skills={[
                  'Cloud Deployment Concepts',
                  'Docker Fundamentals',
                  'Scalable Backend Architecture'
                ]} 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const SkillCategory = ({ title, delay, skills }) => (
  <div className="reveal-up" style={{ '--delay': delay }}>
    <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--clr-text-muted)', marginBottom: '16px' }}>{title}</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {skills.map(s => (
        <div key={s} className="skill-pill" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: 'var(--clr-glass)', backdropFilter: 'blur(12px)', border: '1px solid var(--clr-border)', borderRadius: '100px', transition: 'all 0.4s var(--ease-spring)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--clr-accent)', boxShadow: '0 0 10px var(--clr-accent)' }}></span>
          <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--clr-text-primary)' }}>{s}</span>
        </div>
      ))}
    </div>
    <style>{`
      .skill-pill:hover { 
        transform: translateY(-2px) scale(1.03); 
        box-shadow: 0 10px 20px rgba(79, 140, 255, 0.15), inset 0 0 8px rgba(79, 140, 255, 0.05); 
        border-color: var(--clr-accent); 
        background: var(--clr-glass-hover);
      }
    `}</style>
  </div>
);

export default Skills;
