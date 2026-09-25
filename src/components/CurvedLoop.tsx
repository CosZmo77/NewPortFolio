import { useRef, useEffect, useState, useMemo, useId } from "react";
import type { PointerEvent } from "react";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
}

const CurvedLoop = ({
  marqueeText = " ",
  speed = 2,
  className,
  curveAmount = 0,
  direction = "left",
  interactive = true,
}: CurvedLoopProps) => {
  const text = useMemo(() => marqueeText.replace(/\s+$/, "") + "\u00A0", [marqueeText]);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const [spacing, setSpacing] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const offsetRef = useRef(0);
  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dragScaleRef = useRef(1);
  const dirRef = useRef(direction);
  const velocityRef = useRef(0);
  const pathId = `curve-${useId()}`;
  const pathD = `M-100,60 Q720,${60 + curveAmount} 1540,60`;
  const totalText = spacing ? text.repeat(Math.ceil(1800 / spacing) + 2) : text;

  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    let active = true;
    const measure = () => {
      if (active && measureRef.current) {
        const length = measureRef.current.getComputedTextLength();
        if (length > 0) setSpacing(length);
      }
    };
    measure();
    void document.fonts.ready.then(measure);
    document.fonts.addEventListener("loadingdone", measure);
    return () => {
      active = false;
      document.fonts.removeEventListener("loadingdone", measure);
    };
  }, [text, className]);

  useEffect(() => {
    offsetRef.current = -spacing;
    textPathRef.current?.setAttribute("startOffset", `${-spacing}px`);
  }, [spacing]);

  useEffect(() => {
    const container = containerRef.current;
    if (!spacing || reducedMotion || paused || !container) return;

    let frame = 0;
    let visible = false;
    let previousTime = 0;
    const step = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 50) : 0;
      previousTime = time;
      if (!dragRef.current && textPathRef.current) {
        const delta = (dirRef.current === "right" ? 1 : -1) * speed * elapsed / (1000 / 60);
        // Keep the offset in a ref: no React renders or DOM reads on every frame.
        offsetRef.current = ((offsetRef.current + delta) % spacing + spacing) % spacing - spacing;
        textPathRef.current.setAttribute("startOffset", `${offsetRef.current}px`);
      }
      frame = requestAnimationFrame(step);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      previousTime = 0;
      if (visible && !document.hidden) frame = requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(container);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      cancelAnimationFrame(frame);
    };
  }, [spacing, speed, reducedMotion, paused]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!interactive || reducedMotion || !spacing || event.button !== 0 || (event.target as Element).closest("button")) return;
    dragRef.current = true;
    setDragging(true);
    lastXRef.current = event.clientX;
    velocityRef.current = 0;
    const width = svgRef.current?.getBoundingClientRect().width || 1440;
    dragScaleRef.current = 1440 / width;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || !textPathRef.current || !spacing) return;
    const delta = (event.clientX - lastXRef.current) * dragScaleRef.current;
    lastXRef.current = event.clientX;
    velocityRef.current = delta;
    offsetRef.current = ((offsetRef.current + delta) % spacing + spacing) % spacing - spacing;
    textPathRef.current.setAttribute("startOffset", `${offsetRef.current}px`);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    dragRef.current = false;
    setDragging(false);
    if (velocityRef.current) dirRef.current = velocityRef.current > 0 ? "right" : "left";
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center overflow-visible"
      style={{
        cursor: interactive && !reducedMotion ? dragging ? "grabbing" : "grab" : undefined,
        touchAction: interactive ? "pan-y" : undefined,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onLostPointerCapture={endDrag}
    >
      <span className="sr-only">{marqueeText}</span>
      <svg
        ref={svgRef}
        className="select-none w-full h-[120px] overflow-visible block text-[4rem] leading-none"
        viewBox="0 0 1440 120"
        aria-hidden="true"
      >
        <text ref={measureRef} className={className} xmlSpace="preserve" style={{ visibility: "hidden", pointerEvents: "none" }}>
          {text}
        </text>
        <defs><path id={pathId} d={pathD} fill="none" /></defs>
        {spacing > 0 && (
          <text xmlSpace="preserve" className={`fill-white ${className ?? ""}`}>
            <textPath ref={textPathRef} href={`#${pathId}`} startOffset={-spacing} xmlSpace="preserve">
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
      {!reducedMotion && (
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          aria-label={paused ? "Resume scrolling text" : "Pause scrolling text"}
          className="absolute right-6 bottom-0 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-neutral-400 hover:text-white transition-colors"
        >
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      )}
    </div>
  );
};

export default CurvedLoop;
