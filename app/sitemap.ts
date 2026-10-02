import type { MetadataRoute } from "next";
import { posts, projects, site } from "./lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/projects", "/blog"].map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 }));
  const work = projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.6 }));
  const notes = posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 }));
  return [...pages, ...work, ...notes];
}
