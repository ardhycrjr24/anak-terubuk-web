import Image from "next/image";
import type { Project } from "@/types/project";
import GatewayDiagram from "./GatewayDiagram";

/**
 * Product visual for the studio homepage.
 *
 * 1. Real asset, hero crop  — zoomed product window (hero)
 * 2. Real asset, full frame — untouched product cover (flagship)
 * 3. No asset, gateway      — editorial routing diagram (flagship)
 * 4. No asset, generic      — editorial spec plate (fallback)
 *
 * Never imitates a product screenshot, and never invents metrics.
 */
export default function ProductVisual({
  project,
  highlights,
  variant = "full",
}: {
  project: Project;
  highlights: string[];
  variant?: "hero" | "full";
}) {
  const host = project.externalUrl ? new URL(project.externalUrl).host : null;

  if (project.thumbnail) {
    if (variant === "hero") {
      return (
        <figure className="rounded-xl border border-line bg-raised p-2">
          <div className="flex items-center gap-1.5 px-2 py-2" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="ml-2 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
              {project.slug}
            </span>
          </div>
          <div className="relative aspect-[14/9] w-full overflow-hidden rounded-lg">
            <Image
              src={project.thumbnail}
              alt={`${project.title} product cover`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-left"
              priority
            />
          </div>
          <figcaption className="flex items-center justify-between gap-4 px-2 pt-3 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
            <span>{project.category.join(" · ")}</span>
            <span>{project.status}</span>
          </figcaption>
        </figure>
      );
    }

    return (
      <figure className="overflow-hidden rounded-2xl border border-line bg-raised">
        <div className="relative aspect-[40/21] w-full">
          <Image
            src={project.thumbnail}
            alt={`${project.title} product cover`}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
        <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-line px-5 py-3 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
          <span>{project.stack.join(" · ") || project.category.join(" · ")}</span>
          <span>{project.year}</span>
        </figcaption>
      </figure>
    );
  }

  const isGateway = project.category.includes("Developer Tools");

  if (isGateway) {
    return (
      <figure className="flex flex-col rounded-2xl border border-line bg-raised">
        <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
          <span>{project.slug}</span>
          <span>{project.year}</span>
        </div>
        <GatewayDiagram name={project.title} />
        <ul className="border-t border-line px-5 py-5">
          {highlights.map((item) => (
            <li
              key={item}
              className="border-t border-line py-2.5 text-[15px] leading-relaxed text-ink first:border-t-0 first:pt-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <figcaption className="border-t border-line px-5 py-3 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
          Request path — {host ?? "editorial diagram"}
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="flex flex-col rounded-2xl border border-line bg-raised">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
        <span>{project.slug}</span>
        <span>{project.year}</span>
      </div>
      <p className="overflow-hidden px-5 pt-6 font-mono text-2xl leading-none font-bold tracking-[-0.02em] text-ink/15 md:text-3xl">
        <span className="block truncate">{project.title}</span>
      </p>
      <ul className="flex-1 px-5 py-6">
        {highlights.map((item) => (
          <li
            key={item}
            className="border-t border-line py-3 text-[15px] leading-relaxed text-ink first:border-t-0 first:pt-0"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="border-t border-line px-5 py-3 font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
        <span>{host ?? project.category.join(" · ")}</span>
      </div>
    </div>
  );
}
