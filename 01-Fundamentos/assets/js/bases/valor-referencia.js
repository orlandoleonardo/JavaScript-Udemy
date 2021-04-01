let a = 10;
let b = a;

a=30;

console.log({a,b});

let juan = {nombe: "Juan"}
let ana = juan;
ana.nombe = "Ana";

console.log({juan, ana}); //ambos muestran Ana. esto es porque los objetos se pasan por referencia.

// const cambiaNombre = (persona) => {
//     persona.nombre = 'Tony';
//     return persona;
// }

// let peter = {nombre = "Peter"};
// let tony = cambiaNombre(peter);

// console.log({peter, tony}); //ambos muestran Tony. esto es porque el peter pasa por referencia a la funcion, por ende se trata siempre del mismo objeto.

//para crear una copia de otro objeto se hace con el operador spread (son los ...) de la siguiente manera:
let ana = { ...juan};
//de esta manera se crea otro objeto que apunta a una posición de memoria diferente del objeto del cual se copia

const cambiaNombre2 = (...persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre = "Peter"};
let tony = cambiaNombre(peter);

console.log({peter, tony}); //ahora peter muestra Peter y tony muestra Tony

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
//const otrasFrutas = frutas; //esto haría que se muestre cada lista con las 4 frutas.
// cambiamos por: 
// const otrasFrutas = [...frutas];

console.time('slice');
const otrasFrutas = frutas.slice();//otra manera de crear otro objeto apuntando a una posicion de memoria diferente
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];//otra manera de crear otro objeto apuntando a una posicion de memoria diferente
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas}); 

