import LevelBackdrop from "../components/LevelBackdrop";
import ServicesGuild from "../components/ServicesGuild";

export default function Services() {
  return <div className="services-realm">
    <LevelBackdrop scene="bg-02" tone="amber" effect="embers" priority />
    <div className="services-realm-content">
      <header className="guild-heading services-page-heading"><p className="guild-eyebrow"><span /> THE WORKSHOP <span /></p><h1>Good ideas deserve<br /><span>a life of their own.</span></h1><p>Design, development, and a bit of figuring things out.<br />Here’s how I can help.</p></header>
      <ServicesGuild />
    </div>
  </div>;
}
