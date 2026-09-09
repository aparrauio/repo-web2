import { testimonios } from "../data/datos.js";
import TarjetaTestimonio from "./TarjetaTestimonio.jsx";

/**
 * Testimonios — Plantilla
 */
function Testimonios() {
  return (
    <section id="testimonios" className="testimonios">
      <div className="contenedor">
        <h2>Lo que dicen mis clientes</h2>

        <div className="grid-testimonios">
          {/* TODO 1: usa testimonios.map() para renderizar una
                      <TarjetaTestimonio> por cada testimonio
                      (no olvides la prop "key" y pasar todas las props). */}
          {testimonios.map((testimonio) => (
            <TarjetaTestimonio key={testimonio.id} {...testimonio} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
