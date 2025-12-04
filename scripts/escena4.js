import { Enemigo } from "../modules/Enemigo.js";
const jugador = JSON.parse(localStorage.getItem('jugadorSeleccionado'));
const imgInventario = document.querySelectorAll('.inventario img');
const imagenEnemigos = document.querySelectorAll('.enemigo img');
const enemigos = crearEnemigos();
mostrarEnemigos();

function mostrarInventario(){
    for (let i = 0; i < jugador.inventario.length; i++) { 
            imgInventario[i].src = jugador.inventario[i].img;
        }
    }

function crearEnemigos(){
    let enemigosCreados = [];
    let nombres= ['Dragón','Caballero','Reina Araña','Hechicero','Hidra','Mecha'];
    let ataques = [20,15,10,15,10,5];
    let vidas = [100,80,60,80,60,40];
    let defensas = [10,5,5,10,5,2];
    let puntos = [100,80,60,80,60,40];
    for (let i = 0; i < nombres.length; i++) {
        enemigosCreados.push(new Enemigo(nombres[i], ataques[i], vidas[i], defensas[i], puntos[i]));
    }
    console.log(enemigosCreados);
    mostrarInventario();
    return enemigosCreados;
}

function mostrarEnemigos(){
    let nombre = document.querySelectorAll('#nombreEnemigo');
    let ataque = document.querySelectorAll('#ataqueEnemigo');
    let vida = document.querySelectorAll('#vidaEnemigo');
    let defensa = document.querySelectorAll('#defensaEnemigo');
    let punto = document.querySelectorAll('#puntosEnemigo');
    for (let i = 0; i < imagenEnemigos.length; i++) {
        imagenEnemigos[i].src = enemigos[i].imagen;
        nombre[i].textContent = enemigos[i].nombre;
        ataque[i].textContent = enemigos[i].ataque;
        defensa[i].textContent = enemigos[i].defensa;
        vida[i].textContent = enemigos[i].vida;
        punto[i].textContent = enemigos[i].puntos;
    }
}
