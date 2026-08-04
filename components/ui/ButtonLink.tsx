import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}) {
  const variants = {
    primary: "bg-emerald-700 text-white hover:bg-emerald-800 shadow-[0_12px_30px_rgba(4,120,87,.25)]",
    secondary: "border border-emerald-800/30 bg-white text-emerald-950 hover:bg-emerald-50",
    light: "border border-white/35 bg-white/10 text-white hover:bg-white hover:text-emerald-950",
  };

  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`;
  const content = <>{Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}{children}</>;

  return href.startsWith("http")
    ? <a href={href} target="_blank" rel="noreferrer" className={classes}>{content}</a>
    : <Link href={href} className={classes}>{content}</Link>;
}
