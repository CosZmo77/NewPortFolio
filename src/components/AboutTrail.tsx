import CurrentExperience from "./CurrentExperience";

const experience = [
  ["2025", "Cohorts App", "Frontend, backend APIs, and getting it all into production."],
  ["2025", "InkWorldWide", "WordPress builds, responsive layouts, and the small details that make a site feel right."],
  ["2024", "Shifa Foundation", "A faster website and a secure donation flow for an NGO."],
  ["2023", "Medicalshala", "Healthcare tools, live chat, and payments in one platform."],
  ["2023", "SwiftCare", "Helping patients book appointments and doctors manage their day."],
  ["2022", "Job Portal", "A responsive job board with secure sign-in. One of my early full-stack builds."],
];

export default function AboutTrail() {
  return <div className="about-trail-content">
    <p className="trail-eyebrow">BEHIND THE PORTRAIT</p>
    <h3>The path so far.</h3>
    <p className="trail-intro">A few places where I’ve learned, built, and figured things out along the way.</p>
    <CurrentExperience />
    <div className="trail-columns">
      <ol className="trail-timeline" aria-label="My work experience">
        {experience.map(([year, name, description]) => <li key={name}>
          <span className="trail-year">{year}</span>
          <div><h4>{name}</h4><p>{description}</p></div>
        </li>)}
      </ol>
      <div className="trail-education">
        <svg viewBox="0 0 70 86" width="70" height="86" fill="none" aria-hidden="true"><path d="M35 3 60 19v39L35 81 10 58V19L35 3Z M35 13 51 24v30L35 69 19 54V24L35 13Z M35 13v56M19 24l16 11 16-11M19 54l16-19 16 19" stroke="currentColor" strokeWidth=".7" /></svg>
        <p className="trail-eyebrow">WHERE IT STARTED</p>
        <h4>Master of Computer Applications</h4>
        <p>S.E.A College of Education, Bangalore</p>
        <span>Graduated · MCA</span>
        <h4>Bachelor of Computer Applications</h4>
        <p>Vidya Vikas First Grade College, Mysore</p>
        <span>Graduated · BCA</span>
      </div>
    </div>
  </div>;
}
