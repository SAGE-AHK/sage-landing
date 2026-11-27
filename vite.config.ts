import { readdir, unlink } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

const siteTitle = "SAGE — Gestión de eventos";
const siteDescription =
  "SAGE es el panel para operar un evento: invitados, proveedores, planos y métricas en vivo, con EVA en el venue.";

function escapeAttr(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function seoPlugin(siteUrl: string): Plugin {
  const origin = siteUrl.replace(/\/$/, "");
  const pageUrl = origin ? `${origin}/` : "";
  const imageUrl = origin ? `${origin}/og-image.png` : "/og-image.png";

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "SAGE",
        ...(pageUrl ? { "@id": `${pageUrl}#website`, url: pageUrl } : {}),
        description: siteDescription,
        inLanguage: "es",
      },
      {
        "@type": "SoftwareApplication",
        name: "SAGE",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: siteDescription,
        ...(pageUrl ? { url: pageUrl } : {}),
      },
    ],
  }).replaceAll("<", "\\u003c");

  const head = [
    `<meta name="robots" content="index, follow" />`,
    `<meta name="theme-color" content="#131315" />`,
    `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`,
    pageUrl ? `<link rel="canonical" href="${escapeAttr(pageUrl)}" />` : "",
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="es_AR" />`,
    `<meta property="og:title" content="${escapeAttr(siteTitle)}" />`,
    `<meta property="og:description" content="${escapeAttr(siteDescription)}" />`,
    pageUrl ? `<meta property="og:url" content="${escapeAttr(pageUrl)}" />` : "",
    `<meta property="og:image" content="${escapeAttr(imageUrl)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(siteTitle)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(siteDescription)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(imageUrl)}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");

  let assetsDir = "";

  return {
    name: "sage-seo",
    configResolved(config) {
      assetsDir = join(config.root, config.build.outDir, "assets");
    },
    transformIndexHtml(html) {
      if (html.includes('property="og:title"')) return html;
      return html.replace("</head>", `    ${head}\n  </head>`);
    },
    generateBundle() {
      const robots = origin
        ? `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`
        : `User-agent: *\nAllow: /\n`;
      this.emitFile({ type: "asset", fileName: "robots.txt", source: robots });
      if (!origin) {
        this.warn("VITE_SITE_URL no está definida: se omite sitemap.xml y la URL canónica.");
        return;
      }
      const lastmod = new Date().toISOString().slice(0, 10);
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${escapeAttr(pageUrl)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: sitemap });
    },
    async closeBundle() {
      let names: string[] = [];
      try {
        names = await readdir(assetsDir);
      } catch {
        return;
      }
      await Promise.all(
        names
          .filter((name) => name.startsWith("prerender-"))
          .map((name) => unlink(join(assetsDir, name))),
      );

      // `react-dom/server` (build de navegador) deja un MessagePort abierto.
      const active = (
        process as NodeJS.Process & {
          _getActiveHandles?: () => Array<{ unref?: () => void; constructor?: { name?: string } }>;
        }
      )._getActiveHandles?.();
      for (const handle of active ?? []) {
        if (handle.constructor?.name === "MessagePort") handle.unref?.();
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const siteUrl = (process.env.VITE_SITE_URL ?? env.VITE_SITE_URL ?? "").trim();
  const prerenderScript = fileURLToPath(new URL("./src/prerender.tsx", import.meta.url));

  return {
    plugins: [
      react(),
      tailwindcss(),
      seoPlugin(siteUrl),
      ...vitePrerenderPlugin({
        renderTarget: "#root",
        prerenderScript,
      }),
    ],
    server: {
      port: 5173,
    },
  };
});
