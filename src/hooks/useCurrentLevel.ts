import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useCurrentLevel() {
  const { pathname } = useLocation();
  const [level, setLevel] = useState("surface");
  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setLevel(entry.target.id);
    }, { rootMargin: "-42% 0px -48% 0px" });
    document.querySelectorAll("[data-level]").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
  return pathname === "/" ? level : pathname.slice(1);
}
