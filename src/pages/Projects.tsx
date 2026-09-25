import LevelBackdrop from "../components/LevelBackdrop";
import ProjectCollection from "../components/ProjectCollection";

export default function Projects() {
  return <div className="work-realm">
    <LevelBackdrop scene="bg-14" tone="blue" effect="rain" priority />
    <div className="work-realm-content">
      <header className="work-intro"><p>THE ARCHIVE / SELECTED WORK</p><h1>Ideas made<br /><span>real.</span></h1><div className="work-intro-bottom"><p>Learning tools. Communities. Causes worth building for.<br />A few worlds I’ve helped bring to life.</p><span>07 PROJECTS<br />2022 — 2026</span></div></header>
      <ProjectCollection />
      <a className="kingdom-link" href="https://github.com/CosZmo77" target="_blank" rel="noopener noreferrer">More experiments on GitHub <span aria-hidden="true">↗</span></a>
    </div>
  </div>;
}
