// function crearPersona (nombre, apellido) {
//     return  {nombre, apellido}
// }


const crearPersona = (nombre, apellido) => ({nombre, apellido});


const persona = crearPersona ('Leonardo', 'Orlando');

console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Leo', 'Hola');

// const imprimeArgumentos2 = () => {console.log(arguments)} //no anda

// const imprimeArgumentos2 = (args) => {
//     console.log(args);
// }   //solo imprime el primero de los argumentos

// const imprimeArgumentos2 = (...args) => {
//     console.log(args);
// } //agregar el ... hace que tome todos los argumentos que se le pasan a la funcion
//es un parametro rest. luego de él no puede venir nada más como parámetro

const imprimeArgumentos2 = (edad, ...args) => {
    return args;
}

// const argumentos = imprimeArgumentos2(10, true, false, 'Leo');

const [casado,vivo,nombre,saludo] = imprimeArgumentos2(10, true, false, 'Leo', 'Hola'); //le asigna un nombre a cada uno de los argumentos
console.log({casado,vivo,nombre,saludo});

const {apellido: nuevoApellido} = crearPersona ('Leonardo', 'Orlando'); //le cambia el nombre a la variable apellido por nuevoApellido
console.log(nuevoApellido);


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    trajes: ["Mark I", "Mark V", "Hulkbuster"]
};


//desestructuración de argumentos

// const imprimePropiedades = (personaje) => {
//     console.log('nombre',personaje.nombre);
//     console.log('codeName',personaje.codeName);
//     console.log('vivo',personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('trajes',personaje.trajes);
// }

const imprimePropiedades = ({nombre, codeName,vivo, edad=0, trajes}) => { //se les puede definir un valor por defecto a los parametros, como por ejemplo aquí se hace con la edad
   console.log({nombre});
   console.log({codeName});
   console.log({vivo});
   console.log({edad});
   console.log({trajes});
}