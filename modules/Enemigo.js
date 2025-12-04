// Clases Enemigo
export class Enemigo {
    static contadorEnemigos = -1;
    static imagenes = ['./img/dragon.png','./img/caballero.png','./img/reina.png','./img/hechicero.png','./img/hidra.png','./img/robot.png'];
    tipo;
    nombre;
    ataque;
    vida;
    defensa;
    puntos;

    constructor(tipo, nombre, ataque, vida, defensa, puntos) {
        Enemigo.contadorEnemigos++;
        this.tipo = tipo;
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;
        this.defensa = defensa;
        this.puntos = puntos;
        this.imagen = Enemigo.imagenes[Enemigo.contadorEnemigos];
    }

    accion() {
        return `Tipo: ${this.tipo} | Nombre: ${this.nombre} | Ataque: ${this.ataque} | Vida: ${this.vida}`;
    }
}

export class JefeFinal extends Enemigo {
    habilidadEspecial;
    multiplicadorDaño;

    constructor(nombre, ataque, vida, habilidadEspecial, multiplicadorDaño = 1.3) {
        super('Jefe', nombre, ataque, vida);
        this.habilidadEspecial = habilidadEspecial;
        this.multiplicadorDaño = multiplicadorDaño;
    }

    accion() {
        return `Soy ${this.nombre}. Habilidad especial: ${this.habilidadEspecial}. Daño multiplicado por ${this.multiplicadorDaño}.`;
    }
}