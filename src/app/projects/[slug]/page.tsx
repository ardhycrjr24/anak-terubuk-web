import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import ProjectMeta from "@/components/ProjectMeta";
import ProjectCard from "@/components/ProjectCard";
import { pageMetadata } from "@/lib/metadata";
import { getAllProjects, getProjectBySlug, getRelatedProjects } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not found" };
  const description = project.longDescription ?? project.description;
  return pageMetadata({
    title: project.title,
    description,
    path: `/projects/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug);

  return (
    <article className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <Link
        href="/projects"
        className="link-fade inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-ink"
      >
        <ArrowLeft size={15} aria-hidden /> All projects
      </Link>

      <header className="mt-8 max-w-[68ch]">
        <div className="flex flex-wrap items-center gap-2">
          <Tag>{project.status}</Tag>
          <span className="font-mono text-[13px] text-muted">
            {project.year} · {project.category.join(" / ")}
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>
      </header>

      <div className="mt-10 max-w-3xl">
        <ProjectMeta project={project} />
      </div>

      <div className="prose-studio mt-10">
        <MDXRemote source={project.content} />
      </div>

      {(project.externalUrl || project.repositoryUrl) && (
        <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-8">
          {project.externalUrl && (
            <Button href={project.externalUrl} external>
              Visit project site
              <ArrowUpRight size={16} aria-hidden />
            </Button>
          )}
          {project.repositoryUrl && (
            <Button href={project.repositoryUrl} variant="ghost" external>
              Source code
              <ArrowUpRight size={16} aria-hidden />
            </Button>
          )}
        </div>
      )}

      {related.length > 0 && (
        <section aria-labelledby="related" className="mt-16 border-t border-line pt-10">
          <h2
            id="related"
            className="font-mono text-xs uppercase tracking-[0.12em] text-muted"
          >
            Related projects
          </h2>
          <div className="mt-6">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={String(i + 1).padStart(2, "0")} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
