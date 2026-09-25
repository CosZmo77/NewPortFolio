import { useArrivalReady } from "../hooks/ArrivalContext";
import LevelBackdrop from "../components/LevelBackdrop";
import GamePortrait from "../components/GamePortrait";
import CurrentExperience from "../components/CurrentExperience";
import PreviousExperience from "../components/PreviousExperience";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const arrived = useArrivalReady();
  useLayoutEffect(() => {
    if (!arrived) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      // Header Animation
      gsap.from(".about-header", {
        y: 32,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
      });

      // Bio Section Animation
      gsap.from(".bio-content", {
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 80%",
          once: true,
        },
        x: -32,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".bio-image", {
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 80%",
          once: true,
        },
        x: 32,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Timeline Animation
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true,
          },
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => media.revert();
  }, [arrived]);

  return (
    <div
      ref={containerRef}
      className="py-20 relative bg-black text-neutral-200 selection:bg-primary-500 selection:text-white overflow-x-hidden"
    >
      {/* ================= ABOUT SECTION ================= */}
      <section className="relative min-h-screen">
        {/* Background */}
        <LevelBackdrop scene="bg-09" tone="green" effect="fireflies" priority />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="about-header text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold font-hk text-white mb-6">
              About <span className="text-primary-500">Me</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-dm">
              Designer, developer, and the person you’ll actually work with.
            </p>
          </div>

          {/* Bio Section */}
          <div className="bio-section flex flex-col md:flex-row items-center gap-16 mb-32">
            {/* Text */}
            <div className="bio-content md:w-1/2 space-y-6">
              <p className="text-[10px] tracking-[.2em] uppercase text-primary-300 font-gm">
                Mysore, India · Designer & developer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-hk leading-snug">
                I'm Syed Saad Ahmed.
                <br />
                <span className="text-accent-500">Call me Saad.</span>
              </h2>
              <div className="space-y-4 text-lg text-neutral-300 font-dm leading-relaxed">
                <p>
                  I run my own creative studio in Mysore. I design websites
                  and build the code behind them, so I'm usually moving between
                  how something looks and how it actually works. I like being
                  there for both parts.
                </p>
                <p>
                  My work has taken me through healthcare platforms, an NGO's
                  donation website, and tools that bring communities together.
                  Different projects, different problems. Sometimes the work
                  is a whole application; sometimes it's making one awkward
                  little interaction feel right.
                </p>
                <p>
                  These days, I’m also a Project Coordinator &amp; Software Developer
                  at Xentric Integrated Solutions in Bangalore. My work there connects
                  telecom deployment data, people in the field, and the software
                  they rely on.
                </p>
                <p>
                  And yes, I really love Hollow Knight. The quiet, the strange
                  little characters, the feeling that there's something further
                  down. I wanted my corner of the internet to feel a bit like
                  that. This is what happened.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="bio-image md:w-1/2 relative w-full max-w-[490px]">
              <GamePortrait portalTo="/" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="relative min-h-screen">
        <LevelBackdrop scene="bg-07" tone="blue" effect="souls" />
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="mx-0 md:mx-32">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3 font-hk">
              <span className="text-primary-500">01.</span> Experience & Key
              Projects
            </h3>

            <CurrentExperience />
            <PreviousExperience />
          </div>
        </div>
      </section>

      {/* ================= EDUCATION SECTION ================= */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-0 md:mx-32">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3 font-hk">
              <span className="text-accent-500">02.</span> Education
            </h3>
            <div className="space-y-12 border-l-2 border-neutral-800 pl-8 ml-4 text-left">
              {[
                {
                  degree: "Master of Computer Applications (MCA)",
                  school: "S.E.A College of Education, Bangalore",
                  period: "Graduated",
                  description: "Advanced studies in software engineering, computer science, and system design.",
                },
                {
                  degree: "Bachelor of Computer Applications (BCA)",
                  school: "Vidya Vikas First Grade College, Mysore",
                  period: "Graduated",
                  description: "Foundation in programming, databases, networking, and application development.",
                },
              ].map((edu, idx) => (
                <div key={idx} className="timeline-item relative">
                  <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-black bg-accent-500" />
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-accent-400 text-sm mb-4 font-gm">{edu.school} | {edu.period}</p>
                  <p className="text-neutral-300 leading-relaxed font-dm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
