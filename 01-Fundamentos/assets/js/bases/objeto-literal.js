let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    "ultima-pelicula" : "EndGame" //llegado el caso de necesitar usar un caracter especial, debemos ponerlo así
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['Nombre']);
console.log('Edad', personaje.edad);

console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('Nro. Trajes', personaje.trajes.length);
console.log('Último traje', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';

console.log('Vivo',personaje[x]);

console.log('Última película', personaje['ultima-pelicula']);

//Más detalles
delete personaje.edad; //para borrar una propiedad
console.log(personaje);

personaje.casado = true; //agrega una propiedad

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje); //para que no se pueda ni agregar ni quitar propiedades
//tampoco los valores de las actuales
//aunque, si la propiedad hace referencia a otro objeto, las propiedades de este son modificables


const propiedades = Object.getOwnPropertyNames(personaje); //devuelve los nombres de las propiedades de un objeto
const valores = Object.values(personaje); //devvuelve los valores de las propiedades del objeto

//más info https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object