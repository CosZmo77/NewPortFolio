import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const hasAnimated = useRef(false); // Prevent double runs

  const [progress, setProgress] = useState(0);

  /* --------------------------------------------------
   1️⃣ Single progress animation - runs only once
  -------------------------------------------------- */
  useEffect(() => {
    if (hasAnimated.current) return; // Prevent re-runs
    hasAnimated.current = true;

    let current = 0;
    const minDuration = 2800; // Single smooth duration
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / minDuration, 1);

      // Smooth ease curve
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      current = Math.min(Math.floor(eased * 100), 100);
      setProgress(current);

      if (t < 1) {
        requestAnimationFrame(update);
      } else {
        setProgress(100);
      }
    };

    requestAnimationFrame(update);
  }, []);

  /* --------------------------------------------------
   🔒 Lock Scroll while loading
  -------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* --------------------------------------------------
   2️⃣ Logo intro animation
  -------------------------------------------------- */
  useEffect(() => {
    if (!logoRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.85, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    ).to(logoRef.current, {
      scale: 1.05,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  /* --------------------------------------------------
   3️⃣ Progress bar animation
  -------------------------------------------------- */
  useEffect(() => {
    if (!barRef.current || !percentRef.current) return;

    gsap.to(barRef.current, {
      width: `${progress}%`,
      duration: 0.5,
      ease: "power2.out",
    });

    percentRef.current.textContent = `${progress}%`;
  }, [progress]);

  /* --------------------------------------------------
   4️⃣ Exit animation when complete
  -------------------------------------------------- */
  useEffect(() => {
    if (progress < 100 || !overlayRef.current) return;

    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        // ✅ Call onComplete ONLY after entire timeline finishes
        onComplete();
      },
    });

    tl.to(".loader-inner", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.in",
    })
      .to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "-=0.2"
      )
      .set(overlayRef.current, { display: "none" });
  }, [progress, onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[99999] bg-gradient-to-br from-black via-neutral-950 to-black text-white flex items-center justify-center overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] animate-pulse" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="loader-inner relative z-10 flex flex-col items-center gap-16 w-full max-w-md px-8">
        {/* Logo with glow effect */}
        <div className="relative">
          <div className="absolute inset-0 blur-2xl bg-blue-500/20 rounded-full" />
          <img
            ref={logoRef}
            src="/assets/Images/front.png"
            alt="logo"
            className="relative w-full h-full object-contain pointer-events-none drop-shadow-2xl"
          />
        </div>

        {/* Progress section */}
        <div className="w-full space-y-6">
          {/* Progress bar container */}
          <div className="relative">
            {/* Background track */}
            <div className="relative h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Active progress bar */}
              <div
                ref={barRef}
                className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              />

              {/* Animated shimmer effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute h-full w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm animate-[shimmer_2s_ease-in-out_infinite]" />
              </div>
            </div>

            {/* Glowing dots at progress end */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full blur-[2px] transition-all duration-500"
              style={{ left: `${progress}%` }}
            />
          </div>

          {/* Text row */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-white/60 tracking-[0.3em] uppercase font-light">
              Loading
            </span>
            <span
              ref={percentRef}
              className="text-white font-bold text-lg tabular-nums"
            >
              0%
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-white/40 text-xs tracking-widest uppercase text-center">
          Crafting Excellence
        </p>
      </div>

      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
        `}
      </style>
    </div>
  );
}
