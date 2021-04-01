//se necesita la sentencia break para salir del switch.
//se pone un break por cada case

const dia =0;

switch(dia) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break
    case 2:
        console.log('Martes');
        break;
    default :
        console.log('No es lunes, martes o domingo');
}