/*
2C = Two of Clubs (tréboles)
2D = Two of Diamonds (diamantes)
2H = Two of Hearts (corazones)
2S = Two of Spades (espadas)
*/

let deck = [];
const tipos = ['C','D','H','S']
const especiales = ['A','J','Q','K']

const crearDeck = () => {
    for (let i=2; i<11 ;i++){
        for(let tipo of tipos){
        deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for (let especial of especiales){
            deck.push(especial + tipo);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

const pedirCarta = () => {

    if(deck.length===0){
        throw 'No hay más cartass en el deck';
    }

    return deck.pop();
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1); //no alcanza con tomar solo la primera posición porque sino tomaría mal el 10
    return (isNaN(valor)) ? //pregunta si no es un numero
        ( valor === 'A') ? 11 : 10
        : valor * 1; //al multiplicarlo por 1 el string se transforma en un numerico
}

//ejemplo de uso de las dos funciones
// valorCarta(pedirCarta());