import type { AnchorHTMLAttributes } from "react";
import { flushSync } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { beginJourney, stopJourney } from "../lib/journey";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { to: string; local?: boolean; contact?: boolean; service?: string };
const chapters: Record<string, () => Promise<unknown>> = {
  "/about": () => import("../pages/About"),
  "/projects": () => import("../pages/Projects"),
  "/services": () => import("../pages/Services"),
  "/contact": () => import("../pages/Contact"),
};
let navigationId = 0;

/** Chapter doors navigate; explicitly local links descend through the home world. */
export default function JourneyLink({ to, local = false, contact, service, onClick, children, ...props }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const route = to === "surface" ? "/" : contact || to === "contact-letter" ? "/contact" : `/${to}`;
  const href = local ? `/#${to}` : `${route}${service ? `?service=${encodeURIComponent(service)}` : ""}`;
  return <a {...props} href={href} onClick={async event => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || props.target === "_blank") return;
    event.preventDefault();
    const requestId = ++navigationId;
    stopJourney();
    if (local) {
      if (location.pathname === "/") beginJourney({ target: to });
      else navigate("/", { state: { journey: { target: to } } });
      return;
    }
    if (`${location.pathname}${location.search}` === href) {
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      return;
    }
    // Keep the current scene visible while its destination chunk is prepared.
    try { await chapters[route]?.(); } catch { window.location.assign(href); return; }
    if (requestId !== navigationId) return;
    const enter = () => {
      flushSync(() => navigate(href));
      document.getElementById("main-content")?.focus({ preventScroll: true });
    };
    if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(enter);
    } else enter();
  }}>{children}</a>;
}
