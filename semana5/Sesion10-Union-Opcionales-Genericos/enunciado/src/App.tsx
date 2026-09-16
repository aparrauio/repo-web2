import GaleriaPersonajes from "./components/GaleriaPersonajes.tsx";
// TODO 1: importa BuscadorUniversal
import BuscadorUniversal from "./components/BuscadorUniversal.tsx";

function App() {
  return (
    <div className="container py-4">
      {/* TODO 2: agrega aquí <BuscadorUniversal /> antes de la galería */}
      <GaleriaPersonajes />
      <BuscadorUniversal />
    </div>
  );
}

export default App;
