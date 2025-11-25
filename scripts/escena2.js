import { Producto } from "../modules/producto";

const productos = crearProductos();
establecerPrecios(productos);

function crearProductos(){
let casco = new Producto("Casco", 400, "Común", "Defensa", 10);
let armadura = new Producto("Armadura", 300, "Común", "Defensa", 10);
let anillo = new Producto("Anillo", 300, "Común", "Salud", 10);
let martillo = new Producto("Martillo", 300, "Común", "Ataque", 10);
let botella = new Producto("Botella", 300, "Común", "Salud", 10);
let hoja = new Producto("Hoja", 300, "Común", "Ataque", 10);
const arrayProductos = [casco, armadura, anillo, martillo, botella, hoja];

return arrayProductos;
}

function establecerPrecios(productos){
    let precios = document.getElementsByClassName("precio");
    for(let i = 0; i < precios.length; i++){
        precios[i].textContent = productos[i].precio;
    }
}
