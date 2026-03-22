import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const LetsTalk = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill out all fields.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Failed to send message');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <main>
      <section className="section" id="contact-section" style={{ paddingTop: '80px', position: 'relative', background: 'linear-gradient(180deg, transparent 0%, rgba(127,179,213,0.08) 50%, transparent 100%)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
          
          <div className="reveal-up" style={{ paddingTop: '16px' }}>
            <span className="section-tag">Let's Connect</span>
            <h2 className="section-title">
              Let’s Build Meaningful<br /><em>Systems Together</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--clr-text-sec)' }}>
                I am always open to discussing engineering opportunities, internships, collaborations, or innovative project ideas.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--clr-text-sec)' }}>
                If you are looking for someone passionate about backend systems, scalable applications, and real-time technologies, I would be glad to connect.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--clr-text-sec)', fontWeight: 500 }}>
                Feel free to reach out for technical discussions, project collaborations, or professional opportunities.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:kushagra.chaudhary3605@gmail.com" className="contact-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 500, color: 'var(--clr-text-sec)', transition: 'color 0.2s, transform 0.2s' }}>
                <span className="contact-link-icon" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(167,199,231,0.15)', border: '1px solid var(--clr-border)', borderRadius: '8px' }}><Mail size={16} /></span>
                kushagra.chaudhary3605@gmail.com
              </a>
              <a href="https://github.com/Kushagra05Chaudhary" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 500, color: 'var(--clr-text-sec)', transition: 'color 0.2s, transform 0.2s' }}>
                <span className="contact-link-icon" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(167,199,231,0.15)', border: '1px solid var(--clr-border)', borderRadius: '8px' }}><Github size={16} /></span>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kushagra-chaudhary1113/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 500, color: 'var(--clr-text-sec)', transition: 'color 0.2s, transform 0.2s' }}>
                <span className="contact-link-icon" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(167,199,231,0.15)', border: '1px solid var(--clr-border)', borderRadius: '8px' }}><Linkedin size={16} /></span>
                LinkedIn
              </a>
            </div>
            <style>{`
              .contact-link:hover { color: var(--clr-accent-dark) !important; transform: translateX(4px); }
              .contact-link:hover .contact-link-icon { background: rgba(127,179,213,0.20) !important; border-color: var(--clr-border-hover) !important; }
            `}</style>
          </div>

          <form onSubmit={handleSubmit} className="glass-card reveal-up" style={{ '--delay': '0.15s', padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="name" style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--clr-text-muted)' }}>Your Name</label>
              <input 
                className="form-input" type="text" id="name" name="name" 
                value={formData.name} onChange={handleChange} 
                placeholder="Your Name" required 
                style={{ padding: '12px 16px', background: 'var(--clr-glass)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-sm)', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'var(--clr-text-primary)' }}
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="email" style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--clr-text-muted)' }}>Email Address</label>
              <input 
                className="form-input" type="email" id="email" name="email" 
                value={formData.email} onChange={handleChange} 
                placeholder="your.email@example.com" required 
                style={{ padding: '12px 16px', background: 'var(--clr-glass)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-sm)', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'var(--clr-text-primary)' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="message" style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--clr-text-muted)' }}>Message</label>
              <textarea 
                className="form-input" id="message" name="message" 
                value={formData.message} onChange={handleChange} 
                placeholder="Tell me about your project or opportunity..." required 
                style={{ padding: '12px 16px', background: 'var(--clr-glass)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-sm)', fontFamily: '"Inter", sans-serif', fontSize: '14px', color: 'var(--clr-text-primary)', minHeight: '120px', resize: 'vertical' }}
              />
            </div>

            {status === 'error' && <div style={{ fontSize: '13px', color: '#D32F2F' }}>{errorMsg}</div>}
            
            {status === 'success' && (
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#2E7D5E', background: 'rgba(46,125,94,0.10)', border: '1px solid rgba(46,125,94,0.20)', borderRadius: 'var(--radius-sm)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✓</span> Message sent! I'll reply within 24 hours.
              </div>
            )}

            <button type="submit" disabled={status === 'submitting'} className="btn btn-primary" style={{ alignSelf: 'flex-start', cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}>
              <span className="btn-text">{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              {!status || status !== 'submitting' && <Send size={16} />}
            </button>
            <style>{`
              .form-input:focus { border-color: var(--clr-accent) !important; box-shadow: 0 0 0 3px rgba(167,199,231,0.25) !important; background: rgba(255,255,255,0.70) !important; outline: none; }
            `}</style>
          </form>

        </div>
      </section>
    </main>
  );
};

export default LetsTalk;
