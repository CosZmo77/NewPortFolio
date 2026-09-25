import ExperienceEntry from "./ExperienceEntry";
import type { Experience } from "./ExperienceEntry";

// Expanded from the existing experience and project descriptions; no inferred dates or metrics.
const experiences: Experience[] = [
  {
    company: "Cohorts App", role: "Full Stack Developer", period: "2025",
    intro: "I worked across the interface, backend, and deployment of a platform for creators and their communities. The interesting part was making courses and community activity feel like parts of the same place.",
    responsibilities: [
      ["Building both sides of the product", "I built the frontend and backend APIs, connecting the screens people use with the data and actions behind them."],
      ["Giving courses a clear structure", "I worked on modules, lessons, and progress tracking, with role-based access to keep course material available to the right members."],
      ["Keeping members up to date", "I used Supabase and real-time updates to support course delivery, lesson releases, and completion status inside the community."],
      ["Taking the build live", "I handled deployment and DevOps alongside feature development, carrying the work from the application code into a running product."],
    ], link: { url: "https://www.cohortsapp.com/", label: "Cohorts App" },
  },
  {
    company: "InkWorldWide", role: "WordPress and Frontend Developer", period: "2025",
    intro: "I worked on WordPress and static websites, moving between page layouts, frontend code, and the practical details of making a site comfortable to use.",
    responsibilities: [
      ["Turning layouts into working pages", "I built WordPress pages with Elementor and WPBakery, working through the structure, spacing, and visual details of each layout."],
      ["Making the layout work on smaller screens", "I developed responsive interfaces and adjusted how content fits across screen sizes, so the experience carries through from desktop to mobile."],
      ["Working beyond the page builder", "I contributed custom WordPress theme and plugin work, alongside static frontend development, where a project needed more than the standard components."],
      ["Refining the finished experience", "I worked on site performance and usability, improving loading and the small interface details that affect how a website feels day to day."],
    ],
  },
  {
    company: "Shifa Foundation NGO", role: "Full Stack Developer", period: "2024",
    intro: "I rebuilt the foundation’s website with two priorities: make its work easy to understand, and make supporting that work straightforward.",
    responsibilities: [
      ["Rebuilding the website", "I worked across the frontend and backend to replace the existing site with a responsive digital presence for the foundation."],
      ["Connecting the donation flow", "I integrated payment processing for donations, bringing the payment step into the website’s supporter journey."],
      ["Improving loading speed", "I optimised assets and page delivery as part of the rebuild, so visitors could reach the foundation’s content with less waiting."],
    ], link: { url: "https://shifafoundation.net/", label: "Shifa Foundation" },
  },
  {
    company: "Medicalshala", role: "Full Stack Developer", period: "2023",
    intro: "I helped build a healthcare platform that brings communication, appointments, and payments into one place. My work connected the interface with the services behind those everyday tasks.",
    responsibilities: [
      ["Connecting the platform", "I worked on the frontend and backend features using React and Supabase, building the connections between the interface and platform data."],
      ["Making conversation part of the product", "I built real-time chat with WebSockets, allowing communication to happen within the platform."],
      ["Supporting appointments and payments", "I contributed appointment scheduling and integrated a payment gateway, bringing those steps into the same healthcare workflow."],
    ], link: { url: "https://medicalshala.com", label: "Medicalshala" },
  },
  {
    company: "SwiftCare", role: "MERN Stack Developer", period: "2023",
    intro: "I built an appointment system around a practical problem: helping patients book a visit while giving doctors a clearer view of their schedules.",
    responsibilities: [
      ["Building the booking interface", "I developed a responsive frontend for the appointment journey, connecting the booking screens with the application’s backend."],
      ["Working through scheduling", "I implemented appointment management and calendar logic, including recurring appointments and cancellations."],
      ["Giving doctors a view of their day", "I built the schedule-management interface so doctors could see and manage their appointments in one place."],
    ], link: { url: "https://swiftcare-frontend.onrender.com/", label: "SwiftCare" },
  },
  {
    company: "Job Portal Project", role: "Frontend Developer", period: "2022",
    intro: "One of my earlier builds: a job portal that brought listings, profiles, and sign-in together. I worked on making those pieces usable as a single application.",
    responsibilities: [
      ["Building the responsive interface", "I developed the job portal’s frontend, arranging listings and profile information into layouts that work across screen sizes."],
      ["Helping people find relevant listings", "I worked on the interface for searching and filtering jobs, giving visitors a way to narrow the listings they see."],
      ["Connecting account access", "I added JWT authentication to support sign-in and account access within the application."],
    ], link: { url: "https://job-portal-teal.vercel.app/", label: "Job Portal" },
  },
];

export default function PreviousExperience() {
  return <>{experiences.map(experience => <ExperienceEntry key={experience.company} {...experience} />)}</>;
}
