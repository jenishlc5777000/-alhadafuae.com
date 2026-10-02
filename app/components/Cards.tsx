import Link from "next/link";
import { Arrow } from "./Brand";
import { formatDate, img, type Post, type Project } from "../lib/content";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="pc-media">
        <img src={img(project.image, 1200)} alt={`${project.title}, ${project.location}`} loading="lazy" />
        <span className="pc-no">{String(index + 1).padStart(2, "0")}</span>
        <span className="pc-tag">{project.category}</span>
        <span className="pc-view" aria-hidden="true">VIEW<br />CASE ↗</span>
      </div>
      <div className="pc-body">
        <p className="pc-meta">{project.location} <i /> {project.year}</p>
        <h3>{project.title}</h3>
        <p>{project.excerpt}</p>
      </div>
    </Link>
  );
}

export function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <article className="journal-card">
      <Link href={`/blog/${post.slug}`} className="journal-image" aria-label={post.title}>
        <img src={img(post.image, 900)} alt="" loading="lazy" />
        <span>{String(index + 1).padStart(2, "0")}</span>
        <p>{post.category}</p>
      </Link>
      <div className="journal-text">
        <p className="post-meta">{formatDate(post.date)} <i /> {post.readTime}</p>
        <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="read-link">Read note <Arrow /></Link>
      </div>
    </article>
  );
}

export function Ticker({ items }: { items: string[] }) {
  const row = (copy: number) => items.flatMap((t, i) => [<span key={`${copy}t${i}`}>{t}</span>, <b key={`${copy}b${i}`}>✦</b>]);
  return (
    <div className="ticker" aria-hidden="true">
      <div>{row(0)}{row(1)}</div>
    </div>
  );
}

export function CtaBand({ title, text }: { title: React.ReactNode; text: string }) {
  return (
    <section className="cta-band" data-reveal>
      <div>
        <p className="kicker light"><i />NEXT STEP</p>
        <h2 className="display">{title}</h2>
      </div>
      <div>
        <p>{text}</p>
        <a className="button primary" href="#contact"><span>Request a site assessment</span> <Arrow /></a>
      </div>
    </section>
  );
}
