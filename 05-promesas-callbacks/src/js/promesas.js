const heroes = {
    cap: {
        nombre: 'Capitán América',
        poder: 'resistencia sobrehumana'
    },

    tony: {
        nombre: 'Ironman',
        poder: 'ser rico'
    },

    spidey: {
        nombre: 'Spiderman',
        poder: 'poderes aracnidos'
    }
}

//la promesa recibe un callback(s) como parámetro
export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(() => {
                resolve();    
            }, 1000);
            
        } else {
            reject(`No existe un héroe con el id ${id}`);
        }
    });
}

export const buscarHeroesAsync = async(id) => { //async hace que la funcion retorne, por defecto, una promesa
    //es la misma funcion que arriba pero de manera asíncrona
    const heroe = heroes[id];

    
        if (heroe) {
            return heroe;
        } else {
            throw Error(`No existe un héroe con el id ${id}`);
        }
}

const promesaLenta = new Promise ( (resolve, reject) => {
    setTimeout(()=>resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise ( (resolve, reject) => {
    setTimeout(()=>resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise ( (resolve, reject) => {
    setTimeout(()=>resolve('Promesa Rápida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}