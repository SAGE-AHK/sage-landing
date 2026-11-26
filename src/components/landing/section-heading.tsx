export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted md:text-lg">{text}</p>
    </div>
  );
}
