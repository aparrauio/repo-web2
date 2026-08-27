# Guía paso a paso — Reto 1

1. Crea el `<ul id="lista-tareas">` con varios `<li>` dentro, cada uno con texto de una tarea.
2. Selecciona el `<ul>` con `document.querySelector` o `getElementById`.
3. Agrega **un solo** `addEventListener("click", ...)` sobre el `<ul>`.
4. Dentro del listener, revisa `event.target.tagName === "LI"` para confirmar que el clic ocurrió sobre una tarea y no sobre un espacio vacío del `<ul>`.
5. Usa `event.target.classList.toggle("tachado")` para tachar o destachar la tarea.
6. Define en CSS la clase `.tachado` con `text-decoration: line-through;`.

## Verificación
- Clic en cualquier tarea → se tacha.
- Clic de nuevo → se destacha.
- Revisa en el código que no exista un `addEventListener` dentro de un bucle o por cada `<li>`.
