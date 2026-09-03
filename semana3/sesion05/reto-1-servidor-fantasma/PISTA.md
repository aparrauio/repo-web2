# Pista — Reto 1: El Servidor Fantasma

## Pista principal

Usa una estructura `switch` sobre la variable `status`:

```js
switch (status) {
  case 200:
    // mensaje de éxito
    break;
  case 404:
    // mensaje de "no encontrado"
    break;
  case 500:
    // mensaje de error del servidor
    break;
  default:
    // mensaje genérico
}
```

## Pista sobre JSON

`JSON.stringify(objeto)` convierte un objeto de JavaScript en un texto (string)
con formato JSON. Es lo que debes usar para "imprimir" el `body` dentro de tu
mensaje, en lugar de pasarlo directamente a `console.log()`:

```js
const texto = JSON.stringify({ mensaje: "hola" });
console.log(texto); // '{"mensaje":"hola"}'
```

## Pista sobre destructuring

Puedes recibir `status` y `body` directamente en los parámetros de la función,
sin necesidad de escribir `respuesta.status` y `respuesta.body`:

```js
function traducirRespuestaFantasma({ status, body }) {
  // aquí ya tienes "status" y "body" como variables directas
}
```
