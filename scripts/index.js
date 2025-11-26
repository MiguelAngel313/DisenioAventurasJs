import { Jugador } from '../modules/Jugador.js';
export let numeroJugador = 0;
let jugadores = agregarJugador();
let imagenPersonaje = document.getElementById('imgPersonaje');
let botonContinuar = document.getElementById('continuar1');
botonContinuar.addEventListener('click', () => {
    window.location.href = 'Escena2.html';
});

establecerAtributos();

function agregarJugador() {
    let jugadoresArray = [];
    let nombres = ['Cazadora', 'Cazador', 'Asesino', 'Guardian'];
    let ataque = 10;
    let defensa = 10;

    nombres.forEach((n) =>{    
            if (n === 'Cazadora') {
                ataque = 15;
                defensa = 5;
            } else if (n === 'Cazador') {
                ataque = 12;
                defensa = 8;
            } else if (n === 'Asesino') {
                ataque = 18;
                defensa = 3;
            } else if (n === 'Guardian') {
                ataque = 8;
                defensa = 15;
            }
        
        jugadoresArray.push(new Jugador(n, ataque, defensa));
    });
    return jugadoresArray;
}

function mostraImagen(){
    let imagenes = ['./img/cazadora.jpg', './img/cazador.jpg', './img/asesino.jpg', './img/guardian.jpg'];
    return imagenes[numeroJugador];
}

function establecerAtributos(){
    let jugador = jugadores[numeroJugador];
    document.getElementById('nombrePersonaje').textContent = jugador.nombre;
    document.getElementById('ataque').textContent = jugador.ataque;
    document.getElementById('defensa').textContent = jugador.defensa;
    document.getElementById('vida').textContent = jugador.vidaMax;
    document.getElementById('puntos').textContent = jugador.puntos;
    imagenPersonaje.src = mostraImagen();
}