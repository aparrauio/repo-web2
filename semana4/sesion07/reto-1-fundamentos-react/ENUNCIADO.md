# Reto 1 — Mini Zoológico Interactivo 🦁
## Semana 4 · Sesión 7 — Fundamentos de React: proyecto, componentes y props

## Contexto creativo

Vas a construir la vitrina digital de un pequeño zoológico: una página que
muestra una tarjeta por cada animal, con su nombre, su emoji, el sonido que
hace y un dato curioso. Antes de conectar cualquier API o manejar estado,
este reto se enfoca en lo esencial de React: **crear un proyecto, dividir la
UI en componentes, y pasar información entre ellos con props**.

## Objetivo

Practicar la creación de un proyecto de React desde cero y el uso de
componentes funcionales con props, incluyendo el renderizado de listas.

## Parte 1 — Crear el proyecto (hazlo aunque ya tengas el scaffold en este ZIP)

Como ejercicio de fundamentos, practica crear un proyecto de React desde
cero con Vite, en una carpeta aparte a la de este ZIP:

```bash
npm create vite@latest mini-zoologico -- --template react
cd mini-zoologico
npm install
npm run dev
```

Observa la estructura que Vite genera automáticamente (`src/App.jsx`,
`src/main.jsx`, etc.) y compárala con la carpeta `enunciado/` de este reto,
que ya trae esa misma estructura lista para que completes los componentes.

## Parte 2 — Enunciado del reto

Usando la carpeta `enunciado/` (o el proyecto que acabas de crear), completa
lo siguiente:

1. En `src/data/animales.js` ya existe un arreglo de objetos, cada uno con:
   `{ id, nombre, emoji, sonido, dato }`. No necesitas modificarlo.
2. Crea (o completa) el componente **`components/TarjetaAnimal.jsx`**, que:
   - Reciba como **props**: `nombre`, `emoji`, `sonido` y `dato`.
   - Muestre el emoji en grande, el nombre como título, el sonido entre
     comillas, y el dato curioso como texto.
3. Completa **`App.jsx`** para que:
   - Importe el arreglo `animales` desde `src/data/animales.js`.
   - Use `.map()` para recorrer el arreglo y renderizar una `TarjetaAnimal`
     por cada animal, pasando sus datos como props.
   - Use el `id` de cada animal como `key` en la lista.
4. **Reto extra (opcional):** agrega un componente `Encabezado.jsx` que
   reciba una prop `totalAnimales` y muestre "Tenemos X animales en el
   zoológico", calculando `totalAnimales` a partir de `animales.length`.

## Criterios de éxito

- La página muestra una tarjeta por cada animal del arreglo, sin repetir
  código de tarjeta a mano (todo sale de un solo componente reutilizado).
- `TarjetaAnimal` recibe toda su información por props, no tiene datos
  "quemados" (hardcodeados) dentro de sí misma.
- Cada elemento de la lista tiene una prop `key` única (usa el `id`).
- La consola del navegador no muestra advertencias sobre "key" faltante.

**Duración sugerida:** 20 minutos.
