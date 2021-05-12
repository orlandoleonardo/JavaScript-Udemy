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

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if (heroe) {
        callback(null, heroe);
    } else {
        callback(`No existe un héroe con el id ${id}`);
    }
    
}