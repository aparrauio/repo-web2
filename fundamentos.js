//const y let
const nombre = 'Ana';
let edad = 20;
const esEstudiante = true;

console.log({ nombre, edad, esEstudiante });

const ciudad = "Quito";
const pais = "Ecuador";
let anioActual = 2026;

console.log({ ciudad, pais, anioActual });

//tipos de dato
const sinValor = null;
let noDefinido;
const universidad = "Universidad San Francisco de Quito";

console.log(typeof ciudad);
console.log(typeof universidad);
console.log(typeof anioActual);
console.log(typeof esEstudiante);
console.log(typeof sinValor);
console.log(typeof noDefinido);

//operadores y template literals
const a = 100;
const b = 5;

console.log(a + b);
console.log(`Suma: ${a + b}`);
console.log(`Resta: ${a - b}`);
console.log(`División: ${a / b}`);
console.log(`Igualdad: ${a == "100"}`);
console.log(`Igualdad estricta: ${a === 100}`);

//condicionales
const temperatura = 30;

if (temperatura > 25) {
    console.log("Hace calor.");
} else if (temperatura > 15) {
    console.log("Clima agradable.");
} else {
    console.log("Hace frio.");
}
    
//funciones y arrow functions
//tradicional
function saludarTradicional(nombrePersona) {
    return `Hola, ${nombrePersona}`;
}

//arrow function
const saludar = (nombrePersona) => `Hola, ${nombrePersona}!`;

const calcularArea = (base, altura) => base * altura;

console.log(saludarTradicional('Ana'));
console.log(saludar('Pepe'));
console.log(`Área del rectangulo: ${calcularArea(5,8)}`);

//arreglos
const frutas = ["manzana", "naranja", "uva"];
const frutasActualizada = [...frutas, "banana", "cereza"];
console.log(frutasActualizada);
console.log(frutasActualizada[0]); //primer elemento
console.log(`Numero de elementos: ${frutasActualizada.length}`);
console.log(`Ultimo elemento: ${frutasActualizada[frutasActualizada.length - 1]}`);

//transformar arreglos con map
const frutasMayuscula = frutasActualizada.map((fruta) => fruta.toUpperCase());
console.log(frutasMayuscula);

const numeros = [3, 12, 43, 55, 97];
const numerosNuevo = numeros.map((valor) => valor * 10);
console.log(numerosNuevo);

//objetos y destructuring
const persona = {
    nombre: "Pepe",
    edad: 20,
    ciudad: "Quito"
};
console.log(persona);

//extraer propiedades del objeto
const { nombre: nombrePersona, edad: edadPersona, ciudad: ciudadPersona } = persona;
console.log(nombrePersona, edadPersona, ciudadPersona);

//object.entries
for (const[clave, valor] of Object.entries(persona)) {
    console.log(`${clave} : ${valor}`);
}

//spread y rest
const colores = ["negro", "blanco"];
const coloresCompletos = [...colores, "azul", "verde", "rojo"];
console.log(coloresCompletos);

const calcularTotal = (...valores) => valores.reduce((acumulado, valor) => acumulado + valor, 0);
console.log(calcularTotal(1,1,8,33,188,999));