import {
  ChatBubbleLeftRightIcon,
  MapIcon,
  ServerStackIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import { GlowCard } from "./glow-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const nodes = [
  {
    kicker: "Consola",
    title: "SAGE web",
    text: "Next.js. Panel general, eventos, invitados, proveedores, usuarios y el editor de planos.",
    detail: "La operación del día",
    icon: WindowIcon,
    accent: "text-accent-soft",
  },
  {
    kicker: "Venue",
    title: "Planos interiores",
    text: "Zonas, puntos de interés y rutas. Ese plano es el contexto con el que EVA orienta.",
    detail: "Del plano a la respuesta",
    icon: MapIcon,
    accent: "text-accent-soft",
  },
  {
    kicker: "Asistente",
    title: "EVA",
    text: "FastAPI. Recepción, consultas del evento y orientación, con modelos locales.",
    detail: "Sin API externa en runtime",
    icon: ChatBubbleLeftRightIcon,
    accent: "text-live",
  },
  {
    kicker: "API",
    title: "sage-gestion",
    text: "Nest. Eventos, personas, proveedores y la cuenta de quien entra a la consola.",
    detail: "Auth0 en el acceso",
    icon: ServerStackIcon,
    accent: "text-accent-soft",
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosistema" className="bg-sunken py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12">
        <SectionHeading
          align="center"
          eyebrow="Cómo está armado"
          title="Cuatro piezas, una operación."
          text="La consola habla con la API. Los planos viven con el evento. EVA los usa para orientar a quien está en el venue."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {nodes.map((node, index) => (
            <Reveal key={node.title} delay={index * 80}>
            <GlowCard className="h-full p-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-panel-high">
                <node.icon className={`size-6 ${node.accent}`} aria-hidden="true" />
              </div>
              <p className="mt-5 font-mono text-[11px] tracking-wide text-faint uppercase">{node.kicker}</p>
              <h3 className="mt-1 text-lg font-medium transition-colors group-hover:text-accent-soft">{node.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{node.text}</p>
              <p className="mt-5 flex items-center gap-2 font-mono text-xs text-live">
                <span className="size-1.5 rounded-full bg-live" />
                {node.detail}
              </p>
            </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
