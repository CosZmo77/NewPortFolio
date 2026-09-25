import { useArrivalReady } from "../hooks/ArrivalContext";
import LevelBackdrop from "../components/LevelBackdrop";
import { useLayoutEffect, useRef } from "react";
import ContactForm from "../components/ContactForm";
import { gsap } from "gsap";
import { useSearchParams } from "react-router-dom";
import "../styles/contact.css";

/* ---------- Icons ---------- */
const EmailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24.636 18.777c-6.75 0-11.069 1.765-11.069 1.765s-3.61-2.433-3.483-5.327s3.61-5.884 3.595-6.44s-1.575-.255-1.639-1.098s1.988-2.513 1.161-3.101s-7.283 2.163-7.283 11.227c0 7.387 5.01 9.113 5.534 10.321c.312.718-.003 8.32 2.83 13.215c2.275 3.928 7.183 4.281 10.449 4.135c4.977-.222 9.796-1.463 11.02-6.154s.239-9.987.716-11.005s6.2-5.42 5.566-11.498c-.715-6.87-5.8-11.38-7.506-9.86c-.731.653 1.352 2.18 1.256 2.99s-1.176.16-1.351 1.002s3.578 3.515 3.212 6.663c-.366 3.15-2.036 4.612-2.862 4.66s-5.741-1.495-10.146-1.495"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.207 31.998c2.735-.462 4.122 2.256 4.132 4.403s-1.084 3.178-2.765 3.189s-3.515-1.497-3.634-4.284c-.12-2.788 1.367-3.156 2.267-3.308m13.008-.133c-2.735-.461-4.122 2.256-4.133 4.404s1.085 3.178 2.766 3.189s3.514-1.497 3.634-4.285s-1.367-3.156-2.267-3.308"
    />
  </svg>
);
const LocationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23.955 30.007s-11.038-10.207.252-12.014c0 0 10.673 1.405-.252 12.014" />
      <path d="M14.763 4.784s25.583 2.029 27.943 29.61M4.92 14.261S5.911 39.5 34.162 42.94" />
      <path d="M4.814 33.535s.06-24.951 28.112-28.916M14.28 43.094s25.87-.627 28.684-28.714" />
    </g>
    <circle
      cx="24"
      cy="24"
      r="21.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Flourish = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="212" height="28" viewBox="0 0 212 28" fill="none" aria-hidden="true">
    <path d="M1 14h65c17 0 21-9 26-9-4 9-1 14 14 20 15-6 18-11 14-20 5 0 9 9 26 9h65M106 2v15M79 14l-5 5-5-5 5-5 5 5Zm64 0-5 5-5-5 5-5 5 5Z" stroke="currentColor" strokeWidth=".8" />
  </svg>
);

const Contact = () => {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service") ?? "";
  const containerRef = useRef<HTMLDivElement>(null);
  const arrived = useArrivalReady();
  useLayoutEffect(() => {
    if (!arrived) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".contact-intro > *, .contact-letter", {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, containerRef);

    return () => {
      media.revert();
    };
  }, [arrived]);

  return (
    <div ref={containerRef} className="contact-realm level-awake">
      <LevelBackdrop scene="bg-17" tone="green" effect="lanterns" priority />
      <div className="contact-journey-label" aria-hidden="true"><span /> THE QUIET CLEARING <span /></div>
      <div className="contact-layout">
        <div className="contact-intro">
          <div className="contact-sigil" aria-hidden="true">
            <span className="contact-sigil-orbit" />
            <span className="contact-sigil-orbit contact-sigil-orbit-inner" />
            {EmailIcon}
            <i /><i /><i />
          </div>
          <p className="contact-eyebrow">HAVE SOMETHING IN MIND?</p>
          <h1>Every good story<br />starts with<br /><em>a hello.</em></h1>
          <p className="contact-opening">A rough idea, a wild ambition, or a website that needs a little more soul. Tell me what you&apos;re thinking. We&apos;ll take it from there.</p>
          <div className="contact-details">
            <a href="mailto:syedsaadahmed77@gmail.com" className="contact-detail contact-email">
              <span className="contact-detail-icon">{EmailIcon}</span>
              <span><span className="contact-detail-label">THE DIRECT ROUTE</span><span className="contact-detail-value">syedsaadahmed77@gmail.com</span></span>
              <span className="contact-link-arrow" aria-hidden="true">↗</span>
            </a>
            <div className="contact-detail">
              <span className="contact-detail-icon">{LocationIcon}</span>
              <span><span className="contact-detail-label">CREATING FROM</span><span className="contact-detail-value">Mysore, Karnataka, India</span></span>
            </div>
          </div>
        </div>

        <ContactForm initialService={requestedService} />
      </div>
      <div className="contact-bottom-mark" aria-hidden="true"><Flourish /><span>THE END OF THE PATH. THE START OF SOMETHING.</span></div>
    </div>
  );
};

export default Contact;