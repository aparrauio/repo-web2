# Pista — De HTML/CSS/JS a React, y GitHub Pages

## Pista 1: mapa mental de la migración

Piensa en cada sección de `index.html` como un componente:

```
<header>            -> <Header links={...} />
<section class="hero">   -> <Hero />
<section class="servicios"> -> <Servicios servicios={...} />
<section class="trabajando"> -> <EnQueEstoyTrabajando />
<section class="testimonios"> -> <Testimonios testimonios={...} />
<footer>            -> <Footer />
```

`App.jsx` simplemente los junta en orden, como antes estaban las `<section>`
una debajo de otra en el HTML.

## Pista 2: de innerHTML a JSX + estado

En la versión HTML, `script.js` usa algo como:

```js
contenedor.innerHTML = repos.map(r => `<div>${r.name}</div>`).join("");
```

En React, en cambio, guardas los repos en estado y los renderizas con `.map()`
directamente en JSX:

```jsx
const [repos, setRepos] = useState([]);
// ...
return repos.map((repo) => <TarjetaRepositorio key={repo.id} {...repo} />);
```

No hay que "insertar HTML como texto": React se encarga de crear los
elementos reales por ti.

## Pista 3: un botón reutilizable con variantes

```jsx
function BotonCTA({ texto, variante = "primario", href = "#" }) {
  return (
    <a href={href} className={`boton boton-${variante}`}>
      {texto}
    </a>
  );
}

// Uso:
<BotonCTA texto="Agenda una consultoría" variante="primario" href="#contacto" />
<BotonCTA texto="Ver todos los servicios" variante="secundario" href="#servicios" />
```

## Pista 4: la llamada al API de GitHub en useEffect

```jsx
useEffect(() => {
  async function obtenerRepos() {
    setCargando(true);
    setError(null);
    try {
      const url = "https://api.github.com/users/aparrauio/repos?sort=updated&per_page=5";
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        throw new Error("No se pudieron cargar los repositorios (¿límite de peticiones?).");
      }
      const datos = await respuesta.json();
      setRepos(datos);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }
  obtenerRepos();
}, []); // se ejecuta una sola vez, al montar el componente
```

> El API de GitHub sin autenticación permite 60 peticiones por hora por IP.
> Si ves un error 403, espera unos minutos o prueba desde otra red.

## Pista 5: el detalle que rompe GitHub Pages

Cuando publicas en `https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/`, tu app
NO vive en la raíz del dominio, sino en una subcarpeta. Si no le dices esto a
Vite, las rutas de tus archivos `.js`/`.css` se romperán. La solución está
en `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: "/NOMBRE_DEL_REPOSITORIO/", // <- debe coincidir EXACTO con el repo
});
```

Ver el detalle completo en `PASOS-GITHUB-PAGES.md`.
