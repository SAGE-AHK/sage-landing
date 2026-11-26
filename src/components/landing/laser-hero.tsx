import { useEffect, useRef, useState } from "react";
import LaserFlow from "../effects/laser-flow";

type PreviewMode = "reveal" | "still";

function supportsWebGL2() {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");
    const ok = Boolean(gl);
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return ok;
  } catch {
    return false;
  }
}

function readPreviewMode(webgl: boolean): PreviewMode {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const wide = window.matchMedia("(min-width: 768px)").matches;
  return webgl && finePointer && wide ? "reveal" : "still";
}

function readBeamPosition() {
  if (window.matchMedia("(min-width: 1024px)").matches) return 0.68;
  if (window.matchMedia("(min-width: 768px)").matches) return 0.62;
  return 0.55;
}

export function LaserHero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const webglRef = useRef(false);
  const [mode, setMode] = useState<PreviewMode>(() => {
    const webgl = supportsWebGL2();
    webglRef.current = webgl;
    return readPreviewMode(webgl);
  });
  const [beamPosition, setBeamPosition] = useState(readBeamPosition);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const wide = window.matchMedia("(min-width: 768px)");
    const desktop = window.matchMedia("(min-width: 1024px)");

    const sync = () => {
      setMode(readPreviewMode(webglRef.current));
      setBeamPosition(readBeamPosition());
    };

    sync();
    fine.addEventListener("change", sync);
    wide.addEventListener("change", sync);
    desktop.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      wide.removeEventListener("change", sync);
      desktop.removeEventListener("change", sync);
    };
  }, []);

  const reveal = mode === "reveal";

  return (
    <section id="inicio" className="relative overflow-hidden bg-sunken">
      <div className="pointer-events-none absolute inset-0 z-0">
        {webglRef.current && (
          <LaserFlow
            surfaceRef={cardRef}
            beamPosition={beamPosition}
            color="#5b8def"
            intensity={1.8}
            beamWidth={1.5}
            flare={1.5}
            spread={1.5}
            spill={1}
            fog={0.2}
            dust={1.6}
            streaks={1.5}
            dots={1}
            pulse={1.5}
            speed={1.5}
            seed={3}
            mouseInteraction={reveal}
            className="h-full w-full"
          />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,141,239,0.14)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25" />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pt-24 md:px-8 md:pt-28 lg:px-12 lg:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel/80 px-3 py-1.5 backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-live" />
          </span>
          <span className="font-mono text-xs tracking-wide text-muted">
            Operación de eventos <span className="text-faint">·</span>{" "}
            <span className="text-live">En vivo</span> <span className="text-faint"></span>
          </span>
        </div>

        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink max-md:[text-shadow:0_0_18px_#0e0e10] md:text-6xl md:leading-[1.05]">
            Gestioná el evento entero desde{" "}
            <span className="bg-gradient-to-r from-accent-soft via-accent to-live bg-clip-text text-transparent max-md:[text-shadow:0_0_18px_#0e0e10]">
              un solo panel.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-muted max-md:[text-shadow:0_0_18px_#0e0e10] md:text-lg">
            Invitados, proveedores y planos del venue, con satisfacción, flujo y ocupación
            mientras el evento ocurre. EVA orienta a quien llega.
          </p>
        </div>

      </div>

      <div
        ref={cardRef}
        className="relative z-10 mx-auto mt-6 w-[min(1100px,92vw)] overflow-hidden rounded-t-3xl border border-b-0 border-white/10 bg-[#0b0b0d] shadow-[0_-24px_80px_-20px_rgba(91,141,239,0.45)] md:mt-10 md:w-[min(1100px,84vw)]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-accent-soft to-transparent" />
        <div className="flex h-11 items-center gap-2 border-b border-white/10 bg-black/35 px-4 backdrop-blur-md">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 font-mono text-[11px] tracking-wide text-faint">Panel en vivo</span>
        </div>
        <div className="relative h-[300px] sm:h-[380px] md:h-[460px]">
          <img
            src="/preview-system.png"
            alt="Panel de un evento en vivo en SAGE: satisfacción, flujo de participantes y ocupación."
            className="h-full w-full object-cover object-left-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-35% via-sunken/55 to-sunken" />
        </div>
      </div>
    </section>
  );
}
