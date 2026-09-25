import "../styles/physio-case-study.css";

const capabilities = [
  ["01", "Explore in three dimensions", "Orbit and zoom around anatomy, switch between standard camera views, search individual structures, and show, hide, or isolate mapped parts. Select anatomy labels to read the teaching notes alongside the model."],
  ["02", "Look closer, one view at a time", "The 2D atlases pair model-derived illustrations with selectable landmarks, label groups, zoom, and pan. View selectors and keyboard shortcuts make it easy to compare different perspectives."],
  ["03", "Turn exploration into learning", "Courses bring lessons, anatomy viewers, quizzes, and anatomy spotter exercises into a guided sequence. Account features support saved lessons and completion tracking, so learners can return to where they left off."],
];


export default function PhysioCaseStudy() {
  return (
      <div className="physio-case-expanded">
        <div className="physio-case-story"><div><p className="physio-section-label">THE DESIGN PROBLEM</p><h4>Keep the subject rich.<br />Keep the interface clear.</h4></div><p>Anatomy has a lot happening at once. The interface needs to make the next action obvious: find a region, choose a resource, inspect a structure, or continue a lesson. I organised the library around those decisions, with text search, body-region filters, and separate paths for topics, 2D images, 3D models, and courses. Public resources can be browsed without an account.</p></div>
        <div className="physio-capabilities">{capabilities.map(([number, title, copy]) => <section key={number}><span>{number}</span><h4>{title}</h4><p>{copy}</p></section>)}</div>
        <div className="physio-engineering">
          <section><p className="physio-section-label">FRONTEND &amp; INTERACTION</p><h4>Astro at the centre.</h4><p>Astro and TypeScript handle the content-led pages, with React islands for the interactive tools. The 3D viewer uses Google’s model-viewer and GLB assets; the 2D viewer has its own label, view-selection, and navigation controls. Shared workspace packages keep the viewers, UI, authentication, and content schemas separate.</p></section>
          <section><p className="physio-section-label">ACCOUNTS &amp; CONTENT</p><h4>A system behind the library.</h4><p>PostgreSQL stores the content registry and learner data, while Better Auth handles accounts and sessions. The Content Studio manages courses, modules, lessons, topics, viewers, and asset-rights records. Zod validates content, and server-side checks govern protected operations. Publication states, revision checks, and audit records support the editing workflow.</p></section>
          <section><p className="physio-section-label">PERFORMANCE &amp; QUALITY</p><h4>Care beyond the first screen.</h4><p>The homepage defers its anatomy renderer until it approaches the viewport. The source includes loading and failure states for viewers, responsive layouts, keyboard controls, and reduced-motion support. Vitest, Playwright, and axe-core cover logic, browser journeys, and accessibility checks.</p></section>
          <section><p className="physio-section-label">CONTENT &amp; SCOPE</p><h4>Make the source visible.</h4><p>The catalogue covers the spine, upper limb, lower limb, and neurorehabilitation. Anatomy resources include source references, teaching notes, and asset attribution. Model-derived views are educational illustrations; the project’s content still requires qualified clinical review before it can be described as clinically approved.</p></section>
        </div>
        <p className="physio-case-closing">A personal build that brings together the parts I enjoy: visual design, interactive tools, and the systems that make them useful.</p>
      </div>
  );
}
