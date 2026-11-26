export interface TeamMember {
  name: string;
  role: string;
  handle: string;
  avatarUrl: string;
  linkedin: string;
}

/** El resto del equipo entra acá: nombre, rol, foto en public/team y LinkedIn. */
export const team: TeamMember[] = [
  {
    name: "Joaquín Allue",
    role: "Líder de diseño y desarrollo FrontEnd, y creador del diseño 3D de SAGE-EVA",
    handle: "joaquin-allue",
    avatarUrl: "/team/joaquin-allue.jpg",
    linkedin: "https://www.linkedin.com/in/joaquin-allue-b3a60a272/",
  },
];
