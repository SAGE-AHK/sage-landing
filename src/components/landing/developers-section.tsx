import ProfileCard from "../effects/profile-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { team } from "./team";

export function DevelopersSection() {
  return (
    <section id="desarrolladores" className="bg-canvas py-14 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Desarrolladores"
            title="Quiénes arman SAGE."
            text="Diseño, consola y el asistente del venue. El resto del equipo se suma en esta misma grilla."
          />
        </Reveal>
        <Reveal delay={80}>
        <ul className="mt-14 flex flex-wrap justify-center gap-8">
          {team.map((person) => (
            <li key={person.handle}>
              <ProfileCard
                name={person.name}
                title={person.role}
                handle={person.handle}
                status=""
                contactText="LinkedIn"
                avatarUrl={person.avatarUrl}
                theme="dark"
                holo={0.8}
                glare={0.5}
                enableTilt
                intro
                onContactClick={() => {
                  window.open(person.linkedin, "_blank", "noopener,noreferrer");
                }}
              />
            </li>
          ))}
        </ul>
        </Reveal>
      </div>
    </section>
  );
}
