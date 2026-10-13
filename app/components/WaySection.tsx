"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Brand";
import { img } from "../lib/content";

const CYCLE = 3200;

const principles = [
  { title: "Investigate", tag: "SEE THE CONDITION", text: "Coring, GPR scanning and assessment show what is inside and what is wrong, before any work begins.", image: "/projects/coring-2.webp" },
  { title: "Repair", tag: "SOLVE THE CAUSE", text: "Patch repairs, corrosion treatment, crack injection and strengthening restore profile and performance.", image: "/projects/slab-1.webp" },
  { title: "Protect", tag: "BUILT TO LAST", text: "Waterproofing and epoxy systems give a durable, resilient finish for years to come.", image: "/projects/slab-5.webp" },
];

const statement = "Every job starts by understanding what is really happening in the concrete. We investigate first, repair with the right system, then protect the result, restoring strength, durability and finish.".split(" ");

/**
 * Scroll-told section. On large screens it pins for ~2 screens of scroll and drives
 * everything from one progress value (--p); on smaller screens it flows normally,
 * fills the text as it enters and cycles the cards on a timer.
 */
export default function WaySection() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current, track = trackRef.current;
    if (!el || !track) return;
    const mq = window.matchMedia("(min-width: 981px)");
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect(), vh = window.innerHeight;
      const raw = mq.matches ? -r.top / Math.max(r.height - vh, 1) : (vh * 0.9 - r.top) / (vh * 0.9);
      const p = Math.min(Math.max(raw, 0), 1);
      el.style.setProperty("--p", p.toFixed(4));
      if (mq.matches) setActive(Math.min(principles.length - 1, Math.floor(p * principles.length)));
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onMq = () => { setPinned(mq.matches); schedule(); };
    onMq();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    mq.addEventListener("change", onMq);
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mq.removeEventListener("change", onMq);
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  // Small screens: cycle the cards while the section is visible.
  useEffect(() => {
    if (pinned || !inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % principles.length), CYCLE);
    return () => clearTimeout(t);
  }, [pinned, inView, active]);

  const go = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    if (!pinned) { setActive(i); return; }
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + ((i + 0.5) / principles.length) * (el.offsetHeight - window.innerHeight), behavior: "smooth" });
  };

  return (
    <section className={`way${pinned ? " is-pinned" : ""}`} id="method" ref={ref} style={{ "--p": 0 } as React.CSSProperties}>
      <div className="way-track" ref={trackRef}>
      <div className="way-sticky">
        <div className="way-bgword" aria-hidden="true">INVESTIGATE. REPAIR. PROTECT.</div>

        <div className="way-left">
          <p className="way-label"><span>01</span><i />THE AL HADAF APPROACH</p>
          <h2 className="way-title"><span>See the condition.</span><em>Solve the cause.</em></h2>
          <p className="way-statement" style={{ "--n": statement.length } as React.CSSProperties}>
            {statement.map((w, i) => <span key={i} style={{ "--i": i } as React.CSSProperties}>{w} </span>)}
          </p>
          <Link className="under-link" href="/about">More about our approach <Arrow /></Link>
        </div>

        <div className="way-right">
          <div className="way-deck">
            {principles.map((pr, i) => {
              const d = active - i;
              return (
                <article key={pr.title} className={`way-card ${d === 0 ? "is-active" : d > 0 ? "is-past" : "is-next"}`} style={{ "--d": Math.max(d, 0) } as React.CSSProperties} aria-hidden={d !== 0}>
                  <img src={img(pr.image, 1200)} alt="" loading="lazy" />
                  <span className="way-card-no" aria-hidden="true">0{i + 1}</span>
                  <div className="way-card-body">
                    <span className="way-tag">{pr.tag}</span>
                    <h3>{pr.title}</h3>
                    <p>{pr.text}</p>
                  </div>
                </article>
              );
            })}
            <div className="way-counter" aria-hidden="true"><b key={active}>0{active + 1}</b> / 0{principles.length}</div>
          </div>

          <div className="way-rail" role="tablist" aria-label="Our approach">
            {principles.map((pr, i) => (
              <button key={pr.title} type="button" role="tab" aria-selected={i === active} style={{ "--i": i } as React.CSSProperties}
                className={i === active ? "is-active" : i < active ? "is-done" : undefined} onClick={() => go(i)}>
                <span className="way-rail-bar">{(pinned || i === active) && <i key={pinned ? "p" : active} style={pinned ? undefined : { animationDuration: `${CYCLE}ms` }} />}</span>
                <small>0{i + 1}</small>{pr.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      </div>

      <div className="stat-row way-stats" data-reveal>
        <div><strong><span data-count="50">50</span><sup>+</sup></strong><span>PROJECTS DELIVERED</span><i /></div>
        <div><strong><span data-count="24">24</span><sup>/7</sup></strong><span>SUPPORT WHEN IT COUNTS</span><i /></div>
        <div><strong>0<span data-count="1">1</span></strong><span>TEAM, FROM SURVEY TO HANDOVER</span><i /></div>
      </div>
    </section>
  );
}
