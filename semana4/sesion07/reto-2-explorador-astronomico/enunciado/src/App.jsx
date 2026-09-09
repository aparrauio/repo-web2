import { useState, useEffect } from "react";
import EstadoCarga from "./components/EstadoCarga.jsx";
import EstadoError from "./components/EstadoError.jsx";
import ImagenDelDia from "./components/ImagenDelDia.jsx";

// La API key se lee desde el archivo .env (nunca escrita directamente aquí).
// Recuerda copiar .env.example a .env antes de correr el proyecto.
const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const URL_BASE = "https://api.nasa.gov/planetary/apod";

function obtenerFechaDeHoy() {
  return new Date().toISOString().split("T")[0];
}

function App() {
  const [fecha, setFecha] = useState(obtenerFechaDeHoy());
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [intentos, setIntentos] = useState(0); // para que "Reintentar" funcione

  useEffect(() => {
    async function obtenerImagenDelDia() {
      setCargando(true);
      setError(null);
      try {
        const url = `${URL_BASE}?api_key=${API_KEY}&date=${fecha}`;
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la imagen para la fecha.");
        }

        const json = await respuesta.json();
        setDatos(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }

    }
    // TODO 2: invoca esa función aquí dentro del useEffect.
    obtenerImagenDelDia();
    // TODO 3: agrega [fecha, intentos] como arreglo de dependencias,
    //         para que se repita cuando cambie la fecha O cuando el
    //         usuario presione "Reintentar".
  }, [fecha, intentos]); // <- reemplaza este arreglo por el correcto (ver TODO 3)

  function manejarReintentar() {
    // TODO 4: incrementa "intentos" con setIntentos() para forzar que el
    //         useEffect se vuelva a ejecutar aunque la fecha no cambie.
    setIntentos((valorAnterior) => valorAnterior + 1);
  }

  return (
    <div className="app">
      <h1>🚀 Explorador Astronómico</h1>
      <p className="subtitulo">Foto astronómica del día, cortesía de la NASA</p>

      <div className="selector-fecha">
        <label htmlFor="fecha">Elige una fecha:</label>
        <input
          id="fecha"
          type="date"
          value={fecha}
          max={obtenerFechaDeHoy()}
          onChange={(evento) => setFecha(evento.target.value)}
        />
      </div>

      {/* TODO 5: renderiza condicionalmente según el estado:
          - si cargando -> <EstadoCarga />
          - si error    -> <EstadoError mensaje={error} onReintentar={manejarReintentar} />
          - si hay datos -> <ImagenDelDia datos={datos} /> */}
      {cargando && <EstadoCarga />}
      {!cargando && error &&(
        <EstadoError mensaje={error} onReintentar={manejarReintentar} />
      )}
      {!cargando && !error && datos && <ImagenDelDia datos={datos} />}
    </div>
  );
}

export default App;
