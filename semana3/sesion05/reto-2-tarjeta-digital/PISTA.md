# Pista — Reto 2: Tarjeta de Presentación Digital

## Pista principal sobre fetch()

`fetch(url)` devuelve una **promesa** que se resuelve con un objeto
`Response`, no con los datos directamente. Debes convertirlo con `.json()`
antes de poder leer sus propiedades:

```js
fetch(url)
  .then((respuesta) => respuesta.json())   // <- aquí obtienes los datos reales
  .then((datos) => { /* usar datos.name, datos.email */ });
```

Con `async/await` es lo mismo, pero usando `await` dos veces:

```js
const respuesta = await fetch(url);
const datos = await respuesta.json();
```

## Pista sobre manejo de errores

- Con `.then()`: agrega un `.catch((error) => ...)` al final de la cadena.
- Con `async/await`: envuelve el `await fetch(...)` dentro de un bloque
  `try { ... } catch (error) { ... }`.
- Para probar el manejo de errores a propósito, cambia la URL a algo como
  `https://jsonplaceholder.typicode.com/usuarios-que-no-existen/1` y observa
  cómo tu `.catch()` o `catch` reacciona.

## Pista sobre destructuring anidado (reto extra)

Puedes extraer `city` desde dentro de `address` así:

```js
const { name, email, phone, address: { city } } = datos;
```
