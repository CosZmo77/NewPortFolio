import ExperienceEntry from "./ExperienceEntry";

const responsibilities: [string, string][] = [
  ["From site data to team workflows", "I coordinate the end-to-end data lifecycle for a large-scale BSNL telecom deployment. I collect raw site data from clients, organise the intake, and turn it into prioritised work for the technical team."],
  ["The final technical check", "I take on the most complex data engineering anomalies, prepare Acceptance Testing (AT) documentation, and provide the final technical sign-off before corporate submission and downstream processing."],
  ["Keeping everyone connected", "I’m the central point of coordination between clients, field teams, corporate stakeholders, and the GIS team, keeping information and decisions moving across the deployment."],
  ["Turning recurring problems into features", "When the same operational bottleneck keeps coming up, I translate it into system requirements. I work with the platform engineering team on app.lumacorp.in, contributing hands-on debugging and feature development."],
];

export default function CurrentExperience() {
  return <ExperienceEntry current company="Xentric Integrated Solutions Pvt. Ltd" role="Project Coordinator & Software Developer" period="Feb 2026 – Present" location="Full-time · Bangalore, India" intro="Part coordination, part problem-solving, part building. I help turn the realities of a telecom deployment into organised data, clear handoffs, and better software." responsibilities={responsibilities} link={{ url: "https://app.lumacorp.in/", label: "app.lumacorp.in" }} />;
}
