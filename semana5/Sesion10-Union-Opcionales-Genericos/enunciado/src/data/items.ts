// TODO 1: importa el tipo Item desde "../types/Item.ts"
import type { Item } from "../types/Item.ts";

// TODO 2: crea un arreglo "items" de tipo Item[] con al menos 5 objetos,
// usando los 3 valores de "tipo" (arma, poción, armadura) y dejando el
// campo "poder" sin definir en al menos uno de ellos (es opcional).
//
// Ejemplo de un ítem:
//   { id: 1, nombre: "Espada Larga", tipo: "arma", poder: 15 }
//
export const items: Item[] = [
    { id: 1, nombre: "Espada Larga", tipo: "arma", poder: 15 },
    { id: 2, nombre: "Poción Especial", tipo: "poción"},
    { id: 3, nombre: "Armadura Indestructible", tipo: "armadura", poder: 50 },
    { id: 4, nombre: "Poción Mágica", tipo: "poción" },
    { id: 5, nombre: "Arco pequeño", tipo: "arma", poder: 10 }
];
