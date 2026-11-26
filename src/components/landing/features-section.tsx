import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  IdentificationIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { GlowCard } from "./glow-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const phases = [
  {
    label: "Antes",
    title: "Se prepara",
    text: "Nombre, fecha, invitados y el plano del lugar.",
  },
  {
    label: "Durante",
    title: "Está en curso",
    text: "Cuánta gente hay, cómo se mueve y qué tan bien está saliendo.",
  },
  {
    label: "Después",
    title: "Ya terminó",
    text: "Queda el resumen de esa misma jornada.",
  },
];

export function FeaturesSection() {
  return (
    <section id="funciones" className="bg-sunken pt-14 pb-14 md:pt-28 md:pb-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Qué hace SAGE"
            title="Un solo lugar para el evento, de punta a punta."
            text="Armás quién viene y cómo es el lugar. Mientras ocurre, ves cómo está la sala. EVA responde a quien llega."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          <Reveal className="md:col-span-3" delay={80}>
            <GlowCard className="overflow-hidden p-0">
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_140%_120%_at_50%_-30%,rgba(91,141,239,0.2),transparent_58%),radial-gradient(ellipse_90%_70%_at_100%_100%,rgba(91,141,239,0.08),transparent_55%)]"
                aria-hidden
              />
              <div className="relative z-[1] p-4 sm:p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-accent-soft">
                      Antes, durante y después
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-muted">
                      Es el mismo evento. Cambia lo que ves según el momento.
                    </p>
                  </div>
                  <CalendarDaysIcon className="size-5 shrink-0 text-accent-soft" aria-hidden="true" />
                </div>
                <ol className="mt-6 flex list-none flex-col gap-1 sm:flex-row sm:items-stretch sm:gap-0">
                  {phases.map((phase, index) => (
                    <Fragment key={phase.title}>
                      {index > 0 ? <PhaseFlowArrow /> : null}
                      <li
                        className={`min-w-0 flex-1 rounded-xl p-4 ${phase.label === "Durante" ? "bg-accent/15" : "bg-sunken"}`}
                      >
                        <p className="font-mono text-[11px] tracking-wide text-faint uppercase">{phase.label}</p>
                        <p
                          className={`mt-1 text-sm font-medium ${phase.label === "Durante" ? "text-accent-soft" : "text-ink"}`}
                        >
                          {phase.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted">{phase.text}</p>
                      </li>
                    </Fragment>
                  ))}
                </ol>
              </div>
            </GlowCard>
          </Reveal>

          <FeatureCard
            delay={0}
            kicker="Invitados"
            icon={IdentificationIcon}
            title="Quién viene"
            text="La lista de personas del evento, en el mismo panel."
          />
          <FeatureCard
            delay={80}
            kicker="El lugar"
            icon={MapIcon}
            title="El mapa del venue"
            text="Zonas y puntos del lugar, para saber dónde está cada cosa."
          />
          <FeatureCard
            delay={160}
            kicker="EVA"
            icon={ChatBubbleLeftRightIcon}
            title="Alguien que orienta"
            text="Responde dudas del evento y indica cómo llegar a un punto del plano."
          />
        </div>
      </div>
    </section>
  );
}

function PhaseFlowArrow() {
  return (
    <li
      className="flex list-none items-center justify-center py-1 sm:w-10 sm:flex-none sm:flex-col sm:py-0"
      aria-hidden
    >
      <div className="flex flex-col items-center sm:hidden">
        <div className="h-5 w-px bg-gradient-to-b from-transparent via-accent/45 to-accent-soft/80" />
        <ChevronDownIcon className="size-4 text-accent-soft" />
      </div>
      <div className="hidden items-center sm:flex">
        <div className="h-px w-6 bg-gradient-to-r from-transparent via-accent/45 to-accent-soft/80" />
        <ChevronRightIcon className="size-4 shrink-0 text-accent-soft" />
      </div>
    </li>
  );
}

function FeatureCard({
  delay = 0,
  kicker,
  title,
  text,
  icon: Icon,
}: {
  delay?: number;
  kicker: string;
  title: string;
  text: string;
  icon: typeof MapIcon;
}) {
  return (
    <Reveal delay={delay}>
      <GlowCard className="flex h-full flex-col p-4 sm:p-7">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <span className="font-mono text-[11px] tracking-wide text-faint uppercase">{kicker}</span>
            <h3 className="mt-1 text-base font-medium leading-snug transition-colors group-hover:text-accent-soft sm:text-lg">
              {title}
            </h3>
          </div>
          <Icon className="size-5 shrink-0 text-accent-soft sm:size-6" aria-hidden="true" />
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
      </GlowCard>
    </Reveal>
  );
}
