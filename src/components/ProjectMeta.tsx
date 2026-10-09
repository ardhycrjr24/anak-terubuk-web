import type { Project } from "@/types/project";

interface ProjectMetaProps {
  project: Project;
}

export default function ProjectMeta({ project }: ProjectMetaProps) {
  const rows: [string, string][] = [
    ["Status", project.status],
    ["Year", String(project.year)],
    ["Categories", project.category.join(", ")],
  ];
  if (project.stack.length > 0) rows.push(["Stack", project.stack.join(", ")]);
  return (
    <dl className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
      {rows.map(([term, value]) => (
        <div key={term} className="bg-bg px-5 py-4">
          <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{term}</dt>
          <dd className="mt-1.5 text-[15px]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
