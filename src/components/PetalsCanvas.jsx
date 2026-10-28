import React, { useEffect, useRef } from 'react';

export default function PetalsCanvas({ enabled = true, count = 28 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Celestial Gold & Rose Petals pool
    const petals = [];
    const colors = [
      'rgba(246, 215, 125, 0.75)', // 24k gold leaf
      'rgba(229, 182, 67, 0.7)',   // warm golden ember
      'rgba(186, 230, 253, 0.6)',  // starlight cyan
      'rgba(225, 29, 72, 0.65)',   // deep romantic rose
      'rgba(244, 63, 94, 0.6)',    // soft petal pink
    ];

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 11 + 7,
        speedX: Math.random() * 1.4 - 0.7,
        speedY: Math.random() * 1.1 + 0.7,
        angle: Math.random() * 360,
        angularSpeed: (Math.random() - 0.5) * 1.6,
        oscillation: Math.random() * 20,
        oscillationSpeed: Math.random() * 0.03 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.5,
      });
    }

    // Gentle star field
    const stars = [];
    for (let i = 0; i < 85; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      // Draw subtle twinkling stars in sapphire night
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += Math.sin(tick * star.twinkleSpeed) * 0.012;
        const boundedAlpha = Math.max(0.15, Math.min(0.95, star.alpha));
        ctx.fillStyle = `rgba(240, 249, 255, ${boundedAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw floating golden & rose petals
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += Math.sin(tick * p.oscillationSpeed) * 0.9 + p.speedX;
        p.angle += p.angularSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);

        // Organic curved petal shape
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.6, p.size * 0.9, p.size * 0.5, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.5, -p.size * 0.8, -p.size * 0.6, 0, -p.size);
        ctx.fillStyle = p.color;
        ctx.shadowColor = 'rgba(246, 215, 125, 0.4)';
        ctx.shadowBlur = 6;
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled, count]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
}
