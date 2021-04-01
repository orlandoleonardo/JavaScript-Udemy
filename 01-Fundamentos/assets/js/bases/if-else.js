let a = 5;

if (a >=10) { //undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay(); //0: domingo, 1:lunes, ....

console.log(dia);

//las asignaciones dentro del if siempre devuelve true

if (dia === 0){ //pregunta por valor y tipo (es identidad)
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
}

//Sin usar If Else, o switch, únicamente objetos

dia = 3;
//día de la semana

//con objetos
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
}

//con un arreglo
let diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(diasLetras[dia]);