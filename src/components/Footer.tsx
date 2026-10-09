import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-mono text-sm font-bold tracking-[0.08em]">ANAK TERUBUK</p>
          <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-muted">
            Independent software &amp; technology studio. We build software, tools, experiments, and
            digital products.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Index</p>
          <ul className="mt-3 space-y-2.5 text-[15px]">
            <li>
              <Link href="/projects" className="link-fade text-ink hover:text-muted">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-fade text-ink hover:text-muted">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-fade text-ink hover:text-muted">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Contact</p>
          <a
            href="mailto:hello@anakterubuk.tech"
            className="link-fade mt-3 inline-block text-[15px] text-ink hover:text-muted"
          >
            hello@anakterubuk.tech
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 py-5 font-mono text-xs text-muted md:px-8">
          <span>© 2026 ANAK TERUBUK</span>
          <span aria-hidden>—</span>
          <span>anakterubuk.tech</span>
        </div>
      </div>
    </footer>
  );
}
