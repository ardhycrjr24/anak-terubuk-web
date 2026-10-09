import type { Metadata } from "next";

const SITE_NAME = "ANAK TERUBUK";

/**
 * Single source of truth for a page's canonical URL and its Open Graph URL.
 * Both are derived from `path`, so og:url can never drift from the canonical.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type, url: path, siteName: SITE_NAME, title, description },
    twitter: { card: "summary", title, description },
  };
}
