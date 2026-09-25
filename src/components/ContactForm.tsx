import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import "../styles/contact.css";
import "../styles/contact-form.css";

const ACCESS_KEY = "4c607e09-8a9d-4a9f-81e5-b778734afe25";

const projectTypes = ["Design", "Development", "Something else"];

const Flourish = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="212" height="28" viewBox="0 0 212 28" fill="none" aria-hidden="true">
    <path d="M1 14h65c17 0 21-9 26-9-4 9-1 14 14 20 15-6 18-11 14-20 5 0 9 9 26 9h65M106 2v15M79 14l-5 5-5-5 5-5 5 5Zm64 0-5 5-5-5 5-5 5 5Z" stroke="currentColor" strokeWidth=".8" />
  </svg>
);

type ContactFormProps = {
  initialService?: string;
  embedded?: boolean;
  service?: string;
  onServiceChange?: (service: string) => void;
};

export default function ContactForm({ initialService = "", embedded = false, service, onServiceChange }: ContactFormProps) {
  const defaultService = projectTypes.includes(initialService) ? initialService : projectTypes[0];
  const [ownService, setOwnService] = useState(defaultService);
  const selectedService = service ?? ownService;
  const fieldId = useId();
  const Heading = embedded ? "h3" : "h2";
  const submittingRef = useRef(false);
  const requestRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      requestRef.current?.abort();
    };
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;

    // Retain the form before awaiting: React clears currentTarget after the event.
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    submittingRef.current = true;
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Message delivery failed");
      if (mountedRef.current) {
        setStatus("sent");
        form.reset();
      }
    } catch {
      if (mountedRef.current) setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      submittingRef.current = false;
      requestRef.current = null;
    }
  };


  return (
    <div className={`contact-letter${embedded ? " contact-letter-embedded" : ""}`}>
      <span className="contact-corner contact-corner-tl" aria-hidden="true" />
      <span className="contact-corner contact-corner-tr" aria-hidden="true" />
      <span className="contact-corner contact-corner-bl" aria-hidden="true" />
      <span className="contact-corner contact-corner-br" aria-hidden="true" />
      <div className="contact-letter-heading">
        <Flourish />
        <p>A NOTE TO SAAD</p>
        <Heading>Let&apos;s make it happen.</Heading>
      </div>
      <form onSubmit={onSubmit} aria-busy={status === "sending"}>
        <input type="hidden" name="subject" value="A new project from the portfolio" />
        <input type="checkbox" name="botcheck" className="contact-honeypot" tabIndex={-1} aria-hidden="true" />
        <fieldset className="contact-project-types" disabled={status === "sending"}>
          <legend>What can I help with?</legend>
          <div className="contact-options">
            {projectTypes.map((type) => (
              <label className="contact-option" key={type}>
                <input type="radio" name="project_type" value={type} checked={type === selectedService} onChange={() => (onServiceChange ?? setOwnService)(type)} />
                <span><i aria-hidden="true" />{type}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="contact-fields-row">
          <div className="contact-field">
            <label htmlFor={`${fieldId}-name`}><span>01</span> Your name</label>
            <input id={`${fieldId}-name`} type="text" name="name" autoComplete="name" placeholder="What should I call you?" required disabled={status === "sending"} />
          </div>
          <div className="contact-field">
            <label htmlFor={`${fieldId}-email`}><span>02</span> Your email</label>
            <input id={`${fieldId}-email`} type="email" name="email" autoComplete="email" placeholder="Where can I reach you?" required disabled={status === "sending"} />
          </div>
        </div>
        <div className="contact-field contact-message-field">
          <label htmlFor={`${fieldId}-message`}><span>03</span> The idea</label>
          <textarea id={`${fieldId}-message`} name="message" rows={3} placeholder="What are you excited to build? A few lines is plenty." required disabled={status === "sending"} />
        </div>
        <div className="contact-send-row">
          <p>Rough ideas welcome.<br /> No perfect brief needed.</p>
          <button type="submit" disabled={status === "sending"} className="contact-send">
            <svg width="20" height="36" viewBox="0 0 20 36" fill="none" aria-hidden="true"><path d="M18 1C2 11 2 25 18 35M14 8 4 18l10 10M7 18H1" stroke="currentColor" /></svg>
            <span>{status === "sending" ? "Sending your note…" : "Send your note"}<span className="contact-send-trail" aria-hidden="true">✦</span></span>
            <svg width="20" height="36" viewBox="0 0 20 36" fill="none" aria-hidden="true"><path d="M2 1c16 10 16 24 0 34M6 8l10 10L6 28m7-10h6" stroke="currentColor" /></svg>
          </button>
        </div>
        <div role="status" aria-live="polite" className={`contact-status contact-status-${status}`}>
          {status === "sent" && <p><span aria-hidden="true">✦</span> Your note made it. Thanks for telling me about your idea!</p>}
          {status === "error" && <p>Your note couldn&apos;t get through. Try again, or <a href="mailto:syedsaadahmed77@gmail.com">email me directly</a>.</p>}
        </div>
      </form>
      <div className="contact-letter-signoff" aria-hidden="true"><span /> MADE OF LITTLE BEGINNINGS <span /></div>
    </div>
  );
}
