import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
export const dynamic = "force-static";

const SITE_URL = "https://anakterubuk.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.8 },
    ...projects.map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.4 },
  ];
}
