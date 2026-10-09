import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
      {children}
    </span>
  );
}
