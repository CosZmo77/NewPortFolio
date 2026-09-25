import { lazy, Suspense, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import "../styles/project-gallery.css";

const PhysioCaseStudy = lazy(() => import("./PhysioCaseStudy"));

function ProjectChapter({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const destinations = project.links ?? (project.link ? [{ name: "Visit website", url: project.link }] : []);
  return <article className="work-chapter" aria-labelledby={`work-title-${project.id}`}>
    <div className="work-heading"><span className="work-number">{String(index + 1).padStart(2, "0")}</span><span>{project.role}</span><span className="work-year">{project.year}</span></div>
    <a className="work-image" href={destinations[0]?.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}>
      <span className="work-image-corner corner-left" aria-hidden="true" /><span className="work-image-corner corner-right" aria-hidden="true" />
      <div className="work-screen"><img src={project.image} alt={`${project.title} website preview`} width={project.width} height={project.height} loading="lazy" decoding="async" {...(project.image.endsWith('.webp') ? { srcSet: `${project.image.replace('.webp', '-mobile.webp')} 720w, ${project.image} 1440w`, sizes: '(max-width: 767px) 90vw, 1100px' } : {})} /></div>
      <span className="work-image-caption">OPEN {project.title}<span aria-hidden="true">↗</span></span>
    </a>
    <div className="work-description">
      <div className="work-title"><p>SELECTED WORK / {String(index + 1).padStart(2, "0")}</p><h2 id={`work-title-${project.id}`}>{project.title}</h2></div>
      <div className="work-copy"><p>{project.description}</p><ul aria-label={`${project.title} technology stack`}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul><div className="work-links">{destinations.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.name} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>)}</div></div>
    </div>
    <details className="work-details" onToggle={event => { setExpanded(event.currentTarget.open); requestAnimationFrame(() => ScrollTrigger.refresh()); }}>
      <summary><span>Behind the build</span><span className="work-details-hint">PROCESS &amp; DEVELOPMENT</span><span className="work-plus" aria-hidden="true">+</span></summary>
      <div className="work-process"><section><p>01 / THE CHALLENGE</p><h3>What needed solving.</h3><div>{project.challenge}</div></section><section><p>02 / THE APPROACH</p><h3>How I built it.</h3><div>{project.solution}</div></section></div>
      {project.id === 7 && expanded && <Suspense fallback={<p className="work-loading">Opening the project notes…</p>}><PhysioCaseStudy /></Suspense>}
    </details>
    <div className="work-divider" aria-hidden="true"><span />◇<span /></div>
  </article>;
}

export default function ProjectCollection({ featured = false }: { featured?: boolean }) {
  const selected = featured ? projects.filter(project => [7, 1, 2].includes(project.id)) : projects;
  return <div className="work-collection">{selected.map((project, index) => <ProjectChapter key={project.id} project={project} index={index} />)}</div>;
}
