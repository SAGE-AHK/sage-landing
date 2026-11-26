import type { ReactNode } from "react";

const shell =
  "group isolate relative h-full overflow-hidden rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_0_28px_-6px_rgba(0,0,0,0.55),0_0_32px_-10px_rgba(91,141,239,0.22)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_0_28px_-6px_rgba(0,0,0,0.55),0_0_36px_-8px_rgba(91,141,239,0.32)] motion-reduce:transition-none motion-reduce:hover:transform-none";

const glass =
  "glow-card-glass pointer-events-none absolute inset-0 rounded-2xl border border-white/[0.08] bg-panel/50 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color] duration-300 group-hover:border-white/12 group-hover:bg-panel/58";

export function GlowCard({
  children,
  className = "",
  as: Tag = "article",
}: {
  children: ReactNode;
  className?: string;
  as?: "article" | "div";
}) {
  return (
    <Tag className={`${shell} ${className}`}>
      <div className={glass} aria-hidden />
      <div className="relative z-10 h-full min-h-0 rounded-2xl">{children}</div>
    </Tag>
  );
}