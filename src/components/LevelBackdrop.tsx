import SceneBackground from "./SceneBackground";
import LevelEffects from "./LevelEffects";
import type { LevelEffect } from "./LevelEffects";

interface LevelBackdropProps {
  scene: string;
  tone?: "blue" | "green" | "violet" | "amber";
  effect?: LevelEffect;
  priority?: boolean;
}

export default function LevelBackdrop({ scene, tone = "blue", effect = "souls", priority = false }: LevelBackdropProps) {
  return (
    <div className={`level-backdrop realm-${tone} weather-${effect}`} aria-hidden="true">
      <div className="level-image"><SceneBackground name={scene} priority={priority} /></div>
      <div className="level-depth-shade" />
      <LevelEffects effect={effect} />
      <div className="level-foreground" />
    </div>
  );
}
