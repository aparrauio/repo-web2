# Pasos para publicar la app en GitHub Pages - Desarrollo Web 2
## Parte 3 de la Sesión 8 — Guía para seguir en clase

Esta guía asume que ya tienes tu proyecto de React funcionando localmente
con `npm run dev` (usando tu carpeta `solucion/` o tu `enunciado/` ya
completado). Vamos a publicarlo para que cualquiera pueda verlo en internet.

---

## Paso 1 — Crear el repositorio en GitHub

1. Entra a [github.com](https://github.com) y haz clic en **"New repository"**.
2. Ponle un nombre corto, sin espacios, por ejemplo: `consultoria-react`.
3. Márcalo como **público** (GitHub Pages gratuito requiere repos públicos,
   salvo que tengas GitHub Pro/Team/Enterprise).
4. No agregues README, .gitignore ni licencia desde la interfaz web (ya los
   tenemos localmente); crea el repositorio vacío.
5. **Anota el nombre exacto del repositorio** — lo necesitarás en el Paso 3.

---

## Paso 2 — Subir tu proyecto a ese repositorio

Desde la terminal, dentro de la carpeta de tu proyecto React:

```bash
git init
git add .
git commit -m "Landing page en React: primera versión"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/consultoria-react.git
git push -u origin main
```

Reemplaza `TU_USUARIO` por tu nombre de usuario de GitHub, y
`consultoria-react` por el nombre real que le pusiste al repositorio.

---

## Paso 3 — Configurar el "base" de Vite (paso crítico)

GitHub Pages publica tu sitio en una URL con esta forma:

```
https://TU_USUARIO.github.io/consultoria-react/
```

Nota que tu app **no vive en la raíz** del dominio, sino en una subcarpeta
con el nombre del repositorio. Por eso hay que decirle esto a Vite:

Abre `vite.config.js` y asegúrate de que `base` coincida EXACTO con el
nombre de tu repositorio (con `/` al inicio y al final):

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/consultoria-react/", // <- cámbialo si tu repo se llama distinto
});
```

> Si olvidas este paso, tu página se verá "rota" (sin estilos, sin JS) al
> publicarla, aunque funcione perfecto en `npm run dev`.

---

## Paso 4 — Instalar la herramienta de despliegue

```bash
npm install --save-dev gh-pages
```

Este paquete ya está declarado en `package.json` (ver el scaffold de este
reto), pero si empezaste un proyecto desde cero, este es el comando que
te faltaría.

Verifica que tu `package.json` tenga estos dos scripts (ya vienen
incluidos en el scaffold de este ZIP):

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

- `predeploy` genera la versión de producción (carpeta `dist/`) antes de publicar.
- `deploy` sube esa carpeta `dist/` a una rama especial llamada `gh-pages`.

---

## Paso 5 — Publicar

```bash
npm run deploy
```

Este comando:
1. Ejecuta `npm run build` (gracias a `predeploy`), generando `dist/`.
2. Sube el contenido de `dist/` a la rama `gh-pages` de tu repositorio.

---

## Paso 6 — Activar GitHub Pages en la configuración del repositorio

1. Ve a tu repositorio en GitHub → pestaña **Settings**.
2. En el menú lateral, busca **Pages**.
3. En "Build and deployment" → "Source", selecciona **"Deploy from a branch"**.
4. En "Branch", selecciona **`gh-pages`** y la carpeta **`/ (root)`**.
5. Guarda. GitHub tardará uno o dos minutos en publicar tu sitio.

---

## Paso 7 — Verificar que funciona

Abre en el navegador:

```
https://TU_USUARIO.github.io/consultoria-react/
```

Deberías ver tu landing page completa, incluyendo la sección "En qué estoy
trabajando" cargando repos en vivo desde el API de GitHub.

### Si la página se ve "rota" (sin estilos)

Casi siempre es porque el `base` de `vite.config.js` no coincide con el
nombre real del repositorio. Corrige el valor, guarda, y vuelve a correr:

```bash
npm run deploy
```

### Si la sección de GitHub muestra un error 403

El API de GitHub sin autenticar permite 60 peticiones/hora por IP. Si toda
la clase está probando el mismo sitio desde la misma red, es fácil llegar a
ese límite. Espera unos minutos y vuelve a intentar (o usa el botón
"Reintentar" de la sección).

---

## Paso 8 — Publicar cambios futuros

Cada vez que modifiques tu código:

```bash
git add .
git commit -m "Descripción del cambio"
git push
npm run deploy
```

`git push` actualiza el código fuente en `main`; `npm run deploy` actualiza
la versión publicada en `gh-pages`. Son dos pasos independientes.
