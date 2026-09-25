interface SceneBackgroundProps {
  name: string;
  className?: string;
  priority?: boolean;
}

/** Real image elements let the browser defer below-the-fold scenery. */
export default function SceneBackground({ name, className = "", priority = false }: SceneBackgroundProps) {
  return (
    <picture className={`scene-background ${className}`} aria-hidden="true">
      <source media="(max-width: 700px)" srcSet={`/assets/optimized/${name === "home" ? "home-portrait" : `${name}-mobile`}.webp`} />
      <img src={`/assets/optimized/${name}.webp`} alt="" width={1920} height={1080}
        loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
    </picture>
  );
}
