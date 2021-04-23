class Persona {
   
    //los static referencian directamente a la clase
   static  _conteo = 0;
   static get conteo(){
       return Persona._conteo + ' instancias';
   }

   static mensaje() {
       console.log('Soy un método estático')
   }

    nombre = ''; 
    codigo = ''; 
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida;
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    mifrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Heroe extends Persona {
    
    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'Avengers';
    }

    quienSoy() {
        console.log(`Soy ${this.codigo}, del clan ${this.clan}`);
        //super.quienSoy(); //para hacer referencia al método de la clase padre
    }
}


//const spiderman = new Persona('Peter Parker', 'Spiderman', 'Tu amigable vecino');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Tu amigable vecino');
const captainAmerica = new Persona('Steven Rogers', 'CaptainAmerica', 'Puedo hacer esto todo el día');