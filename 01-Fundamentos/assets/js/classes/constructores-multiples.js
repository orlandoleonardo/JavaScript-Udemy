class Persona {

    static porObjeto(nombre, apellido, pais) {
        return new Persona(nombre,apellido,pais);
    } //esta es la "trampita", ya que de por sí JS no permite tener más de un constructor por clase

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Tsubasa',
        apellido1 = 'Ozora',
        pais1 = 'Japón';

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(nombre1)