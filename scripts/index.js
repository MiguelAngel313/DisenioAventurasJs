import { Jugador } from '../modules/Jugador.js';
let jugadores = agregarJugador();
let imagenPersonaje = document.getElementById('imgPersonaje');
let botonContinuar = document.getElementById('continuar1');
const nombre = JSON.parse(localStorage.getItem('nombre'));
const ataque = JSON.parse(localStorage.getItem('ataque'));
const defensa = JSON.parse(localStorage.getItem('defensa'));
const vida = JSON.parse(localStorage.getItem('vida'));

botonContinuar.addEventListener('click', () => {
    //Cambiar la escena
    window.location.href = 'Escena2.html';
    localStorage.setItem('jugadorSeleccionado', JSON.stringify(jugadores[0]));
});

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

function mostraImagen(jugador){
    let imagenes = ['./img/cazadora.jpg', './img/cazador.jpg', './img/asesino.jpg', './img/guardian.jpg'];
    return imagenes[jugador.numeroJugador - 1];
}
establecerAtributos(jugadores[0]);


function establecerAtributos(jugador){
    document.getElementById('nombrePersonaje').textContent = nombre;
    jugador.nombre = nombre;
    document.getElementById('ataque').textContent = ataque;
    jugador.ataque = ataque;
    document.getElementById('defensa').textContent = defensa;
    jugador.defensa = defensa;
    document.getElementById('vida').textContent = vida;
    jugador.vida = vida;
    document.getElementById('puntos').textContent = jugador.puntos;
    imagenPersonaje.src = mostraImagen(jugador);
}
