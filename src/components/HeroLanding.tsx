import { useEffect, useRef, useState } from "react";
import CharacterSprite from "./CharacterSprite";
import JourneyLink from "./JourneyLink";
import LevelBackdrop from "./LevelBackdrop";
import "../styles/hero.css";

const paths = [
  { id: "work", target: "projects", number: "01", title: "The work", hint: "Ideas, made real.", icon: "hornet" },
  { id: "about", target: "about", number: "02", title: "The maker", hint: "A face behind the craft.", icon: "grub" },
  { id: "studio", target: "services", number: "03", title: "The craft", hint: "What we can make together.", icon: "ghost" },
] as const;
type PathId = typeof paths[number]["id"];

export default function HeroLanding() {
  const [selected, setSelected] = useState<PathId | null>(null);
  const [awakened, setAwakened] = useState(false);
  const [discovered, setDiscovered] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const current = paths.find(path => path.id === selected);
  const awaken = () => {
    if (awakened) return;
    setDiscovered(true);
    setAwakened(true);
    timer.current = window.setTimeout(() => setAwakened(false), 1800);
  };

  return <section id="surface" data-level="0" className={`world-level hero hero-landing ${awakened ? "is-awakened" : ""}`}>
    <LevelBackdrop scene="home" tone="blue" effect="souls" priority />
    <div className="hero-content">
      <div className="hero-identity">
        <p className="hero-prelude hero-arrival"><span /> A SMALL STUDIO. AN ENTIRE WORLD.</p>
        <div className="hero-title-stage">
          <h1 className="hero-title" aria-label="Syed Saad Ahmed"><span className="hero-word hero-given">Syed</span><span className="hero-word hero-name">Saad</span><span className="hero-word hero-family">Ahmed<span className="hero-name-period" aria-hidden="true">.</span></span></h1>
        </div>
        <div className="hero-introduction hero-arrival"><p>Part designer. Part developer.<br /><span>Always a little curious.</span></p><p>I turn the ideas you can’t stop thinking about<br className="hero-desktop-break" /> into places people want to spend time in.</p></div>
        <JourneyLink local to="about" className="hero-enter hero-arrival"><span className="hero-enter-glyph" aria-hidden="true"><i /></span><span>Begin the descent</span><svg viewBox="0 0 38 14" width="38" height="14" fill="none" aria-hidden="true"><path d="M0 7h35m-7-6 7 6-7 6" stroke="currentColor" /></svg></JourneyLink>
      </div>

      <div className="hero-shrine-stage" data-path={selected ?? "none"}>
        <div className="hero-shrine-light" aria-hidden="true" />
        <svg className="hero-shrine-frame" viewBox="0 0 440 460" fill="none" aria-hidden="true">
          <path className="shrine-arch-outer" d="M80 393V198C80 116 151 56 220 16c69 40 140 100 140 182v195M94 392V198c0-72 63-129 126-166 63 37 126 94 126 166v194" />
          <path className="shrine-arch-inner" d="M118 375V203c0-61 48-109 102-143 54 34 102 82 102 143v172M129 237V207c0-51 42-100 91-130 49 30 91 79 91 130v30" />
          <path d="M80 190c-19-18-15-46 2-58m278 58c19-18 15-46-2-58M80 333l-9 9 9 9 9-9-9-9Zm280 0-9 9 9 9 9-9-9-9ZM101 390h238M64 406h312M89 412h262M145 428h150M198 30 220 4l22 26-22 20-22-20ZM211 30l9-12 9 12-9 9-9-9Z" />
          <path className="shrine-trail trail-work" d="M230 169c38-54 62-93 132-93" /><path className="shrine-trail trail-about" d="M210 274c-51 19-80-29-142-18" /><path className="shrine-trail trail-studio" d="M238 307c44 54 94 10 131 17" />
          <circle cx="80" cy="202" r="3" /><circle cx="360" cy="202" r="3" /><path d="M220 435v17m-5-9 5 5 5-5" />
        </svg>
        <div className="hero-shrine-figure">
          <button type="button" className="hero-guardian" onClick={awaken} aria-label="Awaken the Knight">
            <span className="hero-guardian-aura" aria-hidden="true" />
            <img src="/assets/Images/Characters/hollow-knight-avatar.svg" width="135" height="222" alt="" />
            {awakened && <span className="hero-guardian-burst" aria-hidden="true">{Array.from({ length: 8 }, (_, i) => <i key={i} style={{ rotate: `${i * 45}deg` }} />)}</span>}
          </button>
          <span className="hero-guardian-shadow" aria-hidden="true" />
        </div>
        <nav className="hero-shrine-paths" aria-label="Choose a path through the portfolio">
          {paths.map(path => <JourneyLink className={`hero-shrine-path shrine-path-${path.id}`} to={path.target} key={path.id} onPointerEnter={() => setSelected(path.id)} onPointerLeave={() => setSelected(null)} onFocus={() => setSelected(path.id)} onBlur={() => setSelected(null)} aria-label={`Explore ${path.title.toLowerCase()}`}>
            <span className="shrine-path-icon"><span className="shrine-path-ring" /><CharacterSprite name={path.icon} animated={selected === path.id} width="58" height="58" /></span><span className="shrine-path-number">{path.number}</span><span className="shrine-path-title">{path.title}</span>
          </JourneyLink>)}
        </nav>
        <div className="hero-shrine-caption"><span>{current ? `PATH ${current.number} / ${current.title.toUpperCase()}` : "EVERY GOOD WORLD HIDES A LITTLE MAGIC"}</span><p aria-live="polite">{current?.hint ?? (discovered ? "Welcome, wanderer." : "Scroll to explore. The guardian is listening.")}</p></div>
      </div>
    </div>
    <div className="hero-world-note hero-arrival"><span>INDEPENDENT BY NATURE</span><p>Design & development · Mysore, India</p></div>
    <JourneyLink local to="about" className="descent-cue" aria-label="Descend to About me"><span>THE JOURNEY CONTINUES BELOW</span><svg width="18" height="28" viewBox="0 0 18 28" fill="none" aria-hidden="true"><path d="M9 1v23M3 18l6 6 6-6M5 9l4 4 4-4" stroke="currentColor" /></svg></JourneyLink>
    <span className="hero-chapter-mark hero-arrival" aria-hidden="true">I <span>/ THE SURFACE</span></span>
  </section>;
}
