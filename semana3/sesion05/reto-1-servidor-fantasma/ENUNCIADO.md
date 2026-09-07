# Reto 1 — El Servidor Fantasma 👻

## Contexto creativo

Imagina que mantienes un servidor tan viejo y misterioso que el equipo lo apodó
**"el Servidor Fantasma"**. Nadie lo entiende del todo, pero cada vez que alguien
le hace una petición, el fantasma responde con un objeto `{ status, body }` que
hay que traducir a un mensaje humano.

Tu trabajo es construir el **traductor de mensajes del fantasma**: una función
que reciba la respuesta cruda del fantasma y devuelva un mensaje amigable según
el código de estado HTTP.

## Objetivo

Practicar la interpretación de códigos de estado HTTP y la conversión de
objetos a texto JSON con `JSON.stringify()`.

## Enunciado del reto

Escribe una función `traducirRespuestaFantasma({ status, body })` que:

1. Reciba un objeto con la forma `{ status, body }`, donde `status` es un
   código HTTP (200, 404 o 500) y `body` es un objeto cualquiera con datos.
2. Según el valor de `status`, imprima un mensaje **distinto y con personalidad**:
   - **200** → un mensaje de éxito, alegre, mostrando el `body` como texto JSON.
   - **404** → un mensaje que indique que "el fantasma no encontró nada ahí".
   - **500** → un mensaje que indique que "el fantasma se asustó y algo se rompió".
   - Cualquier otro código → un mensaje genérico de "código desconocido".
3. En los tres casos donde SÍ hay `body`, debes mostrarlo convertido a texto
   con `JSON.stringify(body)`, no como objeto directamente con `console.log(body)`.

## Casos de prueba mínimos

Tu archivo debe probar la función con estos tres casos (ya incluidos en la
plantilla, en `enunciado/servidor-fantasma.js`):

```js
traducirRespuestaFantasma({ status: 200, body: { mensaje: "Todo en orden" } });
traducirRespuestaFantasma({ status: 404, body: { ruta: "/tesoro-perdido" } });
traducirRespuestaFantasma({ status: 500, body: { error: "el fantasma tropezó" } });
```

## Criterios de éxito

- Los 3 códigos (200, 404, 500) producen mensajes visiblemente distintos.
- El `body` se muestra como texto JSON usando `JSON.stringify()`, no como objeto crudo.
- La función funciona para cualquier objeto `{ status, body }`, no solo los 3 casos de ejemplo.

**Duración sugerida:** 20 minutos.
