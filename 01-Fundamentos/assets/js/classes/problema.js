function Persona (nombre, edad) {
    this.nombre = nombre;
    this.edda = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${ this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('María', 18);