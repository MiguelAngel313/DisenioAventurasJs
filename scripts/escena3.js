const jugador = JSON.parse(localStorage.getItem('jugadorSeleccionado'));
const imagenJugador = document.getElementById('imgPersonaje');
const imgInventario = document.querySelectorAll('.inventario img');
establecerAtributos(jugador);

function establecerAtributos(jugador){
    aplicarMejoras();
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


function aplicarMejoras(){
    for (let i = 0; i < jugador.inventario.length; i++) {
        switch (jugador.inventario[i].tipo) {
            case 'Salud':
                jugador.vidaMax += jugador.inventario[i].bono;
                break;
            case 'Ataque':
                jugador.ataque += jugador.inventario[i].bono;
                break;
            case 'Defensa':
                jugador.defensa += jugador.inventario[i].bono;
                break;
            default:
                break;
        }
        }
    }
