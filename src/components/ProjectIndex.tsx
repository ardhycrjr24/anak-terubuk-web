import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectIndexProps {
  projects: Project[];
}

export default function ProjectIndex({ projects }: ProjectIndexProps) {
  if (projects.length === 0) {
    return <p className="text-muted">No projects published yet.</p>;
  }
  return (
    <div className="border-t border-line">
      <div
        aria-hidden
        className="hidden grid-cols-[64px_1fr_1fr_auto] gap-4 border-b border-line py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted md:grid"
      >
        <span>Year</span>
        <span>Project</span>
        <span>Category</span>
        <span>Status</span>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.slug} className="border-b border-line">
            <Link
              href={`/projects/${project.slug}`}
              className="link-fade row-smooth grid grid-cols-2 gap-x-4 gap-y-1 px-2 py-4 md:grid-cols-[64px_1fr_1fr_auto] md:items-baseline md:px-3"
            >
              <span className="font-mono text-sm text-muted">{project.year}</span>
              <span className="text-left text-[17px] font-medium">{project.title}</span>
              <span className="font-mono text-[13px] text-muted">
                {project.category.join(" / ")}
              </span>
              <span className="text-right font-mono text-[13px] uppercase tracking-[0.06em] text-accent-ink">
                {project.status}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
