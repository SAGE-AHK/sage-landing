import ProfileCard from "../effects/profile-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { teamGroups } from "./team";

function formatTeamsFooter(teams: string) {
  return teams
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" - ");
}

export function DevelopersSection() {
  return (
    <section id="desarrolladores" className="bg-canvas pt-8 pb-14 md:pt-14 md:pb-28">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Desarrolladores"
            title="Quiénes arman SAGE."
            text="Quince personas entre frontend, backend, IA y analítica."
          />
        </Reveal>
        <div className="mt-14 flex flex-col gap-16">
          {teamGroups.map((group) => (
            <Reveal key={group.id}>
              <h3 className="text-center font-mono text-xs tracking-[0.16em] text-accent uppercase">
                {group.title}
              </h3>
              <ul className="mt-8 flex flex-wrap items-start justify-center gap-8">
                {group.members.map((person) => (
                  <li key={person.name}>
                    <ProfileCard
                      name={person.name}
                      title={person.career}
                      bio={person.aporte}
                      footerLabel={formatTeamsFooter(person.teams)}
                      status=""
                      contactText={person.contactLabel ?? "LinkedIn"}
                      contactHref={person.contactUrl ?? person.linkedin ?? ""}
                      avatarUrl={person.avatarUrl}
                      theme="dark"
                      holo={0.8}
                      glare={0.5}
                      enableTilt
                      intro
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}