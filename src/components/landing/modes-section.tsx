import { GlowCard } from "./glow-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ModesSection() {
  return (
    <section className="bg-canvas pb-20 md:pb-28">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-4 md:px-8 lg:grid-cols-12 lg:px-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow="El mismo evento"
            title="En vivo mientras ocurre. Finalizado cuando cierra."
            text="El dashboard del evento no cambia de producto: cambia la lectura. Durante la jornada se ve la sala. Después queda el cierre de esa misma operación."
          />
        </Reveal>
        <Reveal className="lg:col-span-7" delay={80}>
        <GlowCard as="div" className="overflow-hidden">
          <div className="grid sm:grid-cols-2">
            <div className="flex min-h-72 flex-col justify-between bg-sunken p-6 md:p-8">
              <div>
                <p className="flex items-center gap-2 font-mono text-xs text-live">
                  <span className="size-1.5 rounded-full bg-live" />
                  En vivo
                </p>
                <h3 className="mt-4 text-xl font-medium">La sala, ahora</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>Participantes en el momento</li>
                  <li>Flujo y ocupación por franja</li>
                  <li>Satisfacción mientras la gente está adentro</li>
                </ul>
              </div>
              <p className="mt-8 font-mono text-[11px] text-faint">Dashboard del evento en curso</p>
            </div>
            <div className="flex min-h-72 flex-col justify-between bg-[#eef2f8] p-6 text-[#0e1726] md:p-8">
              <div>
                <p className="font-mono text-xs font-medium tracking-wide text-[#1e5bba] uppercase">
                  Finalizado
                </p>
                <h3 className="mt-4 text-xl font-semibold">El cierre</h3>
                <ul className="mt-4 space-y-2 text-sm text-[#475569]">
                  <li>La misma operación, ya terminada</li>
                  <li>Satisfacción final del evento</li>
                  <li>Flujo y asistencia para revisar después</li>
                </ul>
              </div>
              <p className="mt-8 font-mono text-[11px] text-[#64748b]">Variante de evento cerrado</p>
            </div>
          </div>
        </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
