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