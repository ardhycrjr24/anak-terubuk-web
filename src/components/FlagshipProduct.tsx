import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import Tag from "./Tag";
import ProductVisual from "./ProductVisual";

interface FlagshipProductProps {
  project: Project;
  index: number;
  highlights: string[];
  flip?: boolean;
}

export default function FlagshipProduct({
  project,
  index,
  highlights,
  flip = false,
}: FlagshipProductProps) {
  return (
    <article
      className={`grid gap-10 border-t border-line py-14 md:py-20 lg:items-center lg:gap-16 ${
        flip
          ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
          : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
      }`}
    >
      <div className={flip ? "lg:order-2" : undefined}>
        <div className="flex items-baseline gap-4 font-mono text-xs tracking-[0.08em] text-muted uppercase">
          <span className="text-ink">{String(index).padStart(2, "0")}</span>
          <span>{project.category.join(" · ")}</span>
        </div>
        <h3 className="mt-4 text-4xl font-semibold tracking-[-0.03em] uppercase text-balance sm:text-5xl md:text-6xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-[40ch] text-lg leading-relaxed text-muted md:text-xl">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Tag>{project.status}</Tag>
          {project.stack.length > 0 && (
            <span className="font-mono text-[13px] text-muted">{project.stack.join(" · ")}</span>
          )}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="link-fade inline-flex min-h-[44px] items-center gap-1.5 font-mono text-sm text-accent-ink hover:underline"
            >
              Explore {project.title}
              <ArrowUpRight size={16} aria-hidden />
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="link-fade inline-flex min-h-[44px] items-center font-mono text-sm text-muted hover:text-ink"
          >
            Project notes →
          </Link>
        </div>
      </div>
      <div className={flip ? "lg:order-1" : undefined}>
        <ProductVisual project={project} highlights={highlights} />
      </div>
    </article>
  );
}
