/*
2C = Two of Clubs (tréboles)
2D = Two of Diamonds (diamantes)
2H = Two of Hearts (corazones)
2S = Two of Spades (espadas)
*/


 const miModulo = (() => {
    'use strict' //evaluacion del codigo estricta

    let deck = [];
    const tipos = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];

    let puntosJugadores = [];

    //Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),          
          puntosHTML = document.querySelectorAll('small');

    const inicializarJuego = (nroJugadores = 2) => { //por defecto son 2 jugadores (uno de ellos es la computadora)
        deck = crearDeck();
        puntosJugadores = [];
        for (let i =0; i<nroJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(c => c.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

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
       
        return _.shuffle(deck);;
    }

    

    const pedirCarta = () => {

        if(deck.length===0){
            throw 'No hay más cartass en el deck';
        }

        return deck.pop();
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1); //no alcanza con tomar solo la primera posición porque sino tomaría mal el 10
        return (isNaN(valor)) ? //pregunta si no es un numero
            ( valor === 'A')  ? 11 : 10
            : valor * 1; //al multiplicarlo por 1 el string se transforma en un numerico
    }

    //Truno: 0 primer jugador y el último será la computadora
    const acumularPuntos = (carta, turno) => {
            puntosJugadores[turno] += valorCarta(carta);
            puntosHTML[turno].innerText = puntosJugadores[turno];
            return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;

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
        }, 100); //agrega un delay para que aparezcan primero las cartas y luego el mensaje de alert
    } 
    
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length - 1);
            crearCarta(carta,puntosJugadores.length - 1);
          
            if(puntosMinimos > 21) break; //porque con cualquier carta que la computadora saque, ganará, ya que el  jugador se pasó

        } while ((puntosComputadora < puntosMinimos) && (puntosComputadora <= 21));
        
        determinarGanador();
    }

    //ejemplo de uso de las dos funciones
    // valorCarta(pedirCarta());

    //Eventos
    btnPedir.addEventListener('click',  () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta,0);

        crearCarta(carta,0);

        if ( puntosJugador > 21 ) {
            console.warn('Lo siento mucho, perdiste');
            alert('Lo siento mucho, perdiste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ) {
            console.warn('21, genial!');
            alert('21, genial!')
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }
        });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled =true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    })

    // btnNuevo.addEventListener('click', () => {
        
    //     inicializarJuego();
        
    // });

    return {
        nuevoJuego: inicializarJuego
    } //solamente lo que esta dentro de este return será público. En este caso sería la funcion inicializarJuego con el alias nuevoJuego (ver en el html cómo la usa)

})();

