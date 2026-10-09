export type ProjectStatus =
  | "IN DEVELOPMENT"
  | "DEVELOPMENT"
  | "EXPERIMENT"
  | "RESEARCH"
  | "LIVE"
  | "ARCHIVED";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: string[];
  status: ProjectStatus;
  year: number;
  featured: boolean;
  stack: string[];
  externalUrl?: string;
  repositoryUrl?: string;
  thumbnail?: string;
  links: ProjectLink[];
  /** Raw MDX body (without frontmatter). */
  content: string;
}
