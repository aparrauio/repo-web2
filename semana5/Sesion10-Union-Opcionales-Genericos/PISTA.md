# Pista — Tipos union, propiedades opcionales y genéricos

## Pista 1: tipo union

```ts
export type EstadoPersonaje = "activo" | "herido" | "derrotado";

let estado: EstadoPersonaje = "activo";   // ✅ válido
let estado2: EstadoPersonaje = "cansado"; // ❌ error: no es uno de los 3 valores
```

Un `switch` sobre un tipo union es exhaustivo y seguro:

```tsx
function EstadoBadge({ estado }: { estado: EstadoPersonaje }) {
  switch (estado) {
    case "activo":
      return <span className="badge bg-success">Activo</span>;
    case "herido":
      return <span className="badge bg-warning text-dark">Herido</span>;
    case "derrotado":
      return <span className="badge bg-danger">Derrotado</span>;
  }
}
```

## Pista 2: propiedades opcionales

El signo `?` después del nombre de la propiedad la hace opcional:

```ts
interface Personaje {
  // ...
  arma?: string;
  escudo?: string;
}
```

Para mostrar contenido solo si una propiedad opcional existe:

```tsx
{(personaje.arma || personaje.escudo) && (
  <div className="equipo">
    {personaje.arma && <p>🗡️ {personaje.arma}</p>}
    {personaje.escudo && <p>🛡️ {personaje.escudo}</p>}
  </div>
)}
```

## Pista 3: función genérica simple

`<T>` es una "variable de tipo": representa cualquier tipo que se use al
llamar la función, decidido en el momento de la llamada, no al escribirla.

```ts
function obtenerAleatorio<T>(lista: T[]): T {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

const personajeAlAzar = obtenerAleatorio<Personaje>(personajes); // T = Personaje
const itemAlAzar = obtenerAleatorio<Item>(items);                 // T = Item
```

## Pista 4: función genérica con restricción (`extends`)

Para buscar por `id`, la función necesita SABER que el tipo `T` tiene una
propiedad `id`. Eso se declara con `extends`:

```ts
function buscarPorId<T extends { id: number }>(lista: T[], id: number): T | undefined {
  return lista.find((elemento) => elemento.id === id);
}
```

Así, `buscarPorId(personajes, 3)` y `buscarPorId(items, 3)` usan la MISMA
función, pero TypeScript sabe que el resultado de la primera es
`Personaje | undefined` y el de la segunda es `Item | undefined`.

## Pista 5: el resultado puede ser `undefined`

Como el `id` buscado podría no existir, el tipo de retorno incluye
`| undefined`. Siempre verifica antes de usar el resultado:

```tsx
const encontrado = buscarPorId(personajes, idBuscado);
if (encontrado) {
  // aquí TypeScript ya sabe que encontrado es Personaje, no undefined
}
```
