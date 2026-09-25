import JourneyLink from "./JourneyLink";
import SceneBackground from "./SceneBackground";
import CharacterSprite from "./CharacterSprite";
import LevelEffects from "./LevelEffects";
import "../styles/footer.css";
const GitHubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.479 5.921.43.37.814 1.102.814 2.222v3.293c0 .319.218.694.825.576C20.565 22.095 24 17.597 24 12.297c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.732v20.535C0 23.227.79 24 1.77 24h20.46C23.21 24 24 23.227 24 22.267V1.732C24 .774 23.21 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.63a2.02 2.02 0 110-4.04 2.02 2.02 0 010 4.04zM20.452 20.452h-3.5v-5.605c0-1.336-.025-3.06-1.865-3.06-1.868 0-2.154 1.46-2.154 2.967v5.698h-3.5V9h3.36v1.56h.048c.468-.89 1.607-1.83 3.305-1.83 3.534 0 4.185 2.324 4.185 5.345v6.377z" />
  </svg>
);

const DevIcon = (
  <svg
    className="fill-current text-white"
    width="24"
    height="24"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 7 L2 25 L30 25 L30 7 L2 7 z M4 9 L28 9 L28 23 L4 23 L4 9 z M6 11 L6 21 L9 21 C10.654 21 12 19.654 12 18 L12 14 C12 12.346 10.654 11 9 11 L6 11 z M16 11 C14.897 11 14 11.897 14 13 L14 19 C14 20.103 14.897 21 16 21 L18 21 L18 19 L16 19 L16 17 L18 17 L18 15 L16 15 L16 13 L18 13 L18 11 L16 11 z M19.691406 11 L21.775391 20.025391 C21.907391 20.595391 22.415 21 23 21 C23.585 21 24.092609 20.595391 24.224609 20.025391 L26.308594 11 L24.255859 11 L23 16.439453 L21.744141 11 L19.691406 11 z M8 13 L9 13 C9.552 13 10 13.448 10 14 L10 18 C10 18.552 9.552 19 9 19 L8 19 L8 13 z" />
  </svg>
);

const WhatsAppIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M20.52 3.48a11.94 11.94 0 00-16.97 0 11.94 11.94 0 00-3.51 8.48c0 2.1.55 4.15 1.59 5.95L2 22l4.18-1.38a11.937 11.937 0 005.95 1.59c2.88 0 5.63-1.12 7.68-3.17a11.94 11.94 0 000-16.97zm-8.52 17.02c-2.43 0-4.71-.73-6.61-2.07l-.47-.28-2.48.82.83-2.42-.31-.5a9.96 9.96 0 01-1.41-5.08c0-5.52 4.48-10 10-10 2.68 0 5.2 1.05 7.07 2.93a9.957 9.957 0 01.01 14.14 9.957 9.957 0 01-7.04 2.56zm5.02-7.16c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.28-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47-.16-.01-.35-.01-.53-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.94 2.97 4.71 4.16.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.28-.07-.12-.25-.18-.52-.32z" />
  </svg>
);

const elsewhere = [
  { label: "GitHub", href: "https://github.com/CosZmo77", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saad25492/", icon: LinkedInIcon },
  { label: "Dev.to", href: "https://dev.to/coszmo77", icon: DevIcon },
  { label: "WhatsApp", href: "https://wa.me/918892880002?text=Hi%20Saad!%20Can%20We%20Connect?", icon: WhatsAppIcon },
];

const Bench = () => <svg className="rest-bench" viewBox="0 0 300 180" fill="none" aria-hidden="true">
  <path d="M44 97h212v17H44zM55 85V54c0-18 19-22 28-10m162 41V54c0-18-19-22-28-10M65 89V52m170 37V52M77 89V50h146v39M89 53v32m20-32v32m20-32v32m20-32v32m20-32v32m20-32v32m20-32v32M54 119l-9 39m29-39-6 30m152-30 6 30m20-30 9 39M34 158h27m178 0h27" stroke="currentColor" strokeWidth="2" />
  <path d="M36 95c-24-3-21-35-5-33 12 2 12 16 3 17m230 16c24-3 21-35 5-33-12 2-12 16-3 17M62 119h176M94 31q56-28 112 0M100 31h100" stroke="currentColor" strokeWidth="1.3" />
  <path d="m144 13 6-10 6 10-6 10-6-10Z" stroke="currentColor" />
</svg>;

export default function Footer() {
  return <footer className="site-footer resting-chamber" aria-label="The last resting place">
    <SceneBackground name="bg-08" />
    <div className="resting-shade" aria-hidden="true" />
    <LevelEffects effect="lanterns" />
    <div className="resting-content">
      <div className="resting-heading"><p className="resting-label">YOU FOUND A QUIET CORNER</p><h2>Rest here a while.</h2><p>Every good adventure leaves room for another.</p></div>
      <div className="resting-world">
        <JourneyLink to="about" className="rest-door rest-door-left" aria-label="Meet the maker — About"><span className="rest-door-arch" aria-hidden="true"><span className="rest-door-light" /><CharacterSprite name="grub" width="70" height="70" loading="lazy" decoding="async" alt="" /></span><span className="resting-label">THE MAKER</span><span className="rest-door-title">A familiar face</span></JourneyLink>
        <div className="resting-bench-scene"><div className="resting-lamp" aria-hidden="true"><i /><span /></div><CharacterSprite className="resting-knight" name="ghost" width="100" height="100" loading="lazy" decoding="async" alt="" /><Bench /><div className="resting-ground" aria-hidden="true" /><JourneyLink className="resting-return" to="surface"><svg width="16" height="23" viewBox="0 0 16 23" fill="none" aria-hidden="true"><path d="M8 22V2M2 8l6-6 6 6M4 13l4-4 4 4" stroke="currentColor" /></svg><span>Return to the surface</span></JourneyLink></div>
        <JourneyLink to="projects" className="rest-door rest-door-right" aria-label="Explore the work — Projects"><span className="rest-door-arch" aria-hidden="true"><span className="rest-door-light" /><CharacterSprite name="silksongflew" width="70" height="70" loading="lazy" decoding="async" alt="" /></span><span className="resting-label">THE WORK</span><span className="rest-door-title">Paths I've taken</span></JourneyLink>
      </div>
      <JourneyLink to="contact-letter" contact className="resting-quest"><span className="resting-quest-line" /><span>Begin something together</span><span className="resting-quest-line" /></JourneyLink>
      <nav className="resting-charms" aria-label="Find me elsewhere">{elsewhere.map(item => <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.label} (opens in a new tab)`}><span className="resting-charm" aria-hidden="true">{item.icon}</span><span className="resting-charm-label">{item.label}</span></a>)}</nav>
      <div className="resting-colophon"><JourneyLink to="surface" aria-label="Saad Design home"><img src="/assets/optimized/logo-white.webp" width="106" height="60" loading="lazy" decoding="async" alt="Saad Design" /></JourneyLink><p>© {new Date().getFullYear()} Syed Saad Ahmed</p><span>Imagined & built in Mysore, India</span></div>
    </div>
  </footer>;
}
