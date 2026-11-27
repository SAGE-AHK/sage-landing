import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinkClass =
  "inline-block origin-center rounded-lg px-3 py-1.5 text-sm font-semibold tracking-tight text-white [text-shadow:0_0_1px_rgba(0,0,0,1),0_1px_3px_rgba(0,0,0,0.9),0_0_18px_rgba(14,14,16,0.95)] transition-[color,background-color,transform,box-shadow,text-shadow] duration-200 ease-out hover:scale-105 hover:bg-white/14 hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)] hover:[text-shadow:0_0_1px_rgba(0,0,0,1),0_1px_4px_rgba(0,0,0,0.95),0_0_20px_rgba(91,141,239,0.4)] motion-reduce:transition-[color,background-color,box-shadow,text-shadow] motion-reduce:hover:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const mobileNavLinkClass =
  "inline-block origin-center rounded-lg px-3 py-2.5 text-sm font-semibold text-ink transition-[color,background-color,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-panel-high/90 hover:text-accent-soft active:scale-[0.99] active:bg-panel-high motion-reduce:hover:transform-none";

const links = [
  { href: "#producto", label: "Producto" },
  { href: "#funciones", label: "Funciones" },
  { href: "#eva", label: "EVA" },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(14,14,16,0.55)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl backdrop-saturate-150">
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
        </div>
      )}
    </header>
  );
}
