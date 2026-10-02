import Link from "next/link";
import { Arrow } from "./components/Brand";
import { PostCard, ProjectCard, Ticker } from "./components/Cards";
import HeroVideo from "./components/HeroVideo";
import HowWeWork from "./components/HowWeWork";
import LocationSection from "./components/LocationSection";
import WaySection from "./components/WaySection";
import { Words } from "./components/Words";
import { posts, projects, services } from "./lib/content";

export default function Home() {
  return (
    <>
      <section className="hero" data-hero data-pointer>
        <HeroVideo />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="technical-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-index" aria-hidden="true">01 <i /> 06</div>
        <div className="hero-content">
          <p className="kicker light"><i />Dubai-based concrete restoration</p>
          <h1 className="hero-title">
            <span className="line"><span>STRUCTURAL</span></span>
            <span className="line"><em>care, made</em></span>
            <span className="line"><span>certain.</span></span>
          </h1>
          <p className="hero-summary">For buildings that need more than a quick fix. Al Hadaf brings the diagnosis, detail and delivery together.</p>
          <div className="hero-buttons">
            <a className="button primary" href="#contact" data-magnetic><span>Request a site assessment</span> <Arrow /></a>
            <a className="play-link" href="#process"><b>↓</b><span>See how we work</span></a>
          </div>
        </div>
        <aside className="hero-signal">
          <span className="pulse" />
          <p>ON SITE<br />ACROSS DUBAI</p>
          <strong>10<small>+ years</small></strong>
          <i>RESTORATION / MAINTENANCE / PRECISION WORK</i>
        </aside>
        <div className="hero-bottom"><span>AL HADAF <i /> EST. 2015</span><a href="#method" className="scroll-cue">SCROLL TO EXPLORE <span className="scroll-line" aria-hidden="true" /></a></div>
      </section>

      <Ticker items={["CONCRETE REPAIR", "STRUCTURAL STRENGTHENING", "BUILDING MAINTENANCE", "CONCRETE SCANNING", "CORE CUTTING"]} />

      <WaySection />

      <section className="capabilities" id="services">
        <div className="cap-top" data-reveal>
          <div>
            <p className="kicker light">CAPABILITIES / 02</p>
            <h2 className="display"><Words text="Made for the" /><br /><em><Words text="real world." start={3} /></em></h2>
          </div>
          <p>Every brief has a history. Our job is to understand it clearly, make the right intervention, and leave the building stronger than we found it.</p>
        </div>
        <div className="service-grid" data-spotlight>
          {services.map((s) => (
            <article className="service-card" key={s.n} data-reveal>
              <div className="service-card-top"><span>{s.n}</span><Arrow /></div>
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <HowWeWork />

      <div className="scroll-marquee" data-scroll-x aria-hidden="true">
        <div className="sm-row"><span>REPAIR ✦ STRENGTHEN ✦ SCAN ✦ PROTECT ✦ REPAIR ✦ STRENGTHEN ✦ SCAN ✦ PROTECT ✦</span></div>
        <div className="sm-row outline"><span>DUBAI ✦ SINCE 2015 ✦ 50+ PROJECTS ✦ DUBAI ✦ SINCE 2015 ✦ 50+ PROJECTS ✦</span></div>
      </div>

      <section className="work">
        <div className="section-heading" data-reveal>
          <div>
            <p className="kicker">SELECTED WORK / 04</p>
            <h2 className="display"><Words text="Proof on" /><br /><em><Words text="site." start={2} /></em></h2>
          </div>
          <Link className="circle-link" href="/projects" aria-label="View all projects" data-magnetic>↗</Link>
        </div>
        <div className="project-grid three" data-reveal>
          {projects.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
      </section>

      <section className="project-band">
        <div className="project-image" data-parallax="0.12">
          <div className="image-label"><span>FEATURED DISCIPLINE</span><strong>STRUCTURAL<br />RESTORATION</strong></div>
          <div className="target"><i /><i /></div>
        </div>
        <div className="project-copy" data-reveal>
          <p className="kicker">DETAIL IS A DIFFERENCE</p>
          <h2 className="display">When the work is <em>right,</em> it becomes part of the building.</h2>
          <p>Our engineers and technicians pair practical knowledge with precise execution, whether we are investigating a slab, strengthening a structure, or keeping a property in good condition.</p>
          <a className="button dark" href="#contact" data-magnetic><span>Discuss your project</span> <Arrow /></a>
        </div>
      </section>

      <section className="journal" id="journal">
        <div className="section-heading" data-reveal>
          <div>
            <p className="kicker">FIELD JOURNAL / 05</p>
            <h2 className="display"><Words text="Notes from" /><br /><em><Words text="the job." start={2} /></em></h2>
          </div>
          <Link className="circle-link" href="/blog" aria-label="Read the blog" data-magnetic>↗</Link>
        </div>
        <div className="journal-list" data-reveal>
          {posts.slice(0, 3).map((p, i) => <PostCard key={p.slug} post={p} index={i} />)}
        </div>
      </section>

      <LocationSection index="06" />
    </>
  );
}
