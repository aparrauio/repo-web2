# Reto — Ficha de Personajes RPG, Edición Batalla ⚔️
## Semana 5 · Sesión 10 — Tipos union, propiedades opcionales y funciones genéricas

## Contexto

En la Sesión 9 migraste la Ficha de Personajes RPG a TypeScript: definiste
una interfaz `Personaje`, tipaste funciones y props. Hoy vas a extender ESE
MISMO proyecto (ya incluido en `enunciado/`) con tres herramientas nuevas
de TypeScript que resuelven problemas muy comunes.

## Parte 1 — Tipos union: el estado de un personaje

Un personaje en batalla puede estar en uno de exactamente tres estados:
activo, herido o derrotado — nunca "cansado" ni "en pausa" ni cualquier
otro texto que alguien escriba por error.

1. En `src/types/Personaje.ts`, define un **tipo union**:
   ```ts
   export type EstadoPersonaje = "activo" | "herido" | "derrotado";
   ```
2. Agrega la propiedad `estado: EstadoPersonaje` a la interfaz `Personaje`.
3. En `src/data/personajes.ts`, asigna un `estado` a cada personaje (ya
   están marcados con `// TODO` donde debes agregarlo).
4. Completa el componente `src/components/EstadoBadge.tsx`: debe recibir un
   `estado: EstadoPersonaje` y usar un `switch` para mostrar una insignia
   (`badge`) de Bootstrap de color distinto según el estado:
   - `"activo"` → verde (`bg-success`)
   - `"herido"` → amarillo (`bg-warning text-dark`)
   - `"derrotado"` → rojo (`bg-danger`)

## Parte 2 — Propiedades opcionales: equipo de combate

No todos los personajes tienen un arma o un escudo equipados.

1. En la interfaz `Personaje`, agrega dos propiedades **opcionales**:
   ```ts
   arma?: string;
   escudo?: string;
   ```
2. En `src/data/personajes.ts`, dale `arma` y/o `escudo` a ALGUNOS
   personajes, y déjaselos sin definir a otros (para probar que de verdad
   son opcionales).
3. En `TarjetaPersonaje.tsx`, muestra una sección "Equipo" SOLO si el
   personaje tiene `arma` o `escudo` definidos (si no tiene ninguno de los
   dos, la sección no debe aparecer).

## Parte 3 — Funciones genéricas: un buscador universal

Vas a construir un buscador que encuentre elementos por `id`, y que
funcione tanto para personajes como para ítems de inventario — sin
duplicar código.

1. En `src/types/Item.ts`, define un tipo union `TipoItem` (`"arma"` |
   `"poción"` | `"armadura"`) y una interfaz `Item` con `id`, `nombre`,
   `tipo`, y un `poder?: number` opcional.
2. En `src/data/items.ts`, crea un arreglo `items: Item[]` con al menos 5
   ítems.
3. En `src/utils/genericos.ts`, completa dos **funciones genéricas**:
   - `obtenerAleatorio<T>(lista: T[]): T` — devuelve un elemento al azar de
     cualquier arreglo, sin importar el tipo.
   - `buscarPorId<T extends { id: number }>(lista: T[], id: number): T | undefined`
     — busca por `id` en cualquier arreglo, siempre que sus elementos
     tengan una propiedad `id` de tipo `number`.
4. En `src/components/BuscadorUniversal.tsx`, usa `buscarPorId()` para
   buscar tanto en `personajes` como en `items`, según lo que el usuario
   seleccione en un `<select>`.

## Criterios de éxito

- `estado` solo acepta uno de los 3 valores exactos; escribir otro texto
  marca error de TypeScript.
- Los personajes sin `arma` ni `escudo` no muestran la sección "Equipo".
- `buscarPorId()` funciona correctamente tanto con `personajes` como con
  `items`, usando la MISMA función (no una copia para cada tipo).
- El proyecto compila sin errores de tipos y sin usar `any`.

## Reto extra (opcional)

- Agrega una función genérica `contarPorTipo<T, K extends keyof T>(lista: T[], propiedad: K)`
  que cuente cuántos elementos hay por cada valor distinto de una propiedad
  (por ejemplo, cuántos personajes de cada `clase`).
