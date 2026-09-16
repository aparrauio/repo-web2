# Sesión 10 — Tipos union, propiedades opcionales y funciones genéricas
## Semana 5 · Clase 2 — Extendiendo la Ficha de Personajes RPG

## Proyecto: Ficha de Personajes RPG — Edición Batalla ⚔️

Esta sesión **parte directamente del proyecto de la Sesión 9** (la Ficha de
Personajes RPG ya migrada a TypeScript) y lo extiende con tres conceptos
nuevos:

- **Tipos union** — un personaje ahora tiene un `estado` que solo puede ser
  `"activo"`, `"herido"` o `"derrotado"` (nunca otro texto).
- **Propiedades opcionales** — un personaje puede tener un `arma` y/o un
  `escudo` equipados, pero no está obligado a tenerlos.
- **Funciones genéricas** — un mismo `Buscador Universal` encuentra por ID
  tanto personajes como ítems de inventario, usando UNA sola función que
  funciona para cualquier tipo de dato.

## Estructura de carpetas

```
Sesion10-Union-Opcionales-Genericos/
├── README.md                 <- este archivo
├── ENUNCIADO.md               <- el reto completo
├── PISTA.md                   <- pistas para resolverlo
└── enunciado/                  <- proyecto TS con TODOs (parte de la solución de la Sesión 9)
```

Ambas carpetas son proyectos completos de Vite + React + TypeScript +
Bootstrap (vía CDN, sin instalar nada extra para el diseño).

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior.
- Editor de código (VS Code recomendado).
- Haber completado (o revisado) la Sesión 9 — este reto asume que ya
  entiendes interfaces y funciones tipadas básicas.

## Cómo ejecutar

Dentro de `enunciado/` :

```bash
npm install
npm run dev
```

Abre la URL que aparece en la terminal (normalmente `http://localhost:5173`).

## Cómo trabajar en clase

1. Lee `ENUNCIADO.md` y `PISTA.md`.
2. Abre `enunciado/` — ya tiene todo lo de la Sesión 9 funcionando
   (interfaz `Personaje`, funciones tipadas, componentes con props tipadas).
3. Completa los `// TODO` en el orden indicado en el ENUNCIADO:
   tipo union → propiedades opcionales → funciones genéricas.
4. Corre `npm run dev` mientras avanzas, para ver los cambios en vivo.

**Duración sugerida:** 45 minutos.
