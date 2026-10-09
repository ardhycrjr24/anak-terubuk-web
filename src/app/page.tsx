import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import FlagshipProduct from "@/components/FlagshipProduct";
import ProjectIndex from "@/components/ProjectIndex";
import { getAllProjects, getFeaturedProjects, getProjectHighlights } from "@/lib/projects";

export default function Home() {
  const flagships = getFeaturedProjects();
  const others = getAllProjects().filter((p) => !p.featured);
  const highlightsFor = (project: (typeof flagships)[number]) => getProjectHighlights(project);

  return (
    <>
      <Hero flagship={flagships[0]} highlights={flagships[0] ? highlightsFor(flagships[0]) : []} />

      <section aria-label="Flagship products" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <SectionHeader
            index="01 — Flagship products"
            title="Flagship products"
            description={`${flagships.length} products currently being built at ANAK TERUBUK.`}
            linkHref="/projects"
            linkLabel="Full index"
          />
          {flagships.map((project, i) => (
            <FlagshipProduct
              key={project.slug}
              project={project}
              index={i + 1}
              highlights={highlightsFor(project)}
              flip={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section aria-label="Studio statement" className="border-b border-line bg-raised">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <SectionHeader index="02 — Studio" title="We build products, tools, and experiments." />
          <div className="grid gap-6 md:grid-cols-2 md:gap-14">
            <p className="max-w-[46ch] text-lg leading-relaxed">
              ANAK TERUBUK is an independent software and technology studio focused on building
              useful software, AI systems, developer tools, and experimental technology.
            </p>
            <div>
              <p className="max-w-[46ch] leading-relaxed text-muted">
                The studio stays small and independent on purpose. Each project starts as an
                experiment, gets built in the open, and either ships or teaches us something. No
                agency arm, no sales pipeline — the work carries the reputation.
              </p>
              <Link
                href="/about"
                className="link-fade mt-4 inline-block font-mono text-sm text-accent-ink hover:underline"
              >
                About the studio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Other projects" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <SectionHeader
            index="03 — Other projects"
            title="Other projects"
            description="Smaller tools and experiments from the studio. They carry less weight than the flagship products, and they stay here."
            linkHref="/projects"
            linkLabel="Full index"
          />
          {others.length > 0 ? (
            <ProjectIndex projects={others} />
          ) : (
            <div className="border-t border-line py-8">
              <p className="max-w-[52ch] leading-relaxed text-muted">
                No secondary projects published yet. New tools and experiments will be listed
                here as they are documented.
              </p>
            </div>
          )}
        </div>
      </section>

      <section aria-label="Studio principle" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="text-xl font-semibold tracking-[-0.01em] md:text-2xl">
            Projects, not promises.
          </h2>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-muted">
            Some projects become products. Some remain tools. Some never ship. The work still
            matters.
          </p>
        </div>
      </section>

      <section aria-label="Contact" className="bg-raised">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <h2 className="max-w-[20ch] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            Have something worth building?
          </h2>
          <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
            Project ideas, questions, and collaborations are welcome.
          </p>
          <a
            href="mailto:hello@anakterubuk.tech"
            className="link-fade mt-6 inline-block font-mono text-base text-accent-ink hover:underline md:text-lg"
          >
            hello@anakterubuk.tech
          </a>
        </div>
      </section>
    </>
  );
}
