# SAGE Landing

Landing pública de SAGE. El hero usa el rayo LaserFlow (WebGL2) sobre el panel del sistema.

## Stack

Vite, React 19, TypeScript y Tailwind CSS 4.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

`VITE_SAGE_APP_URL` (ver `.env.example`) es el origen de la consola. Iniciar sesión y Crear cuenta apuntan a `/login` y `/register` de esa URL. Si no está definida, usa `http://localhost:3000`.

`VITE_SITE_URL` es la URL pública de esta landing, sin barra final (por ejemplo `https://sage-landing-two.vercel.app`). El build la usa para la URL canónica, Open Graph, Twitter Card, JSON-LD y `sitemap.xml`. Debe coincidir con el dominio desde el que compartís el link. En **Vercel**, si no la definís, el build usa `VERCEL_PROJECT_PRODUCTION_URL` o `VERCEL_URL` para que `og:image` apunte al mismo host.

La captura del hero está en `public/preview-system.png`. Se puede reemplazar sin tocar el código. La imagen para redes está en `public/og-image.png` (1200×630).

## Build

```bash
npm run build
npm run preview
```

`npm run build` pre-renderiza `/` con `react-dom/server` e inyecta el HTML en `dist/index.html`. En el navegador, `main.tsx` hidrata ese HTML si `#root` ya tiene nodos.

El pre-render no usa Chromium. El primer render del hero no consulta `window`, para que el HTML del servidor y el del cliente coincidan; el rayo WebGL se activa después de hidratar.

## Checklist SEO después del deploy

1. Ver el código fuente de `/` y confirmar que el párrafo del hero está en el HTML, sin ejecutar JavaScript.
2. Abrir `/robots.txt` y `/sitemap.xml` y comprobar que apuntan a `VITE_SITE_URL`.
3. [Prueba de resultados enriquecidos](https://search.google.com/test/rich-results) con la URL publicada.
4. Miniatura al compartir: abrir `/og-image.png` (debe mostrar el hero) y el [depurador de Facebook](https://developers.facebook.com/tools/debug/) → **Scrape Again** (WhatsApp usa el mismo cache). Opcional: [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/). Pegá el link en un chat nuevo.
5. Lighthouse (SEO y accesibilidad): el enlace “Saltar al contenido” debe aparecer al tabular desde el inicio de la página.
