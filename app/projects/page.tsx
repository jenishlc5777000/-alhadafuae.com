import type { Metadata } from "next";
import { CtaBand } from "../components/Cards";
import { ProjectGallery } from "../components/Filterable";
import PageHero from "../components/PageHero";
import { images, projectCategories, projects } from "../lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Concrete repair, structural strengthening, scanning and core cutting projects delivered by Al Hadaf across Dubai.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        index="03"
        kicker="SELECTED PROJECTS"
        title={<>Work that<br /><em>stands up.</em></>}
        intro="Towers, hotels, warehouses and car parks. Each project began with a question about the concrete, and ended with a building in better shape."
        image={images.site}
        crumbs={[{ href: "/", label: "Home" }, { label: "Projects" }]}
        meta={<>{String(projects.length).padStart(2, "0")} CASE STUDIES<br />ACROSS DUBAI</>}
      />
      <section className="projects-index">
        <div className="section-heading" data-reveal>
          <div>
            <p className="kicker">CASE STUDIES / 01</p>
            <h2 className="display">Every site<br /><em>has a story.</em></h2>
          </div>
          <p className="section-aside">Filter by discipline, then open a project to see the challenge, our approach and the result.</p>
        </div>
        <ProjectGallery projects={projects} categories={projectCategories} />
      </section>
      <CtaBand title={<>Your building<br /><em>could be next.</em></>} text="Tell us what you are seeing on site. We will help you work out the right first step." />
    </>
  );
}
