import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "../../components/Brand";
import { CtaBand } from "../../components/Cards";
import PageHero from "../../components/PageHero";
import { img, projects } from "../../lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.excerpt, alternates: { canonical: `/projects/${project.slug}` } };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const project = projects[i];
  const next = projects[(i + 1) % projects.length];

  const facts = ([["SECTOR", project.sector], ["DISCIPLINE", project.category], ["LOCATION", project.location], ["YEAR", project.year]] as [string, string | undefined][]).filter((f): f is [string, string] => Boolean(f[1]));
  const photos = project.gallery;

  return (
    <>
      <PageHero
        index={`P/${String(i + 1).padStart(2, "0")}`}
        kicker={project.category.toUpperCase()}
        title={project.title}
        intro={project.excerpt}
        image={project.image}
        crumbs={[{ href: "/", label: "Home" }, { href: "/projects", label: "Projects" }, { label: project.title }]}
      />

      <dl className="facts" data-reveal style={{ "--n": facts.length } as React.CSSProperties}>
        {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>

      <section className="case">
        <div className="case-block" data-reveal>
          <p className="kicker">01 / THE SITUATION</p>
          <p className="case-lead">{project.challenge}</p>
        </div>
        <div className="case-block" data-reveal>
          <p className="kicker">02 / SCOPE OF WORK</p>
          <ol className="approach-list">
            {project.approach.map((a, n) => <li key={n}><span>0{n + 1}</span><p>{a}</p></li>)}
          </ol>
        </div>
        {project.outcome && (
          <div className="case-block" data-reveal>
            <p className="kicker">03 / THE OUTCOME</p>
            <p className="case-lead">{project.outcome}</p>
          </div>
        )}
      </section>

      {photos.length > 0 && (
        <section className="case-photos">
          <p className="kicker" data-reveal><i />FROM THE SITE / {String(photos.length + 1).padStart(2, "0")} PHOTOS</p>
          <div className="case-gallery" data-reveal>
            {photos.map((g, n) => (
              <figure key={g}><img src={img(g, 1000)} alt={`${project.title}, site view ${n + 2}`} loading="lazy" /></figure>
            ))}
          </div>
        </section>
      )}

      {project.results && project.results.length > 0 && (
        <section className="stats-band dark" data-reveal>
          {project.results.map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l.toUpperCase()}</span></div>)}
        </section>
      )}

      <Link href={`/projects/${next.slug}`} className="next-project">
        <div className="next-bg" style={{ backgroundImage: `url(${img(next.image, 1800)})` }} aria-hidden="true" />
        <div className="next-inner">
          <p className="kicker light"><i />NEXT PROJECT</p>
          <h2>{next.title}</h2>
          <span className="next-meta">{next.sector} · {next.category} <Arrow /></span>
        </div>
      </Link>

      <CtaBand title={<>Facing something<br /><em>similar?</em></>} text="Every building is different, but the questions are often the same. Let us take a look." />
    </>
  );
}
