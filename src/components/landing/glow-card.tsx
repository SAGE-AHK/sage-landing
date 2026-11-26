import type { ReactNode } from "react";

const shell =
  "group isolate relative h-full overflow-hidden rounded-2xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_18px_40px_-24px_rgba(0,0,0,0.65),0_16px_40px_-18px_rgba(91,141,239,0.38)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] hover:border-accent/30 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_18px_40px_-24px_rgba(0,0,0,0.65),0_22px_48px_-12px_rgba(91,141,239,0.55)] motion-reduce:transition-none motion-reduce:hover:transform-none";

const glass =
  "glow-card-glass pointer-events-none absolute inset-0 rounded-2xl border border-white/12 bg-panel/35 bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-sunken/60 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color,--tw-gradient-from] duration-300 group-hover:border-white/18 group-hover:bg-panel/45 group-hover:from-white/[0.1]";

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
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-accent-soft/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10 bg-gradient-to-b from-white/[0.05] to-transparent" />
      <div className="relative z-10 h-full min-h-0 rounded-2xl">{children}</div>
    </Tag>
  );
}
