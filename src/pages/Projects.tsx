import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Shifa Foundation NGO",
    role: "Lead Developer",
    year: "2024",
    description:
      "A complete rebuild of the Shifa Foundation's digital presence. The focus was on creating a high-performance, accessible platform that builds trust and facilitates secure donations.",
    challenge:
      "The previous site suffered from slow load times and security vulnerabilities. Integrating a secure, seamless donation flow without compromising performance was key.",
    solution:
      "Re-engineered the architecture using Next.js for static generation and speed. implemented secure payment gateways and optimized all assets, resulting in a 90+ Lighthouse score.",
    tech: ["React", "Node.js", "Razorpay", "Tailwind", "AWS"],
    image: "/assets/Images/ShifaFoundation.png",
    link: "https://shifafoundation.net/",
  },
  {
    id: 2,
    title: "Medicalshala",
    role: "Full Stack Developer",
    year: "2023",
    description:
      "A comprehensive healthcare platform designed to bridge the gap between patients and medical professionals. Features real-time consultation capabilities.",
    challenge:
      "Implementing reliable, low-latency real-time chat and video features while ensuring HIPAA compliance and data security.",
    solution:
      "Utilized WebSockets for real-time communication and Supabase for secure, scalable backend services. Integrated a robust appointment scheduling system.",
    tech: ["React", "Supabase", "WebSockets", "Tailwind", "WebRTC"],
    image: "/assets/Images/Medicalshala.png",
    link: "https://medicalshala.com",
  },
  {
    id: 3,
    title: "SwiftCare",
    role: "Developer",
    year: "2023",
    description:
      "An intuitive doctor appointment management system. It simplifies the booking process for patients and provides doctors with a streamlined dashboard to manage their schedules.",
    challenge:
      "Handling complex scheduling logic, including recurring appointments, cancellations, and time zone management.",
    solution:
      "Built a custom calendar engine using Node.js and SQL. Created a responsive frontend with React to ensure accessibility across all devices.",
    tech: ["React", "Node.js", "SQL", "Express", "Docker"],
    image: "/assets/Images/SwiftCare.png",
    link: "https://swiftcare-frontend.onrender.com/",
  },
  {
    id: 4,
    title: "MERN Job Portal",
    role: "Full Stack Developer",
    year: "2022",
    description:
      "A feature-rich job board connecting employers with talent. Includes advanced search filtering, user profiles, and secure authentication.",
    challenge:
      "Building a scalable authentication system and ensuring fast search results across a growing database of job listings.",
    solution:
      "Implemented JWT for secure, stateless authentication. Optimized MongoDB queries and indexed key fields to ensure sub-second search responses.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    image: "/assets/Images/JobPortal.png",
    link: "https://job-portal-teal.vercel.app/",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1, // Stagger effect if they appear together
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="py-20 relative min-h-screen bg-black text-neutral-200 overflow-hidden"
    >
      {/* Background with Overlay */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center opacity-100 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/Images/Backgrounds/HK -  (14).png')`,
        }}
      ></div>
      <div className="fixed inset-0 bg-linear-to-b from-black via-black/90 to-black/80 pointer-events-none"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <header className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-hk text-primary-500 mb-6 drop-shadow-2xl">
            Selected Works
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-dm">
            Creating next level digital products
          </p>
        </header>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                <div className="aspect-video overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

        <div className="mt-32 text-center ">
          <p className="text-neutral-500 font-dm flex items-center justify-center gap-2 ">
            More projects available on
            <a
              href="https://github.com/CosZmo77"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:underline"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.77 1.07.77 2.16v3.2c0 .31.21.67.8.56a11.52 11.52 0 0 0 7.85-10.97C23.5 5.74 18.27.5 12 .5z" />
              </svg>
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
