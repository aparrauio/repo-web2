# Semana 02 · Sesión 04 — DOM avanzado, delegación de eventos y programación funcional

## Objetivo de la sesión
Practicar manipulación del DOM, delegación de eventos con un solo listener, closures y programación funcional (`map`, `filter`, `reduce`) mediante dos retos progresivos.

## Estructura

```text
semana-02-sesion-04-dom-eventos/
├── README.md
├── reto-1-lista-tareas/
│   ├── README.md
│   ├── instrucciones.md
│   ├── prompts-para-ia.md
│   ├── starter/
│   │   └── index.html
└── reto-2-panel-estadisticas/
    ├── README.md
    ├── instrucciones.md
    ├── prompts-para-ia.md
    ├── starter/
    │   └── index.html
```

## Orden sugerido de trabajo

1. **Reto 1 — Lista de tareas con delegación de eventos.**
   Reto base: un solo `addEventListener` en el elemento padre para tachar tareas.
2. **Reto 2 — Panel de estadísticas de tareas (actividad posterior).**
   Reto integrador: combina DOM avanzado, delegación de eventos y `map()`/`filter()`/`reduce()` para calcular y mostrar estadísticas en vivo.

## Cómo ejecutar cada reto

Ambos retos son páginas HTML independientes, no requieren Node.js.

1. Abre la carpeta del reto que quieras practicar.
2. Abre `starter/index.html` con la extensión **Live Server** de VS Code (clic derecho → "Open with Live Server").
3. Intenta resolverlo por tu cuenta usando las pistas de cada README.
4. Compara tu resultado con `solucion/index.html`.

## Conceptos que se practican

| Concepto | Reto 1 | Reto 2 |
|---|---|---|
| Selección y modificación del DOM | Sí | Sí |
| Delegación de eventos (un solo listener) | Sí | Sí |
| Closures | — | Sí (contador interno) |
| `map()` | — | Sí |
| `filter()` | — | Sí |
| `reduce()` | — | Sí |
