import Link from "next/link";
import { Arrow } from "./components/Brand";
import { PostCard, ProjectCard, Ticker } from "./components/Cards";
import HeroVideo from "./components/HeroVideo";
import LocationSection from "./components/LocationSection";
import { posts, projects, services } from "./lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroVideo />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="technical-grid" aria-hidden="true" />
        <div className="hero-index" aria-hidden="true">01 <i /> 04</div>
        <div className="hero-content">
          <p className="kicker light"><i />Dubai-based concrete restoration</p>
          <h1 className="hero-title">
            <span className="line"><span>STRUCTURAL</span></span>
            <span className="line"><em>care, made</em></span>
            <span className="line"><span>certain.</span></span>
          </h1>
          <p className="hero-summary">For buildings that need more than a quick fix. Al Hadaf brings the diagnosis, detail and delivery together.</p>
          <div className="hero-buttons">
            <a className="button primary" href="#contact"><span>Request a site assessment</span> <Arrow /></a>
            <a className="play-link" href="#method"><b>↓</b><span>See how we work</span></a>
          </div>
        </div>
        <aside className="hero-signal">
          <span className="pulse" />
          <p>ON SITE<br />ACROSS DUBAI</p>
          <strong>10<small>+ years</small></strong>
          <i>RESTORATION / MAINTENANCE / PRECISION WORK</i>
        </aside>
        <div className="hero-bottom"><span>AL HADAF <i /> EST. 2015</span><span>SCROLL TO EXPLORE <b>↓</b></span></div>
      </section>

      <Ticker items={["CONCRETE REPAIR", "STRUCTURAL STRENGTHENING", "BUILDING MAINTENANCE", "CONCRETE SCANNING", "CORE CUTTING"]} />

      <section className="statement" id="method">
        <div className="section-no">/ 01</div>
        <div>
          <p className="kicker">THE AL HADAF WAY</p>
          <h2 className="display">Look closer.<br /><em>Build confidence.</em></h2>
        </div>
        <div className="statement-copy">
          <p>We work with a healthy respect for what is already there. Better questions at the start, accurate information on site, and restoration that earns its place in the life of a building.</p>
          <Link className="under-link" href="/about">More about our approach <Arrow /></Link>
        </div>
        <div className="stat-row" data-reveal>
          <div><strong><span data-count="50">50</span><sup>+</sup></strong><span>PROJECTS DELIVERED</span></div>
          <div><strong>24<sup>/7</sup></strong><span>SUPPORT WHEN IT COUNTS</span></div>
          <div><strong>01</strong><span>TEAM, FROM SURVEY TO HANDOVER</span></div>
        </div>
      </section>

      <section className="capabilities" id="services">
        <div className="cap-top" data-reveal>
          <div>
            <p className="kicker light">CAPABILITIES / 02</p>
            <h2 className="display">Made for the<br /><em>real world.</em></h2>
          </div>
          <p>Every brief has a history. Our job is to understand it clearly, make the right intervention, and leave the building stronger than we found it.</p>
        </div>
        <div className="service-grid" data-reveal>
          {services.map((s) => (
            <article className="service-card" key={s.n}>
              <div className="service-card-top"><span>{s.n}</span><Arrow /></div>
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="work">
        <div className="section-heading" data-reveal>
          <div>
            <p className="kicker">SELECTED WORK / 03</p>
            <h2 className="display">Proof on<br /><em>site.</em></h2>
          </div>
          <Link className="circle-link" href="/projects" aria-label="View all projects">↗</Link>
        </div>
        <div className="project-grid three" data-reveal>
          {projects.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
      </section>

      <section className="project-band">
        <div className="project-image">
          <div className="image-label"><span>FEATURED DISCIPLINE</span><strong>STRUCTURAL<br />RESTORATION</strong></div>
          <div className="target"><i /><i /></div>
        </div>
        <div className="project-copy" data-reveal>
          <p className="kicker">DETAIL IS A DIFFERENCE</p>
          <h2 className="display">When the work is <em>right,</em> it becomes part of the building.</h2>
          <p>Our engineers and technicians pair practical knowledge with precise execution, whether we are investigating a slab, strengthening a structure, or keeping a property in good condition.</p>
          <a className="button dark" href="#contact"><span>Discuss your project</span> <Arrow /></a>
        </div>
      </section>

      <section className="journal" id="journal">
        <div className="section-heading" data-reveal>
          <div>
            <p className="kicker">FIELD JOURNAL / 04</p>
            <h2 className="display">Notes from<br /><em>the job.</em></h2>
          </div>
          <Link className="circle-link" href="/blog" aria-label="Read the blog">↗</Link>
        </div>
        <div className="journal-list" data-reveal>
          {posts.slice(0, 3).map((p, i) => <PostCard key={p.slug} post={p} index={i} />)}
        </div>
      </section>

      <LocationSection index="05" />
    </>
  );
}
