# Pista — Explorador de Países

## Pista 1: estructura general con async/await

```js
async function buscarPais(nombre) {
  mostrarCargando();          // 1. Avisar al usuario ANTES de esperar
  try {
    const respuesta = await fetch(`https://countries.dev/name/${nombre}`);
    if (!respuesta.ok) {
      throw new Error("País no encontrado");
    }
    const datos = await respuesta.json();
    if (!datos || datos.length === 0) {
      throw new Error("País no encontrado");
    }
    mostrarPais(datos[0]);    // 2. Usar el primer resultado del arreglo
  } catch (error) {
    mostrarError(error.message); // 3. Avisar al usuario si algo falló
  }
}
```

La clave del reto es el **orden**: primero mostrar el estado de "cargando",
luego hacer el `await`, y solo al final (tras el `await`, o en el `catch`)
actualizar la interfaz con el resultado o el error.

## Pista 2: mostrar/ocultar elementos con JavaScript

Puedes usar `classList` para mostrar y ocultar secciones de tu HTML:

```js
elementoCarga.classList.remove("oculto");  // mostrar
elementoCarga.classList.add("oculto");     // ocultar
```

En tu CSS, define una clase `.oculto { display: none; }`.

## Pista 3: formatear números grandes

```js
const poblacionFormateada = poblacion.toLocaleString("es-EC");
// 17643060 -> "17.643.060" (o "17,643,060" según el navegador/configuración)
```

## Pista 4: código defensivo para el campo de la bandera

Como el nombre exacto de los sub-campos de `flag` puede variar, usa el
operador de encadenamiento opcional (`?.`) y un valor de respaldo:

```js
const banderaUrl = pais.flag?.png ?? null;
const banderaEmoji = pais.flag?.emoji ?? "🏳️";

if (banderaUrl) {
  elBandera.src = banderaUrl;
  elBandera.classList.remove("oculto");
} else {
  elBanderaEmoji.textContent = banderaEmoji;
  elBanderaEmoji.classList.remove("oculto");
}
```

## Pista 5: probar el manejo de errores

Busca un país que no existe, como `"paisinventado"`. La API puede responder
con un arreglo vacío `[]` en vez de un error 404 — por eso hay que revisar
**ambos casos**: que la respuesta no sea `ok`, Y que el arreglo tenga al
menos un elemento.
