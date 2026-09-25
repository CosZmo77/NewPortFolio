import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import useVisibleMotion from "../hooks/useVisibleMotion";
import "../styles/portrait.css";

type GamePortraitProps = {
  className?: string;
  enterAbout?: boolean;
  portalTo?: "/" | "/about";
  onAwaken?: () => void;
  storyOpen?: boolean;
};

/** The same photograph, presented as a character found in the world. */
export default function GamePortrait({ className = "", enterAbout = false, portalTo, onAwaken, storyOpen }: GamePortraitProps) {
  const [awakened, setAwakened] = useState(false);
  const [portal, setPortal] = useState<{ x: number; y: number } | null>(null);
  const { ref: portraitRef, active: motionActive } = useVisibleMotion<HTMLElement>();
  const enteringRef = useRef(false);
  const navigate = useNavigate();
  const destination = portalTo ?? (enterAbout ? "/about" : undefined);
  const returningHome = destination === "/";

  useEffect(() => {
    if (!portal || !destination) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => navigate(destination), 1150);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [portal, destination, navigate]);

  const awaken = () => {
    if (onAwaken) { setAwakened(true); onAwaken(); return; }
    if (!destination) { setAwakened(current => !current); return; }
    if (enteringRef.current) return;
    enteringRef.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      navigate(destination);
      return;
    }
    // Warm the destination chunk while the doorway opens.
    if (destination === "/about") void import("../pages/About").catch(() => {});
    const bounds = portraitRef.current?.querySelector(".portrait-window")?.getBoundingClientRect();
    setAwakened(true);
    setPortal({ x: bounds ? bounds.left + bounds.width / 2 : innerWidth / 2, y: bounds ? Math.max(80, Math.min(innerHeight - 80, bounds.top + bounds.height / 2)) : innerHeight / 2 });
  };

  return (
    <figure ref={portraitRef} className={`game-portrait ${className}`} data-awakened={awakened} data-motion-active={motionActive}>
      <div className="portrait-stage">
        <div className="portrait-orbit portrait-orbit-outer" aria-hidden="true" />
        <div className="portrait-orbit portrait-orbit-inner" aria-hidden="true" />

        <div className="portrait-window">
          <img
            className="portrait-photo"
            src="/assets/optimized/portrait.webp"
            srcSet="/assets/optimized/portrait-mobile.webp 480w, /assets/optimized/portrait.webp 800w"
            sizes="(max-width: 767px) 90vw, 440px"
            width={800}
            height={1067}
            alt="Saad sitting on a fallen tree in the hills"
            loading="lazy"
            decoding="async"
          />
          <img
            className="portrait-echo"
            src="/assets/optimized/portrait.webp"
            srcSet="/assets/optimized/portrait-mobile.webp 480w, /assets/optimized/portrait.webp 800w"
            sizes="(max-width: 767px) 90vw, 440px"
            width={800}
            height={1067}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <div className="portrait-engraving" aria-hidden="true" />
          <div className="portrait-vignette" aria-hidden="true" />
          <div className="portrait-soul-haze" aria-hidden="true" />
          <div className="portrait-motes" aria-hidden="true">
            <i /><i /><i /><i /><i />
          </div>
        </div>

        <svg className="portrait-frame" viewBox="0 0 480 640" fill="none" aria-hidden="true">
          <path className="portrait-frame-line" d="M30 583V174C30 80 125 21 240 21S450 80 450 174V583L421 613H59L30 583Z" />
          <path className="portrait-frame-fine" d="M42 577V176C42 89 132 33 240 33S438 89 438 176V577L416 601H64L42 577Z" />
          <path className="portrait-frame-fine" d="M19 221V169C19 68 120 10 211 10M269 10C360 10 461 68 461 169V221M19 390V588L56 627H177M303 627H424L461 588V390" />
          <path className="portrait-frame-vine" d="M30 243C10 220 12 201 25 194C22 212 46 210 42 231M450 243C470 220 468 201 455 194C458 212 434 210 438 231M30 430C5 451 10 478 30 481C16 465 43 455 42 438M450 430C475 451 470 478 450 481C464 465 437 455 438 438M57 609C80 572 101 588 101 601M423 609C400 572 379 588 379 601" />
          <path className="portrait-frame-line" d="M214 27C207 10 218 4 221 2C220 18 232 15 240 28C248 15 260 18 259 2C262 4 273 10 266 27L254 39H226L214 27Z" />
          <path className="portrait-frame-fine" d="M220 622L240 608L260 622L240 636L220 622ZM240 608V636M8 308L20 291L31 308L20 325L8 308ZM449 308L460 291L472 308L460 325L449 308Z" />
          <circle cx="240" cy="24" r="3" className="portrait-frame-gem" />
          <circle cx="20" cy="308" r="3" className="portrait-frame-gem" />
          <circle cx="460" cy="308" r="3" className="portrait-frame-gem" />
        </svg>

        <div className="portrait-nameplate">
          <span className="portrait-name-rule" aria-hidden="true" />
          <span className="portrait-name">Saad</span>
          <span className="portrait-role">Designer / Developer</span>
          <span className="portrait-name-rule" aria-hidden="true" />
        </div>
      </div>

      <figcaption className="portrait-caption">
        <span className="portrait-location">Mysore, India</span>
        <button
          type="button"
          className="portrait-awaken"
          aria-pressed={destination || onAwaken ? undefined : awakened}
          aria-expanded={onAwaken ? storyOpen : undefined}
          aria-controls={onAwaken ? "about-trail" : undefined}
          disabled={Boolean(portal)}
          onClick={awaken}
        >
          <svg className="portrait-button-soul" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C12 8 8 12 2 12C8 12 12 16 12 22C12 16 16 12 22 12C16 12 12 8 12 2Z" stroke="currentColor" />
          </svg>
          {returningHome ? "Return home" : storyOpen ? "Follow my path" : "Awaken portrait"}
          {destination && <span className="sr-only">{returningHome ? " through the portrait portal" : " and enter About"}</span>}
          <span className="portrait-button-dot" aria-hidden="true" />
        </button>
      </figcaption>
      {portal && createPortal(<div className="portrait-portal" role="status" aria-live="polite">
        <span className="sr-only">{returningHome ? "Returning home…" : "Entering About…"}</span>
        <div className="portrait-portal-veil" aria-hidden="true" />
        <div className="portrait-portal-mouth" style={{ left: portal.x, top: portal.y }} aria-hidden="true">
          <i className="portal-ring portal-ring-outer" /><i className="portal-ring portal-ring-inner" />
          <span className="portal-core" />
        </div>
      </div>, document.body)}
    </figure>
  );
}
