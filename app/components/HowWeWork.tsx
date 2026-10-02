"use client";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Brand";
import { Words } from "./Words";
import { img, images } from "../lib/content";

const DURATION = 5200;

const steps = [
  { title: "Tell us what you see", time: "SAME-DAY REPLY", text: "Call, WhatsApp or send a few photos. We ask the right questions and book a visit that suits you.", gets: ["A quick first opinion", "A visit booked at your convenience"], image: images.plans },
  { title: "Site inspection", time: "WITHIN 48 HOURS", text: "An engineer visits, looks closely, taps, measures and photographs every problem area.", gets: ["Crack and damage mapping", "Photos of every area of concern"], image: images.engineer },
  { title: "Test & scan", time: "1–3 DAYS", text: "Where needed we scan, core or test the concrete to find the real cause, not just the symptom.", gets: ["GPR scans and cover readings", "Carbonation and chloride results"], image: images.drawings },
  { title: "Clear plan & quote", time: "FIXED PRICE", text: "A simple report: what is wrong, the options, the cost and the timeline. No jargon.", gets: ["Plain-language report", "Method statement and fixed quote"], image: images.office },
  { title: "Repair with care", time: "ON PROGRAMME", text: "Our own crew carries out the work, phased around your building, with checks at every stage.", gets: ["Supervised, phased works", "Quality checks at hold points"], image: images.crew },
  { title: "Handover & aftercare", time: "24/7 SUPPORT", text: "Photos, test results and a maintenance plan. We stay on call if anything changes.", gets: ["As-built records and test results", "A simple maintenance plan"], image: images.tower },
];

export default function HowWeWork() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduce, setReduce] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const running = inView && !paused && !reduce;

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), DURATION);
    return () => clearTimeout(t);
  }, [running, active]);

  useEffect(() => {
    const track = trackRef.current;
    const btn = track?.children[active] as HTMLElement | undefined;
    if (track && btn && track.scrollWidth > track.clientWidth) track.scrollTo({ left: btn.offsetLeft - 24, behavior: "smooth" });
  }, [active]);

  const go = (i: number) => setActive((i + steps.length) % steps.length);
  const step = steps[active];

  return (
    <section className="how" id="process" ref={sectionRef}>
      <div className="section-heading" data-reveal>
        <div>
          <p className="kicker">HOW WE WORK / 03</p>
          <h2 className="display"><Words text="Six steps." /><br /><em><Words text="Zero guesswork." start={2} /></em></h2>
        </div>
        <p className="section-aside">From your first message to the final handover, this is exactly what happens, and what you get at every stage.</p>
      </div>

      <div className="hw" data-reveal onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
        <div className="hw-track" role="tablist" aria-label="Our process" ref={trackRef}>
          {steps.map((s, i) => (
            <button key={s.title} type="button" role="tab" id={`hw-tab-${i}`} aria-selected={i === active} aria-controls="hw-panel" tabIndex={i === active ? 0 : -1}
              className={`hw-step${i === active ? " is-active" : ""}${i < active ? " is-done" : ""}`}
              onClick={() => go(i)}
              onKeyDown={(e) => { if (e.key === "ArrowRight") { go(i + 1); (trackRef.current?.children[(i + 1) % steps.length] as HTMLElement)?.focus(); } if (e.key === "ArrowLeft") { go(i - 1); (trackRef.current?.children[(i - 1 + steps.length) % steps.length] as HTMLElement)?.focus(); } }}>
              <span className="hw-dot" aria-hidden="true" />
              <span className="hw-no">STEP 0{i + 1}</span>
              <strong>{s.title}</strong>
              <span className="hw-bar" aria-hidden="true">{i === active && <i style={{ animationDuration: `${DURATION}ms`, animationPlayState: running ? "running" : "paused" }} />}</span>
            </button>
          ))}
        </div>

        <div className="hw-panel" role="tabpanel" id="hw-panel" aria-labelledby={`hw-tab-${active}`} key={active}>
          <div className="hw-num" aria-hidden="true">0{active + 1}</div>
          <div className="hw-copy">
            <p className="kicker red-text"><i />{step.time}</p>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <ul>{step.gets.map((g) => <li key={g}>{g}</li>)}</ul>
            <div className="hw-controls">
              <button type="button" onClick={() => go(active - 1)} aria-label="Previous step">←</button>
              <span>{String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => go(active + 1)} aria-label="Next step">→</button>
              <a className="under-link" href="#contact">Start step one <Arrow /></a>
            </div>
          </div>
          <figure className="hw-img">
            <img src={img(step.image, 1000)} alt="" />
            <svg className="spin-badge" viewBox="0 0 100 100" aria-hidden="true">
              <defs><path id="hw-circle" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" /></defs>
              <text><textPath href="#hw-circle">AL HADAF · STEP BY STEP · AL HADAF · STEP BY STEP · </textPath></text>
            </svg>
          </figure>
        </div>
      </div>
    </section>
  );
}
