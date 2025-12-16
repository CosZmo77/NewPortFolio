/* components/Header.tsx */
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About Me", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Contact Me", to: "/contact" },
];

/* ---------- Active SVG Icon ---------- */
const ActiveIcon = () => (
  <span className="inline-block align-middle ml-2 -translate-y-[0.04em] active-nav-icon">
    <img
      src="/assets/Images/Characters/hollow-knight-avatar.svg"
      alt="active"
      className="inline-block"
      style={{ height: "2em", width: "auto" }}
    />
  </span>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const location = useLocation();

  /* ---------- Mobile Drawer Animation ---------- */
  useEffect(() => {
    if (!drawerRef.current) return;

    if (isOpen) {
      gsap.set(drawerRef.current, { display: "flex" });
      gsap.fromTo(
        drawerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        linksRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(drawerRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(drawerRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  /* ---------- Active Icon Pop Animation ---------- */
  useEffect(() => {
    gsap.fromTo(
      ".active-nav-icon",
      { scale: 0.6, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(2)" }
    );
  }, [location.pathname]);

  return (
    <header className="absolute inset-x-0 top-0 bg-transparent text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="/assets/Images/LogoWhite.png"
              alt="Logo"
              className="h-20 w-40 md:h-20 md:w-35"
            />
          </Link>
        </div>

        {/* ---------- Desktop Navigation ---------- */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center transition-colors hover:text-primary-300 ${
                  isActive ? "text-primary-400" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>
                  {isActive && <ActiveIcon />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* ---------- Mobile Fullscreen Drawer ---------- */}
      <div
        ref={drawerRef}
        className="fixed inset-0 z-40 hidden flex-col items-center justify-center bg-black"
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Centered Links */}
        <div className="flex flex-col items-center space-y-6 text-2xl font-bold">
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 transition-colors ${
                  isActive ? "text-primary-400" : "text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>
                  {isActive && <ActiveIcon />}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
