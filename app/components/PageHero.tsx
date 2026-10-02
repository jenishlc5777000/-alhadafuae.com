import Link from "next/link";
import type { ReactNode } from "react";
import { img } from "../lib/content";

type Props = {
  index: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  crumbs: { href?: string; label: string }[];
  meta?: ReactNode;
};

export default function PageHero({ index, kicker, title, intro, image, crumbs, meta }: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url(${img(image, 2000)})` }} aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="technical-grid" aria-hidden="true" />
      <div className="hero-index" aria-hidden="true">{index} <i /> AL HADAF</div>
      <div className="page-hero-inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              {i < crumbs.length - 1 && <b>/</b>}
            </span>
          ))}
        </nav>
        <p className="kicker light"><i />{kicker}</p>
        <h1 className="page-title">{title}</h1>
        {(intro || meta) && (
          <div className="page-hero-foot">
            {intro && <p>{intro}</p>}
            {meta && <div className="page-hero-meta">{meta}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
