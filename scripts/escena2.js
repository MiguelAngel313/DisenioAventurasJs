//Recuperar jugador guardado de la página 1
const jugador = JSON.parse(localStorage.getItem('jugadorSeleccionado'));
let saldoActual = document.getElementById('saldo').textContent = jugador.puntos;
// Importar clase producto para poder crear productos y jugador
import { Producto } from '../modules/Producto.js';
//Variable para editar el precio en pantalla de los Objetos
let precios = document.querySelectorAll('.precio');
//Array de los productos creados para utilizarlos en la compra y venta
const productos = crearProducto();

//Array de botones para poder llamarlos a todos con un sola clase
const botonComprar = document.querySelectorAll('.comprar');
//Boton de continuar
const botonContinuar = document.getElementById('continuar2');
//Array de que almacena todas las imagenes de los objetos comprados en el inventario
const imgInventario = document.querySelectorAll('.inventario img');
//Almacenar url de las imagenes del mercado
const imagenes = [];

let inventario = [];

function guardarEnInventario(imagen){
    for (let i = 0; i < imagenes.length; ++i) {
        if (imagenes[i] === imagen.src) {
            console.log(imagen.src);
            inventario.push(productos[i]);
        }
    }
}

function eliminarDeInventario(imagen){
    for (let i = 0; i < productos.length; ++i) {
        if (productos[i].img === imagen.getAttribute('src')) {
            for (let j = 0; j < inventario.length; ++j) {
                if (inventario[j].img === productos[i].img) {
                    inventario.splice(j, 1);
                }
            }
        }
    }
}

obtenerUrl();
function obtenerUrl(){
    const urlImagenes = document.querySelectorAll('#producto img');
    urlImagenes.forEach((img) => {
    imagenes.push(img.src);
});
}


establecerPrecios();
function establecerPrecios(){
    for (let i = 0; i < precios.length; ++i) {
        precios[i].textContent = productos[i].precio + '💶';    
    }
}



//Creacion de todos los productos del mercado
function crearProducto(){
    //producto(nombre, precio, rareza, tipo, bono)
    const casco = new Producto('Casco', 400, 'Comun', 'Defensa', 10);
    const armadura = new Producto('Armadura', 500, 'Comun', 'Defensa', 20);
    const anillo = new Producto('Anillo', 200, 'Comun', 'Salud', 10);
    const martillo = new Producto('Martillo', 300, 'Comun', 'Ataque', 20);
    const pocion = new Producto('Pocion', 100, 'Comun', 'Salud', 30);
    const hoja = new Producto('Hoja', 200, 'Comun', 'Ataque', 10);
    const arrayProductos = [casco, armadura, anillo, martillo, pocion, hoja];
    
    return arrayProductos;
}


    botonComprar.forEach(boton => {
        boton.addEventListener('click', function() {
        // Obtener el precio del elemento
        const elementoPadre = this.parentElement;
        const precioTexto = elementoPadre.querySelector('.precio').textContent;
        const precio = parseInt(precioTexto.replace('💶', ''));
        let imagen = elementoPadre.querySelector('img');
        
        if (this.textContent === 'Comprar') {
            if (jugador.puntos >= precio) {
                guardarEnInventario(imagen);
                cambiarImagen(this);
                this.textContent = 'Vender';
                this.style.backgroundColor = 'red';
                jugador.puntos -= precio;
                saldoActual = document.getElementById('saldo').textContent = jugador.puntos;
            }} else {
                eliminarDeInventario(imagen);
                cambiarImagen(this);
                this.textContent = 'Comprar';
                this.style.backgroundColor = 'blanchedalmond';
                jugador.puntos += precio;
                saldoActual = document.getElementById('saldo').textContent = jugador.puntos;
                establecerPrecios();
            }
        });
    });

    

    function cambiarImagen(elemento){
        let elementoPadre = elemento.parentElement;
        let imagen = elementoPadre.querySelector('img');
        if (elemento.textContent === 'Comprar') {   
            imagen.style.filter = 'grayscale(100%)';
           for (let i = 0; i < imgInventario.length; i++) {
            if (imgInventario[i].getAttribute('src') === '') {
                imgInventario[i].src = imagen.src;
                break;
            }
            
           }
        }

        else{
            imagen.style.filter = 'grayscale(0%)';
            for (let i = 0; i < imgInventario.length; i++) {
                if (imgInventario[i].getAttribute('src') === imagen.src) {
                    imgInventario[i].src = '';
                    break;
                }
                
            }
        }
    }

botonContinuar.addEventListener('click', () => {
    jugador.inventario = inventario;
    localStorage.setItem('jugadorSeleccionado', JSON.stringify(jugador));
    window.location.href = '../Escena3.html';
});

