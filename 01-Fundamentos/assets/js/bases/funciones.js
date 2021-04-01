function saludar(nombre) {
    console.log('Hola ' + nombre);
    return 1;
}


const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}


// saludar('Leonardo'); 
// saludar2('Leonardo'); 

// const saludarFlecha = () => { //funcion de flecha sin argumentos
//     console.log('Hola Mundo')
// }

const saludarFlecha = (nombre) => { //nombre es un argunmento
    console.log('Hola '+ nombre)
}

const retornoDeSaludar = saludar('Leonardo');
console.log(retornoDeSaludar);

function sumar (a,b) {
    return a+b;
}

const sumar2 = (a,b) => a+b;

function getAleatorio() {
    return Math.random();
}

console.log(sumar(1,2));
console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());
