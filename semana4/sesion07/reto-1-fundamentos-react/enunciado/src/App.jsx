import { animales } from "./data/animales.js";
import TarjetaAnimal from "./components/TarjetaAnimal.jsx";
import Encabezado from "./components/Encabezado.jsx"; // <- descomenta si haces el reto extra

function App() {
  return (
    <div className="zoologico">
      {/* Reto extra (opcional): reemplaza el <h1> de arriba por:
          <Encabezado totalAnimales={animales.length} /> */}
      <Encabezado totalAnimales={animales.length} />

      <div className="grid-animales">
        {/* TODO 1: usa animales.map() para recorrer el arreglo "animales"
                    y renderizar una <TarjetaAnimal> por cada uno.
            TODO 2: no olvides la prop "key" con un valor único (usa animal.id).
            TODO 3: pasa nombre, emoji, sonido y dato como props
                    (puedes hacerlo prop por prop, o usar {...animal}). */}
        {animales.map((animal) => (
          <TarjetaAnimal 
              key={animal.id}
              nombre={animal.nombre}
              emoji={animal.emoji}
              sonido={animal.sonido}
              dato={animal.dato}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
