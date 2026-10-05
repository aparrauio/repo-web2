import { useState, useEffect } from "react";
// TODO 1: importa el tipo Tripulante
import type { Tripulante } from "./types/Tripulante.ts";
import {
  obtenerTripulantes,
  crearTripulante,
  actualizarTripulante,
  eliminarTripulante,
} from "./services/tripulantesService.ts";
import TripulanteCard from "./components/TripulanteCard.tsx";
import FormularioTripulante from "./components/FormularioTripulante.tsx";
import DetalleTripulante from "./components/DetalleTripulante.tsx";
import EstadoCargaPantalla from "./components/EstadoCargaPantalla.tsx";
import EstadoErrorPantalla from "./components/EstadoErrorPantalla.tsx";

type Vista = "lista" | "nuevo" | "editar" | "detalle";

function App() {
  // TODO 2: declara el estado de la lista, tipado:
  const [tripulantes, setTripulantes] = useState<Tripulante[]>([]);

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [vista, setVista] = useState("lista");
  const [idSeleccionado, setIdSeleccionado] = useState(null);
  const [recargar, setRecargar] = useState(0); // útil para forzar un refetch

  // TODO 3: dentro de este useEffect, declara una función async que:
  //   - llame a setCargando(true) y setError(null)
  //   - llame a obtenerTripulantes() dentro de un try/catch
  //   - guarde el resultado con setTripulantes()
  //   - en el catch, guarde el mensaje de error con setError()
  //   - en el finally, llame a setCargando(false)
  //   No olvides invocar la función, y usar [recargar] como dependencia
  //   (así el botón "Reintentar" puede forzar una nueva carga).
  useEffect(() => {
    // TODO: implementa la carga inicial aquí
    async function cargarTripulantes() {
      setCargando(true);
      setError(null);
      try {
        const datos = await obtenerTripulantes();
        setTripulantes(datos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Se produjo un error al conectar con Supabase.");
      } finally {
        setCargando(false);
      }
    }
    cargarTripulantes();
  }, [recargar]);

  // TODO 4: escribe manejarCrear(datos), que:
  //   - llama a await crearTripulante(datos)
  //   - agrega el resultado al estado con setTripulantes
  //   - cambia la vista de vuelta a "lista"
  //   (recuerda que ahora estas funciones son asíncronas: usa async/await
  //   y maneja errores con try/catch, mostrando el error si falla).
  async function manejarCrear(datos: Omit<Tripulante, "id">) {
    // TODO: implementa
    try {
      const nuevo = await crearTripulante(datos);
      setTripulantes((listaActual) => [...listaActual, nuevo]);
      setVista("lista");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo crear el nuevo tripulante.");
    }
  }

  // TODO 5: escribe manejarActualizar(id, datos) de forma similar,
  // reemplazando el tripulante correspondiente en el estado con .map().
  async function manejarActualizar(id: number, datos: Omit<Tripulante, "id">) {
    // TODO: implementa
    try {
      const actualizado = await actualizarTripulante(id, datos);
      setTripulantes((listaActual) => 
        listaActual.map((t) => (t.id === id ? actualizado: t))
      );
      setVista("lista");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo actualizar el tripulante.");
    }
  }

  // TODO 6: escribe manejarEliminar(id), que llama a eliminarTripulante(id)
  // y luego quita ese tripulante del estado con .filter().
  async function manejarEliminar(id: number) {
    // TODO: implementa
    try {
      await eliminarTripulante(id);
      setTripulantes((listaActual) => listaActual.filter((t) => t.id !== id));

    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo eliminar el tripulante.");
    }
  }

  const tripulanteSeleccionado = tripulantes.find((t) => t.id === idSeleccionado);

  if (cargando) {
    return <EstadoCargaPantalla />;
  }

  if (error) {
    return (
      <EstadoErrorPantalla
        mensaje={error}
        onReintentar={() => setRecargar((valor) => valor + 1)}
      />
    );
  }

  if (vista === "detalle" && tripulanteSeleccionado) {
    return <DetalleTripulante tripulante={tripulanteSeleccionado} onVolver={() => setVista("lista")} />;
  }

  if (vista === "nuevo" || vista === "editar") {
    return (
      <div className="container py-5" style={{ maxWidth: "600px" }}>
        <FormularioTripulante
          tripulanteInicial={vista === "editar" ? tripulanteSeleccionado : undefined}
          onGuardar={(datos) => {
            if (vista === "editar" && idSeleccionado !== null) {
              manejarActualizar(idSeleccionado, datos);
            } else {
              manejarCrear(datos);
            }
          }}
          onCancelar={() => setVista("lista")}
        />
      </div>
    );
  }

  return (
    <div className="container py-5">
      <span className="badge-conexion">🟢 Conectado a Supabase</span>
      <h1 className="titulo-app mb-1">🚀 Centro de Comando Espacial</h1>
      <p className="subtitulo-app mb-4">Datos en vivo desde PostgreSQL</p>

      <div className="mb-4">
        <button className="btn btn-primary" onClick={() => setVista("nuevo")}>
          + Nuevo tripulante
        </button>
      </div>

      <div className="row">
        {tripulantes.map((tripulante) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={tripulante.id}>
            <TripulanteCard
              tripulante={tripulante}
              onVerDetalle={(id) => { setIdSeleccionado(id); setVista("detalle"); }}
              onEditar={(id) => { setIdSeleccionado(id); setVista("editar"); }}
              onEliminar={manejarEliminar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
