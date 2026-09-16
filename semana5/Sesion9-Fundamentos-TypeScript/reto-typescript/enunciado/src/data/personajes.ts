// TODO 1: importa el tipo Personaje desde "../types/Personaje.ts"
import type { Personaje } from "../types/Personaje.ts";

// TODO 2: anota este arreglo con el tipo Personaje[]
// export const personajes: Personaje[] = [ ... ]
export const personajes: Personaje[] = [
  { id: 1, nombre: "Aragorn", clase: "Guerrero", nivel: 42, vida: 350, ataque: 28, avatar: "🗡️" },
  { id: 2, nombre: "Gandalf", clase: "Mago", nivel: 55, vida: 220, ataque: 45, avatar: "🧙" },
  { id: 3, nombre: "Legolas", clase: "Arquero", nivel: 38, vida: 260, ataque: 33, avatar: "🏹" },
  { id: 4, nombre: "Gimli", clase: "Guerrero", nivel: 35, vida: 400, ataque: 30, avatar: "🪓" },
  { id: 5, nombre: "Galadriel", clase: "Hechicera", nivel: 60, vida: 200, ataque: 50, avatar: "✨" },
  { id: 6, nombre: "Frodo", clase: "Guerrero", nivel: 20, vida: 250, ataque: 30, avatar: "⌛"},
];
