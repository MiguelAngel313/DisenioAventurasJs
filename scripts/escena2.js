import { Producto } from '../modules/Producto.js';
let precios = document.querySelectorAll('.precio');
let productos = crearProducto();

for (let i = 0; i < precios.length; ++i) {
    precios[i].textContent = productos[i].precio + '€';    
}



//Creacion de todos los productos del mercado
function crearProducto(){
    const casco = new Producto('Casco', 400, 'Comun', 'Defensa', 10);
    const armadura = new Producto('Armadura', 600, 'Comun', 'Defensa', 10);
    const anillo = new Producto('Anillo', 200, 'Comun', 'Salud', 10);
    const martillo = new Producto('Martillo', 300, 'Comun', 'Ataque', 10);
    const pocion = new Producto('Pocion', 100, 'Comun', 'Salud', 10);
    const hoja = new Producto('Hoja', 100, 'Comun', 'Ataque', 10);
    const arrayProductos = [casco, armadura, anillo, martillo, pocion, hoja];
    
    return arrayProductos;
}




