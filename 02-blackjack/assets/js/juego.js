/*
2C = Two of Clubs (tréboles)
2D = Two of Diamonds (diamantes)
2H = Two of Hearts (corazones)
2S = Two of Spades (espadas)
*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');


const crearDeck = () => {
    
    deck = [];

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

const turnoComputadora = (puntosMinimos) => {
    do{
        const carta = pedirCarta();
        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;
    
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);
        
        if(puntosMinimos > 21) break; //porque con cualquier carta que la computadora saque, ganará, ya que el  jugador se pasó

    } while ((puntosComputadora < puntosMinimos) && (puntosComputadora <= 21));

    setTimeout(() => {

        if(puntosComputadora === puntosMinimos) {
            alert('Empate');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if(puntosComputadora > 21){
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 20); //agrega un delay para que aparezcan primero las cartas y luego el mensaje de alert
    
}

//ejemplo de uso de las dos funciones
// valorCarta(pedirCarta());

//Eventos
btnPedir.addEventListener('click',  () => {

    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21) {
        console.warn('Perdiste');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled =true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
})

btnNuevo.addEventListener('click', () => {
    
    console.clear();
    
    deck = crearDeck();
    
    puntosJugador = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
    
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    
    btnPedir.disabled = false;
    btnDetener.disabled = false;
}
);