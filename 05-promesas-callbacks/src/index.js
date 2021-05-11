import './styles.css';
import {buscarHeroe} from './js/callbacks'
const heroeId = 'cap';


//callback es una función que se envía como argumento
buscarHeroe(heroeId, (heroe) => {
    console.log(heroe);    
});