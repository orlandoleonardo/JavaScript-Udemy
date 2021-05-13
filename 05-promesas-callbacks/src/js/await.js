import {buscarHeroesAsync, buscarHeroe} from './js/'

const heroesIds = [
    'cap', 'tony', 'spidey'
];

const heroesPromesas = heroesIds.map(buscarHeroe);

export const obtenerHeroesArray = async () => {
    
    return await Promise.all(heroesIds.map(buscarHeroe));
    
    // const heroesArray = [];
    // for(const id of heroesIds){
    //     heroesArray.push(buscarHeroesAsync(id));
    // }
    
    // return await Promise.all(heroesArray);
}

export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroesAsync(id);
        return heroe;    
    } catch (err) {
       console.log('catch');
       console.log(err);
       return {
           nombre : 'Sin Nombre',
           poder: 'Sin Poder'
       } 
    }
    
}

export const heroesCiclo = () => {
    console.time('heroesCiclo');

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.array.forEach(heroe => {
    //     console.log(heroe);
    // });
    for await(const heroe of heroesPromesas) {
        console.log(heroe);
    }

    console.timeEnd('heroesCiclo');
}

export const heroeIfAwait = async (id) => {
    if((await buscarHeroesAsync(id)).nombre === 'Capitán América'){
        console.log('El mejor');
    } else {
        console.log('no es el mejor');
    }
}

// export const obtenerHeroesArray = async () => {
//     const heroesArray = [];

//     for(const id of heroesIds){ //no aconsejable usar await dentro de un ciclo for
//         const heroe = await buscarHeroesAsync(id); //await es para esperar que la promesa se resuelva (es muy importante agregar el async)
//         heroesArray.push(heroe);
//     }
    
// }