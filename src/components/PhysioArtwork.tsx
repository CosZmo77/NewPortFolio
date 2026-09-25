import SceneBackground from "./SceneBackground";

/** The same scenic, feathered project artwork on Home and in the full case study. */
export default function PhysioArtwork({ image = "lumbar-anterior", alt = "Lumbar spine illustration from iLovePhysio" }: { image?: string; alt?: string }) {
  return <div className="physio-project-art">
    <SceneBackground name="bg-08" className="physio-project-scenery" />
    <img className="physio-project-specimen" src={`/assets/physio/${image}.png`} alt={alt} width="1200" height="900" loading="lazy" decoding="async" />
  </div>;
}
