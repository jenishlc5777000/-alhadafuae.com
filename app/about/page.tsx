import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "../components/Brand";
import { CtaBand, Ticker } from "../components/Cards";
import LocationSection from "../components/LocationSection";
import PageHero from "../components/PageHero";
import { img, images } from "../lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Al Hadaf is a Dubai-based concrete restoration team, combining site investigation, engineering judgement and careful execution since 2015.",
  alternates: { canonical: "/about" },
};

const values = [
  { n: "01", title: "Diagnose first", text: "We find the cause before we price the cure. Testing and scanning come before breakers." },
  { n: "02", title: "Respect the structure", text: "Every intervention is matched to the building that is already there, not a template." },
  { n: "03", title: "Work clean", text: "Live buildings stay live. We plan noise, dust and access around the people inside." },
  { n: "04", title: "Own the outcome", text: "One team from survey to handover, with a clear record of what was done and why." },
];

const steps = [
  { title: "Site visit", text: "A walk-round with you to understand the history, the symptoms and the constraints." },
  { title: "Investigate", text: "Testing, scanning and mapping to find out what is really happening in the concrete." },
  { title: "Method", text: "A clear proposal and method statement, with options explained in plain language." },
  { title: "Deliver", text: "Phased, supervised execution with quality checks at every hold point." },
  { title: "Hand over", text: "As-built records, test results and a simple plan for future maintenance." },
];

const sectors = ["Residential towers", "Commercial offices", "Hospitality", "Industrial & logistics", "Car parks & infrastructure", "Villa communities"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="02"
        kicker="ABOUT AL HADAF"
        title={<>Built on<br /><em>close attention.</em></>}
        intro="Since 2015 we have helped Dubai's building owners, consultants and contractors understand their concrete, and look after it properly."
        image={images.crew}
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
        meta={<>EST. 2015<br />DUBAI, UAE</>}
      />

      <section className="story">
        <div className="section-no">/ 01</div>
        <div className="story-copy" data-reveal>
          <p className="kicker">OUR STORY</p>
          <h2 className="display">A specialist team for the <em>buildings already standing.</em></h2>
          <p>Al Hadaf began with a simple observation: most concrete problems are treated as surface problems. Cracks get filled, spalls get patched, and a year later the same issue returns.</p>
          <p>We set out to do it differently. Every project starts with understanding: how the building was made, how it has been used, and what the concrete is telling us. Only then do we decide how to repair, strengthen or protect it.</p>
          <Link className="under-link" href="/projects">See the work <Arrow /></Link>
        </div>
        <div className="story-media" data-reveal>
          <figure className="story-img-a"><img src={img(images.engineer, 1000)} alt="Engineer inspecting a concrete structure" loading="lazy" /></figure>
          <figure className="story-img-b"><img src={img(images.concrete, 800)} alt="Close-up of restored concrete surface" loading="lazy" /></figure>
          <div className="story-badge"><strong>10<sup>+</sup></strong><span>YEARS OF<br />RESTORATION</span></div>
        </div>
      </section>

      <section className="stats-band" data-reveal>
        <div><strong><span data-count="50">50</span>+</strong><span>PROJECTS DELIVERED</span></div>
        <div><strong><span data-count="10">10</span>+</strong><span>YEARS IN DUBAI</span></div>
        <div><strong><span data-count="4">4</span></strong><span>CORE DISCIPLINES</span></div>
        <div><strong>24/7</strong><span>SUPPORT WHEN IT COUNTS</span></div>
      </section>

      <section className="capabilities">
        <div className="cap-top" data-reveal>
          <div>
            <p className="kicker light">WHAT WE BELIEVE / 02</p>
            <h2 className="display">Principles that<br /><em>hold weight.</em></h2>
          </div>
          <p>The way we work comes down to a few habits we never skip, on small repairs and large programmes alike.</p>
        </div>
        <div className="service-grid" data-spotlight>
          {values.map((v) => (
            <article className="service-card" key={v.n} data-reveal>
              <div className="service-card-top"><span>{v.n}</span><Arrow /></div>
              <div><h3>{v.title}</h3><p>{v.text}</p></div>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-heading" data-reveal>
          <div>
            <p className="kicker">HOW WE WORK / 03</p>
            <h2 className="display">From first look<br /><em>to handover.</em></h2>
          </div>
          <p className="section-aside">Five clear stages, one accountable team. You always know what is happening and what comes next.</p>
        </div>
        <ol className="process-list" data-reveal>
          {steps.map((s, i) => (
            <li key={s.title} className="process-step">
              <span className="step-no">STEP 0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <Ticker items={["DIAGNOSE", "REPAIR", "STRENGTHEN", "PROTECT", "MAINTAIN"]} />

      <section className="sectors">
        <div className="section-no">/ 04</div>
        <div data-reveal>
          <p className="kicker">WHO WE WORK FOR</p>
          <h2 className="display">Sectors we<br /><em>know well.</em></h2>
        </div>
        <ul className="row-list" data-reveal>
          {sectors.map((s, i) => (
            <li key={s}><span>0{i + 1}</span><strong>{s}</strong><Arrow /></li>
          ))}
        </ul>
      </section>

      <CtaBand title={<>Not sure what<br /><em>you are looking at?</em></>} text="Send us photos or arrange a visit. We will tell you honestly whether it needs attention, and what kind." />

      <LocationSection index="05" />
    </>
  );
}
