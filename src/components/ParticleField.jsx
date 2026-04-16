import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

class Particle {
  constructor(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.6;
    this.vx = (Math.random() - 0.5) * 0.18;
    this.vy = (Math.random() - 0.5) * 0.18;
    this.opacity = Math.random() * 0.45 + 0.2;
  }

  update(mouse, width, height) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    if (mouse.x === null || mouse.y === null) return;

    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 100;

    if (distance < maxDistance && distance > 0) {
      const force = (maxDistance - distance) / maxDistance;
      const angle = Math.atan2(dy, dx);
      this.x += Math.cos(angle) * force * 1.3;
      this.y += Math.sin(angle) * force * 1.3;
    }
  }

  draw(ctx, isDark) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = isDark
      ? `rgba(248, 248, 248, ${this.opacity * 0.5})`
      : `rgba(123, 123, 123, ${this.opacity * 0.55})`;
    ctx.fill();
  }
}

export default function ParticleField() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const animationRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const count = Math.floor((canvas.width * canvas.height) / 12000);
      particlesRef.current = [];
      for (let i = 0; i < Math.min(count, 100); i += 1) {
        particlesRef.current.push(new Particle(canvas));
      }
    };

    const handlePointerMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handlePointerLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.update(mouseRef.current, canvas.width, canvas.height);
        particle.draw(ctx, isDark);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
