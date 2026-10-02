"use client";
import { useState } from "react";
import { PostCard, ProjectCard } from "./Cards";
import type { Post, Project } from "../lib/content";

function Filters({ options, active, onChange, count, noun }: { options: string[]; active: string; onChange: (v: string) => void; count: number; noun: string }) {
  return (
    <div className="filter-bar">
      <div className="filters" role="group" aria-label={`Filter ${noun}`}>
        {options.map((o) => (
          <button key={o} type="button" className={`filter-btn${o === active ? " is-active" : ""}`} aria-pressed={o === active} onClick={() => onChange(o)}>{o}</button>
        ))}
      </div>
      <span className="filter-count" aria-live="polite">{String(count).padStart(2, "0")} {noun}</span>
    </div>
  );
}

export function ProjectGallery({ projects, categories }: { projects: Project[]; categories: string[] }) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <>
      <Filters options={categories} active={active} onChange={setActive} count={shown.length} noun="projects" />
      <div className="project-grid" key={active}>
        {shown.map((p) => <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />)}
      </div>
    </>
  );
}

export function PostList({ posts, categories }: { posts: Post[]; categories: string[] }) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);
  return (
    <>
      <Filters options={categories} active={active} onChange={setActive} count={shown.length} noun="notes" />
      <div className="journal-list" key={active}>
        {shown.map((p) => <PostCard key={p.slug} post={p} index={posts.indexOf(p)} />)}
      </div>
    </>
  );
}
