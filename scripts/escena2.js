import { Producto } from '../modules/Producto.js';
let precios = document.querySelectorAll('.precio');
let productos = crearProducto();
const botonComprar = document.querySelectorAll('.comprar');

establecerPrecios();
function establecerPrecios(){
    for (let i = 0; i < precios.length; ++i) {
        precios[i].textContent = productos[i].precio + '💶';    
    }
}



//Creacion de todos los productos del mercado
function crearProducto(){
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
            let imagen = this.parentElement.querySelector('img');
            if (this.textContent === 'Comprar') {
                this.textContent = 'Vender';
                this.style.backgroundColor = 'red';
                this.parentElement.querySelector('.precio').textContent = '0💶';
                imagen.style.filter = 'grayscale(100%)';
                
            } else {
                this.textContent = 'Comprar';
                this.style.backgroundColor = 'blanchedalmond';
                establecerPrecios();
                imagen.style.filter = 'grayscale(0%)';
            }
        });
    });
