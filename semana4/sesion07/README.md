# Sesión 7 — Comunicación asíncrona II + Framework moderno de frontend
## Semana 4 · Clase 1 — De JavaScript puro a componentes de React

Esta sesión incluye **dos retos progresivos**, pensados para completarse en orden:

| Reto | Tema | Duración sugerida |
|---|---|---|
| **Reto 1 — Mini Zoológico Interactivo** | Fundamentos de React: crear un proyecto, componentes, props | 20 minutos |
| **Reto 2 — Explorador Astronómico de la NASA** | useState, useEffect, fetch() con API key | 35 minutos |

El Reto 1 es nuevo: sirve como **calentamiento** antes de entrar a estado y
llamadas asíncronas. No usa `useState` ni APIs externas — solo componentes,
props y renderizado de listas, para consolidar la base de React con calma.

## Requisitos generales

- [Node.js](https://nodejs.org) 18 o superior instalado.
- Editor de código (VS Code recomendado).
- Conexión a internet (para instalar dependencias con `npm install`, y para
  el Reto 2, que consume un API real).

## Estructura de carpetas

```
Sesion7-React-APIs-Externas/
├── README.md                              <- este archivo
├── reto-1-fundamentos-react/
│   ├── ENUNCIADO.md
│   ├── PISTA.md
│   ├── enunciado/                          <- proyecto con TODOs
│
└── reto-2-explorador-astronomico/
    ├── ENUNCIADO.md
    ├── PISTA.md
    └── enunciado/                          <- proyecto con TODOs
```

## Cómo trabajar en clase

1. Empieza por `reto-1-fundamentos-react/`. Lee su `ENUNCIADO.md`, sigue los
   pasos para crear el proyecto y completa los `// TODO`.
2. Continúa con `reto-2-explorador-astronomico/`, que ya asume que dominas
   componentes y props, y suma estado (`useState`) y llamadas a un API
   externo con autenticación (`useEffect` + API key).
3. En ambos casos, compara tu resultado con la carpeta `solucion/`
   correspondiente si te quedas atascado.

## Cómo ejecutar cualquiera de los dos proyectos

Dentro de la carpeta `enunciado/` o `solucion/` de cada reto:

```bash
npm install
npm run dev
```

Luego abre la URL que aparece en la terminal (normalmente `http://localhost:5173`).

Para el Reto 2, además necesitas copiar `.env.example` a `.env` antes de
correr `npm run dev` (ver detalles en su propio README/ENUNCIADO).
