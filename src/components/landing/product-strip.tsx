import {
  CalendarDaysIcon,
  ChartBarIcon,
  MapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";
import { GlowCard } from "./glow-card";
import { Reveal } from "./reveal";

const steps: {
  n: string;
  title: string;
  text: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    n: "01",
    title: "El evento",
    text: "Próximo, en vivo y finalizado. Cada momento tiene su lectura en el panel.",
    icon: CalendarDaysIcon,
  },
  {
    n: "02",
    title: "La gente",
    text: "Invitados y proveedores, en el mismo lugar que la operación.",
    icon: UserGroupIcon,
  },
  {
    n: "03",
    title: "El venue",
    text: "Planos y puntos de interés del lugar donde ocurre.",
    icon: MapIcon,
  },
  {
    n: "04",
    title: "La lectura",
    text: "El panel en vivo y EVA, mientras el evento ocurre.",
    icon: ChartBarIcon,
  },
];

export function ProductStrip() {
  return (
    <section id="producto" className="bg-sunken pt-8 pb-14 md:pt-12 md:pb-28">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-3 px-4 md:gap-4 md:px-8 lg:grid-cols-4 lg:px-12">
        {steps.map((step, index) => (
          <Reveal key={step.n} delay={index * 80}>
          <GlowCard className="px-4 py-5 sm:p-7">
            <div className="flex items-start justify-between gap-2">
              <div className="flex min-w-0 flex-1 items-baseline gap-2">
                <span className="shrink-0 font-mono text-xs tracking-wide text-accent-soft">{step.n}</span>
                <h2 className="min-w-0 flex-1 text-base font-medium leading-snug text-ink transition-colors group-hover:text-accent-soft sm:text-lg">
                  {step.title}
                </h2>
              </div>
              <step.icon className="size-5 shrink-0 text-accent-soft sm:size-6" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
          </GlowCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
