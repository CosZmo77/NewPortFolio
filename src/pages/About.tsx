import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".about-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Bio Section Animation
      gsap.from(".bio-content", {
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".bio-image", {
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Timeline Animation
      const items = gsap.utils.toArray(".timeline-item");
      items.forEach((item: any, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="py-20 relative bg-black text-neutral-200 selection:bg-primary-500 selection:text-white overflow-x-hidden"
    >
      {/* ================= ABOUT SECTION ================= */}
      <section className="relative min-h-screen">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/Images/Backgrounds/HK -  (9).png')`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="about-header text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold font-hk text-white mb-6">
              About <span className="text-primary-500">Me</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-dm">
              Helping brands thrive in the digital world
            </p>
          </div>

          {/* Bio Section */}
          <div className="bio-section flex flex-col md:flex-row items-center gap-16 mb-32">
            {/* Text */}
            <div className="bio-content md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-hk">
                I'm <span className="text-accent-500">Syed Saad Ahmed</span>
                <br />
                Software Developer & Full-Stack Explorer
              </h2>
              <div className="space-y-4 text-lg text-neutral-300 font-dm leading-relaxed">
                <p>
                  Based in Mysore, I build{" "}
                  <span className="text-white">full-stack apps</span> by day and
                  wonder why we haven't colonized Mars by night (still waiting
                  on that Elon call). Until then, I channel my existential
                  energy into crafting digital experiences that are faster,
                  cleaner, and smarter than strictly necessary—basically, doing
                  a lot of things nobody asked for, but everyone secretly
                  appreciates.
                </p>
                <p>
                  I’ve tamed{" "}
                  <span className="text-white font-semibold">
                    React, Blender, AWS, and Docker
                  </span>
                  — anything that runs on the internet, really. I’ve built
                  solutions for high-traffic NGO sites, complex healthcare
                  systems that must never fail, and yes, a few side projects
                  that are just ridiculous enough to be fun.
                </p>
                <p>
                  When I'm not refactoring code I wrote at 2 a.m., you'll find
                  me gaming, doodling UI ideas that probably deserve awards (or
                  at least applause), or automating workflows just to avoid
                  doing the same task twice.
                  <br />
                  <span className="text-white">
                    Efficient? Yes. Overkill? Always.
                  </span>
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="bio-image md:w-1/2 relative group w-full max-w-[400px] md:max-w-full">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl">
                <img
                  src="/assets/Images/Self.jpeg"
                  alt="Syed Saad Ahmed"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay" />
              </div>
              <div className="absolute -inset-4 border-2 border-neutral-800 rounded-2xl -z-10 group-hover:border-primary-500/30 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/Images/HK -  (7).png')`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="mx-0 md:mx-32">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3 font-hk">
              <span className="text-primary-500">01.</span> Experience & Key
              Projects
            </h3>

            <div className="space-y-12 border-l-2 border-neutral-800 pl-8 ml-4 text-left">
              {[
                {
                  role: "Full Stack Developer",
                  company: "Cohorts App",
                  period: "2025",
                  description:
                    "Developed the cohorts application — built the frontend, implemented backend APIs, and handled deployment and DevOps for a fully live system.",
                },
                {
                  role: "WordPress and Frontend Developer",
                  company: "InkWorldWide",
                  period: "2025",
                  description:
                    "Worked on multiple WordPress websites, crafting visually engaging and high-performing sites using Elementor and WPBakery. Built responsive layouts, optimized user experience",
                },

                {
                  role: "Full Stack Developer",
                  company: "Shifa Foundation NGO",
                  period: "2024",
                  description:
                    "Rebuilt the NGO website focusing on performance and security. Achieved faster load times and implemented a secure donation system.",
                },
                {
                  role: "Full Stack Developer",
                  company: "Medicalshala",
                  period: "2023",
                  description:
                    "Built a healthcare platform with real-time chat and secure payment gateway integration.",
                },
                {
                  role: "MERN Stack Developer",
                  company: "SwiftCare",
                  period: "2023",
                  description:
                    "Developed an appointment system for managing doctor schedules efficiently.",
                },
                {
                  role: "Frontend Developer",
                  company: "Job Portal Project",
                  period: "2022",
                  description:
                    "Created a job portal with JWT authentication and a responsive UI.",
                },
              ].map((job, idx) => (
                <div key={idx} className="timeline-item relative">
                  <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-black bg-primary-500" />
                  <h4 className="text-xl font-bold text-white mb-1">
                    {job.role}
                  </h4>
                  <p className="text-primary-400 text-sm mb-4 font-gm">
                    {job.company} | {job.period}
                  </p>
                  <p className="text-neutral-300 leading-relaxed font-dm">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
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
                  description:
                    "Advanced studies in software engineering, computer science, and system design.",
                },
                {
                  degree: "Bachelor of Computer Applications (BCA)",
                  school: "Vidya Vikas First Grade College, Mysore",
                  period: "Graduated",
                  description:
                    "Foundation in programming, databases, networking, and application development.",
                },
              ].map((edu, idx) => (
                <div key={idx} className="timeline-item relative">
                  <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-black bg-accent-500" />
                  <h4 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-accent-400 text-sm mb-4 font-gm">
                    {edu.school} | {edu.period}
                  </p>
                  <p className="text-neutral-300 leading-relaxed font-dm">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
