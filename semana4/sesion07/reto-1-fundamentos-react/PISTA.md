# Pista — Reto 1: Mini Zoológico Interactivo

## Pista 1: anatomía de un componente con props

```jsx
function TarjetaAnimal({ nombre, emoji, sonido, dato }) {
  return (
    <div className="tarjeta-animal">
      <p className="emoji">{emoji}</p>
      <h3>{nombre}</h3>
      <p className="sonido">"{sonido}"</p>
      <p className="dato">{dato}</p>
    </div>
  );
}
```

Las props llegan como un solo objeto; usar destructuring en los parámetros
(`{ nombre, emoji, sonido, dato }`) te permite usarlas directamente como
variables, sin escribir `props.nombre`, `props.emoji`, etc.

## Pista 2: renderizar una lista con map()

```jsx
import { animales } from "./data/animales.js";
import TarjetaAnimal from "./components/TarjetaAnimal.jsx";

function App() {
  return (
    <div className="zoologico">
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
  );
}
```

## Pista 3: una forma más corta de pasar props

Si el objeto ya tiene exactamente los nombres de prop que necesitas, puedes
"esparcir" todas sus propiedades de una vez con el operador spread:

```jsx
<TarjetaAnimal key={animal.id} {...animal} />
```

Esto pasa `id`, `nombre`, `emoji`, `sonido` y `dato` como props individuales,
en una sola línea (aunque `id` no se use dentro de `TarjetaAnimal`, no causa
ningún problema recibir una prop extra que no se use).

## Pista 4: sobre la key

`key` no es una prop normal — React la usa internamente para identificar
cada elemento de una lista y saber cuál cambió, se agregó o se eliminó. Por
eso no puedes leer `props.key` dentro de `TarjetaAnimal`; si necesitas el id
adentro, pásalo también como una prop distinta (ej. `idAnimal={animal.id}`).
