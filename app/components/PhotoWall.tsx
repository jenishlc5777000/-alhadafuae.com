import Link from "next/link";
import { Arrow } from "./Brand";
import { img, type Project } from "../lib/content";

type Shot = { src: string; project: Project };

/** Builds one tile per real site photo, mapped back to its project so each tile links to it. */
function collect(projects: Project[]): Shot[] {
  const shots: Shot[] = [];
  for (const p of projects) {
    shots.push({ src: p.image, project: p });
    for (const g of p.gallery) shots.push({ src: g, project: p });
  }
  return shots;
}

export default function PhotoWall({ projects }: { projects: Project[] }) {
  const shots = collect(projects);
  return (
    <section className="photo-wall">
      <div className="section-heading" data-reveal>
        <div>
          <p className="kicker">FROM OUR SITES / 02</p>
          <h2 className="display">A closer<br /><em>look.</em></h2>
        </div>
        <p className="section-aside">{String(shots.length).padStart(2, "0")} photos from every job on this page. Click any tile to open its project.</p>
      </div>
      <div className="pw-grid" data-reveal>
        {shots.map((s, i) => (
          <Link key={s.src} href={`/projects/${s.project.slug}`} className="pw-tile" style={{ "--i": i } as React.CSSProperties} aria-label={s.project.title}>
            <img src={img(s.src, 800)} alt="" loading="lazy" />
            <span className="pw-cap">
              <small>{s.project.category}</small>
              <b>{s.project.title}</b>
              <Arrow />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
