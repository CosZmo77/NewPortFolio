export type Project = { id: number; title: string; role: string; year: string; description: string; challenge: string; solution: string; tech: string[]; image: string; width: number; height: number; link?: string; links?: { name: string; url: string }[] };

export const projects: Project[] = [
  {
    id: 7, title: "iLovePhysio", role: "Personal project · Design & Development", year: "2026",
    description: "A place to see anatomy, understand movement, and keep learning. I built iLovePhysio around interactive 3D models, illustrated atlases, and guided physiotherapy courses.",
    challenge: "Making a detailed subject easy to explore: from finding a body region to inspecting a structure and continuing into a lesson.",
    solution: "Built with Astro and TypeScript, using React for interactive viewers, PostgreSQL for content and learner data, and Better Auth for accounts. The library connects models, teaching views, and courses in one experience.",
    tech: ["Astro", "TypeScript", "React", "PostgreSQL", "Better Auth", "model-viewer"],
    image: "/assets/physio/ilovephysio-home.png", width: 1713, height: 909,
    link: "https://ilovephysio.saadstudio.space/",
  },
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
    image: "/assets/optimized/cohorts.webp",
    width: 1894,
    height: 1055,
    link: "https://www.cohortsapp.com/",
  },
  {
    id: 6,
    title: "InkWorldWide",
    role: "WordPress and Frontend Developer",
    year: "2025",
    description:
      "Full-time intern developing WordPress and static websites, creating responsive and user-friendly designs.",
    challenge:
      "Ensuring seamless performance and responsive design while integrating custom WordPress functionality.",
    solution:
      "Built custom themes and plugins, optimized site performance, and delivered clean, modern frontend layouts.",
    tech: ["WordPress", "PHP", "ACF", "Tailwind CSS", "JavaScript", "MySQL"],
    image: "/assets/optimized/inkworldwide.webp",
    width: 1889,
    height: 1034,
    links: [
      { name: "Techwise", url: "https://techwise.one/" },
      { name: "Vhope", url: "https://vhopemedicalcenter.ae/" },
      { name: "Vishwa", url: "https://vishwaengineering.com/" },
    ],
  },

  {
    id: 2,
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
    image: "/assets/optimized/shifa-foundation.webp",
    width: 1901,
    height: 1027,
    link: "https://shifafoundation.net/",
  },
  {
    id: 3,
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
    image: "/assets/optimized/medicalshala.webp",
    width: 1728,
    height: 1117,
    link: "https://medicalshala.com",
  },
  {
    id: 4,
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
    image: "/assets/optimized/swiftcare.webp",
    width: 1899,
    height: 1057,
    link: "https://swiftcare-frontend.onrender.com/",
  },
  {
    id: 5,
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
    image: "/assets/optimized/job-portal.webp",
    width: 1596,
    height: 777,
    link: "https://job-portal-teal.vercel.app/",
  },
];
