# Sesión 6 — Comunicación asíncrona I (continuación)
## Semana 3 · Clase 2 — fetch() aplicado a una página web dinámica

Este reto extiende lo aprendido en la Sesión 5: en lugar de imprimir datos en
la consola, ahora vas a usar `fetch()` para construir una **página web real**
que se llena de contenido dinámicamente, consumiendo una API externa gratuita.

> ⚠️ **Nota de actualización:** este proyecto usaba originalmente la API
> REST Countries (`restcountries.com/v3.1`), pero esa versión fue dada de
> baja y la versión nueva exige una API key con cuenta y cuota mensual. Para
> que el ejercicio siga funcionando sin registros ni API keys, ahora se usa
> **countries.dev**, una alternativa gratuita y sin autenticación. Ver
> detalles en `NOTA-MIGRACION.md`.

## Proyecto: Explorador de Países 🌍

Una página web con un buscador donde el usuario escribe el nombre de un país
y la página muestra su bandera, capital, población y región — todo obtenido
en vivo desde una API pública, sin necesidad de una API key.

API usada: [countries.dev](https://countries.dev) (gratuita, sin registro, sin API key, con CORS habilitado).

## Requisitos

- Un navegador web moderno (Chrome, Firefox, Edge).
- Conexión a internet (la página consume una API real).
- Opcional: la extensión **Live Server** de VS Code, para servir el HTML
  correctamente (recomendado, aunque también funciona abriendo el archivo
  directamente en el navegador, ya que la API tiene CORS abierto).

## Estructura de carpetas

```
Sesion6-Paginas-Web-Dinamicas/
├── README.md               <- este archivo
├── ENUNCIADO.md             <- el reto a resolver
├── PISTA.md                 <- pistas para resolverlo
├── NOTA-MIGRACION.md        <- por qué se cambió de API (para referencia del profesor)
├── enunciado/                <- plantilla con TODOs para completar en clase
│   ├── index.html
│   ├── style.css
│   └── script.js
```

## Cómo ejecutar

1. Abre la carpeta `enunciado/` (o `solucion/` para ver el resultado final) en VS Code.
2. Clic derecho sobre `index.html` → **"Open with Live Server"**.
   - También puedes abrir `index.html` directamente con doble clic; como la
     API tiene CORS habilitado para cualquier origen, debería funcionar igual.
3. Escribe el nombre de un país en el buscador (ej. "ecuador", "japan", "chile")
   y presiona **Buscar** o Enter.
4. Observa el mensaje de carga mientras esperas la respuesta del API, y luego
   la tarjeta con la información del país.

## Orden sugerido de trabajo

1. Lee `ENUNCIADO.md` y `PISTA.md`.
2. Completa los `// TODO` en `enunciado/script.js`.
3. Prueba tu página con distintos países, incluyendo uno que no exista
   (ej. "paisinventado") para verificar el manejo de errores.
4. Compara tu solución con `solucion/script.js` si te quedas atascado.

**Duración sugerida:** 30 minutos.
