import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "../../components/Brand";
import { PostCard } from "../../components/Cards";
import PageHero from "../../components/PageHero";
import { formatDate, posts, site, waLink } from "../../lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);
  const url = `${site.url}/blog/${post.slug}`;
  const schema = { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, datePublished: post.date, description: post.excerpt, author: { "@type": "Organization", name: site.name }, mainEntityOfPage: url };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        index="J/04"
        kicker={post.category.toUpperCase()}
        title={post.title}
        image={post.image}
        crumbs={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }, { label: post.category }]}
        meta={<>{formatDate(post.date).toUpperCase()}<br />{post.readTime.toUpperCase()}</>}
      />

      <div className="article-layout">
        <aside className="article-aside">
          <div className="aside-block">
            <span className="footer-label">IN THIS NOTE</span>
            <ol>{post.sections.map((s, i) => <li key={s.id}><a href={`#${s.id}`}><span>0{i + 1}</span>{s.heading}</a></li>)}</ol>
          </div>
          <div className="aside-block">
            <span className="footer-label">SHARE</span>
            <div className="share">
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={waLink(`${post.title} ${url}`)} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}`}>Email</a>
            </div>
          </div>
        </aside>

        <article className="prose">
          <p className="prose-lead">{post.lead}</p>
          {post.sections.map((s) => (
            <section key={s.id} id={s.id}>
              <h2>{s.heading}</h2>
              {s.paras.map((p, i) => <p key={i}>{p}</p>)}
              {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              {s.quote && <blockquote>{s.quote}</blockquote>}
            </section>
          ))}
          <div className="takeaways">
            <p className="kicker red-text"><i />KEY TAKEAWAYS</p>
            <ul>{post.takeaways.map((t) => <li key={t}>{t}</li>)}</ul>
            <a className="button primary" href="#contact"><span>Ask a specialist</span> <Arrow /></a>
          </div>
          <Link href="/blog" className="under-link">Back to all notes <Arrow /></Link>
        </article>
      </div>

      <section className="journal related">
        <div className="section-heading" data-reveal>
          <div>
            <p className="kicker">KEEP READING</p>
            <h2 className="display">More from<br /><em>the field.</em></h2>
          </div>
          <Link className="circle-link" href="/blog" aria-label="All notes">↗</Link>
        </div>
        <div className="journal-list" data-reveal>
          {related.map((p) => <PostCard key={p.slug} post={p} index={posts.indexOf(p)} />)}
        </div>
      </section>
    </>
  );
}
