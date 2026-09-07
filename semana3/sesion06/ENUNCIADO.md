# Reto — Explorador de Países 🌍
## Semana 3 · Sesión 6 — fetch() en una página web dinámica

## Contexto

Hasta ahora usaste `fetch()` para imprimir datos en la consola. Hoy vas a dar
el siguiente paso: usar esos datos para **modificar el HTML de una página web
en tiempo real**, sin recargarla.

Vas a construir un pequeño "Explorador de Países": el usuario escribe un
nombre de país, tu código le pide los datos a una API externa, y mientras
espera la respuesta, la página debe **avisarle que está cargando** — esta es
la parte más importante del reto: demostrar visualmente que una llamada
asíncrona toma tiempo.

## API a utilizar: countries.dev

> ℹ️ Este reto usaba antes REST Countries (`restcountries.com/v3.1`), pero esa
> versión fue dada de baja por sus creadores y la nueva versión (`v5`) exige
> una API key con cuenta y cuota mensual. Por eso ahora usamos
> **[countries.dev](https://countries.dev)**, una alternativa gratuita,
> pensada como reemplazo directo, que **no requiere API key ni registro**.

Endpoint a usar:

```
https://countries.dev/name/{nombreDelPais}
```

Por ejemplo: `https://countries.dev/name/ecuador`

Esta URL responde con un **arreglo** de países cuyo nombre contiene el texto
buscado (búsqueda parcial, sin importar mayúsculas/minúsculas). Para este
reto, usa siempre el **primer resultado** del arreglo (`datos[0]`).

Cada país en la respuesta tiene, entre otros, estos campos útiles:

```js
{
  name: "Ecuador",
  capital: "Quito",
  population: 17643060,
  region: "Americas",
  flag: {
    png: "https://.../ec.png",
    emoji: "🇪🇨"
  }
}
```

> ⚠️ **Importante:** como esta API es distinta a la que usan otros tutoriales
> en internet, el nombre exacto de algún campo (por ejemplo, la ruta de la
> imagen de la bandera) puede variar levemente. Por eso tu código debe ser
> **defensivo**: si un campo no existe, usa un valor de respaldo (por ejemplo,
> el emoji de la bandera) en lugar de romper la página. Esto es una práctica
> real y común al trabajar con APIs externas.

## Enunciado del reto

Completa `enunciado/script.js` (ya conectado a `index.html`) para que:

1. Al hacer clic en el botón **"Buscar"** (o presionar Enter en el campo de
   texto), se dispare una petición `fetch()` a countries.dev con el país
   escrito por el usuario.
2. **Mientras se espera la respuesta**, la página debe mostrar un mensaje o
   indicador de carga (por ejemplo: "Cargando información...", un spinner,
   o ambos). Este mensaje debe desaparecer cuando la respuesta llegue.
3. Cuando los datos lleguen, la página debe mostrar dinámicamente:
   - La bandera del país (imagen o, si no está disponible, su emoji).
   - El nombre del país.
   - Su capital.
   - Su población (con formato de miles, ej. `17,643,060`).
   - Su región.
4. Si el país no existe (la API responde con error 404 o un arreglo vacío) o
   falla la conexión, la página debe mostrar un mensaje de error amigable,
   **sin romperse**, e idealmente ofrecer un botón para **reintentar** la
   búsqueda.

## Criterios de éxito

- Mientras la petición está en curso, el usuario ve un indicador de carga
  claro (no una pantalla en blanco ni la página "congelada").
- Al llegar los datos, la tarjeta del país se actualiza dinámicamente sin
  recargar la página.
- Buscar un país inexistente muestra un mensaje de error controlado, no un
  error técnico en la consola ni una página rota.
- El código usa `async/await` con `try/catch` para manejar la promesa de
  `fetch()`, y maneja con cuidado el caso en que un campo esperado no exista.

## Reto extra (opcional)

- Muestra también las **monedas** del país (campo `currencies`, viene como un
  arreglo de objetos en countries.dev).
- Guarda el último país buscado en `localStorage` y muéstralo automáticamente
  la próxima vez que se abra la página.
