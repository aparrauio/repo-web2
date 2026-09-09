# Sesión 8 — Buenas prácticas de UX + Migración a React y despliegue
## Semana 4 · Clase 2 — De HTML/CSS/JS estático a React, y publicación en GitHub Pages

## Proyecto: Landing page de un consultor de tecnología 💻

Esta sesión tiene tres partes, pensadas para completarse en orden durante la clase:

| Parte | Qué es | Carpeta |
|---|---|---|
| **1. Punto de partida** | Landing page estática en HTML/CSS/JS puro, ya funcional | `punto-de-partida-html/` |
| **2. Migración a React** | El mismo sitio, reconstruido como componentes de React | `reto-react/` |
| **3. Publicación** | Guía paso a paso para publicar la app de React en GitHub Pages | `reto-react/PASOS-GITHUB-PAGES.md` |

La landing page es de un consultor de tecnología ficticio, **Pepito Pérez**,
y tiene: header + navegación, sección hero, sección de servicios (contenido
principal), botones de llamada a la acción (CTA), sección de testimoniales,
una sección **"En qué estoy trabajando"** que consume el **API REST de
GitHub** para mostrar los 5 repositorios más recientes del usuario
`aparrauio`, y un footer.

## Por qué este proyecto

Esta actividad conecta directamente los temas de la Sesión 7 (componentes,
props, useState/useEffect, consumo de APIs) con la pregunta que todo
estudiante se hace: **"¿cómo paso de una página que ya sé hacer, a una hecha
con React?"** Y además cierra el ciclo mostrando cómo publicar el resultado
para que cualquiera pueda verlo en internet.

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior.
- Una cuenta de [GitHub](https://github.com) (gratuita) para la Parte 3.
- [Git](https://git-scm.com) instalado y configurado.
- Editor de código (VS Code recomendado) con la extensión Live Server para
  la Parte 1.

## Estructura de carpetas

```
Sesion8-De-HTML-a-React-GitHub-Pages/
├── README.md                       <- este archivo
├── ENUNCIADO.md                     <- el reto completo (las 3 partes)
├── PISTA.md                         <- pistas para la migración a React
├── punto-de-partida-html/            <- Parte 1: sitio estático ya funcional
│   ├── index.html
│   ├── style.css
│   └── script.js
└── reto-react/                       <- Partes 2 y 3
    ├── enunciado/                     <- proyecto React con TODOs
    ├── solucion/                      <- proyecto React completo y comentado
    └── PASOS-GITHUB-PAGES.md          <- guía de despliegue paso a paso
```

## Cómo trabajar en clase

1. **Explora `punto-de-partida-html/`.** Ábrelo con Live Server y estudia su
   estructura: qué hace `script.js`, cómo están organizadas las secciones en
   `index.html`, qué estilos define `style.css`. Este es el "antes".
2. **Migra a React en `reto-react/enunciado/`.** Sigue `ENUNCIADO.md` y
   `PISTA.md` para convertir cada sección HTML en un componente de React,
   reimplementando la llamada al API de GitHub con `useState` + `useEffect`.
3. **Publica tu resultado siguiendo `reto-react/PASOS-GITHUB-PAGES.md`.**
   Al final de la clase, tu landing page en React debe estar visible en una
   URL pública de GitHub Pages.
4. Compara tu trabajo con `reto-react/solucion/` en cualquier punto en que
   te quedes atascado.

**Duración total sugerida:** 90 minutos (la sesión completa).
