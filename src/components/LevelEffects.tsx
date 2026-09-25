import type { CSSProperties } from "react";
import useVisibleMotion from "../hooks/useVisibleMotion";
import "../styles/level-effects.css";

export type LevelEffect = "souls" | "fireflies" | "rain" | "crystals" | "embers" | "lanterns";

/** Each chamber has its own weather; CSS runs only while that chamber is visible. */
export default function LevelEffects({ effect }: { effect: LevelEffect }) {
  const { ref, active } = useVisibleMotion<HTMLDivElement>();
  const count = { souls: 8, fireflies: 10, rain: 14, crystals: 7, embers: 10, lanterns: 6 }[effect];
  return (
    <div ref={ref} className={`realm-effects effect-${effect}`} data-effect={effect} data-active={active} aria-hidden="true">
      <div className="weather-haze" />
      {active && Array.from({ length: count }, (_, i) => <i className={`weather-particle particle-${i % 4}`} key={i} style={{
        "--x": `${(i * 47 + 9) % 100}%`, "--y": `${(i * 29 + 7) % 100}%`,
        "--drift": `${(i % 2 ? -1 : 1) * (25 + i % 5 * 15)}px`,
        "--duration": `${effect === "rain" ? 1.4 + i % 5 * .23 : 9 + i % 7 * 1.8}s`,
        "--delay": `${-i * 2.7}s`, "--size": `${3 + i % 4}px`,
        "--turn": `${i * 29}deg`,
      } as CSSProperties} />)}
    </div>
  );
}
