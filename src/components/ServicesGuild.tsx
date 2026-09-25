import { useArrivalReady } from "../hooks/ArrivalContext";
import { useLayoutEffect, useId, useRef, useState } from "react";
import JourneyLink from "./JourneyLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/services.css";
import CharacterSprite from "./CharacterSprite";

gsap.registerPlugin(ScrollTrigger);

const disciplines = [
  { id: "design", name: "Design", short: "Give the idea a face.", icon: "grub", title: "Make it feel like you.", description: "A website should have a point of view. Let’s find yours, then make every page feel like it belongs.", skills: ["UI / UX design", "Web & visual design", "Prototypes & interaction"], detail: "From the first rough sketch to the tiny details people notice without knowing why.", label: "THE EYE", stat: "Identity, clarity, character", request: "Design" },
  { id: "development", name: "Development", short: "Bring the world to life.", icon: "ghost", title: "Give it a heartbeat.", description: "I build the pieces you see and the ones you shouldn’t have to think about. Websites that feel good to use, with solid code underneath.", skills: ["Websites & full-stack apps", "3D & interactive experiences", "Performance & accessibility"], detail: "The frontend, the backend, and all the little connections that make them work together.", label: "THE HAND", stat: "Structure, speed, movement", request: "Development" },
  { id: "direction", name: "Creative direction", short: "Find your way forward.", icon: "silksongflew", title: "Start with the right questions.", description: "Not quite sure what to build yet? We can work through the idea, pick what matters, and get a clear plan together.", skills: ["Creative & technical consulting", "Project scope & prototypes", "SEO & content structure"], detail: "An honest second pair of eyes, before you put time and money into the wrong thing.", label: "THE COMPASS", stat: "Purpose, direction, a plan", request: "Something else" },
] as const;

export default function ServicesGuild({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const arrived = useArrivalReady();
  useLayoutEffect(() => {
    if (!arrived) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".guild-choices, .guild-stage", { y: 35, opacity: 0, duration: 1, stagger: .15, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: rootRef.current, start: "top 86%", once: true } });
    }, rootRef);
    return () => media.revert();
  }, [arrived]);

  return <div ref={rootRef} className={`services-guild ${compact ? "guild-compact" : ""}`}>
    {compact && <header className="guild-heading"><p className="guild-eyebrow">V / THE WORKSHOP</p><h2>A little craft.<br /><span>A little magic.</span></h2><p>Three ways we can make something worth putting into the world.</p></header>}
    <div className="guild-board">
      <div className="guild-choices" role="group" aria-label="Choose a service">
        <p className="guild-select-note"><span /> CHOOSE YOUR CRAFT</p>
        {disciplines.map((item, index) => <button key={item.id} type="button" className="guild-choice" aria-label={item.name} aria-pressed={selected === index} aria-controls={`${id}-${item.id}`} onClick={() => setSelected(index)}><span className="guild-choice-number">0{index + 1}</span><span className="guild-choice-copy"><strong>{item.name}</strong><span>{item.short}</span></span><CharacterSprite name={item.icon} animated={selected === index} width="64" height="64" loading="lazy" decoding="async" alt="" /><span className="guild-choice-arrow" aria-hidden="true">›</span></button>)}
        <p className="guild-footnote">One studio. A few different ways in.<br />We’ll work out the right mix together.</p>
      </div>
      <div className="guild-stage">
        <span className="guild-corner guild-corner-tl" aria-hidden="true" /><span className="guild-corner guild-corner-tr" aria-hidden="true" /><span className="guild-corner guild-corner-bl" aria-hidden="true" /><span className="guild-corner guild-corner-br" aria-hidden="true" />
        {disciplines.map((item, index) => <section key={item.id} id={`${id}-${item.id}`} className={`guild-panel ${selected === index ? "is-selected" : ""}`} aria-label={`${item.name} details`} aria-hidden={selected !== index} inert={selected !== index}>
          <div className="guild-emblem" aria-hidden="true"><span className="guild-emblem-ring" /><span className="guild-emblem-ring guild-ring-inner" /><svg className="guild-emblem-drawing" viewBox="0 0 200 160" fill="none"><path d="M100 4 190 80 100 156 10 80 100 4ZM100 20 170 80 100 140 30 80 100 20Z" stroke="currentColor" strokeWidth=".7" /><path d="M100 0v22m0 116v22M0 80h30m140 0h30" stroke="currentColor" /><circle cx="100" cy="4" r="2" fill="currentColor" /><circle cx="100" cy="156" r="2" fill="currentColor" /></svg><CharacterSprite name={item.icon} animated={selected === index} alt="" width="120" height="120" loading="lazy" decoding="async" /></div>
          <p className="guild-discipline-label">{item.label}<span>0{index + 1} / 03</span></p>
          <h3>{item.title}</h3><p className="guild-description">{item.description}</p>
          <ul className="guild-capabilities">{item.skills.map(skill => <li key={skill}><span aria-hidden="true">◇</span>{skill}</li>)}</ul>
          <p className="guild-detail">{item.detail}</p>
          <div className="guild-panel-footer"><span>{item.stat}</span><JourneyLink to="contact-letter" contact service={item.request} className="guild-cta">Let’s talk <span aria-hidden="true">↗</span></JourneyLink></div>
        </section>)}
      </div>
    </div>
    {!compact && <div className="guild-afterword"><span aria-hidden="true">✧</span><p>You don’t need to know which box your idea fits in.<br />That’s something we can figure out in the first conversation.</p></div>}
  </div>;
}
