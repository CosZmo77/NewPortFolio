import { useEffect, useLayoutEffect, useState } from "react";
import type { ReactNode } from "react";
import { ArrivalContext } from "../hooks/ArrivalContext";
import "../styles/arrival.css";

const imageReady = (src: string) => new Promise<void>((resolve, reject) => {
  const image = new Image();
  image.onload = () => image.decode().then(resolve, reject);
  image.onerror = () => reject(new Error("Artwork unavailable"));
  image.src = src;
});

const openingScene = () => {
  const mobile = window.matchMedia("(max-width: 700px)").matches;
  const scene = ({ "/about": "bg-09", "/projects": "bg-14", "/services": "bg-02", "/contact": "bg-17" } as Record<string, string>)[location.pathname] ?? "home";
  return mobile ? (scene === "home" ? "home-portrait" : `${scene}-mobile`) : scene;
};

let resources: Promise<unknown>[] | undefined;
function prepareArrival() {
  if (resources) return resources;
  const route = ({ "/about": () => import("../pages/About"), "/projects": () => import("../pages/Projects"), "/services": () => import("../pages/Services"), "/contact": () => import("../pages/Contact") } as Record<string, () => Promise<unknown>>)[location.pathname];
  resources = [
    ...["HK", "DM", "DMR", "GM"].map(font => document.fonts.load(`16px ${font}`)),
    ...[openingScene(), "logo-white"].map(name => imageReady(`/assets/optimized/${name}.webp`)),
    ...(route ? [route()] : []),
  ];
  return resources;
}

/** Only the document's initial arrival is gated; internal routes stay immediate. */
export default function ArrivalGate({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [departing, setDeparting] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [scene] = useState(openingScene);
  const [arrivalStarted] = useState(() => performance.now());

  useLayoutEffect(() => {
    if (dismissed) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = previous; };
  }, [dismissed]);

  useEffect(() => {
    let active = true;
    let settled = 0;
    const timers: number[] = [];
    const tasks = prepareArrival();
    tasks.forEach(task => {
      // A failed resource must never strand a visitor at the entrance.
      const bounded = new Promise(resolve => {
        const timer = window.setTimeout(resolve, 6000);
        timers.push(timer);
        task.then(resolve, resolve).finally(() => window.clearTimeout(timer));
      });
      void bounded.then(() => {
        if (!active) return;
        settled += 1;
        setProgress(Math.round(settled / tasks.length * 100));
        if (settled === tasks.length) setReady(true);
      });
    });
    return () => { active = false; timers.forEach(window.clearTimeout); };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Give a fast arrival time to breathe, without extending an already slow load.
    // Progress remains the actual resource count; the completed entrance simply holds.
    const minimumVisible = reducedMotion ? 650 : 2200;
    const revealAfter = Math.max(180, minimumVisible - (performance.now() - arrivalStarted));
    const reveal = window.setTimeout(() => setDeparting(true), revealAfter);
    const remove = window.setTimeout(() => setDismissed(true), revealAfter + (reducedMotion ? 20 : 760));
    return () => { window.clearTimeout(reveal); window.clearTimeout(remove); };
  }, [ready, arrivalStarted]);

  return <>
    {ready && <ArrivalContext.Provider value={departing || dismissed}><div className="portfolio-world" inert={!dismissed} aria-hidden={!dismissed}>{children}</div></ArrivalContext.Provider>}
    {!dismissed && <div className={`arrival-gate ${departing ? "is-departing" : ""}`}>
      <img className="arrival-scenery" src={`/assets/optimized/${scene}.webp`} alt="" aria-hidden="true" />
      <div className="arrival-vignette" aria-hidden="true" />
      <img className="arrival-signature" src="/assets/optimized/logo-white.webp" width="160" height="90" alt="Saad Design" />
      <div className="arrival-inner">
        <div className="arrival-knight" aria-hidden="true"><span /><img src="/assets/Images/Characters/hollow-knight-avatar.svg" width="88" height="144" alt="" /></div>
        <p className="arrival-overline">SOMEWHERE BELOW THE SURFACE</p>
        <h1>The descent begins</h1>
        <svg className="arrival-flourish" viewBox="0 0 320 24" fill="none" aria-hidden="true"><path d="M0 12h108c21 0 26-9 35-9 9 0 8 9 17 9s8-9 17-9c9 0 14 9 35 9h108M91 12c24 0 30 9 45 9m48 0c15 0 21-9 45-9" stroke="currentColor" /><path d="m156 12 4-5 4 5-4 5-4-5Z" fill="currentColor" /></svg>
        <div className="arrival-meter" role="progressbar" aria-label="Preparing the portfolio" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
          <span className="arrival-meter-track"><span style={{ transform: `scaleX(${progress / 100})` }} /></span>
        </div>
        <div className="arrival-readout"><span>{progress === 100 ? "The path is open" : "Gathering the light"}</span><span>{progress}<small>%</small></span></div>
      </div>
      <p className="arrival-bottom">A small world. Made with soul.</p>
    </div>}
  </>;
}
