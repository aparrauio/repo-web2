# Reto — Fundamentos de TypeScript: Ficha de Personajes RPG 🗡️
## Semana 5 · Sesión 9

## Contexto

Ya construiste componentes de React con props y estado. Hoy vas a dar el
siguiente paso: **describir explícitamente la forma de tus datos** usando
TypeScript, para que el editor (y el compilador) te avisen de errores antes
de que el código llegue a correr.

## Parte 1 — Estudia el punto de partida en JavaScript

Corre `punto-de-partida-js/` (`npm install && npm run dev`). Es una galería
de tarjetas de personajes de rol, con Bootstrap para el diseño:

- `src/data/personajes.js` — un arreglo de objetos "personaje" (nombre,
  clase, nivel, vida, ataque, avatar).
- `src/components/TarjetaPersonaje.jsx` — muestra un personaje en una
  tarjeta de Bootstrap (`card`), incluyendo su "poder total".
- `src/components/GaleriaPersonajes.jsx` — recorre el arreglo y renderiza
  una tarjeta por personaje, además de mostrar quién es el más fuerte.
- `src/utils/calculos.js` — funciones `calcularPoder()`,
  `obtenerPersonajeMasFuerte()` y `formatearNivel()`.

Nota algo importante: **nada en el código dice qué propiedades debe tener
un "personaje"**. Si alguien escribe `personaje.atack` en vez de
`personaje.ataque`, JavaScript no se queja hasta que el programa corre y
falla (o, peor, no falla pero muestra `undefined` silenciosamente).

## Parte 2 — Enunciado del reto: migrar a TypeScript

Usando `reto-typescript/enunciado/` (mismo proyecto, ya renombrado a
`.tsx`/`.ts`), completa la migración:

1. **`src/types/Personaje.ts`** — define una `interface Personaje` con las
   propiedades: `id` (number), `nombre` (string), `clase` (string), `nivel`
   (number), `vida` (number), `ataque` (number), `avatar` (string).

2. **`src/data/personajes.ts`** — anota el arreglo de personajes con el tipo
   `Personaje[]`, para que TypeScript verifique que cada objeto tiene
   exactamente esas propiedades.

3. **`src/utils/calculos.ts`** — tipa completamente cada función:
   - `calcularPoder(personaje: Personaje): number`
   - `obtenerPersonajeMasFuerte(personajes: Personaje[]): Personaje`
   - `formatearNivel(nivel: number): string`

4. **`src/components/TarjetaPersonaje.tsx`** — define una interfaz de props
   (`TarjetaPersonajeProps`) con `personaje: Personaje`, y tipa el
   componente para que reciba exactamente esa forma.

5. **`src/components/GaleriaPersonajes.tsx`** — no necesita props, pero
   internamente debe usar los tipos ya definidos al recorrer el arreglo de
   personajes.

## Criterios de éxito

- El proyecto compila sin errores de TypeScript (`npm run build` no marca
  errores de tipos).
- Si intencionalmente escribes mal una propiedad (ej. `personaje.atack`),
  VS Code lo subraya en rojo ANTES de correr el programa.
- Ninguna función usa `any`: todos los parámetros y retornos tienen un tipo
  explícito o inferido correctamente.
- La app se ve y funciona exactamente igual que la versión en JavaScript.

## Reto extra (opcional)

- Agrega un personaje nuevo al arreglo con una propiedad faltante (ej. sin
  `ataque`) y observa el error que marca TypeScript. Luego corrígelo.
- Crea una función `esJefeFinal(personaje: Personaje): boolean` que
  devuelva `true` si el nivel es mayor a 50.
