import Link from "next/link";
import { Arrow } from "./Brand";
import { img } from "../lib/content";

const principles = [
  { n: "01", title: "Investigate", tag: "SEE THE CONDITION", text: "Coring, GPR scanning and assessment show what is inside and what is wrong, before any work begins.", image: "/projects/coring-2.webp" },
  { n: "02", title: "Repair", tag: "SOLVE THE CAUSE", text: "Patch repairs, corrosion treatment, crack injection and strengthening restore profile and performance.", image: "/projects/slab-1.webp" },
  { n: "03", title: "Protect", tag: "BUILT TO LAST", text: "Waterproofing and epoxy systems give a durable, resilient finish for years to come.", image: "/projects/slab-5.webp" },
];

/** Three-card flow: the page passes through this section at normal scroll speed,
 *  no pin, no scroll-driven animation that visitors have to wait through. */
export default function WaySection() {
  return (
    <section className="way" id="method">
      <div className="way-head" data-reveal>
        <div>
          <p className="way-label"><span>01</span><i />THE AL HADAF APPROACH</p>
          <h2 className="way-title">See the condition.<br /><em>Solve the cause.</em></h2>
        </div>
        <div className="way-head-side">
          <p className="way-statement">Every job starts by understanding what is really happening in the concrete. We investigate first, repair with the right system, then protect the result, restoring strength, durability and finish.</p>
          <Link className="under-link" href="/about">More about our approach <Arrow /></Link>
        </div>
      </div>

      <ol className="way-cards" data-reveal>
        {principles.map((p) => (
          <li key={p.n} className="way-card">
            <div className="way-card-media">
              <img src={img(p.image, 1000)} alt="" loading="lazy" />
              <span className="way-card-tag">{p.tag}</span>
            </div>
            <div className="way-card-body">
              <span className="way-card-no">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="stat-row way-stats" data-reveal>
        <div><strong><span data-count="200">200</span><sup>+</sup></strong><span>PROJECTS DELIVERED</span><i /></div>
        <div><strong><span data-count="24">24</span><sup>/7</sup></strong><span>SUPPORT WHEN IT COUNTS</span><i /></div>
        <div><strong>0<span data-count="1">1</span></strong><span>TEAM, FROM SURVEY TO HANDOVER</span><i /></div>
      </div>
    </section>
  );
}
