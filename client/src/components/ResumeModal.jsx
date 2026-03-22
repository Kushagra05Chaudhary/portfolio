import { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose, pdfUrl, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-active');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-active');
    }
    return () => { 
      document.body.style.overflow = ''; 
      document.body.classList.remove('modal-active');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const actualUrl = pdfUrl || 'http://localhost:5000/api/resume';
  const actualTitle = title || 'Kush_Chaudhary_Resume.pdf';

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(13, 26, 43, 0.4)', backdropFilter: 'blur(8px)', opacity: 1
    }}>
      <div style={{
        position: 'relative', width: '90%', maxWidth: '900px', height: '85vh',
        background: 'var(--clr-glass)', backdropFilter: 'blur(24px)', border: '1px solid var(--clr-border)',
        borderRadius: 'var(--radius-lg)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px',
        boxShadow: 'var(--shadow-xl)'
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '20px', fontWeight: 600 }}>{actualTitle}</h3>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href={actualUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
               <ExternalLink size={16} /> Open
            </a>
            <a href={actualUrl} download className="btn-primary" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
               <Download size={16} /> Download
            </a>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--clr-text-sec)', padding: '4px' }}>
              <X size={24} />
            </button>
          </div>
        </div>

        <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--clr-border)', background: '#fff' }}>
          <iframe 
            src={actualUrl} 
            title="PDF Viewer"
            width="100%" 
            height="100%" 
            style={{ border: 'none' }}
          />
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
