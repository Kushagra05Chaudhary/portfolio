import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import ParticleCanvas from './components/ParticleCanvas';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import LetsTalk from './pages/LetsTalk';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(saved);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <ParticleCanvas />
      <Cursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="page-container">
        <section id="home"><Home /></section>
        <section id="about" style={{ scrollMarginTop: 'var(--navbar-h)' }}><About /></section>
        <section id="skills" style={{ scrollMarginTop: 'var(--navbar-h)' }}><Skills /></section>
        <section id="projects" style={{ scrollMarginTop: 'var(--navbar-h)' }}><Projects /></section>
        <section id="certificates" style={{ scrollMarginTop: 'var(--navbar-h)' }}><Certificates /></section>
        <section id="lets-talk" style={{ scrollMarginTop: 'var(--navbar-h)' }}><LetsTalk /></section>
      </div>

      <footer className="footer" style={{ borderTop: '1px solid var(--clr-border)', padding: '32px 40px', background: 'var(--clr-glass)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: '"Space Grotesk", sans-serif', fontSize: '14px', fontWeight: 600 }}>
             <span className="brand-mark" style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, var(--clr-primary), var(--clr-accent-dark))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>K</span>
             Kushagra Chaudhary
          </div>
          <p style={{ fontSize: '13px', color: 'var(--clr-text-muted)' }}>Designed & built with precision in the MERN stack. © 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
