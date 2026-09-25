import "../styles/current-experience.css";

export type Experience = {
  company: string;
  role: string;
  period: string;
  intro: string;
  location?: string;
  current?: boolean;
  responsibilities: readonly (readonly [string, string])[];
  link?: { url: string; label: string };
};

export default function ExperienceEntry({ company, role, period, intro, location, current, responsibilities, link }: Experience) {
  return <article className="current-experience timeline-item" aria-label={`${current ? "Current experience" : "Experience"} at ${company}`}>
    <div className="current-experience-meta"><span className="current-role-mark">{current ? "CURRENT CHAPTER" : "THE PATH SO FAR"}</span><span>{period}</span></div>
    <h4>{company}</h4>
    <p className="current-experience-role">{role}</p>
    {location && <p className="current-experience-location">{location}</p>}
    <p className="current-experience-intro">{intro}</p>
    <ul className="current-experience-work">
      {responsibilities.map(([title, detail], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><div><h5>{title}</h5><p>{detail}</p></div></li>)}
    </ul>
    {link && <a href={link.url} target="_blank" rel="noopener noreferrer" className="current-experience-link">{current ? "Platform I work on" : "Explore the work"}<span>{link.label} <span aria-hidden="true">↗</span></span><span className="sr-only"> (opens in a new tab)</span></a>}
  </article>;
}
