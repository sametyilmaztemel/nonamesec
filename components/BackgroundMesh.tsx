"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

function createParticles(count: number, width: number, height: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i += 1) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: 1.6 + Math.random() * 1.4,
    });
  }
  return particles;
}

function getParticleCount(width: number, height: number) {
  const density = (width * height) / 28000;
  return Math.max(45, Math.min(110, Math.round(density)));
}

export function BackgroundMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = createParticles(getParticleCount(width, height), width, height);
    const pointer: PointerState = { x: width / 2, y: height / 2, active: false };
    let animationFrame: number;

    const configureCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      particles = createParticles(getParticleCount(width, height), width, height);
    };

    const handleResize = () => {
      configureCanvas();
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const linkDistance = Math.min(220, Math.max(140, Math.sqrt(width * height) * 0.16));
      const linkDistanceSq = linkDistance * linkDistance;
      const pointerLinkDistance = linkDistance * 0.9;
      const pointerLinkDistanceSq = pointerLinkDistance * pointerLinkDistance;

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) {
          p.vx *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
        }
        if (p.y <= 0 || p.y >= height) {
          p.vy *= -1;
          p.y = Math.max(0, Math.min(height, p.y));
        }

        p.vx *= 0.995;
        p.vy *= 0.995;

        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const distSq = dx * dx + dy * dy;
          const influenceRange = pointerLinkDistanceSq;
          if (distSq < influenceRange) {
            const dist = Math.sqrt(distSq) || 0.001;
            const influence = (1 - dist / pointerLinkDistance) * 0.35;
            p.vx -= (dx / dist) * influence;
            p.vy -= (dy / dist) * influence;
          }
        }

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 8);
        gradient.addColorStop(0, "rgba(10, 132, 255, 0.55)");
        gradient.addColorStop(0.45, "rgba(0, 211, 167, 0.15)");
        gradient.addColorStop(1, "rgba(10, 132, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq <= linkDistanceSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / linkDistance) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(64, 157, 255, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      if (pointer.active) {
        for (let i = 0; i < particles.length; i += 1) {
          const p = particles[i];
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq <= pointerLinkDistanceSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / pointerLinkDistance) * 0.6;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 211, 167, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(pointer.x, pointer.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        const highlightRadius = 120;
        const pointerGradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, highlightRadius);
        pointerGradient.addColorStop(0, "rgba(64, 157, 255, 0.18)");
        pointerGradient.addColorStop(0.6, "rgba(64, 157, 255, 0.08)");
        pointerGradient.addColorStop(1, "rgba(64, 157, 255, 0)");
        ctx.fillStyle = pointerGradient;
        ctx.arc(pointer.x, pointer.y, highlightRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    configureCanvas();
    animationFrame = requestAnimationFrame(draw);

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="ambient-mesh" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
