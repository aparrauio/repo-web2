# Pista — Fundamentos de TypeScript

## Pista 1: tipos básicos

TypeScript agrega anotaciones de tipo después de `:` en variables,
parámetros y valores de retorno:

```ts
let nombre: string = "Aragorn";
let nivel: number = 42;
let esJefe: boolean = false;
let habilidades: string[] = ["Espada", "Curación"];
```

## Pista 2: una interfaz describe la forma de un objeto

```ts
interface Personaje {
  id: number;
  nombre: string;
  clase: string;
  nivel: number;
  vida: number;
  ataque: number;
  avatar: string;
}
```

Cualquier objeto que digas que es de tipo `Personaje` DEBE tener
exactamente esas propiedades, con esos tipos. Si falta una o el tipo no
coincide, TypeScript marca error.

## Pista 3: tipar un arreglo de objetos

```ts
export const personajes: Personaje[] = [
  { id: 1, nombre: "Aragorn", clase: "Guerrero", nivel: 42, vida: 350, ataque: 28, avatar: "🗡️" },
  // ...
];
```

## Pista 4: funciones tipadas (parámetros y retorno)

```ts
function calcularPoder(personaje: Personaje): number {
  return personaje.ataque * personaje.nivel;
}
```

Lee esto como: "recibe un `Personaje`, devuelve un `number`". Si dentro de
la función escribes `personaje.atack` (mal escrito), TypeScript lo marca
como error inmediatamente, porque `Personaje` no tiene esa propiedad.

## Pista 5: tipar las props de un componente con una interfaz

```tsx
interface TarjetaPersonajeProps {
  personaje: Personaje;
}

function TarjetaPersonaje({ personaje }: TarjetaPersonajeProps) {
  return <div className="card">{personaje.nombre}</div>;
}
```

Esto reemplaza el comentario JSDoc "recibe la prop personaje" que
escribíamos antes: ahora es una regla que el compilador puede verificar.

## Pista 6: el archivo cambia de extensión

Cualquier archivo que tenga JSX (etiquetas `<div>`, `<TarjetaPersonaje />`,
etc.) debe llamarse `.tsx`, no `.ts`. Los archivos sin JSX (como
`calculos.ts` o `Personaje.ts`) usan `.ts` normal.
