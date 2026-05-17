import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const ballRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const ball = ballRef.current;
    if (!ball) {
      return undefined;
    }

    const size = 18;
    const lerp = 0.12;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = 0;
    let isVisible = false;

    const show = () => {
      if (!isVisible) {
        isVisible = true;
        ball.classList.remove("is-hidden");
      }
    };

    const hide = () => {
      if (isVisible) {
        isVisible = false;
        ball.classList.add("is-hidden");
      }
    };

    const animate = () => {
      currentX += (targetX - currentX) * lerp;
      currentY += (targetY - currentY) * lerp;
      ball.style.transform = `translate3d(${currentX - size / 2}px, ${
        currentY - size / 2
      }px, 0)`;
      rafId = window.requestAnimationFrame(animate);
    };

    const handleMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      show();
    };

    const handleLeave = () => {
      hide();
    };

    ball.classList.add("is-hidden");
    rafId = window.requestAnimationFrame(animate);

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", show);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", show);
    };
  }, []);

  return <div ref={ballRef} className="cursor-ball" aria-hidden="true" />;
}
