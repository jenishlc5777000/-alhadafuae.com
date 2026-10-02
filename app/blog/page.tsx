import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "../components/Brand";
import { PostList } from "../components/Filterable";
import PageHero from "../components/PageHero";
import { formatDate, images, img, posts } from "../lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical notes on concrete repair, structural strengthening, scanning and building maintenance in Dubai, from the Al Hadaf team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        index="04"
        kicker="FIELD JOURNAL"
        title={<>Notes from<br /><em>the job.</em></>}
        intro="Plain-language guidance on keeping concrete buildings healthy, written by the people who repair them."
        image={images.corridor}
        crumbs={[{ href: "/", label: "Home" }, { label: "Blog" }]}
        meta={<>{String(posts.length).padStart(2, "0")} NOTES<br />UPDATED MONTHLY</>}
      />

      <section className="featured-post" data-reveal>
        <Link href={`/blog/${featured.slug}`} className="fp-media" aria-label={featured.title}>
          <img src={img(featured.image, 1400)} alt="" />
          <span className="pc-tag">LATEST NOTE</span>
        </Link>
        <div className="fp-copy">
          <p className="post-meta">{featured.category} <i /> {formatDate(featured.date)} <i /> {featured.readTime}</p>
          <h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
          <p>{featured.lead}</p>
          <Link className="button dark" href={`/blog/${featured.slug}`}><span>Read the note</span> <Arrow /></Link>
        </div>
      </section>

      <section className="journal blog-index">
        <div className="section-heading" data-reveal>
          <div>
            <p className="kicker">ALL NOTES / 01</p>
            <h2 className="display">Browse by<br /><em>topic.</em></h2>
          </div>
        </div>
        <PostList posts={rest} categories={["All", ...Array.from(new Set(rest.map((p) => p.category)))]} />
      </section>
    </>
  );
}
