const jugador = JSON.parse(localStorage.getItem('jugadorSeleccionado'));
const enemigos = JSON.parse(localStorage.getItem('enemigos'));
const imgInventario = document.querySelectorAll('.inventario img');

enemigos.forEach((enemigo, i) => {
    console.table(`Enemigo ${i + 1}: `, enemigo);
});



