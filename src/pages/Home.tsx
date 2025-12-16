/* pages/index.tsx ------------------------------------------------------- */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CurvedLoop from "../components/CurvedLoop";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-bg", { scale: 1.2 });
      gsap.set(".hero-content", { y: 50, opacity: 0 });

      const heroTl = gsap.timeline({
        delay: 0.1,
      });

      heroTl
        .to(
          ".hero-bg",
          {
            scale: 1,
            duration: 1.6,
            ease: "power2.out",
          },
          0
        )
        .to(
          ".hero-content",
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          0.2
        );

      // About section animations
      gsap.from(".about-img-container", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".about-content > *", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Projects
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Skills
      gsap.utils.toArray<HTMLElement>(".skill-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 0.45,
          ease: "power2.out",
        });
      });

      // Works
      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-neutral-200 selection:bg-primary-500 selection:text-white"
    >
      {/* ---------------- Hero – full viewport ---------------- */}
      <section className="hero relative flex items-center justify-center h-screen overflow-hidden">
        {/* Background image - ✅ VISIBLE by default (no opacity-0) */}
        <div className="hero-bg absolute inset-0 w-full h-full">
          <img
            src="/assets/Images/Backgrounds/Home.png"
            alt="Hero background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Hero text - ✅ GSAP handles opacity animation */}
        <div className="hero-content relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-hk mb-6 text-white">
            Syed Saad Ahmed
          </h1>
          <p className="text-2xl md:text-4xl max-w-3xl mx-auto font-light text-neutral-300 leading-normal">
            Freelance designer & <br />
            developer pushing bold and tailored websites
            <img
              src="/assets/Images/Characters/grub.gif"
              alt="decorative"
              className="inline-block ml-2"
              style={{
                height: "2em",
                width: "auto",
                verticalAlign: "middle",
              }}
            />
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* ---------------- About (Redesigned) ---------------- */}
      <section
        id="about"
        className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url('/assets/Images/Backgrounds/HK -  (4).png')`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl w-full flex flex-col items-center gap-16">
          <h2 className="text-5xl md:text-6xl font-bold font-hk text-white mb-12 text-center">
            About <span className="text-primary-500">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Image Side */}
            <div className="about-img-container md:w-1/2 relative group">
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl border border-neutral-800
                h-[420px] sm:h-[520px] md:h-[700px]"
              >
                <img
                  src="/assets/Images/Self.jpeg"
                  alt="Syed Saad Ahmed"
                  className="w-full h-full object-cover transform transition-all duration-700 ease-in-out
           md:grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay"></div>
              </div>
              {/* Decorative Frame */}
              <div
                className="absolute -inset-2 md:-inset-4 border-2 border-neutral-800 rounded-2xl -z-10
             group-hover:border-primary-500/30 transition-colors duration-500"
              ></div>
            </div>

            {/* Text Side */}
            <div className="about-content md:w-1/2 space-y-8">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Hello, I'm Saad
              </h3>

              <div className="space-y-6 text-xl text-neutral-400 font-dmr leading-relaxed">
                <p>
                  Based in Mysore, I build{" "}
                  <span className="text-white">full-stack apps</span> by day and
                  wonder why we haven't colonized Mars by night (waiting on that
                  Elon call). Until then, I channel my existential energy into
                  crafting digital experiences that are faster, cleaner, and
                  smarter than necessary.
                </p>
                <p>
                  I’ve tamed React, Blender, AWS, and Docker—basically,{" "}
                  <span className="text-white">
                    anything that runs on the internet
                  </span>
                  . I build solutions for everything from high-traffic NGO sites
                  to healthcare systems that absolutely cannot break (no
                  pressure), designed to survive anything short of a small
                  asteroid.
                </p>
                <p>
                  When I'm not refactoring code I wrote at 2am, you’ll find me
                  gaming, doodling UI ideas that definitely deserve a design
                  award someday, or automating workflows just to avoid doing the
                  same task twice.
                  <br />{" "}
                  <span className="text-white">
                    Efficient? Yes. Overkill? Always.
                  </span>
                </p>
              </div>

              {/* <a
                href="/assets/Syed_Saad_Ahmed_Resume.pdf"
                download
                className="relative z-20 inline-block px-6 py-3 bg-primary-500 text-white font-bold rounded-lg shadow-lg hover:bg-primary-400 transition-all duration-300"
              >
                Download Resume
              </a> */}

              <a
                href="/about"
                className="pl-7 group inline-flex items-center gap-3 text-white font-bold tracking-wide hover:text-primary-400 transition-colors"
              >
                <span className="border-b-2 border-primary-500 pb-1 group-hover:border-white transition-colors">
                  Read My Full Story
                </span>

                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <img
                  src="/assets/Images/Characters/hornet.gif"
                  className=" h-30 w-auto "
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Projects ---------------- */}
      <section
        id="projects"
        className="relative w-full py-24 px-6 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url('/assets/Images/Backgrounds/HK -  (8).png')`,
          }}
        ></div>
        {/* <div className="absolute inset-0 bg-linear-to-b from-black via-black/90 to-black/80 pointer-events-none"></div> */}

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Selected Works
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-32 mb-16 ">
            {[
              {
                id: 1,
                title: "Cohorts App",
                role: "Full Stack Developer",
                year: "2025",
                description:
                  "A community-driven platform where creators can run cohorts, manage members, share content, and deliver structured courses — all in one place. Designed for seamless engagement and smooth content consumption.",

                challenge:
                  "Integrating a full course system inside the community while keeping the UI intuitive, the content structure scalable, and ensuring permissions worked correctly for different member roles.",

                solution:
                  "Designed a modular course architecture with lessons, modules, and progress tracking. Implemented secure role-based access so only eligible members could view course material. Built a smooth content delivery flow using React, optimized Supabase queries for fast loading, and added real-time updates for completion status and new lesson releases.",

                tech: ["React", "Supabase", "WebSockets", "Tailwind", "WebRTC"],
                image: "/assets/Images/Cohorts.png",
                link: "https://www.cohortsapp.com/",
              },

              {
                id: 2,
                title: "Shifa Foundation NGO",
                role: "Full Stack Web Developer",
                year: "2024",
                description:
                  "A complete rebuild of the Shifa Foundation's digital presence. Focused on performance, security, and a seamless donation flow.",
                challenge:
                  "Optimizing load times and securing payment gateways for a high-traffic non-profit platform.",
                solution:
                  "Built with React for speed and integrated secure payment processing, achieving a 90+ Lighthouse score.",
                tech: ["React", "Node.js", "Razorpay", "Tailwind", "AWS"],
                image: "/assets/Images/ShifaFoundation.png",
                link: "https://shifafoundation.net/",
              },
            ].map((project, index) => (
              <article
                key={project.id}
                className={`project-card flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Dark overlay that disappears on hover */}
                  <div className="absolute inset-0 backdrop-blur-xs bg-black/80 opacity-70 group-hover:opacity-0 transition-all duration-500 ease-out"></div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm font-gm text-primary-400 tracking-wider uppercase">
                    <span>{project.role}</span>
                    <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className="text-4xl font-bold font-hk text-white mb-6 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h2>

                  <div className="space-y-6 text-neutral-300 font-dm leading-relaxed">
                    <p>{project.description}</p>

                    <div className="pl-4 border-l-2 border-primary-500/30">
                      <h4 className="text-white font-semibold mb-1 text-sm uppercase tracking-wide">
                        The Challenge
                      </h4>
                      <p className="text-sm text-neutral-400">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-accent-500/30">
                      <h4 className="text-white font-semibold mb-1 text-sm uppercase tracking-wide">
                        The Solution
                      </h4>
                      <p className="text-sm text-neutral-400">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-gm rounded-full border border-neutral-700 bg-neutral-900/50 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex gap-6">
                    <a
                      href={project.link}
                      className="px-8 py-3 border border-neutral-700 hover:border-white text-neutral-300 hover:text-white font-bold rounded-lg transition-all hover:-translate-y-0.5"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/projects"
              className="inline-block px-8 py-3 rounded-full border border-neutral-700 text-neutral-300 hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- Skills & Expertise ---------------- */}
      <section
        id="skills"
        className="relative w-full py-28 px-6 overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url('/assets/Images/Backgrounds/HK -  (6).png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/95 pointer-events-none"></div>

        {/* floating particles */}
        {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 bg-primary-400/20 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></span>
          ))}
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary-400 mb-20 text-center drop-shadow-xl tracking-wide">
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                category: "Frontend Development",
                icon: "/assets/Images/Characters/Character (9).png",
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
                cardBgImage: "/assets/Images/Backgrounds/HK -  (1).png",
              },
              {
                category: "Backend Development",
                icon: "/assets/Images/Characters/Character (12).png",
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
                cardBgImage: "/assets/Images/Backgrounds/HK -  (2).png",
              },
              {
                category: "DevOps & Cloud",
                icon: "/assets/Images/Characters/Character (3).png",
                skills: [
                  "Docker",
                  "GitHub Actions",
                  "CI/CD",
                  "AWS EC2",
                  "Render",
                  "Railway",
                ],
                colorGlow: "group-hover:shadow-emerald-500/30",
                cardBgImage: "/assets/Images/Backgrounds/HK -  (3).png",
              },
              {
                category: "Tools & Frameworks",
                icon: "/assets/Images/Characters/Character (4).png",
                skills: ["Next.js", "Vite", "Blender", "Git", "VS Code"],
                colorGlow: "group-hover:shadow-orange-500/30",
                cardBgImage: "/assets/Images/Backgrounds/HK -  (4).png",
              },
              {
                category: "Soft Skills",
                icon: "/assets/Images/Characters/Character (5).png",
                skills: [
                  "Problem Solving",
                  "Creative Thinking",
                  "Teamwork",
                  "Communication",
                ],
                colorGlow: "group-hover:shadow-purple-500/30",
                cardBgImage: "/assets/Images/Backgrounds/HK -  (5).png",
              },
              {
                category: "Core Concepts",
                icon: "/assets/Images/Characters/Character (6).png",
                skills: [
                  "OOP",
                  "Data Structures",
                  "Algorithms",
                  "System Design",
                ],
                colorGlow: "group-hover:shadow-pink-500/30",
                cardBgImage: "/assets/Images/Backgrounds/HK -  (6).png",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group relative rounded-3xl p-10 flex flex-col items-center text-center
          bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg
          transition-all duration-700 hover:-translate-y-3 hover:border-white/20 hover:bg-black/60`}
                style={{
                  backgroundImage: `url('${item.cardBgImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
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
                  <img
                    src={item.icon}
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

      <div className="relative w-full overflow-visible">
        <CurvedLoop
          marqueeText=" ✦ BOLD IDEAS ✦ CLEAN CODE ✦ STRONG RESULTS"
          speed={3}
          curveAmount={0}
          direction="left"
          interactive={false}
          className="custom-text-style"
        />
      </div>

      {/* ---------------- Other Works ---------------- */}
      <section
        id="services"
        className="relative w-full py-28 px-6 overflow-hidden"
      >
        {/* Background */}
        {/* <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url('/assets/Images/Backgrounds/HK - (8).png')`,
          }}
        ></div> */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary-400 mb-6 drop-shadow-xl">
            What I Offer
          </h2>
          <p className="text-neutral-400 text-lg mb-20 max-w-2xl mx-auto font-gm">
            I combine creativity, technology, and strategy to deliver
            high-quality experiences. Here’s a glimpse of what I can do for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Design",
                description:
                  "Crafting visually stunning, user-friendly designs for web, mobile, and branding projects. From concept to execution, aesthetics meet function.",
                icon: "/assets/Images/Characters/grub.gif",
                color: "from-blue-500/40 to-blue-400/10",
              },
              {
                title: "Development",
                description:
                  "Building robust, scalable, and responsive web applications using modern technologies like React, Next.js, Node.js, and more.",
                icon: "/assets/Images/Characters/ghost.gif",
                color: "from-green-500/40 to-green-400/10",
              },
              {
                title: "Creative Strategy",
                description:
                  "Turning ideas into action. I help plan, consult, and strategize projects, ensuring your vision aligns with user needs and goals.",
                icon: "/assets/Images/Characters/silksongflew.gif",
                color: "from-purple-500/40 to-purple-400/10",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group relative rounded-3xl p-10 flex flex-col items-center text-center
          bg-black/50 backdrop-blur-xl border border-white/10 shadow-xl
          hover:shadow-2xl hover:-translate-y-3 transition-all duration-700`}
              >
                {/* background holo glow */}
                <div
                  className={`absolute -inset-1 rounded-3xl opacity-0 blur-2xl bg-gradient-to-br ${item.color} group-hover:opacity-20 transition-all duration-700 pointer-events-none`}
                ></div>

                {/* icon circle */}
                <div
                  className="relative mb-6 w-28 h-28 rounded-full flex items-center justify-center
            bg-black/70 backdrop-blur-lg shadow-[0_0_12px_rgba(255,255,255,0.08)]
            transition-all duration-700 group-hover:scale-110"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 h-16 object-contain drop-shadow-lg"
                  />
                </div>

                {/* title */}
                <h3 className="text-2xl font-bold  text-white mb-4 group-hover:text-primary-300 transition-colors">
                  {item.title}
                </h3>

                {/* description */}
                <p className="text-neutral-400 text-sm mb-6 font-dm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section
        id="contact"
        className="relative min-h-screen w-full py-24 px-6 flex items-center justify-center"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-100"
          style={{
            backgroundImage: `url('/assets/Images/Backgrounds/HK -  (4).png')`,
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center backdrop-blur-xs rounded-lg p-6 border-2 border-neutral-900 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-400 mb-8 drop-shadow-lg">
            Let’s work together{" "}
          </h2>

          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <a
            href="/contact"
            className="inline-block px-12 py-4 border-2 border-primary-500 text-primary-400 font-bold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(var(--primary-500),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary-500),0.6)]"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
