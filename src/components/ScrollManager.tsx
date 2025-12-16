import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Kill old triggers from previous page
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Scroll to top using GSAP (safe + smooth)
    gsap.set(window, { scrollTo: 0 });

    // Allow layout to settle, then refresh triggers
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, [pathname]);

  return null;
}
