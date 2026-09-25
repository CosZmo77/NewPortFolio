import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import JourneyLink from "./JourneyLink";


const navItems = [
  { name: "Home", to: "surface" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Services", to: "services" },
];
const ActiveIcon = () => <img src="/assets/Images/Characters/hollow-knight-avatar.svg" alt="" className="nav-knight" width="17" height="22" />;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const activeLevel = location.pathname === "/" ? "surface" : location.pathname.slice(1);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = previous; dialog.close(); };
    }
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const close = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  const closeMenu = () => { setIsOpen(false); buttonRef.current?.focus(); };
  return (
    <header className={`site-header ${location.pathname === "/" ? "header-home" : "header-inner"}`}>
      <div className="header-shell">
        <JourneyLink className="brand" to="surface" aria-label="Saad Design home"><img src="/assets/optimized/logo-white.webp" alt="Saad Design" width="142" height="80" decoding="async" /></JourneyLink>
        <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(item => <JourneyLink key={item.to} to={item.to} aria-current={activeLevel === item.to ? "page" : undefined}><span>{item.name}</span>{activeLevel === item.to && <ActiveIcon />}</JourneyLink>)}</nav>
        <JourneyLink className="header-contact" to="contact-letter" contact>Let’s talk <span aria-hidden="true">↓</span></JourneyLink>
        <button ref={buttonRef} className="menu-toggle" onClick={() => setIsOpen(true)} aria-label="Open navigation" aria-expanded={isOpen} aria-controls="mobile-menu"><span /><span /></button>
      </div>
      <dialog ref={dialogRef} id="mobile-menu" className="mobile-dialog" aria-label="Navigation" onCancel={closeMenu} onClose={() => setIsOpen(false)}>
        <button className="menu-close" onClick={closeMenu} aria-label="Close navigation">Close <span aria-hidden="true">×</span></button>
        <p className="chapter-label">CHOOSE YOUR NEXT CHAPTER</p>
        <nav aria-label="Mobile navigation">{[...navItems, { name: "Let’s talk", to: "contact-letter" }].map((item, i) => <JourneyLink key={item.to} to={item.to} contact={item.to === "contact-letter"} onClick={closeMenu} aria-current={activeLevel === item.to ? "page" : undefined}><span className="menu-number">0{i + 1}</span>{item.name}<span aria-hidden="true">↓</span></JourneyLink>)}</nav>
        <p className="menu-signoff">A curious mind. A creative soul.</p>
      </dialog>
    </header>
  );
}
