import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { appLinks } from "../../lib/app-url";

const navLinkClass =
  "rounded-lg px-3 py-1.5 text-sm font-medium text-ink [text-shadow:0_0_12px_rgba(14,14,16,0.92),0_1px_1px_rgba(14,14,16,0.85)] transition-[color,background-color,box-shadow,text-shadow] duration-200 hover:bg-white/10 hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] hover:[text-shadow:0_0_16px_rgba(91,141,239,0.45),0_0_12px_rgba(14,14,16,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const mobileNavLinkClass =
  "rounded-lg px-3 py-2.5 text-sm font-medium text-ink transition-[color,background-color] duration-200 hover:bg-panel-high/90 hover:text-accent-soft active:bg-panel-high";

const links = [
  { href: "#producto", label: "Producto" },
  { href: "#funciones", label: "Funciones" },
  { href: "#ecosistema", label: "Ecosistema" },
  { href: "#desarrolladores", label: "Desarrolladores" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-4 md:px-8 lg:px-12">
        <a href="#inicio" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/sage-logo.svg" alt="" className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-tight">SAGE</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Secciones">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navLinkClass}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-line/60 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          {open ? <XMarkIcon className="size-5" /> : <Bars3Icon className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="menu-movil" className="border-t border-white/10 bg-sunken/55 px-4 py-4 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Secciones">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={mobileNavLinkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 sm:hidden">
            <a
              href={appLinks.login}
              className="rounded-xl border border-line/70 px-3.5 py-2.5 text-center text-sm"
            >
              Iniciar sesión
            </a>
            <a
              href={appLinks.register}
              className="rounded-xl bg-accent px-3.5 py-2.5 text-center text-sm font-medium text-white"
            >
              Crear cuenta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
