import HeroLanding from "../components/HeroLanding";
import ProjectCollection from "../components/ProjectCollection";
import { useRef } from "react";
import CurvedLoop from "../components/CurvedLoop";
import JourneyLink from "../components/JourneyLink";

import "../styles/journey.css";
import LevelBackdrop from "../components/LevelBackdrop";
import DepthMap from "../components/DepthMap";
import useDescent from "../hooks/useDescent";
import ServicesGuild from "../components/ServicesGuild";
import GamePortrait from "../components/GamePortrait";


function ChapterExit({ to, children }: { to: string; children: React.ReactNode }) {
  return <JourneyLink local to={to} className="chapter-exit"><small>The path continues</small><span>{children}</span><svg viewBox="0 0 18 28" fill="none" aria-hidden="true"><path d="M9 1v23M3 18l6 7 6-7M6 5l3-3 3 3" stroke="currentColor" /></svg></JourneyLink>;
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  useDescent(containerRef);

  return (
    <div
      ref={containerRef}
      className="hollow-world relative min-h-screen bg-black text-neutral-200 selection:bg-primary-500 selection:text-white"
    >
      <DepthMap />
      <HeroLanding />

      {/* ---------------- About ---------------- */}
      <section
        id="about"
        data-level="1"
        className="world-level relative w-full min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden"
      >
        <LevelBackdrop scene="bg-04" tone="green" effect="fireflies" />

        <div className="relative z-10 max-w-7xl w-full flex flex-col items-center gap-16">
          <h2 className="text-5xl md:text-6xl font-bold font-hk text-white mb-12 text-center">
            About <span className="text-primary-500">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="about-img-container md:w-1/2 relative">
              <GamePortrait enterAbout />
            </div>

            {/* Text Side */}
            <div className="about-content md:w-1/2 space-y-8">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Hello, I'm Saad
              </h3>

              <div className="space-y-6 text-xl text-neutral-300 font-dmr leading-relaxed">
                <p>
                  I’m Saad, a designer and developer in Mysore. I run my own
                  creative studio, so I get to work on both sides of a website:
                  how it feels, and how it actually works.
                </p>
                <p>
                  I’ve built community platforms, healthcare tools, and sites
                  for NGOs. My favourite part is when a rough idea finally becomes
                  something you can click, use, and show someone.
                </p>
                <p>
                  Alongside the studio, I’m a Project Coordinator &amp; Software Developer
                  at Xentric Integrated Solutions in Bangalore, working across telecom
                  deployment data, team coordination, and platform development.
                </p>
                <p>
                  And yes, this place looks like Hollow Knight on purpose.
                  I love that feeling of finding a new path in a familiar world.
                  This portfolio is my excuse to stay there a little longer.
                </p>
              </div>


            </div>
          </div>
          <ChapterExit to="projects">Discover the work</ChapterExit>
        </div>
      </section>

      {/* ---------------- Projects ---------------- */}
      <section
        id="projects"
        data-level="2"
        className="world-level relative w-full py-24 px-6 overflow-hidden"
      >
        <LevelBackdrop scene="bg-08" tone="blue" effect="rain" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Selected Works
              </h2>
            </div>
          </div>

          <ProjectCollection featured />

          <JourneyLink to="projects" className="kingdom-link">Enter the complete archive <span aria-hidden="true">↗</span></JourneyLink>
          <ChapterExit to="skills">Into the arsenal</ChapterExit>
        </div>
      </section>

      {/* ---------------- Skills & Expertise ---------------- */}
      <section
        id="skills"
        data-level="3"
        className="world-level relative w-full py-28 px-6 overflow-hidden"
      >
        <LevelBackdrop scene="bg-06" tone="violet" effect="crystals" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary-400 mb-20 text-center drop-shadow-xl tracking-wide">
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                category: "Frontend Development",
                icon: "/assets/optimized/character-09.webp",
                skills: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "AngularJS",
                  "Tailwind",
                  "Three.js",
                ],
                colorGlow: "group-hover:shadow-blue-500/30",
                cardBgImage: "/assets/optimized/bg-01.webp",
              },
              {
                category: "Backend Development",
                icon: "/assets/optimized/character-12.webp",
                skills: [
                  "Node.js",
                  "PHP",
                  "REST APIs",
                  "Firebase",
                  "Supabase",
                  "SQL",
                  "MySQL",
                ],
                colorGlow: "group-hover:shadow-cyan-500/30",
                cardBgImage: "/assets/optimized/bg-02.webp",
              },
              {
                category: "DevOps & Cloud",
                icon: "/assets/optimized/character-03.webp",
                skills: [
                  "Docker",
                  "GitHub Actions",
                  "CI/CD",
                  "AWS EC2",
                  "Render",
                  "Railway",
                ],
                colorGlow: "group-hover:shadow-emerald-500/30",
                cardBgImage: "/assets/optimized/bg-03.webp",
              },
              {
                category: "Tools & Frameworks",
                icon: "/assets/optimized/character-04.webp",
                skills: ["Next.js", "Vite", "Blender", "Git", "VS Code"],
                colorGlow: "group-hover:shadow-orange-500/30",
                cardBgImage: "/assets/optimized/bg-04.webp",
              },
              {
                category: "Soft Skills",
                icon: "/assets/optimized/character-05.webp",
                skills: [
                  "Problem Solving",
                  "Creative Thinking",
                  "Teamwork",
                  "Communication",
                ],
                colorGlow: "group-hover:shadow-purple-500/30",
                cardBgImage: "/assets/optimized/bg-05.webp",
              },
              {
                category: "Core Concepts",
                icon: "/assets/optimized/character-06.webp",
                skills: [
                  "OOP",
                  "Data Structures",
                  "Algorithms",
                  "System Design",
                ],
                colorGlow: "group-hover:shadow-pink-500/30",
                cardBgImage: "/assets/optimized/bg-06.webp",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`charm-card group relative rounded-3xl p-10 flex flex-col items-center text-center
          bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg
          transition-all duration-700 hover:-translate-y-3 hover:border-white/20 hover:bg-black/60`}
              >
                <picture className="charm-scenery" aria-hidden="true">
                  <source media="(max-width: 767px)" srcSet={item.cardBgImage.replace(".webp", "-mobile.webp")} />
                  <img src={item.cardBgImage} alt="" width={960} height={540} loading="lazy" decoding="async" />
                </picture>
                {/* soft subtle halo */}
                <div
                  className={`absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition-all duration-700
            ${item.colorGlow}`}
                ></div>

                {/* holographic sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-3xl"></div>

                {/* icon circle with reduced glow */}
                <div
                  className={`relative mb-6 w-24 h-24 rounded-full
            flex items-center justify-center
            bg-black/70 backdrop-blur-lg shadow-[0_0_12px_rgba(255,255,255,0.08)]
            transition-all duration-700 group-hover:scale-105`}
                >
                  <img loading="lazy" decoding="async"
                    src={item.icon} width={96} height={96}
                    alt={item.category}
                    className="w-14 h-14 object-contain drop-shadow-lg"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary-300 transition-all duration-500">
                  {item.category}
                </h3>

                {/* skill chips */}
                <div className="flex flex-wrap justify-center gap-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/10
                text-white backdrop-blur-sm transition-all duration-500
                group-hover:bg-white/20 group-hover:border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="descent-marquee relative w-full overflow-hidden">
        <ChapterExit to="services">Enter the workshop</ChapterExit>
        <CurvedLoop
          marqueeText=" ✦ BOLD IDEAS ✦ CLEAN CODE ✦ STRONG RESULTS"
          speed={1}
          curveAmount={0}
          direction="left"
          interactive={false}
          className="custom-text-style"
        />
      </div>

      {/* ---------------- Other Works ---------------- */}
      <section
        id="services"
        data-level="4"
        className="world-level relative w-full py-28 px-6 overflow-hidden"
      >
        <LevelBackdrop scene="bg-02" tone="amber" effect="embers" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <ServicesGuild compact />
          <JourneyLink to="services" className="kingdom-link">Explore the workshop <span aria-hidden="true">↗</span></JourneyLink>
          <ChapterExit to="contact">A new beginning</ChapterExit>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section
        id="contact"
        data-level="5"
        className="world-level relative min-h-screen w-full py-24 px-6 flex items-center justify-center"
      >
        <LevelBackdrop scene="bg-04" tone="blue" effect="lanterns" />

        <div className="quest-invitation relative z-10">
          <p className="quest-eyebrow">ONE MORE PATH TO EXPLORE</p>
          <div className="quest-emblem" aria-hidden="true"><span /><img src="/assets/Images/Characters/hollow-knight-avatar.svg" alt="" width="42" height="56" /><span /></div>
          <h2>What shall we<br /><span>make next?</span></h2>
          <p>A half-formed idea is a perfectly good place to start.<br />Tell me what you have in mind.</p>
          <JourneyLink to="contact-letter" contact className="kingdom-link"><span className="kingdom-flourish" aria-hidden="true">✧</span> Start a conversation <span className="kingdom-arrow" aria-hidden="true">↓</span></JourneyLink>
          <span className="quest-small-note">A real conversation. With the person who’ll build it.</span>

        </div>
      </section>
    </div>
  );
}
