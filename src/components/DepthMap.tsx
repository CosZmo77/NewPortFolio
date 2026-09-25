import JourneyLink from "./JourneyLink";
import useCurrentLevel from "../hooks/useCurrentLevel";

const levels = [
  { id: "surface", title: "The surface" },
  { id: "about", title: "About me" },
  { id: "projects", title: "Selected works" },
  { id: "skills", title: "Technical arsenal" },
  { id: "services", title: "What I offer" },
  { id: "contact", title: "The next quest" },
];

export default function DepthMap() {
  const active = useCurrentLevel();
  return <nav className="depth-map" aria-label="Explore the levels"><span className="depth-map-track" aria-hidden="true" />{levels.map((level, i) => <JourneyLink local to={level.id} key={level.id} className={level.id === active ? "is-current" : ""} aria-label={`${i + 1}. ${level.title}`} aria-current={level.id === active ? "location" : undefined}><span className="depth-label">{level.title}</span><span className="depth-dot" /><img src="/assets/Images/Characters/hollow-knight-avatar.svg" alt="" width="20" height="25" /></JourneyLink>)}</nav>;
}
