import React from 'react';

const CyberHUD = ({ imageUrl }) => {
  return (
    <div className="cyber-hud-wrapper reveal-fade">
      <div className="cyber-hud-core">
        {/* Animated Rings */}
        <div className="cyber-ring cyber-ring-outer"></div>
        <div className="cyber-ring cyber-ring-middle"></div>
        <div className="cyber-ring cyber-ring-inner"></div>
        <div className="cyber-ring cyber-ring-dashed"></div>

        {/* Orbiting Elements */}
        <div className="cyber-orbit-path">
          <div className="cyber-node"></div>
        </div>

        {/* Floating Abstract UI */}
        <div className="cyber-panel panel-tl">
          <div className="panel-title">PORTFOLIO_ID: K-05</div>
          <div className="matrix-text" style={{ fontSize: '7px', opacity: 0.7 }}>[INIT_SEQUENCE]</div>
        </div>

        <div className="cyber-panel panel-tr">
          <div className="panel-title" style={{ letterSpacing: '0.1em' }}>PROFILE: KUSHAGRA</div>
          <div className="panel-data">
            <div className="data-row"><span>SYS</span><div className="bar"><div className="fill" style={{ width: '90%' }}></div></div></div>
            <div className="data-row"><span>NET</span><div className="bar"><div className="fill" style={{ width: '85%' }}></div></div></div>
            <div className="data-row"><span>DEV</span><div className="bar"><div className="fill" style={{ width: '95%' }}></div></div></div>
          </div>
        </div>

        <div className="cyber-panel panel-bl">
          <div className="hex-grid">
            <div className="hex"></div>
            <div className="hex"></div>
            <div className="hex"></div>
          </div>
        </div>

        <div className="cyber-panel panel-br">
          <div className="matrix-text">
            <span style={{ color: '#D49C6B' }}>+</span> DATA_STREAM<br />
            <span style={{ color: '#D49C6B' }}>+</span> NODE_CONNECT<br />
            <span style={{ color: '#A3B1C6' }}>*</span> SECURE_LINK
          </div>
        </div>

        {/* Avatar */}
        <div className="cyber-avatar-container">
          <img src={imageUrl || '/profile_image.png'} alt="Profile" className="cyber-avatar-img" />
          <div className="cyber-scanline"></div>
        </div>
      </div>

      <style>{`
        .cyber-hud-wrapper {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 1;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          z-index: 10;
        }

        .cyber-hud-core {
          position: relative;
          width: 60%;
          height: 60%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cyber-ring {
          position: absolute;
          top: 50%; left: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* Outer Cyan Ring -> Gold */
        .cyber-ring-outer {
          width: 135%; height: 135%;
          border: 2px solid transparent;
          border-left: 3px solid #D49C6B;
          border-bottom: 2px solid #D49C6B;
          box-shadow: inset 0 0 20px rgba(212, 156, 107, 0.15), 0 0 15px rgba(212, 156, 107, 0.3);
          animation: cyber-spin 20s linear infinite;
        }

        /* Middle Purple Ring -> Navy/Silver */
        .cyber-ring-middle {
          width: 120%; height: 120%;
          border: 2px solid transparent;
          border-right: 4px solid #8E98AB;
          border-top: 3px solid #8E98AB;
          box-shadow: 0 0 25px rgba(142, 152, 171, 0.3);
          animation: cyber-spin-reverse 15s linear infinite;
        }

        /* Inner Ring */
        .cyber-ring-inner {
          width: 108%; height: 108%;
          border: 1px dotted rgba(255, 255, 255, 0.4);
          animation: cyber-spin 35s linear infinite;
        }

        /* Dashed Ring */
        .cyber-ring-dashed {
          width: 155%; height: 155%;
          border: 1px dashed rgba(212, 156, 107, 0.3);
          border-right: 2px solid #D49C6B;
          animation: cyber-spin-reverse 30s linear infinite;
        }

        @keyframes cyber-spin { 100% { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes cyber-spin-reverse { 100% { transform: translate(-50%, -50%) rotate(-360deg); } }

        .cyber-orbit-path {
          position: absolute;
          width: 175%; height: 175%;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.08);
          animation: cyber-spin 12s linear infinite;
        }
        .cyber-node {
          position: absolute;
          top: 0; left: 50%;
          transform: translate(-50%, -50%);
          width: 8px; height: 8px;
          background: #D49C6B;
          border-radius: 50%;
          box-shadow: 0 0 15px #D49C6B;
        }

        /* Avatar */
        .cyber-avatar-container {
          position: relative;
          width: 100%; height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(23, 29, 45, 0.95);
          box-shadow: 0 0 40px rgba(142, 152, 171, 0.2), inset 0 0 30px rgba(212, 156, 107, 0.3);
          z-index: 10;
        }
        .cyber-avatar-img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: contrast(1.05) saturate(1.1) drop-shadow(0 0 20px rgba(212, 156, 107, 0.2));
        }
        .cyber-scanline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 15%;
          background: linear-gradient(to bottom, transparent, rgba(212, 156, 107, 0.25), transparent);
          animation: scan 4s linear infinite;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(700%); }
        }

        /* Panels */
        .cyber-panel {
          position: absolute;
          background: rgba(18, 22, 34, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 156, 107, 0.3);
          border-radius: 6px;
          padding: 10px 14px;
          color: #D49C6B;
          font-family: 'JetBrains Mono', monospace;
          box-shadow: 0 0 20px rgba(212, 156, 107, 0.15);
          z-index: 20;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .cyber-panel:hover {
          background: rgba(23, 29, 45, 0.95);
          border-color: #D49C6B;
          box-shadow: 0 0 25px rgba(212, 156, 107, 0.3);
          transform: scale(1.08) translateY(-4px);
        }

        .panel-tl { top: -10%; left: -35%; border-left: 3px solid #D49C6B; }
        .panel-tr { top: 0%; right: -35%; border-right: 3px solid #A3B1C6; color: #A3B1C6; border-color: rgba(163, 177, 198, 0.4); }
        .panel-bl { bottom: 0%; left: -25%; }
        .panel-br { bottom: -15%; right: -25%; border-bottom: 2px dashed #D49C6B; padding: 12px; }

        .panel-title { font-size: 10px; font-weight: 700; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em; }
        .matrix-text { font-size: 9px; line-height: 1.6; color: rgba(255,255,255,0.7); }
        
        .panel-data { display: flex; flex-direction: column; gap: 5px; }
        .data-row { display: flex; align-items: center; gap: 6px; }
        .data-row span { font-size: 8px; width: 22px; font-weight: 600; }
        .data-row .bar { flex: 1; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; min-width: 60px; }
        .data-row .fill { height: 100%; background: #D49C6B; box-shadow: 0 0 8px #D49C6B; }

        .hex-grid { display: flex; gap: 6px; }
        .hex { width: 14px; height: 16px; background: rgba(212, 156, 107, 0.15); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); border: 1px solid #D49C6B; }

        @media (max-width: 900px) {
          .panel-tl { left: -10%; top: -15%; }
          .panel-tr { right: -10%; top: -10%; }
          .panel-bl { left: -5%; bottom: -5%; }
          .panel-br { right: -5%; bottom: -15%; }
          .cyber-ring-dashed, .cyber-orbit-path { display: none; }
        }

        @media (max-width: 600px) {
          .cyber-hud-core { width: 80%; height: 80%; }
          .cyber-panel { display: none; } /* Hide panels on heavily constrained mobile */
        }
      `}</style>
    </div>
  );
};

export default CyberHUD;
