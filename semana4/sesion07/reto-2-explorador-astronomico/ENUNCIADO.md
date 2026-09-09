# Reto 2 — Explorador Astronómico de la NASA 🚀
## Semana 4 · Sesión 7 — useState, useEffect y API con autenticación

> Este reto asume que ya completaste el **Reto 1 — Mini Zoológico
> Interactivo** y dominas componentes y props. Ahora sumamos estado
> (`useState`) y llamadas asíncronas a un API externo (`useEffect` + `fetch`).

## Contexto

La NASA publica todos los días una fotografía astronómica distinta, con una
breve explicación escrita por astrónomos. Existe un API público y gratuito
para consultarla: la **APOD API** (Astronomy Picture Of the Day).

A diferencia de countries.dev (usado en la Sesión 6), este API **sí requiere
una API key** en cada petición — es un ejemplo real de autenticación simple
por clave, como la que viste en las diapositivas.

## API a utilizar

```
https://api.nasa.gov/planetary/apod?api_key=TU_API_KEY&date=YYYY-MM-DD
```

- `api_key` (obligatorio): tu clave de la NASA, o `DEMO_KEY` para pruebas
  rápidas sin registrarte (límite bajo de peticiones).
- `date` (opcional): la fecha que quieres consultar, en formato `YYYY-MM-DD`.
  Si no la envías, la API devuelve la foto de HOY.

Respuesta típica:

```json
{
  "date": "2024-05-01",
  "title": "Una galaxia lejana",
  "explanation": "Esta imagen muestra...",
  "url": "https://apod.nasa.gov/apod/image/....jpg",
  "media_type": "image"
}
```

> ⚠️ Ten en cuenta que `media_type` puede ser `"image"` o `"video"` (algunos
> días la NASA publica un video en vez de una foto). Tu app debe manejar
> ambos casos sin romperse.

## Enunciado del reto

Construye una app de React (ya scaffoldeada en `enunciado/`) con estos
componentes:

1. **`App.jsx`** — componente principal. Debe:
   - Tener un `<input type="date">` para que el usuario elija una fecha.
   - Guardar en estado: la fecha elegida, si está cargando, el error (si lo
     hay) y los datos de la imagen del día.
   - Usar `useEffect` para pedir los datos a la API **cada vez que la fecha
     cambie**.
   - Leer la API key desde una variable de entorno (`import.meta.env.VITE_NASA_API_KEY`),
     nunca escrita directamente en el código.

2. **`components/EstadoCarga.jsx`** — un componente simple que muestra un
   mensaje o spinner de "Cargando..." mientras se espera la respuesta.

3. **`components/EstadoError.jsx`** — un componente que recibe un mensaje de
   error como prop y lo muestra, junto con un botón de **reintentar**.

4. **`components/ImagenDelDia.jsx`** — un componente que recibe los datos de
   la API como props y muestra:
   - El título.
   - La imagen (si `media_type` es `"image"`) o un enlace al video (si es
     `"video"`).
   - La explicación.
   - La fecha.

## Criterios de éxito

- La API key **no está escrita directamente en el código fuente**: se lee
  desde `.env` mediante `import.meta.env`.
- Cambiar la fecha del selector dispara una nueva petición automáticamente
  (gracias a `useEffect` con la fecha como dependencia).
- Mientras se espera la respuesta, se muestra `EstadoCarga`.
- Si la API responde con error (fecha inválida, límite de peticiones
  alcanzado, sin conexión), se muestra `EstadoError` con un botón de
  reintentar, sin que la app se rompa.
- Un día con `media_type: "video"` se maneja correctamente (no se intenta
  mostrar un video como si fuera una imagen).

## Reto extra (opcional)

- Agrega un botón "Sorpréndeme" que elija una fecha aleatoria entre el 16 de
  junio de 1995 (primer día de APOD) y hoy.
- Guarda un historial de las últimas 5 fechas consultadas en el estado.
