import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".services-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Cards Animation
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Building fast, scalable, and accessible web applications using modern technologies like React, Next.js, and Node.js.",
      icon: "💻",
      color: "border-primary-500",
      hoverColor: "group-hover:text-primary-400"
    },
    {
      title: "3D Experiences",
      description: "Creating immersive 3D worlds and interactive elements directly in the browser using Three.js and WebGL.",
      icon: "cube", // Using emoji or we can use an SVG
      customIcon: (
        <svg className="w-12 h-12 mb-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
      ),
      color: "border-accent-500",
      hoverColor: "group-hover:text-accent-400"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and aesthetically pleasing user interfaces that prioritize user experience and accessibility.",
      icon: "🎨",
      color: "border-purple-500",
      hoverColor: "group-hover:text-purple-400"
    },
    {
      title: "Performance Optimization",
      description: "Optimizing web applications for speed and efficiency, ensuring fast load times and smooth interactions.",
      icon: "🚀",
      color: "border-green-500",
      hoverColor: "group-hover:text-green-400"
    },
    {
      title: "SEO & Accessibility",
      description: "Implementing best practices for Search Engine Optimization and ensuring your site is accessible to all users.",
      icon: "search",
      customIcon: (
        <svg className="w-12 h-12 mb-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      ),
      color: "border-yellow-500",
      hoverColor: "group-hover:text-yellow-400"
    },
    {
      title: "Technical Consultation",
      description: "Providing expert advice on technology stack selection, architecture design, and development best practices.",
      icon: "💡",
      color: "border-blue-500",
      hoverColor: "group-hover:text-blue-400"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-neutral-200 selection:bg-primary-500 selection:text-white overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/assets/Images/HK-Pictures (2).png')` }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/95 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="services-header text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold font-hk text-white mb-6">
            My <span className="text-primary-500">Services</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-dm">
            Delivering high-quality digital solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-opacity-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-current ${service.hoverColor.replace('group-hover:text-', 'text-')}`}></div>

              <div className="relative z-10">
                {service.customIcon ? service.customIcon : <div className="text-5xl mb-6">{service.icon}</div>}

                <h3 className={`text-2xl font-bold text-white mb-4 ${service.hoverColor} transition-colors font-hk`}>
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed font-dm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
