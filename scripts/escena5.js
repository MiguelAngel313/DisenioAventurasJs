const jugador = JSON.parse(localStorage.getItem('jugadorSeleccionado'));
const enemigos = JSON.parse(localStorage.getItem('enemigos'));
const imgInventario = document.querySelectorAll('.inventario img');

enemigos.forEach((enemigo, i) => {
    console.log(`Enemigo ${i + 1}: `, enemigo);
});

mostrarInventario();

function mostrarInventario(){
    for (let i = 0; i < jugador.inventario.length; i++) { 
            imgInventario[i].src = jugador.inventario[i].img;
        }
    }





