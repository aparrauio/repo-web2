# Sesión 5 — Comunicación asíncrona I
## Semana 3 · Clase 1 — Fundamentos de HTTP, JSON, fetch(), promesas y async/await

Este paquete contiene los dos retos prácticos de la sesión, listos para resolver y probar.

## Requisitos

- Node.js 18 o superior (incluye `fetch()` global, no se necesita instalar nada).
- Verifica tu versión con: `node -v`

## Estructura de carpetas

```
Sesion5-Comunicacion-Asincrona/
├── README.md                          <- este archivo
├── reto-1-servidor-fantasma/          <- Reto 1: códigos de estado HTTP + JSON
│   ├── ENUNCIADO.md
│   ├── PISTA.md
│   └── enunciado/
│       └── servidor-fantasma.js       <- plantilla con TODOs para completar en clase
└── reto-2-tarjeta-digital/            <- Reto 2: fetch(), promesas y async/await
    ├── ENUNCIADO.md
    ├── PISTA.md
    └── enunciado/
        ├── tarjeta-then.js            <- plantilla versión .then()
        └── tarjeta-async.js           <- plantilla versión async/await
```

## Cómo trabajar en clase

1. Lee `ENUNCIADO.md` y `PISTA.md` dentro de cada carpeta de reto antes de programar.
2. Abre los archivos de la carpeta `enunciado/` y completa los bloques marcados con `// TODO`.
3. Ejecuta tu archivo desde la terminal, por ejemplo:
   ```bash
   node reto-1-servidor-fantasma/enunciado/servidor-fantasma.js
   ```
4. Si te quedas atascado, compara tu avance con el archivo equivalente en `solucion/`.
   No copies la solución sin intentar el reto primero — el aprendizaje está en el intento.

## Orden sugerido

1. **Reto 1 — El servidor fantasma** (≈20 min): trabaja con códigos de estado HTTP (200, 404, 500) y `JSON.stringify()`.
2. **Reto 2 — Tarjeta de presentación digital** (≈25 min): consume la API real `jsonplaceholder.typicode.com` con `fetch()`, tanto con `.then()` como con `async/await`, incluyendo manejo de errores.

## Criterios de éxito generales

- El código corre sin errores desde la terminal con `node archivo.js`.
- Los mensajes impresos en consola son claros y distintos según el caso.
- Se usan los conceptos de la sesión: `switch`, `JSON.stringify`, `fetch()`, `.then()`/`.catch()`, `async`/`await`, `try`/`catch`.
