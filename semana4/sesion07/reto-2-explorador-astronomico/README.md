# Reto 2 — Explorador Astronómico de la NASA 🚀

## Cómo ejecutar

1. Abre una terminal dentro de `enunciado/` (o `solucion/`).
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Copia el archivo de variables de entorno:
   ```bash
   cp .env.example .env
   ```
   (Windows / PowerShell: `copy .env.example .env`)
4. Deja `DEMO_KEY` en `.env`, o reemplázalo por tu propia clave gratuita de
   [api.nasa.gov](https://api.nasa.gov).
5. Corre el proyecto:
   ```bash
   npm run dev
   ```
6. Abre la URL indicada (normalmente `http://localhost:5173`) y elige una
   fecha en el selector.

## Cómo obtener tu propia API key (opcional, recomendado)

1. Ve a [api.nasa.gov](https://api.nasa.gov).
2. Llena el formulario con tu nombre y correo (gratis e inmediato).
3. Recibirás tu API key por correo al instante.
4. Pégala en tu `.env`, reemplazando `DEMO_KEY`.

Ver `ENUNCIADO.md` y `PISTA.md` para el detalle del reto.
