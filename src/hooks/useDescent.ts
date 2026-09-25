import { useArrivalReady } from "./ArrivalContext";
import { useLayoutEffect } from "react";
import type { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useDescent(ref: RefObject<HTMLDivElement | null>) {
  const arrived = useArrivalReady();
  useLayoutEffect(() => {
    if (!arrived) return;
    const root = ref.current;
    if (!root) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const entranceLayers = root.querySelectorAll(".hero-word, .hero-shrine-stage, .hero-arrival, .hero-shrine-path, .descent-cue");
      gsap.set(entranceLayers, { willChange: "transform,opacity" });
      // The scenery, name and shrine emerge together as the entrance fades away.
      // A slow start avoids the first-frame jump of an ease-out-only reveal.
      const intro = gsap.timeline({ defaults: { ease: "sine.inOut" }, onComplete: () => { gsap.set(entranceLayers, { clearProps: "willChange" }); } });
      intro.from(".hero-word", { opacity: 0, y: 16, duration: 1.65, stagger: .1, clearProps: "transform,opacity" }, .04)
        .from(".hero-shrine-stage", { opacity: 0, y: 12, duration: 1.85, clearProps: "transform,opacity" }, .04)
        .from(".hero-arrival", { opacity: 0, y: 10, duration: 1.4, stagger: .08, clearProps: "transform,opacity" }, .3)
        .from(".hero-shrine-path", { opacity: 0, y: 6, duration: 1.2, stagger: .1, clearProps: "transform,opacity" }, .65)
        .from(".descent-cue", { opacity: 0, duration: 1.2, clearProps: "opacity" }, .85);

      root.querySelectorAll<HTMLElement>(".world-level").forEach((level) => {
        const title = level.querySelector("h2");
        if (title) gsap.from(title, { opacity: 0, y: 45, scale: .96, duration: 1.35, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: title, start: "top 89%", once: true } });
      });
      gsap.from(".about-img-container", { y: 65, rotate: -4, scale: .94, opacity: 0, duration: 1.35, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: ".about-img-container", start: "top 85%", once: true } });
      gsap.from(".about-content > *", { y: 40, opacity: 0, stagger: .16, duration: 1, clearProps: "transform,opacity", scrollTrigger: { trigger: ".about-content", start: "top 85%", once: true } });
      root.querySelectorAll<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.from(card.children, { x: (index) => index === 0 ? (i % 2 ? 65 : -65) : 0, y: 45, opacity: 0, stagger: .18, duration: 1.2, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: card, start: "top 88%", once: true } });
      });
      root.querySelectorAll<HTMLElement>(".charm-card").forEach((card, i) => {
        gsap.from(card, { y: 65, scale: .92, opacity: 0, duration: .9, delay: i % 3 * .09, ease: "back.out(1.25)", clearProps: "transform,opacity", scrollTrigger: { trigger: card, start: "top 92%", once: true } });
      });
      gsap.from("#contact .relative.z-10", { y: 50, opacity: 0, scale: .94, duration: 1.25, clearProps: "transform,opacity", scrollTrigger: { trigger: "#contact", start: "top 65%", once: true } });
    }, root);

    // Only the visible scenery moves; the foreground and phone backgrounds stay still.
    media.add("(min-width: 900px) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(".hero-content", { y: -36, opacity: .12, ease: "none", scrollTrigger: { trigger: ".hero", start: "bottom bottom", end: "bottom 22%", scrub: .45 } });
      root.querySelectorAll<HTMLElement>(".world-level").forEach(level => {
        gsap.fromTo(level.querySelector(".level-image"), { y: -24 }, { y: 24, ease: "none", scrollTrigger: { trigger: level, start: "top bottom", end: "bottom top", scrub: true } });
      });
    }, root);

    media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const cleanups: (() => void)[] = [];
      const bindHeroParallax = (stageSelector: string, targetSelector: string, distanceX: number, distanceY: number) => {
        const stage = root.querySelector<HTMLElement>(stageSelector);
        const target = root.querySelector<HTMLElement>(targetSelector);
        if (!stage || !target) return;
        const shiftX = gsap.quickTo(target, "x", { duration: .95, ease: "sine.out" });
        const shiftY = gsap.quickTo(target, "y", { duration: .95, ease: "sine.out" });
        let bounds: DOMRect | undefined;
        const enter = () => { bounds = stage.getBoundingClientRect(); };
        const move = (event: PointerEvent) => {
          if (!bounds || !bounds.width || !bounds.height) return;
          const x = gsap.utils.clamp(-.5, .5, (event.clientX - bounds.left) / bounds.width - .5);
          const y = gsap.utils.clamp(-.5, .5, (event.clientY - bounds.top) / bounds.height - .5);
          shiftX(x * distanceX);
          shiftY(y * distanceY);
        };
        const leave = () => { bounds = undefined; shiftX(0); shiftY(0); };
        stage.addEventListener("pointerenter", enter, { passive: true });
        stage.addEventListener("pointermove", move, { passive: true });
        stage.addEventListener("pointerleave", leave);
        cleanups.push(() => { stage.removeEventListener("pointerenter", enter); stage.removeEventListener("pointermove", move); stage.removeEventListener("pointerleave", leave); });
      };
      bindHeroParallax(".hero-title-stage", ".hero-title", 12, 8);
      // The figure has its own layer so pointer motion cannot fight the shrine's entrance.
      bindHeroParallax(".hero-shrine-stage", ".hero-shrine-figure", 16, 12);
      root.querySelectorAll<HTMLElement>(".charm-card, .project-window").forEach((card) => {
        gsap.set(card, { transformPerspective: 1000 });
        const tiltX = gsap.quickTo(card, "rotationX", { duration: .6, ease: "power2.out" });
        const tiltY = gsap.quickTo(card, "rotationY", { duration: .6, ease: "power2.out" });
        let rect: DOMRect | undefined;
        const enter = () => { rect = card.getBoundingClientRect(); };
        const move = (event: PointerEvent) => {
          if (!rect) return;
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          tiltX((.5 - y) * 7); tiltY((x - .5) * 7);

        };
        const reset = () => { rect = undefined; tiltX(0); tiltY(0); };
        card.addEventListener("pointerenter", enter, { passive: true });
        card.addEventListener("pointermove", move, { passive: true });
        card.addEventListener("pointerleave", reset);
        cleanups.push(() => { card.removeEventListener("pointerenter", enter); card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", reset); card.style.removeProperty("--glow-x"); card.style.removeProperty("--glow-y"); });
      });
      return () => cleanups.forEach((cleanup) => cleanup());
    }, root);

    let active = true;
    let refreshFrame = 0;
    let previousSize: { width: number; height: number } | undefined;
    const refresh = () => {
      if (!active || refreshFrame) return;
      refreshFrame = requestAnimationFrame(() => {
        refreshFrame = 0;
        if (active) ScrollTrigger.refresh();
      });
    };
    // Expanding a chapter moves every later trigger without changing the viewport.
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const { width, height } = entry.contentRect;
      const changed = previousSize && (width !== previousSize.width || height !== previousSize.height);
      previousSize = { width, height };
      if (changed) refresh();
    });
    observer.observe(root);
    void document.fonts.ready.then(refresh);
    return () => {
      active = false;
      observer.disconnect();
      cancelAnimationFrame(refreshFrame);
      media.revert();
    };
  }, [ref, arrived]);
}
