import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "ANAK TERUBUK is an independent studio focused on building software, tools, and experiments around technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Studio</p>
      <h1 className="mt-2 max-w-[18ch] text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
        An independent studio for software, tools, and experiments.
      </h1>
      <div className="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-relaxed">
        <p>
          ANAK TERUBUK is an independent studio focused on building software, tools, and
          experiments around technology. It is intentionally broader than any single product:
          the studio can hold software products, AI projects, developer tools, automation,
          research, security experiments, and creative technology.
        </p>
        <p>
          Some projects become products. Some remain experiments. Some exist simply to answer a
          question. All of them are documented honestly — what they are, why they exist, and
          what state they are in.
        </p>
        <p>
          The studio is intentionally small, independent, and project-driven. There is no
          agency arm, no sales pipeline, and no growth theatre. If a project earns its place,
          it ships. If it does not, it stays a note in the record.
        </p>
        <p className="text-muted">
          Current work lives in the project index — starting with Macmo, an AI Agent Command
          Center for macOS.
        </p>
      </div>
    </div>
  );
}
