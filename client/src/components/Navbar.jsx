import { useState, useEffect } from 'react';

import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { name: 'About Me', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Skills', path: '#skills' },
    { name: 'Certificates', path: '#certificates' },
  ];

  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHash = () => {
      setActiveHash(window.location.hash || '#home');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    
    // Intersection Observer to update hash naturally
    const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'lets-talk'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const hash = `#${entry.target.id}`;
          setActiveHash(hash);
          window.history.replaceState(null, null, hash);
        }
      });
    }, { rootMargin: '-20% 0px -79% 0px' });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('hashchange', handleHash);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 'var(--navbar-h)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', transition: 'background 0.4s var(--ease-smooth), box-shadow 0.4s, backdrop-filter 0.4s',
        background: scrolled ? (theme === 'dark' ? 'rgba(11,18,32,0.65)' : 'rgba(247,251,255,0.80)') : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
        boxShadow: scrolled 
          ? (theme === 'dark' 
              ? '0 1px 0 rgba(255, 255, 255, 0.08), 0 10px 30px rgba(0, 0, 0, 0.5)' 
              : '0 1px 0 var(--clr-border), var(--shadow-sm)') 
          : 'none'
      }}>
        
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '15px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--clr-primary), var(--clr-accent-dark))',
            color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 4px 12px rgba(127,179,213,0.35)',
            transition: 'transform 0.3s var(--ease-spring)'
          }} className="brand-mark">K</div>
          <span>Kushagra Chaudhary</span>
        </a>

        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {navLinks.map((link) => {
            const isActive = activeHash === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                style={{
                  padding: '8px 16px', fontSize: '14px', fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--clr-text-primary)' : 'var(--clr-text-sec)',
                  background: isActive ? 'var(--clr-glass)' : 'transparent',
                  borderRadius: '100px', transition: 'all 0.2s', position: 'relative'
                }}
              >
                {link.name}
              </a>
            );
          })}
          <button onClick={toggleTheme} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'var(--clr-glass)', border: '1px solid var(--clr-border)', color: 'var(--clr-text-primary)', marginLeft: '12px', transition: 'transform 0.2s, background 0.2s' }} className="theme-toggle">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#lets-talk"
            className="btn-primary"
            style={{ padding: '8px 20px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, marginLeft: '8px', textDecoration: 'none' }}
          >
            Let's Talk
          </a>
        </div>

        <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <style>{`
          @media (max-width: 768px) {
            .nav-desktop { display: none !important; }
            .nav-mobile-btn { display: block !important; }
            nav { padding: 0 20px !important; }
          }
          .brand-mark:hover { transform: scale(1.1) rotate(-5deg) !important; }
          .nav-desktop a:hover:not(.btn-primary) { background: var(--clr-glass) !important; color: var(--clr-text-primary) !important; }
          .theme-toggle:hover { transform: scale(1.05); background: var(--clr-glass-hover) !important; }
        `}</style>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999, background: theme === 'dark' ? 'rgba(11,18,32,0.95)' : 'rgba(247,251,255,0.95)',
        backdropFilter: 'blur(24px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px',
        opacity: menuOpen ? 1 : 0, visibility: menuOpen ? 'visible' : 'hidden', transition: 'opacity 0.3s, visibility 0.3s'
      }}>
        <a href="#home" onClick={() => setMenuOpen(false)} className="nav-mobile-link" style={getMobileLinkStyle(activeHash === '#home')}>Home</a>
        {navLinks.map(link => (
          <a key={link.path} href={link.path} onClick={() => setMenuOpen(false)} className="nav-mobile-link" style={getMobileLinkStyle(activeHash === link.path)}>{link.name}</a>
        ))}
        <button onClick={() => { toggleTheme(); setMenuOpen(false); }} className="nav-mobile-link" style={{ background: 'none', border: 'none', ...getMobileLinkStyle(false), display: 'flex', alignItems: 'center', gap: '12px', padding: 0 }}>
          {theme === 'dark' ? <><Sun size={24} /> Light Mode</> : <><Moon size={24} /> Dark Mode</>}
        </button>
        <a href="#lets-talk" onClick={() => setMenuOpen(false)} className="nav-mobile-link" style={{...getMobileLinkStyle(activeHash === '#lets-talk'), color: 'var(--clr-accent-dark)'}}>Let's Talk</a>
        
        <style>{`
          .nav-mobile-link { font-family: 'Space Grotesk', sans-serif; font-size: 28px; font-weight: 600; text-decoration: none; transition: transform 0.2s, color 0.2s; }
          .nav-mobile-link:hover { color: var(--clr-accent-dark); transform: translateX(6px); }
        `}</style>
      </div>
    </>
  );
};

const getMobileLinkStyle = (isActive) => ({
  color: isActive ? 'var(--clr-accent-dark)' : 'var(--clr-text-primary)'
});

export default Navbar;
