import { useId, useState } from "react";
import "../styles/project-archive.css";

const archivedProjects = [
  {
    title: "InkWorldWide",
    role: "WordPress and Frontend Developer",
    year: "2025",
    description:
      "Full-time intern developing WordPress and static websites, creating responsive and user-friendly designs.",
    tech: ["WordPress", "PHP", "ACF", "Tailwind CSS", "JavaScript", "MySQL"],
    image: "/assets/optimized/inkworldwide.webp",
    width: 1889,
    height: 1034,
    links: [
      { name: "Techwise", url: "https://techwise.one/" },
      { name: "Vhope", url: "https://vhopemedicalcenter.ae/" },
      { name: "Vishwa", url: "https://vishwaengineering.com/" },
    ],
  },
  {
    title: "Medicalshala",
    role: "Full Stack Developer",
    year: "2023",
    description:
      "A comprehensive healthcare platform designed to bridge the gap between patients and medical professionals. Features real-time consultation capabilities.",
    tech: ["React", "Supabase", "WebSockets", "Tailwind", "WebRTC"],
    image: "/assets/optimized/medicalshala.webp",
    width: 1728,
    height: 1117,
    links: [{ name: "Visit Medicalshala", url: "https://medicalshala.com" }],
  },
  {
    title: "SwiftCare",
    role: "Developer",
    year: "2023",
    description:
      "An intuitive doctor appointment management system. It simplifies the booking process for patients and provides doctors with a streamlined dashboard to manage their schedules.",
    tech: ["React", "Node.js", "SQL", "Express", "Docker"],
    image: "/assets/optimized/swiftcare.webp",
    width: 1899,
    height: 1057,
    links: [
      { name: "Visit SwiftCare", url: "https://swiftcare-frontend.onrender.com/" },
    ],
  },
  {
    title: "MERN Job Portal",
    role: "Full Stack Developer",
    year: "2022",
    description:
      "A feature-rich job board connecting employers with talent. Includes advanced search filtering, user profiles, and secure authentication.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    image: "/assets/optimized/job-portal.webp",
    width: 1596,
    height: 777,
    links: [
      { name: "Visit Job Portal", url: "https://job-portal-teal.vercel.app/" },
    ],
  },
];

export default function ProjectArchive() {
  const [expanded, setExpanded] = useState(false);
  const archiveId = useId();

  return (
    <div className="project-archive">
      <button
        className="archive-toggle"
        type="button"
        aria-expanded={expanded}
        aria-controls={archiveId}
        onClick={() => setExpanded((value) => !value)}
      >
        <span className="archive-toggle-line" aria-hidden="true" />
        <span>{expanded ? "Close the archive" : "Explore more work"}</span>
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
          <path d="M7 1v14M2 10l5 5 5-5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <span className="archive-toggle-line" aria-hidden="true" />
      </button>
      <p className="archive-hint">{expanded ? "A few more paths I’ve built." : "Four more projects, a little further in."}</p>

      <div id={archiveId} hidden={!expanded}>
        {expanded && (
          <div className="archive-grid">
            {archivedProjects.map((project) => (
              <article className="archive-card" key={project.title}>
                <div className="archive-image">
                  <img
                    src={project.image}
                    srcSet={`${project.image.replace(".webp", "-mobile.webp")} 720w, ${project.image} 1440w`}
                    sizes="(max-width: 700px) 90vw, (max-width: 1400px) 44vw, 580px"
                    alt={`${project.title} website`}
                    width={project.width}
                    height={project.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="archive-year">{project.year}</span>
                </div>
                <div className="archive-copy">
                  <p className="archive-role">{project.role}</p>
                  <h3>{project.title}</h3>
                  <p className="archive-description">{project.description}</p>
                  <ul className="archive-tech" aria-label={`${project.title} technologies`}>
                    {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <div className="archive-links">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.name} (opens in a new tab)`}
                      >
                        {link.name}
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                          <path d="M3 10l7-7M3 3h7v7" stroke="currentColor" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
