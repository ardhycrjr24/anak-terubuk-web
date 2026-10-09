import Link from "next/link";
import MobileNav from "./MobileNav";

const NAV = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="relative border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="link-fade font-mono text-sm font-bold tracking-[0.08em] text-ink"
          aria-label="ANAK TERUBUK — home"
        >
          ANAK TERUBUK
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-fade text-[15px] text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
