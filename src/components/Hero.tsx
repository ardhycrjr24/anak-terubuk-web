import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";
import ProductVisual from "./ProductVisual";

interface HeroProps {
  flagship?: Project;
  highlights: string[];
}

export default function Hero({ flagship, highlights }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:px-8 md:pt-20 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.12em] text-muted uppercase">
              Product studio — 2026
            </p>
            <h1
              id="hero-title"
              className="mt-5 text-[2.75rem] leading-[1.03] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.5rem]"
            >
              Independent software &amp; technology studio.
            </h1>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-muted md:text-xl">
              We build software, AI systems, developer tools, and digital products.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                href="/projects"
                className="link-fade inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-ink px-5 text-[15px] font-medium text-bg hover:opacity-85"
              >
                Explore products
                <ArrowRight size={17} aria-hidden />
              </Link>
              <Link
                href="/about"
                className="link-fade inline-flex min-h-[44px] items-center font-mono text-sm text-muted hover:text-ink"
              >
                About the studio →
              </Link>
            </div>
          </div>

          {flagship && (
            <div>
              <ProductVisual project={flagship} highlights={highlights} variant="hero" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
