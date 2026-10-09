import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}

export default function Button({ href, children, variant = "primary", external = false }: ButtonProps) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-5 text-[15px] font-medium link-fade";
  const styles =
    variant === "primary"
      ? "bg-ink text-bg hover:opacity-85"
      : "border border-line text-ink hover:border-muted";
  const externalProps = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <Link href={href} className={`${base} ${styles}`} {...externalProps}>
      {children}
    </Link>
  );
}
