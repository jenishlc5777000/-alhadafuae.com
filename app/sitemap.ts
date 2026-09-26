import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hadafinteriors.com";
  return ["", "/services", "/about", "/projects", "/insights", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : .7 }));
}
