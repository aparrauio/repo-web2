// TODO 1: define un tipo union llamado TipoItem con estos 3 valores:
// "arma", "poción", "armadura"
//
export type TipoItem = "arma" | "poción" | "armadura";

// TODO 2: define una interfaz Item con:
//   id: number
//   nombre: string
//   tipo: TipoItem
//   poder?: number   (OPCIONAL — no todos los ítems tienen un valor de poder)
//
export interface Item {
    id: number
    nombre: string
    tipo: TipoItem
    poder?: number
}
