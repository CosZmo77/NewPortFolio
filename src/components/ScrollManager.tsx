import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { beginJourney, stopJourney, travelTo } from "../lib/journey";
import type { JourneyRequest } from "../lib/journey";

const titles: Record<string, string> = {
  "/": "Saad Design — Digital experiences with soul",
  "/about": "The story — Saad Design",
  "/projects": "Selected works — Saad Design",
  "/services": "What I do — Saad Design",
  "/contact": "Start a conversation — Saad Design",
};

export default function ScrollManager() {
  const { pathname, hash, key, state } = useLocation();
  const initialKey = useRef(key);
  useLayoutEffect(() => {
    stopJourney();
    document.title = titles[pathname] ?? "Saad Design";
    const firstArrival = initialKey.current === key;
    const journey = (state as { journey?: JourneyRequest } | null)?.journey;
    if (pathname === "/" && journey) {
      // Explicit level links from another chapter start once Home has mounted.
      const frame = requestAnimationFrame(() => beginJourney(journey));
      return () => { cancelAnimationFrame(frame); stopJourney(); };
    }
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    // Wait for type/layout and the animation setup before positioning a deep link.
    let active = true;
    let frame = 0;
    document.fonts.ready.then(() => {
      if (!active) return;
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          let id = hash.slice(1);
          try { id = decodeURIComponent(id); } catch { /* Use the literal fragment. */ }
          travelTo(id, firstArrival);
        });
      });
    });
    return () => { active = false; cancelAnimationFrame(frame); stopJourney(); };
  }, [pathname, hash, key, state]);
  return null;
}
