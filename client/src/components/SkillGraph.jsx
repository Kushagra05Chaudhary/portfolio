import { useEffect, useRef } from 'react';

const SkillGraph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const CW = canvas.width = 520;
    const CH = canvas.height = 520;
    const cx = CW / 2, cy = CH / 2;

    const skills = [
      { label: 'React',         r: 22, color: '#61dafb', depth: 95 },
      { label: 'Node.js',       r: 20, color: '#84CE58', depth: 92 },
      { label: 'TypeScript',    r: 18, color: '#3178c6', depth: 90 },
      { label: 'MongoDB',       r: 17, color: '#4DB33D', depth: 85 },
      { label: 'WebRTC',        r: 18, color: '#FF5722', depth: 82 },
      { label: 'Docker',        r: 16, color: '#2496ED', depth: 80 },
      { label: 'Express.js',    r: 18, color: '#9CA3AF', depth: 88 },
      { label: 'Socket.io',     r: 15, color: '#E0E0E0', depth: 85 },
      { label: 'System Design', r: 16, color: '#A78BFA', depth: 82 },
    ];

    const orbit1 = 148;
    const orbit2 = 210;

    const positions = [
      { d: orbit1, a: 0 }, { d: orbit1, a: 70 }, { d: orbit1, a: 140 },
      { d: orbit1, a: 210 }, { d: orbit1, a: 280 }, { d: orbit2, a: 35 },
      { d: orbit2, a: 105 }, { d: orbit2, a: 175 }, { d: orbit2, a: 245 },
    ];

    const nodes = skills.map((s, i) => ({
      ...s,
      ...positions[i],
      phase: Math.random() * Math.PI * 2,
    }));

    const drawNode = (n, age) => {
      const angle = (n.a * Math.PI / 180) + age * 0.0006;
      const bob = Math.sin(age * 0.001 + n.phase) * 4;
      const x = cx + Math.cos(angle) * n.d;
      const y = cy + Math.sin(angle) * n.d + bob;

      // depth ring
      const depthR = n.r + 8;
      const arc = (n.depth / 100) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(x, y, depthR, -Math.PI / 2, -Math.PI / 2 + arc);
      ctx.strokeStyle = n.color + 'aa';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // bg circle
      ctx.beginPath();
      ctx.arc(x, y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.color + '22';
      ctx.fill();
      ctx.strokeStyle = n.color + '66';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // label
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      ctx.font = `500 10px 'JetBrains Mono', monospace`;
      ctx.fillStyle = isDark ? '#9FB0D4' : '#3a5369';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.label, x, y);

      return { x, y };
    };

    let raf;
    const animate = (ts) => {
      ctx.clearRect(0, 0, CW, CH);

      const isDark = document.body.getAttribute('data-theme') === 'dark';
      
      // center node
      const grad = ctx.createRadialGradient(cx, cy, 8, cx, cy, 52);
      grad.addColorStop(0, isDark ? 'rgba(79,140,255,0.30)' : 'rgba(167,199,231,0.60)');
      grad.addColorStop(1, isDark ? 'rgba(79,140,255,0.02)' : 'rgba(167,199,231,0.05)');
      ctx.beginPath(); ctx.arc(cx, cy, 52, 0, Math.PI * 2);
      ctx.fillStyle = grad; ctx.fill();
      ctx.font = '600 13px "Space Grotesk", sans-serif';
      ctx.fillStyle = isDark ? '#E6ECFF' : '#0d1a2b'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('KUSHAGRA', cx, cy - 6);
      ctx.font = '500 10px "JetBrains Mono", monospace';
      ctx.fillStyle = isDark ? '#5A6D8C' : '#7a96a8';
      ctx.fillText('KC', cx, cy + 9);

      // orbit rings
      [orbit1, orbit2].forEach(or => {
        ctx.beginPath(); ctx.arc(cx, cy, or, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(167,199,231,0.12)';
        ctx.lineWidth = 1; ctx.stroke();
      });

      // draw connection lines
      const nodePositions = nodes.map(n => {
        const angle = (n.a * Math.PI / 180) + ts * 0.0006;
        const bob = Math.sin(ts * 0.001 + n.phase) * 4;
        return {
          x: cx + Math.cos(angle) * n.d,
          y: cy + Math.sin(angle) * n.d + bob,
        };
      });

      nodes.forEach((n, i) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nodePositions[i].x, nodePositions[i].y);
        ctx.strokeStyle = isDark ? `rgba(255,255,255,0.06)` : `rgba(167,199,231,0.18)`;
        ctx.lineWidth = 1; ctx.stroke();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (nodes[i].d === nodes[j].d) {
            const dx = nodePositions[i].x - nodePositions[j].x;
            const dy = nodePositions[i].y - nodePositions[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
              ctx.beginPath();
              ctx.moveTo(nodePositions[i].x, nodePositions[i].y);
              ctx.lineTo(nodePositions[j].x, nodePositions[j].y);
              ctx.strokeStyle = isDark ? `rgba(255,255,255,${(1 - dist / 200) * 0.06})` : `rgba(167,199,231,${(1 - dist / 200) * 0.12})`;
              ctx.lineWidth = 0.8; ctx.stroke();
            }
          }
        }
      }

      nodes.forEach(n => drawNode(n, ts));
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{
      position: 'sticky', top: '100px', background: 'var(--clr-glass)', backdropFilter: 'blur(20px)',
      border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)',
      padding: '24px', overflow: 'hidden', display: 'flex', justifyContent: 'center'
    }}>
      <canvas 
        ref={canvasRef} 
        width={520} 
        height={520} 
        aria-label="Skill network visualization"
        style={{ width: '100%', maxWidth: '520px', height: 'auto', borderRadius: 'var(--radius-md)' }}
      />
    </div>
  );
};

export default SkillGraph;
