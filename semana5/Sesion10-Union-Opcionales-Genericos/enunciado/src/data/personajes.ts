import type { Personaje } from "../types/Personaje.ts";

// TODO: a medida que completes Personaje.ts (estado, arma?, escudo?),
// vuelve aquí y agrega esos valores a cada personaje. Deja a PROPÓSITO
// que algunos personajes NO tengan arma ni escudo, para probar que son
// opcionales de verdad.
//
// Ejemplo de lo que debes agregar a cada objeto:
//   estado: "activo",          <- obligatorio, uno de los 3 valores
//   arma: "Andúril",           <- opcional, algunos personajes no la tienen
//   escudo: "Escudo de Gondor" <- opcional, algunos personajes no lo tienen

export const personajes: Personaje[] = [
  { id: 1, nombre: "Aragorn", clase: "Guerrero", nivel: 42, vida: 350, ataque: 28, avatar: "🗡️", estado: "activo", arma: "Espada", escudo: "Metalico" },
  { id: 2, nombre: "Gandalf", clase: "Mago", nivel: 55, vida: 220, ataque: 45, avatar: "🧙", estado:"activo", arma: "Estaca" },
  { id: 3, nombre: "Legolas", clase: "Arquero", nivel: 38, vida: 260, ataque: 33, avatar: "🏹", estado:"herido", arma: "Arco" },
  { id: 4, nombre: "Gimli", clase: "Guerrero", nivel: 35, vida: 400, ataque: 30, avatar: "🪓", estado:"activo", arma:"Hacha", escudo:"Madera" },
  { id: 5, nombre: "Galadriel", clase: "Hechicera", nivel: 60, vida: 200, ataque: 50, avatar: "✨", estado:"derrotado"},
];
