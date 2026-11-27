export interface TeamMember {
  name: string;
  career: string;
  teams: string;
  aporte: string;
  handle?: string;
  avatarUrl?: string;
  /** @deprecated prefer contactUrl */
  linkedin?: string;
  contactUrl?: string;
  contactLabel?: string;
}

export interface TeamGroup {
  id: string;
  title: string;
  members: TeamMember[];
}

export const teamGroups: TeamGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    members: [
      {
        name: "Joaquín Allue",
        career: "Sistemas IT",
        teams: "Frontend (líder), IA",
        aporte:
          "Lideró el frontend del avatar y del BackOffice. Diseñó y modeló el avatar 3D, integró Spline con React y definió la arquitectura y el diseño visual de las interfaces.",
        handle: "joaquin-allue",
        avatarUrl: "/team/joaquin-allue.jpg",
        contactUrl: "https://www.linkedin.com/in/joaquin-allue-b3a60a272/",
        contactLabel: "LinkedIn",
      },
      {
        name: "Martina Benegas",
        career: "Sistemas IT",
        teams: "Frontend",
        aporte:
          "Implementó el módulo de clientes y las vistas de eventos e invitados. Mejoró dashboards, gráficos y modo claro/oscuro, e integró el frontend con el backend.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend y gestión",
    members: [
      {
        name: "Santiago Calvelo",
        career: "Sistemas IT",
        teams: "Backend / Gestión (líder), Deploy",
        aporte:
          "Implementó invitaciones con QR, acreditación y sincronización con EVA, navegación interior y autenticación con Auth0. Automatizó el despliegue con Docker y GitHub Actions.",
        contactUrl: "https://santiago-calvelo.github.io/curriculum",
        contactLabel: "CV",
        avatarUrl: "/team/santiago-calvelo.png",
      },
      {
        name: "Leandro Laiker",
        career: "Sistemas IT",
        teams: "PM, Backend / Gestión, Deploy",
        aporte:
          "Coautor de la idea. Coordinó equipos y avances, gestionó el vínculo con AHK y coordinó la colaboración para la voz de EVA. Desarrolló los módulos de mapas y proveedores y ayudó a automatizar correos.",
        avatarUrl: "/team/leandro-laiker.jpg",
      },
      {
        name: "Joaquín Tarczydlo",
        career: "Sistemas IT",
        teams: "Backend / Gestión",
        aporte:
          "Implementó la importación CSV y los grupos de invitados, vinculó ítems de la agenda con zonas del evento y desarrolló la exportación de métricas a PDF.",
      },
      {
        name: "Leonardo Fernández",
        career: "Sistemas IT",
        teams: "Backend / Gestión",
        aporte: "Trabajó en la integración del backend con el frontend de SAGE.",
      },
      {
        name: "Guillermo Mooney",
        career: "Sistemas IT",
        teams: "Backend / Gestión",
        aporte:
          "Construyó la maqueta del holograma de EVA y trabajó en la configuración dinámica del agente para distintos eventos.",
      },
      {
        name: "Nahuel Herrera",
        career: "Sistemas IT",
        teams: "Backend / Gestión",
        aporte: "Realizó pruebas de calidad (QA) y trabajó en integraciones.",
        avatarUrl: "/team/nahuel-herrera.png",
      },
    ],
  },
  {
    id: "ia",
    title: "IA",
    members: [
      {
        name: "Martín Díaz Villarrubia",
        career: "Data Science",
        teams: "IA (líder), Deploy",
        aporte:
          "Coautor de la idea. Desarrolló el núcleo de EVA (LLM, embeddings, TTS y flujo conversacional), animó el avatar e integró los módulos de SAGE. Estabilizó el rig y configuró el balanceo de carga para el despliegue.",
        avatarUrl: "/team/martin-diaz-villarrubia.jpg",
        contactUrl: "https://www.linkedin.com/in/martin-ezequiel-diaz-villarrubia-b1a79a256/",
        contactLabel: "LinkedIn",
      },
    ],
  },
  {
    id: "analitica",
    title: "Analítica",
    members: [
      {
        name: "Lucas Cáceres",
        career: "Data Science",
        teams: "Analytics (líder)",
        aporte:
          "Implementó el envío y la recepción de feedback de EVA por lotes, unificó la persistencia en PostgreSQL, conectó los dashboards a datos reales y desarrolló los indicadores de Instagram.",
        avatarUrl: "/team/lucas-caceres.jpeg",
        contactUrl: "https://www.linkedin.com/in/lucas-caceres-898b35275",
        contactLabel: "LinkedIn",
      },
      {
        name: "Nancy Figueredo",
        career: "Data Science",
        teams: "PM, Analytics",
        aporte:
          "Coordinó equipos, tareas y prioridades. Desarrolló las vistas de invitados, grupos, importación CSV y cuenta, y colaboró en conectar los dashboards de métricas con datos reales.",
        avatarUrl: "/team/nancy-figueredo.jpg",
        contactUrl: "https://www.linkedin.com/in/nancy-figueredo-869172314/",
        contactLabel: "LinkedIn",
      },
      {
        name: "Luca Villani",
        career: "Data Science",
        teams: "Analytics",
        aporte:
          "Coautor de la idea. Amplió el clasificador de feedback de EVA, incorporó persistencia en PostgreSQL para conversaciones y datos de cámaras Xovis e integró el monitoreo de hashtags con Instagram Graph API.",
      },
      {
        name: "Mikel Taberna",
        career: "Data Science",
        teams: "Analytics",
        aporte:
          "Desarrolló vistas y gráficos de analítica de eventos, implementó PostHog y definió los campos iniciales para almacenar feedback.",
        avatarUrl: "/team/mikel-taberna.jpg",
      },
      {
        name: "Lucca Cavalcanti",
        career: "Data Science",
        teams: "Analytics",
        aporte: "Colaboró en la observabilidad de Analytics y en la integración de PostHog.",
        avatarUrl: "/team/lucca-cavalcanti.jpg",
      },
      {
        name: "Matías Martyn",
        career: "Data Science",
        teams: "Analytics",
        aporte:
          "Responsable de cámaras Xovis. Planificó su instalación, configuró y validó el conteo de personas y colaboró en el procesamiento y guardado de datos de ingresos, egresos y ocupación.",
        avatarUrl: "/team/matias-martyn.png",
      },
    ],
  },
];
