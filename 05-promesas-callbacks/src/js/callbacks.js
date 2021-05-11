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

    callback(heroe);
}