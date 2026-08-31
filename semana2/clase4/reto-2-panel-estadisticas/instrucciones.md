# Guía paso a paso — Reto 2

## 1. Modela el estado como datos, no como HTML
En lugar de escribir cada `<li>` a mano en el HTML, define el estado en JavaScript:

```js
const tareas = [
    { texto: "Comprar pan", completada: false },
    { texto: "Estudiar JavaScript", completada: true },
    { texto: "Hacer ejercicio", completada: false },
];
```

Esto es clave: el arreglo `tareas` es la "fuente de verdad". El DOM solo la refleja visualmente.

## 2. Crea una función que dibuje la lista a partir del arreglo
```js
function renderizarLista() {
    listaEl.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        const li = document.createElement("li");
        li.textContent = tarea.texto;
        li.dataset.indice = indice; // guardamos la posición en el arreglo
        if (tarea.completada) li.classList.add("completada");
        listaEl.appendChild(li);
    });
}
```

## 3. Calcula las estadísticas con funciones de arreglo

```js
function calcularEstadisticas() {
    const completadas = tareas.filter((tarea) => tarea.completada);
    const pendientes = tareas.filter((tarea) => !tarea.completada);

    const totalCompletadas = completadas.reduce((contador) => contador + 1, 0);
    const porcentaje = tareas.length === 0
        ? 0
        : Math.round((totalCompletadas / tareas.length) * 100);

    const textosPendientes = pendientes.map((tarea) => tarea.texto);

    return {
        total: tareas.length,
        completadas: totalCompletadas,
        pendientes: pendientes.length,
        porcentaje,
        textosPendientes,
    };
}
```

## 4. Muestra las estadísticas en el DOM
Crea elementos en el HTML (`<p id="total">`, `<p id="completadas">`, etc.) y actualízalos cada vez que cambien los datos.

## 5. Conecta todo con delegación de eventos
```js
listaEl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const indice = Number(event.target.dataset.indice);
        tareas[indice].completada = !tareas[indice].completada;
        renderizarTodo(); // vuelve a dibujar lista + estadísticas
    }
});
```

## 6. Verifica el criterio de éxito
- Cuenta cuántas veces aparece `addEventListener` en tu archivo: debe ser exactamente una vez.
- Revisa que no haya ningún `for` o `while` usados para contar tareas completadas/pendientes.
