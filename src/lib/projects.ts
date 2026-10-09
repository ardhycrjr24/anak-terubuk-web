import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Project, ProjectStatus } from "@/types/project";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

const STATUSES: ProjectStatus[] = [
  "IN DEVELOPMENT",
  "DEVELOPMENT",
  "EXPERIMENT",
  "RESEARCH",
  "LIVE",
  "ARCHIVED",
];

function isUrl(value: unknown): value is string {
  return typeof value === "string" && value.startsWith("https://");
}

function parseProjectFile(fileName: string): Project {
  const slugFromFile = fileName.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  if (data.slug !== slugFromFile) {
    throw new Error(
      `[content] ${fileName}: frontmatter slug "${data.slug}" must equal filename "${slugFromFile}"`,
    );
  }
  if (typeof data.title !== "string" || !data.title) {
    throw new Error(`[content] ${fileName}: "title" is required`);
  }
  if (typeof data.description !== "string" || !data.description) {
    throw new Error(`[content] ${fileName}: "description" is required`);
  }
  if (!Array.isArray(data.category) || data.category.length === 0) {
    throw new Error(`[content] ${fileName}: "category" needs at least one entry`);
  }
  if (!STATUSES.includes(data.status)) {
    throw new Error(
      `[content] ${fileName}: unknown status "${data.status}" (must extend enum deliberately)`,
    );
  }
  if (typeof data.year !== "number") {
    throw new Error(`[content] ${fileName}: "year" must be a number`);
  }
  if (
    data.thumbnail !== undefined &&
    !fs.existsSync(path.join(process.cwd(), "public", String(data.thumbnail).replace(/^\//, "")))
  ) {
    throw new Error(`[content] ${fileName}: thumbnail "${data.thumbnail}" missing in /public`);
  }
  for (const key of ["externalUrl", "repositoryUrl"] as const) {
    if (data[key] !== undefined && !isUrl(data[key])) {
      throw new Error(`[content] ${fileName}: "${key}" must be an https:// URL`);
    }
  }

  return {
    title: data.title,
    slug: slugFromFile,
    description: data.description,
    longDescription: data.longDescription,
    category: data.category.map((c: unknown) => String(c)),
    status: data.status,
    year: data.year,
    featured: data.featured === true,
    stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
    externalUrl: data.externalUrl,
    repositoryUrl: data.repositoryUrl,
    thumbnail: data.thumbnail,
    links: Array.isArray(data.links) ? data.links : [],
    content,
  };
}

function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.year !== b.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));
  return sortProjects(files.map(parseProjectFile));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 2): Project[] {
  const all = getAllProjects();
  const current = all.find((p) => p.slug === slug);
  if (!current) return [];
  const scored = all
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      project: p,
      shared: p.category.filter((c) => current.category.includes(c)).length,
    }))
    .sort((a, b) => b.shared - a.shared || b.project.year - a.project.year);
  return scored.slice(0, limit).map((s) => s.project);
}

export function getAllCategories(): string[] {
  const set = new Set<string>();
  for (const p of getAllProjects()) for (const c of p.category) set.add(c);
  return [...set].sort();
}

/** Bullet list from a project's own "What is being built" MDX section. */
export function getProjectHighlights(project: Project, limit = 4): string[] {
  const section = project.content
    .split(/^##\s+/m)
    .find((s) => s.trimStart().toLowerCase().startsWith("what is being built"));
  if (!section) return [];
  return section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim())
    .filter(Boolean)
    .slice(0, limit);
}
