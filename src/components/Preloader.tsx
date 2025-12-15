// src/components/Preloader.tsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const Preloader = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  const [percent, setPercent] = useState(0);

  // -------------------------------------------------
  // 1️⃣ Simulated (or real) progress logic
  // -------------------------------------------------
  useEffect(() => {
    const update = () => {
      setPercent((p) => {
        const inc = Math.floor(Math.random() * 8) + 2; // 2‑10 %
        const next = Math.min(p + inc, 100);
        return next;
      });
    };
    const timer = setInterval(update, 150);
    return () => clearInterval(timer);
  }, []);

  // -------------------------------------------------
  // 2️⃣ GSAP animations (image pop‑in, percentage count, fade‑out)
  // -------------------------------------------------
  useEffect(() => {
    const overlay = overlayRef.current;
    const img = imgRef.current;
    const pct = percentRef.current;
    if (!overlay || !img || !pct) return;

    // image entrance – scale from 0.8 → 1 with slight rotation
    gsap.fromTo(
      img,
      { scale: 0.8, rotation: -10, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // percentage text fade‑in
    gsap.fromTo(
      pct,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out" }
    );
  }, []);

  // -------------------------------------------------
  // 3️⃣ When we hit 100 % → fade the whole overlay out
  // -------------------------------------------------
  useEffect(() => {
    if (percent < 100) return;
    const overlay = overlayRef.current;
    if (!overlay) return;

    // small pause so the user sees “100%”
    const tl = gsap.timeline();
    tl.to(overlay, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
    }).set(overlay, { display: "none" });
  }, [percent]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-opacity duration-400"
    >
      {/* Centered logo / image */}
      <img
        ref={imgRef}
        src="/assets/Images/front.png"
        alt="logo"
        className="max-w-[80%] max-h-[80%] object-contain pointer-events-none"
      />

      {/* Percentage in the right‑bottom corner */}
      <div
        ref={percentRef}
        className="absolute bottom-4 right-4 text-sm font-medium"
      >
        {percent}%
      </div>
    </div>
  );
};
