import { appLinks } from "../../lib/app-url";
import { Reveal } from "./reveal";

const columns = [
  {
    title: "Producto",
    links: [
      { href: "#producto", label: "Capacidades" },
      { href: "#funciones", label: "Funciones" },
      { href: "#ecosistema", label: "Ecosistema" },
    ],
  },
  {
    title: "Sistema",
    links: [
      { href: "#desarrolladores", label: "Desarrolladores" },
      { href: appLinks.login, label: "Iniciar sesión" },
      { href: appLinks.register, label: "Crear cuenta" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-sunken">
      <Reveal>
      <div className="mx-auto w-full max-w-[1440px] px-4 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/sage-logo.svg" alt="" className="h-7 w-auto" />
              <span className="font-semibold">SAGE</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Consola para operar eventos: invitados, proveedores, planos y la lectura en vivo de la sala.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-mono text-xs tracking-wide text-ink uppercase">{column.title}</h2>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-faint">© {new Date().getFullYear()} SAGE</p>
      </div>
      </Reveal>
    </footer>
  );
}
