//const arr = new Array[10]; //arreglo de 10 elementos
const arr = []; //inicializar el arreglo vacío

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];

console.log({videoJuegos});
console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Leonardo',
    1 + 2,
    function(){}, //función tradicional
    ()=>{}, //función de flecha / función lambda
    { a: 1}, //objeto literal
    ['X', 'Megaman', 'Zero','Dr. Light', ['Dr. Willy', 'Woodman']]
];

// console.log({arregloCosas});

// console.log(arregloCosas[2]);
// console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);
