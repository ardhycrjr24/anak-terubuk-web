import { pageMetadata } from "@/lib/metadata";
import { Mail } from "lucide-react";
import Button from "@/components/Button";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with the ANAK TERUBUK studio.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Contact</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
        Say hello.
      </h1>
      <p className="mt-4 max-w-[56ch] leading-relaxed text-muted">
        The inbox is read by the people who build the work. Write about a project, a question,
        or something worth building together.
      </p>
      <div className="mt-8">
        <Button href="mailto:hello@anakterubuk.tech">
          <Mail size={17} aria-hidden />
          hello@anakterubuk.tech
        </Button>
      </div>
      <dl className="mt-12 max-w-xl border-t border-line">
        <div className="flex flex-wrap gap-2 border-b border-line py-4">
          <dt className="w-28 shrink-0 font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
            Email
          </dt>
          <dd>
            <a
              href="mailto:hello@anakterubuk.tech"
              className="link-fade hover:underline"
            >
              hello@anakterubuk.tech
            </a>
          </dd>
        </div>
        <div className="flex flex-wrap gap-2 border-b border-line py-4">
          <dt className="w-28 shrink-0 font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
            Studio
          </dt>
          <dd className="text-muted">Independent. Project-driven. Remote-first.</dd>
        </div>
      </dl>
    </div>
  );
}
