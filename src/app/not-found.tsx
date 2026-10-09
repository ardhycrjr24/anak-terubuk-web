import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
        This page does not exist.
      </h1>
      <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
        The address may be wrong, or the page was never built. The project index is a good
        place to continue.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Back home</Button>
        <Button href="/projects" variant="ghost">
          Browse projects
        </Button>
      </div>
      <p className="mt-10 font-mono text-[13px] text-muted">
        Looking for something? <Link href="/contact" className="link-fade underline">Ask the studio →</Link>
      </p>
    </div>
  );
}
