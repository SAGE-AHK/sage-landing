const columns = [
  {
    title: "Producto",
    links: [
      { href: "#producto", label: "Capacidades" },
      { href: "#funciones", label: "Funciones" },
      { href: "#eva", label: "EVA" },
    ],
  },
  {
    title: "Sistema",
    links: [
      { href: "#ecosistema", label: "Ecosistema" },
      { href: "#desarrolladores", label: "Desarrolladores" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-black/50">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-8 md:py-9 lg:px-12">
        <div className="flex flex-col gap-7 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-x-10 lg:gap-x-14">
          <div className="min-w-0 sm:max-w-[16rem]">
            <div className="flex items-center gap-2">
              <img src="/sage-logo.svg" alt="" className="h-6 w-auto" />
              <span className="text-sm font-semibold">SAGE</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-muted sm:text-sm">
              Consola para operar eventos: invitados, proveedores, planos y lectura en vivo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:gap-x-12">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="font-mono text-[11px] tracking-wide text-ink uppercase">{column.title}</h2>
                <ul className="mt-2 space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-muted transition-colors hover:text-ink sm:text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 border-t border-white/5 pt-4 text-xs text-faint">© {new Date().getFullYear()} SAGE</p>
      </div>
    </footer>
  );
}