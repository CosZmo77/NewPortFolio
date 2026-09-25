import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

export default function Atmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let visible = true;
    const sync = () => element.classList.toggle("is-paused", !visible || document.hidden);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(element);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", sync); };
  }, []);
  return (
    <div ref={ref} className="atmosphere" aria-hidden="true">
      <div className="mist mist-one" /><div className="mist mist-two" />
      {Array.from({ length: 18 }, (_, i) => (
        <i key={i} className="soul-particle" style={{
          left: `${(i * 37 + 11) % 100}%`, top: `${(i * 23 + 7) % 100}%`,
          "--drift": `${(i % 3 - 1) * 45}px`, "--duration": `${8 + i % 7}s`,
          "--delay": `${-i * 1.7}s`, "--size": `${2 + i % 3}px`,
        } as CSSProperties} />
      ))}
    </div>
  );
}
