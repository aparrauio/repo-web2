# Pista — Explorador Astronómico de la NASA

## Pista 1: variables de entorno en Vite

En un proyecto Vite, las variables de entorno deben empezar con el prefijo
`VITE_` para estar disponibles en el código del navegador:

```bash
# .env
VITE_NASA_API_KEY=DEMO_KEY
```

```js
const API_KEY = import.meta.env.VITE_NASA_API_KEY;
```

## Pista 2: estructura general del componente App

```jsx
function App() {
  const [fecha, setFecha] = useState(obtenerFechaDeHoy());
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function obtenerImagenDelDia() {
      setCargando(true);
      setError(null);
      try {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${fecha}`;
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la imagen de ese día.");
        }
        const json = await respuesta.json();
        setDatos(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }
    obtenerImagenDelDia();
  }, [fecha]); // <- se repite cada vez que "fecha" cambia

  if (cargando) return <EstadoCarga />;
  if (error) return <EstadoError mensaje={error} onReintentar={() => setFecha(fecha)} />;
  return <ImagenDelDia datos={datos} />;
}
```

Nota: como React no vuelve a ejecutar el efecto si el estado no cambia,
"reintentar" con el mismo valor de fecha no dispara useEffect de nuevo. Una
forma simple de resolverlo es tener también un contador de "intentos" en el
estado, y agregarlo a las dependencias del useEffect.

## Pista 3: manejar imagen vs. video

```jsx
function ImagenDelDia({ datos }) {
  return (
    <article>
      <h2>{datos.title}</h2>
      {datos.media_type === "image" ? (
        <img src={datos.url} alt={datos.title} />
      ) : (
        <a href={datos.url} target="_blank" rel="noreferrer">
          Ver video en la NASA ↗
        </a>
      )}
      <p>{datos.explanation}</p>
    </article>
  );
}
```

## Pista 4: probar errores a propósito

- Escribe una fecha futura (ej. el año que viene): la API responderá con
  un error 400.
- Pon una API key inválida en tu `.env` para ver el error de autenticación.
- Haz muchas búsquedas seguidas con `DEMO_KEY` para ver el error 429 (límite
  de peticiones alcanzado).
