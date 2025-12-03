// Clase Producto
export class Producto {
    static contadorProducto = -1;
    static imgs = ['./img/casco.png', './img/armadura.png', './img/Anillo.png', './img/Martillo.png', './img/botella.png', './img/hoja.png'];
    nombre;
    precio;
    rareza;
    tipo;
    bono;

    constructor(nombre, precio, rareza, tipo, bono) {
        Producto.contadorProducto++;
        this.id = Producto.contadorProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.rareza = rareza;
        this.tipo = tipo;
        this.bono = bono;
        this.img = Producto.imgs[this.id];
    }

    presentar() {
        const formatoPrecio = (this.precio / 100).toFixed(2).replace('.', ',') + '€';
        return `Nombre: ${this.nombre} Precio: ${formatoPrecio} Rareza: ${this.rareza} Tipo: ${this.tipo} Bono: +${this.bono}`;
    }

    aplicarDescuento(porcentaje) {
        if (porcentaje < 0) { porcentaje = 0 }
        if (porcentaje > 100) { porcentaje = 100 }
        const nuevoPrecio = Math.round(this.precio * (1 - (porcentaje / 100)));
        return new Producto(this.nombre, nuevoPrecio, this.rareza, this.tipo, this.bono);
    }
}

function getPrecio() {
    return this.precio;
}