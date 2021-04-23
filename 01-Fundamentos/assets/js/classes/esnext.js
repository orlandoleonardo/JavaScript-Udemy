class Rectangulo {
    #area = 0; //propiedades privadas. aún no tienen compatibilidad con todos los navegadores

    constructor(base, altura){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea() {
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10,15);