import React, { useEffect, useRef } from 'react';

interface ParticlesProps {
  type: 'hearts' | 'lines';
}

const Particles: React.FC<ParticlesProps> = ({ type }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (type === 'hearts') {
        createHearts(containerRef.current);
      } else if (type === 'lines') {
        createLines(containerRef.current);
      }
    }
  }, [type]);

  const createHearts = (container: HTMLDivElement) => {
    const heartCount = (container.offsetWidth / 50) * 5;
    for (let i = 0; i <= heartCount; i++) {
      const size = rnd(60, 120) / 10;
      const heart = document.createElement('span');
      heart.className = 'particle';
      heart.style.cssText = `top:${rnd(20, 80)}%; left:${rnd(0, 95)}%; width:${size}px; height:${size}px; animation-delay:${rnd(0, 30) / 10}s;`;
      container.appendChild(heart);
    }
  };

  const createLines = (container: HTMLDivElement) => {
    const lineCount = (container.offsetWidth / 50) * 10;
    for (let i = 0; i <= lineCount; i++) {
      const line = document.createElement('span');
      line.className = 'particle';
      line.style.cssText = `top:${rnd(-30, 30)}%; left:${rnd(-10, 110)}%; width:${rnd(1, 3)}px; height:${rnd(20, 80)}%; animation-delay:-${rnd(0, 30) / 10}s;`;
      container.appendChild(line);
    }
  };

  // Helper function to replace `$.rnd`
  const rnd = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return <div ref={containerRef} className={`particletext ${type}`}></div>;
};

export default Particles;
