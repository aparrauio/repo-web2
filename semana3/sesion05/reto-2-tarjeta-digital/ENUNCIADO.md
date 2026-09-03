# Reto 2 — Tarjeta de Presentación Digital 🪪

## Contexto creativo

Estás construyendo el prototipo de una app que genera **tarjetas de presentación
digitales** a partir de datos reales de un usuario. Los datos no están en tu
computadora: viven en un servidor real en internet, así que necesitas usar
`fetch()` para "traerlos" antes de poder mostrarlos.

Vas a construir la misma tarjeta digital **dos veces**, con dos estilos de
código distintos, para comparar cómo se ve la asincronía escrita de dos formas.

## Objetivo

Consumir una API pública con `fetch()`, tanto con `.then()` como con
`async/await`, incluyendo manejo de errores en ambas versiones.

## Enunciado del reto

Usa `fetch()` para obtener los datos del usuario con ID 1 desde:

```
https://jsonplaceholder.typicode.com/users/1
```

Con esos datos, imprime en consola una "tarjeta de presentación" con al menos
el **nombre** y el **correo electrónico** del usuario, con este formato:

```
┌─────────────────────────────┐
│  Leanne Graham              │
│  Sincere@april.biz          │
└─────────────────────────────┘
```

Debes construir **dos versiones** del mismo programa:

1. `tarjeta-then.js` → usando `.then()` / `.catch()`.
2. `tarjeta-async.js` → usando `async`/`await` con `try`/`catch`.

Ambas versiones deben:
- Convertir la respuesta con `.json()` antes de leer `nombre` y `correo`.
- Manejar errores de red o de servidor sin que el programa se rompa (usa una
  URL incorrecta a propósito para probar el manejo de errores).

## Reto extra (opcional, para ir más allá)

Agrega también el **teléfono** y la **ciudad** (`address.city`) del usuario a
la tarjeta, usando destructuring anidado.

## Criterios de éxito

- Ambas versiones (`.then()` y `async/await`) imprimen el mismo nombre y
  correo correctamente.
- Si cambias la URL a una incorrecta, el programa muestra un mensaje de error
  claro en lugar de romperse con un error sin control.
- El resultado se ve como una "tarjeta" legible en la consola.

**Duración sugerida:** 25 minutos.
