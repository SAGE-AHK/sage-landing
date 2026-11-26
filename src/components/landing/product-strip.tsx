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
    <section id="producto" className="bg-sunken pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="mx-auto grid w-full max-w-[1440px] gap-4 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
        {steps.map((step, index) => (
          <Reveal key={step.n} delay={index * 80}>
          <GlowCard className="p-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-wide text-accent-soft">{step.n}</span>
              <step.icon className="size-6 text-accent-soft" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-lg font-medium text-ink transition-colors group-hover:text-accent-soft">
              {step.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
          </GlowCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
