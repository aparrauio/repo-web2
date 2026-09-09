import BotonCTA from "./BotonCTA.jsx";

/**
 * Hero — Plantilla
 * No recibe props: el contenido es fijo para esta landing page.
 */
function Hero() {
  // TODO 1: devuelve un <section id="inicio" className="hero"> con:
  //   - un <div className="contenedor hero-inner">
  //   - un <h1> con el titular
  //   - un <p className="hero-subtitulo"> con el subtítulo
  //   - un <BotonCTA texto="Agenda una consultoría" variante="primario" href="#contacto" />
  return (
    <section id="inicio" className="hero">
    <div className="contenedor hero-inner">
      <h1>Soy un desarrollador full-stack.</h1>
      <p className="hero-subtitulo">
        Consultoría en arquitectura cloud, transformación digital y mentoría
        técnica para equipos que quieren construir mejor y más rápido.
      </p>
      <BotonCTA texto="Agendar consultoría" variante="primario" href="#contacto" />
    </div>
  </section>
  );
}

export default Hero;
