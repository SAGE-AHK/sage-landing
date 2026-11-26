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

La captura del hero está en `public/preview-system.png`. Se puede reemplazar sin tocar el código.
