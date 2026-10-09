import { pageMetadata } from "@/lib/metadata";
import ProjectIndex from "@/components/ProjectIndex";
import { getAllProjects, getAllCategories } from "@/lib/projects";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Every project from the ANAK TERUBUK studio — software, tools, experiments, and research.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Index</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">Projects</h1>
      <p className="mt-4 max-w-[60ch] leading-relaxed text-muted">
        {projects.length === 1
          ? "One project so far. The index grows as the studio ships."
          : `${projects.length} projects. The index grows as the studio ships.`}
      </p>
      {categories.length > 0 && (
        <p className="mt-3 font-mono text-[13px] text-muted">
          Categories: {categories.join(" · ")}
        </p>
      )}
      <div className="mt-10">
        <ProjectIndex projects={projects} />
      </div>
    </div>
  );
}
