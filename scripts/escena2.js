// Importar clase producto para poder crear productos y jugador
import { Producto } from '../modules/Producto.js';
import { Jugador } from '../modules/Jugador.js';
//Variable para editar el precio en pantalla de los Objetos
let precios = document.querySelectorAll('.precio');
//Array de los productos creados para utilizarlos en la compra y venta
const productos = crearProducto();

//Array de botones para poder llamarlos a todos con un sola clase
const botonComprar = document.querySelectorAll('.comprar');
//Array de que almacena todas las imagenes de los objetos comprados en el inventario
const imgInventario = document.querySelectorAll('.inventario img');



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
    const armadura = new Producto('Armadura', 600, 'Comun', 'Defensa', 10);
    const anillo = new Producto('Anillo', 200, 'Comun', 'Salud', 10);
    const martillo = new Producto('Martillo', 300, 'Comun', 'Ataque', 10);
    const pocion = new Producto('Pocion', 100, 'Comun', 'Salud', 10);
    const hoja = new Producto('Hoja', 200, 'Comun', 'Ataque', 10);
    const arrayProductos = [casco, armadura, anillo, martillo, pocion, hoja];
    
    return arrayProductos;
}


    botonComprar.forEach(boton => {
        boton.addEventListener('click', function() {
            if (this.textContent === 'Comprar') {
                cambiarImagen(this);
                this.textContent = 'Vender';
                this.style.backgroundColor = 'red';
            } else {
                cambiarImagen(this);
                this.textContent = 'Comprar';
                this.style.backgroundColor = 'blanchedalmond';
                establecerPrecios();
            }
        });
    });


    function cambiarImagen(elemento){
        let elementoPadre = elemento.parentElement;
        let imagen = elementoPadre.querySelector('img');
        if (elemento.textContent === 'Comprar') {   
            elementoPadre.querySelector('.precio').textContent = '0💶';
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

