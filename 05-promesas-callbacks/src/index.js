// import {obtenerHeroesArray, obtenerHeroeAwait} from './js/await'
import {heroesCiclo, heroeIfAwait} from './js/await'

heroesCiclo();
heroeIfAwait('cap');
// const heroes = obtenerHeroesArray();

// obtenerHeroeAwait('cap')
//     .then(heroe => {
//         console.log(heroe);
//         console.timeEnd('await');
//     }).catch(console.warn);

// import './styles.css';
// import {buscarHeroe, buscarHeroeAsync} from './js/promesas'

// buscarHeroe('cap')
//     .then(heroe => console.log(heroe))
//     .catch(console.warn);

// buscarHeroeAsync('tony')
//     .then(heroe => console.log(heroe));

// buscarHeroeAsync('capIncorrecto')
//     .then(heroe => console.log(heroe));


// //import {promesaLenta, promesaMedia, promesaRapida} from './js/promesas'
// // promesaLenta.then(console.log);
// // promesaMedia.then(console.log);
// // promesaRapida.then(console.log);
// // Promise.race([promesaLenta, promesaMedia, promesaRapida])
// //     .then(console.log) //por el race solo imprime la rápida