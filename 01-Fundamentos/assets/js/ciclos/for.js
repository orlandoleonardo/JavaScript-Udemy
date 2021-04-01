const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}


console.warn('For in');
for(let i in heroes) { //sale del ciclo cuando no queden mas elementos en el array

}

console.warn('For of');
for (let heroe of heroes) { //extrae el valor de la posición del array correspondiente y se le asigna a la variable heroe
    console.log(heroe);
}
