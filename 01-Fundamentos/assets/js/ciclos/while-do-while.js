const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i =0;

// while( i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

// undefined y null son considerados como falsos si da ese resultado en la condición
//por ello es lo mismo usar carros[i] como condición. porque cuando no hay más elementos dará null como resultado
while ( carros[i]){
    console.log(carros[i]);
    i++;
}

//la unica diferencia entre while y do-while es que el do-while ejectuta el codigo interno al menos una vez