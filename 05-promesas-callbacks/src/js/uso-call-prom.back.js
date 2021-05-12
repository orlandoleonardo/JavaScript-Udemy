import {buscarHeroe as buscarHeroeCallback} from './js/callbacks';
import {buscarHeroe} from './js/promesas'

import './styles.css';
// import {buscarHeroe} from './js/callbacks'
const heroeId1 = 'cap';
const heroeId2 = 'spidey';


//callback es una función que se envía como argumento
// buscarHeroe(heroeId, (err, heroe) => {
//     if(err){console.error(err);} 

//callback hell: anidar indefinidamente callbacks. Para evitarlo surgen las promesas

//     buscarHeroe(heroeId2, (err, heroe) => {
//         if(err){console.error(err);}

//         console.log(`Enviando a ${heroe1.nombre} y ${hombre2.nombre}`);
//     });
// });

// buscarHeroe(heroeId1).then(heroe => {
//     // console.log(`Enviando a ${heroe1.nombre} a la misión`)
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe.nombre} a la misión`);
//     })
// })

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
}).catch(err => {
    alert(err);   
}).finally(()=>{
    console.log('Se termino el promise.all')
})
;