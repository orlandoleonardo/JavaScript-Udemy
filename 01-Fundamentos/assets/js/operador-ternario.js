/*
Días de semana abrimos a las 11,
pero los fines de semana abrimos a las 9
*/

//Entra a un sitio web, para consultar si está abierto hoy

const dia = 0; // 0: domingo... 1:lunes...
const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, esta cerrado, abrimos a las XXhs

// if (dia === 0 || dia === 6){ //otra forma: if([0,6].includes(dia))
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11; //uso del operador ternario


// if (horaActual >= horaApertura){
//     mensaje = 'Está abierto'
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}` ; //otra forma de concatenar
//     // mensaje = 'Está cerrado, hoy abrimos a las ' + horaApertura;
// }

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`; //uso del operador ternario

console.log({horaApertura});