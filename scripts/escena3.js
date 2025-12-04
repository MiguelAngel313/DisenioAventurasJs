const jugador = JSON.parse(localStorage.getItem('jugadorSeleccionado'));
console.log('Jugador: ',jugador);
console.log('Inventario: ',jugador.inventario);
console.log('Imagen inventario: ')
const imagenJugador = document.getElementById('imgPersonaje');
const imgInventario = document.querySelectorAll('.inventario img');
establecerAtributos(jugador);

function establecerAtributos(jugador){
    document.getElementById('nombrePersonaje').textContent = jugador.nombre;
    document.getElementById('ataque').textContent = jugador.ataque;
    document.getElementById('defensa').textContent = jugador.defensa;
    document.getElementById('vida').textContent = jugador.vidaMax;
    document.getElementById('puntos').textContent = jugador.puntos;
    imagenJugador.src = jugador.imagen;
    mostrarInventario();
}

function mostrarInventario(){
    for (let i = 0; i < jugador.inventario.length; i++) { 
            imgInventario[i].src = jugador.inventario[i].img;
        }
    }


