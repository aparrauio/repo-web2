// --------------------------------------------
// EJERCICIO FINAL (INTEGRADOR)
// --------------------------------------------
// Crea una arrow function crearProducto que reciba nombre, precio y categoria,
// y retorne un objeto con esas propiedades.
// Luego crea 3 productos, guárdalos en un arreglo y usa map()
// para imprimir un arreglo que contenga solo sus nombres.

const crearProducto = (nombre, precio, categoria) => ({
    nombre,
    precio,
    categoria
});

const productos = [
    crearProducto("TV", 500, "electronica"),
    crearProducto("borrador", 1.50, "papeleria"),
    crearProducto("cafe", 2, "bebidas")
];

const nombresProductos = productos.map(({ nombre }) => nombre);

console.log(productos);
console.log(nombresProductos);

//Dado un arreglo de objetos producto (nombre, precio, categoria), 
// escribe una función que use arrow functions, destructuring y map/filter 
// para obtener los nombres de productos de categoría "electronica" 
// con precio mayor a $100.

const nuevosProductos = [
    {nombre: "Laptop", precio: 800, categoria: "electronica"},
    {nombre: "Mesa", precio: 150, categoria: "muebles"},
    {nombre: "Pizarra", precio: 200, categoria: "papeleria"},
    {nombre: "Audifonos", precio: 180, categoria: "electronica"}
];

const productosCaros = nuevosProductos.filter(({ categoria, precio }) => categoria === "electronica" && precio > 100).map(({ nombre }) => nombre);

console.log(productosCaros);