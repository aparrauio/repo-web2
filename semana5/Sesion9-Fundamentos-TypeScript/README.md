# Sesión 9 — Fundamentos de TypeScript
## Semana 5 · Clase 1 — De JavaScript a TypeScript: tipos, interfaces y funciones tipadas

## Proyecto: Ficha de Personajes RPG 🗡️

Una galería de tarjetas de personajes de un juego de rol, construida con
**React + Bootstrap**. Cada tarjeta muestra el avatar, nombre, clase, nivel
y estadísticas de combate de un personaje, y hay un cálculo de "poder total"
que se muestra en pantalla.

Esta sesión tiene dos partes:

| Parte | Qué es | Carpeta |
|---|---|---|
| **1. Punto de partida** | La misma app, en JavaScript puro (sin tipos) | `punto-de-partida-js/` |
| **2. Migración a TypeScript** | La misma app, migrada con tipos, interfaces y funciones tipadas | `reto-typescript/` |

## Por qué este proyecto

Ya sabes construir componentes de React con props (Sesiones 7 y 8). El
salto a TypeScript no cambia CÓMO piensas React — cambia que ahora **le
dices explícitamente a la computadora qué forma tienen tus datos**, para
que te avise de errores antes de correr el código, no después.

Este reto usa el mismo patrón de "antes/después" que ya conoces de la
migración de HTML a React: primero ves la versión funcional en JS, luego la
migras paso a paso a TS, viendo exactamente qué cambia y por qué.

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior.
- Editor de código (VS Code recomendado — resalta los errores de tipos en
  tiempo real, lo cual es la mitad de la magia de TypeScript).

## Estructura de carpetas

```
Sesion9-Fundamentos-TypeScript/
├── README.md                       <- este archivo
├── ENUNCIADO.md                     <- el reto completo
├── PISTA.md                         <- pistas para la migración
├── punto-de-partida-js/              <- Parte 1: versión en JavaScript, funcional
│   ├── package.json, vite.config.js, index.html
│   └── src/ (App.jsx, components/, data/, utils/)
└── reto-typescript/                  <- Parte 2: migración a TypeScript
    └── enunciado/                     <- proyecto TS con TODOs (tipos por completar)
```

## Bootstrap, sin instalar nada

Ambas versiones cargan Bootstrap directamente desde su CDN en `index.html`
(`<link>` para el CSS). No es necesario instalar `bootstrap` ni
`react-bootstrap` como paquete — usamos las clases de Bootstrap
(`container`, `row`, `card`, `badge`, `btn`, etc.) directamente en el JSX.

## Cómo trabajar en clase

1. **Corre `punto-de-partida-js/`.** `npm install && npm run dev`. Revisa
   `src/data/personajes.js` y `src/components/TarjetaPersonaje.jsx`: nota que
   nada indica qué forma exacta tiene un "personaje", ni qué debe devolver
   cada función. Todo depende de que el programador "se acuerde".
2. **Migra a TypeScript en `reto-typescript/enunciado/`.** Sigue
   `ENUNCIADO.md` y `PISTA.md` para:
   - Definir una interfaz `Personaje` en `src/types/Personaje.ts`.
   - Tipar las props de cada componente.
   - Tipar los parámetros y el retorno de las funciones de cálculo.
3. Corre `npm install && npm run dev` dentro de `reto-typescript/enunciado/`
   para ver los errores de tipos en la terminal y en el
   editor mientras completas el reto.

**Duración sugerida:** 45 minutos.
