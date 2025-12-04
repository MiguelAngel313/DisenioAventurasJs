//Importar scripts
import { Producto } from './modules/Producto.js';
import { Jugador } from './modules/Jugador.js';
import { categorizarJugadores, rankearJugadores } from './modules/ranking.js';
import { Enemigo, JefeFinal } from './modules/Enemigo.js';




const jugador = new Jugador(jugadores[1]);
const enemigo = new Enemigo('Enemigo', 'Goblin', 3, 30);

console.log(jugador.atacar(enemigo));