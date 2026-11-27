import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const points = [
  "Consultas del evento: horarios, lugares y lo que preguntan al llegar.",
  "Cómo llegar a un punto del plano.",
  "Lo que la gente cuenta vuelve al panel.",
];

export function EvaSection() {
  return (
    <section id="eva" className="bg-canvas py-10 md:py-16">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-12">
        <Reveal className="flex h-full flex-col justify-center lg:min-h-0">
          <SectionHeading
            eyebrow="EVA"
            title="Alguien que te orienta en el evento."
            text="Responde dudas del evento e indica cómo llegar a un punto del plano. Para hablar, decí “EVA”."
          />
          <ul className="mt-8 max-w-2xl space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-muted md:text-base">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80} className="flex h-full items-center justify-center p-6 lg:justify-end lg:self-center">
          <div className="eva-image-glow aspect-square w-full max-w-[min(100%,360px)] sm:max-w-[420px] lg:max-w-[480px]">
            <div className="relative z-[1] h-full w-full overflow-hidden rounded-[inherit] border border-white/10 bg-sunken shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              <img
                src="/EVA.png"
                alt="EVA, el asistente del evento"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
