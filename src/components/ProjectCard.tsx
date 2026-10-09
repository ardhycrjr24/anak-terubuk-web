import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import Tag from "./Tag";

interface ProjectCardProps {
  project: Project;
  index: string;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group border-t border-line py-8 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-muted">{index}</span>
        <Link href={`/projects/${project.slug}`} className="block flex-1">
          <h3 className="link-fade text-xl font-semibold tracking-[-0.01em] group-hover:underline md:text-2xl">
            {project.title}
            <ArrowUpRight
              size={18}
              aria-hidden
              className="ml-1.5 inline-block text-muted transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </h3>
          <p className="mt-2 max-w-[58ch] leading-relaxed text-muted">{project.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
            <span>{project.year}</span>
            <span aria-hidden>·</span>
            <span>{project.category.join(" / ")}</span>
            <span aria-hidden>·</span>
            <Tag>{project.status}</Tag>
          </div>
        </Link>
      </div>
    </article>
  );
}
