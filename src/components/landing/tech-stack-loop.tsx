import {
  SiCss,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import LogoLoop, { type LogoItem } from "../effects/logo-loop";
import { HeroiconsMark } from "./marquee-brand-svgs";

const techLogos: LogoItem[] = [
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com", hoverColor: "#2496ed" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org", hoverColor: "#ffffff" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    hoverColor: "#3178c6",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    hoverColor: "#f7df1e",
  },
  { node: <SiPython />, title: "Python", href: "https://www.python.org", hoverColor: "#3776ab" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com", hoverColor: "#f05032" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org", hoverColor: "#4169e1" },
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com", hoverColor: "#e0234e" },
  { node: <SiReact />, title: "React", href: "https://react.dev", hoverColor: "#61dafb" },
  { node: <SiVite />, title: "Vite", href: "https://vite.dev", hoverColor: "#646cff" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com", hoverColor: "#38bdf8" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com", hoverColor: "#ffffff" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com", hoverColor: "#f24e1e" },
  {
    node: <SiHtml5 />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    hoverColor: "#e34f26",
  },
  {
    node: <SiCss />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    hoverColor: "#663399",
  },
  {
    node: <HeroiconsMark />,
    title: "Heroicons",
    href: "https://heroicons.com",
    hoverColor: "#8b5cf6",
  },
];

export function TechStackLoop() {
  return (
    <div className="w-full overflow-x-clip">
      <div className="h-14 md:h-16">
        <LogoLoop
          logos={techLogos}
          speed={38}
          direction="left"
          logoHeight={32}
          gap={52}
          hoverSpeed={0}
          fadeOut
          fadeOutWidth={0.12}
          scaleOnHover
          muted={0.22}
          layout="line"
          labels="hover"
          intro
          ariaLabel="Tecnologías que usa SAGE"
          className="h-full text-muted [&_svg]:block [&_svg]:h-[1em] [&_svg]:w-[1em]"
        />
      </div>
    </div>
  );
}