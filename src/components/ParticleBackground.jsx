import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    const count = 40;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const colors = ['rgba(0,212,255,0.6)', 'rgba(124,58,237,0.6)', 'rgba(236,72,153,0.4)', 'rgba(16,185,129,0.4)'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        left: ${Math.random() * 100}%;
        bottom: -10px;
        animation: particle-float ${Math.random() * 15 + 10}s linear ${Math.random() * 10}s infinite;
        box-shadow: 0 0 ${size * 3}px ${color};
      `;
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
}
