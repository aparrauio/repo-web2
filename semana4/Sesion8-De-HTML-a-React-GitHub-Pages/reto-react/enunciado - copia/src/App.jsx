import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Servicios from "./components/Servicios.jsx";
import EnQueEstoyTrabajando from "./components/EnQueEstoyTrabajando.jsx";
import Testimonios from "./components/Testimonios.jsx";
import Footer from "./components/Footer.jsx";
import { enlacesNav } from "./data/datos.js";

/**
 * App — Plantilla
 * Compone todas las secciones de la landing page, en el mismo orden que
 * tenían en punto-de-partida-html/index.html.
 */
function App() {
  return (
    <>
      {/* TODO 1: renderiza <Header links={enlacesNav} /> */}
      <Header links={enlacesNav} />
      <Hero />
      <Servicios />
      <EnQueEstoyTrabajando />
      <Testimonios />
      <Footer />
      {/* TODO 2: renderiza <Hero /> */}
      {/* TODO 3: renderiza <Servicios /> */}
      {/* TODO 4: renderiza <EnQueEstoyTrabajando /> */}
      {/* TODO 5: renderiza <Testimonios /> */}
      {/* TODO 6: renderiza <Footer /> */}
    </>
  );
}

export default App;
