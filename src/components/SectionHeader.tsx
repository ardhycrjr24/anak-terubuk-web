import Link from "next/link";

interface SectionHeaderProps {
  index: string;
  title: string;
  description?: string;
  linkHref?: string;
  linkLabel?: string;
}

export default function SectionHeader({ index, title, description, linkHref, linkLabel }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{index}</p>
      <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-2xl font-semibold tracking-[-0.01em] md:text-3xl">{title}</h2>
        {linkHref && linkLabel && (
          <Link href={linkHref} className="link-fade font-mono text-sm text-accent-ink hover:underline">
            {linkLabel} →
          </Link>
        )}
      </div>
      {description && <p className="mt-3 max-w-[60ch] leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
