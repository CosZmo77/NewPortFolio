import { gsap } from "gsap";

export type JourneyRequest = { target: string; contact?: boolean; service?: string };
let cancelJourney: (() => void) | undefined;
let pendingFrame = 0;

export function stopJourney() { cancelAnimationFrame(pendingFrame); pendingFrame = 0; cancelJourney?.(); }

/** One finite camera move. Wheel, touch, keys, or another click return control. */
export function travelTo(id: string, immediate = false) {
  stopJourney();
  const destination = document.getElementById(id);
  if (!destination) return;
  const start = window.scrollY;
  // Read the layout position, excluding any reveal transform still in progress.
  // Otherwise the camera stops short when an animated parent settles.
  let layoutTop = 0;
  let element: HTMLElement | null = destination;
  while (element) { layoutTop += element.offsetTop; element = element.offsetParent as HTMLElement | null; }
  const top = Math.max(0, Math.min(document.documentElement.scrollHeight - innerHeight, layoutTop - 30));
  const finish = () => {
    if (!destination.hasAttribute("tabindex")) destination.tabIndex = -1;
    destination.focus({ preventScroll: true });
  };
  if (immediate || window.matchMedia("(prefers-reduced-motion: reduce)").matches || Math.abs(top - start) < 3) {
    window.scrollTo({ top, behavior: "instant" });
    finish();
    return;
  }
  const camera = { y: start };
  const keys = new Set(["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " ", "Escape", "Tab"]);
  const onKey = (event: KeyboardEvent) => { if (keys.has(event.key)) cancel(); };
  const onHidden = () => { if (document.hidden) cancel(); };
  const cleanup = () => {
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("pointerdown", cancel);
    window.removeEventListener("resize", cancel);
    window.removeEventListener("keydown", onKey);
    document.removeEventListener("visibilitychange", onHidden);
    if (cancelJourney === cancel) cancelJourney = undefined;
  };
  const tween = gsap.to(camera, {
    y: top, duration: Math.min(5.2, Math.max(1.2, Math.abs(top - start) / 1700 + .9)), ease: "power2.inOut",
    onUpdate: () => window.scrollTo({ top: camera.y, behavior: "instant" }),
    onComplete: () => { cleanup(); finish(); },
  });
  function cancel() { tween.kill(); cleanup(); }
  cancelJourney = cancel;
  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("pointerdown", cancel, { passive: true });
  window.addEventListener("resize", cancel);
  window.addEventListener("keydown", onKey);
  document.addEventListener("visibilitychange", onHidden);
}

export function beginJourney(request: JourneyRequest) {
  stopJourney();
  if (request.contact) window.dispatchEvent(new CustomEvent("portfolio:contact", { detail: { service: request.service } }));
  pendingFrame = requestAnimationFrame(() => { pendingFrame = 0; travelTo(request.target); });
}
