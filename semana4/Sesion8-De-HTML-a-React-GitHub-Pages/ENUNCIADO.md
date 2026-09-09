# Reto — De HTML/CSS/JS a React, y publicación en GitHub Pages
## Semana 4 · Sesión 8

## Contexto

Ya sabes construir una página con HTML, CSS y JavaScript puro, y ya sabes lo
esencial de React (componentes, props, estado, `useEffect`, consumo de
APIs). Este reto conecta ambos mundos: vas a **migrar una landing page real**
de un esquema estático a un esquema basado en componentes, y luego vas a
**publicarla en internet**.

## Parte 1 — Estudia el punto de partida

Abre `punto-de-partida-html/index.html` con Live Server. Es la landing page
de un consultor de tecnología, **Pepito Pérez**, con estas secciones:

1. **Header + navegación** — logo y enlaces a las demás secciones.
2. **Hero** — titular, subtítulo y un botón CTA ("Agenda una consultoría").
3. **Servicios** (contenido principal) — 4 tarjetas de servicios, cada una
   con ícono, título y descripción, más un segundo botón CTA.
4. **En qué estoy trabajando** — se llena dinámicamente con JavaScript,
   consumiendo el API REST de GitHub para mostrar los 5 repositorios más
   recientes del usuario `aparrauio`.
5. **Testimoniales** — 3 tarjetas de testimonios de clientes ficticios.
6. **Footer** — datos de contacto y enlaces sociales.

Revisa `script.js`: ahí está la lógica que llama a
`https://api.github.com/users/aparrauio/repos?sort=updated&per_page=5`,
muestra un estado de carga mientras espera, y construye las tarjetas de
repositorio dinámicamente con JavaScript puro (`document.createElement`,
`innerHTML`, etc.).

## Parte 2 — Enunciado del reto: migrar a React

Usando `reto-react/enunciado/` (un proyecto Vite + React ya scaffoldeado),
recrea la misma landing page como una composición de componentes:

- `Header.jsx` — logo + navegación (recibe los links como prop, un arreglo).
- `Hero.jsx` — titular, subtítulo y un `BotonCTA`.
- `Servicios.jsx` — sección de contenido principal, que renderiza una lista
  de `TarjetaServicio` (ícono, título, descripción) a partir de un arreglo
  de datos, más un `BotonCTA`.
- `BotonCTA.jsx` — un botón reutilizable que recibe `texto` y `variante`
  (ej. "primario" o "secundario") como props, para reutilizarlo en el Hero
  y en Servicios con estilos distintos.
- `EnQueEstoyTrabajando.jsx` — usa `useState` + `useEffect` para llamar al
  mismo endpoint de GitHub, maneja carga/error, y renderiza una lista de
  `TarjetaRepositorio`.
- `TarjetaRepositorio.jsx` — recibe los datos de un repositorio como props
  (nombre, descripción, lenguaje, estrellas, URL) y los muestra.
- `Testimonios.jsx` — renderiza una lista de `TarjetaTestimonio` a partir de
  un arreglo de datos locales.
- `TarjetaTestimonio.jsx` — recibe nombre, cargo, foto (emoji) y comentario
  como props.
- `Footer.jsx` — datos de contacto y enlaces.
- `App.jsx` — compone todos los componentes anteriores en una sola página.

## Criterios de éxito de la Parte 2

- Cada sección de la página original tiene un componente equivalente en React.
- `BotonCTA` y `TarjetaServicio`/`TarjetaTestimonio`/`TarjetaRepositorio` son
  genuinamente reutilizables: reciben toda su información variable por props.
- La sección "En qué estoy trabajando" funciona igual que en la versión
  estática: llama al API de GitHub, muestra carga y maneja errores (por
  ejemplo, el límite de peticiones sin autenticar del API de GitHub).
- La app corre con `npm run dev` sin errores en la consola.

## Parte 3 — Enunciado del reto: publicar en GitHub Pages

Sigue la guía **`reto-react/PASOS-GITHUB-PAGES.md`** paso a paso durante la
clase. Al finalizar, tu compañero de al lado (o el profesor) debe poder
abrir una URL como:

```
https://TU_USUARIO.github.io/NOMBRE_DEL_REPOSITORIO/
```

y ver tu landing page de React funcionando, incluyendo la sección que
consume el API de GitHub en vivo.

## Criterio de éxito general

- La landing page en React reproduce visualmente la versión estática.
- El código está organizado en componentes reutilizables con props.
- La sección de GitHub sigue funcionando después de publicar en GitHub Pages
  (ojo: el `base` de Vite debe configurarse correctamente, ver la pista).
