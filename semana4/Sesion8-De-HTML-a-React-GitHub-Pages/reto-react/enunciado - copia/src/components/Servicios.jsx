import { servicios } from "../data/datos.js";
import TarjetaServicio from "./TarjetaServicio.jsx";
import BotonCTA from "./BotonCTA.jsx";

/**
 * Servicios — Plantilla
 * Sección de contenido principal: lista de servicios + un botón CTA.
 */
function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="contenedor">
        <h2>Servicios</h2>
        <p className="seccion-subtitulo">
          Todo lo que necesitas para pasar de la idea al producto en producción.
        </p>

        <div className="grid-servicios">
          {/* TODO 1: usa servicios.map() para renderizar una <TarjetaServicio>
                      por cada servicio (no olvides la prop "key"). */}
          {servicios.map((servicio) => (
            <TarjetaServicio
              key={servicio.id}
              icono={servicio.icono}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
            />
          ))}
        </div>

        <div className="centrado">
          {/* TODO 2: agrega aquí un <BotonCTA> con variante "secundario" */}
          <BotonCTA texto="Ver más" variante="secundario" href="#contacto" />
        </div>
      </div>
    </section>
  );
}

export default Servicios;
