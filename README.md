# juanpage.com

Sitio personal de Juan + rutas especiales para bridges de campañas.

## Features
- Landing estática (App Router + Tailwind) con selector EN/ES y temas.
- Widget Lightning Twentyuno para recibir tips.
- **Bridge dinámico** en `/<slug>` para campañas (ej. `https://703.juanpage.com/disney-703`).
  - Renderiza pantalla branded y auto-redirige tras unos ms.
  - Inyecta UTMs y parámetros definidos en `src/config/routes.ts`.

## Configurar nuevas rutas
1. Edita `src/config/routes.ts` y duplica el objeto base.
2. Ajusta `slug`, `targetUrl`, `utm`, `extraParams` y `delayMs` según la campaña.
3. Corre `npm run dev` y prueba `http://localhost:3000/<slug>`.

## Desarrollo local
```bash
npm install
npm run dev
```
Abre <http://localhost:3000> para ver la landing y <http://localhost:3000/disney-703> para el bridge de Disney.

## Deploy
Conecta el repo a Vercel (ya está linkeado). Para usar un subdominio como `703.juanpage.com`, añade el dominio en Vercel → Project Settings → Domains.
