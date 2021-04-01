const regresaTrue = () => {
    console.log.length('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log.length('Regresa false');
    return false;
}

console.warn('Not o la negación'); //transformar un valor booleano en su opuesto
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse); //true


console.warn('And'); //true si todos los valores son verdaderos
console.log(true && regresaTrue); //true
console.log(true && false); //false

console.log(regresaTrue() && regresaFalse()); //false, imprime Regresa true, y luego, regresa false
console.log(regresaFalse() && regresaTrue()); //false, imprime Regresa false solamente, porque una vez que detecta un false al usar el operador && ya ignora todo lo demás

console.log('4 condiciones', true && true && true && false); //false

console.log('Or');//true si al menos uno de los valores es verdadero
console.log(true || false); //true
console.log(false || false); //false

console.log(regresaTrue() || regresaFalse());//true, imprime Regresa True solamente, porque una vez que detecta un true al usar el operador || ya ignora todo lo demás

console.log('4 condiciones', true || true || true || false); //true

console.warn('Asignaciones');//comienza un protip

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo'; //a1 toma el último valor, en este caso 'Hola Mundo'

console.log(a1);

const a2 = 'Hola' && 'Mundo' && soyFalso && true; //a2=false, porque se trata de && y no todas las condiciones son true
const a3 = soyFalso || 'Ya no soy falso';//a3='Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';//a4='Ya no soy falso de nuevo'
//const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;//a4='Ya no soy falso de nuevo', porque ya no llega al último true ya que sale antes
const a5 = soyFalso || soyUndefined || regresaTrue || 'Ya no soy falso de nuevo' || true;//a5=true

console.log(a1,a2,a3,a4,a5);

if(regresaFalse() && regresaTrue() && (true||false||true)){
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}