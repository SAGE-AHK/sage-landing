import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  IdentificationIcon,
  BuildingStorefrontIcon,
  MapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { GlowCard } from "./glow-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const phases = [
  { label: "Antes", title: "Planificación", text: "Datos del evento, invitados y el plano del venue." },
  { label: "Ahora", title: "En vivo", text: "Satisfacción, flujo y ocupación mientras ocurre." },
  { label: "Después", title: "Finalizado", text: "La misma operación, leída con el evento ya cerrado." },
];

export function FeaturesSection() {
  return (
    <section id="funciones" className="bg-canvas py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Qué opera SAGE"
            title="Cada pieza del evento, en la misma consola."
            text="Primero el evento, después quién entra y quién trabaja, el plano del venue, y la lectura mientras ocurre."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2 lg:col-span-3" delay={80}>
          <GlowCard className="overflow-hidden p-7 lg:p-8">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgba(91,141,239,0.18),transparent_62%)]"
              aria-hidden
            />
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-panel-high px-2 py-1 font-mono text-[11px] tracking-wide text-accent-soft uppercase">
                Eventos
              </span>
              <CalendarDaysIcon className="size-5 text-accent-soft" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-2xl font-medium tracking-tight transition-colors group-hover:text-accent-soft">
              Del armado al cierre
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted md:text-base">
              Un evento próximo se prepara en la consola. Cuando arranca, el dashboard pasa a
              lectura en vivo. Al terminar, queda la variante finalizada del mismo evento.
            </p>
            <ol className="relative mt-6 flex list-none flex-col gap-1 sm:flex-row sm:items-stretch sm:gap-0">
              {phases.map((phase, index) => (
                <Fragment key={phase.title}>
                  {index > 0 ? <PhaseFlowArrow /> : null}
                  <li
                    className={`min-w-0 flex-1 rounded-xl p-4 ${phase.label === "Ahora" ? "bg-accent/15" : "bg-sunken"}`}
                  >
                    <p className="font-mono text-[11px] tracking-wide text-faint uppercase">{phase.label}</p>
                    <p
                      className={`mt-1 text-sm font-medium ${phase.label === "Ahora" ? "text-accent-soft" : "text-ink"}`}
                    >
                      {phase.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted">{phase.text}</p>
                  </li>
                </Fragment>
              ))}
            </ol>
          </GlowCard>
          </Reveal>

          <FeatureCard
            delay={0}
            kicker="Invitados"
            icon={IdentificationIcon}
            title="Quién entra al evento"
            text="Altas, importación y el listado de invitados ligados al evento, desde la misma navegación que el resto de la operación."
          />
          <FeatureCard
            delay={80}
            kicker="Proveedores"
            icon={BuildingStorefrontIcon}
            title="Quién trabaja el venue"
            text="El catálogo de proveedores del evento, junto a invitados y usuarios, sin salir de la consola."
          />
          <FeatureCard
            delay={160}
            kicker="Planos"
            icon={MapIcon}
            title="Zonas y puntos de interés"
            text="El plano del venue, con zonas y POIs, arma el contexto que EVA usa para orientar adentro."
          />

          <Reveal className="md:col-span-2" delay={0}>
          <GlowCard className="p-7 lg:p-8">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-live/10 px-2 py-1 font-mono text-[11px] tracking-wide text-live uppercase">
                EVA
              </span>
              <ChatBubbleLeftRightIcon className="size-5 text-live" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-2xl font-medium tracking-tight transition-colors group-hover:text-accent-soft">
              Recepción dentro del venue
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted md:text-base">
              EVA es el asistente del evento. Responde consultas, orienta con el plano y junta
              feedback. Corre con modelos locales, sin una API de lenguaje externa en runtime.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-sunken/80 p-4">
                <p className="text-sm font-medium">Lectura de la sala</p>
                <p className="mt-1 text-xs leading-5 text-muted">
                  Satisfacción, flujo de participantes y ocupación por franja.
                </p>
              </div>
              <div className="rounded-xl bg-sunken/80 p-4">
                <p className="text-sm font-medium">Consultas del evento</p>
                <p className="mt-1 text-xs leading-5 text-muted">
                  Horarios, lugares y lo que el invitado pregunta al llegar.
                </p>
              </div>
              <div className="rounded-xl bg-sunken/80 p-4">
                <p className="text-sm font-medium">Orientación y feedback</p>
                <p className="mt-1 text-xs leading-5 text-muted">
                  Rutas hacia un punto del plano, y la satisfacción que vuelve al panel.
                </p>
              </div>
            </div>
          </GlowCard>
          </Reveal>

          <FeatureCard
            delay={80}
            kicker="Usuarios"
            icon={UserGroupIcon}
            title="La organización"
            text="Cuentas de quien opera SAGE. La administración de usuarios queda para el rol que administra."
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
    <GlowCard className="flex h-full flex-col p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-wide text-faint uppercase">{kicker}</span>
        <Icon className="size-5 text-accent-soft" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-medium transition-colors group-hover:text-accent-soft">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </GlowCard>
    </Reveal>
  );
}
