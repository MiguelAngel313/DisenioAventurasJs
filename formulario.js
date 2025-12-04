let nombre = document.querySelector('#nombre');
let ataque = document.querySelector('#ataque');
let defensa = document.querySelector('#defensa');
let vida = document.querySelector('#vida');
let botonEnviar = document.querySelector('#enviar');


function validarAtaqueYDefensa(){
    let error = document.querySelector('#errorVida');
    let atack = ataque.value;
    let defense = defensa.value;
    let healt = vida.textContent;
    let cantidadTotal = atack + defense + healt; 
    if(cantidadTotal > 110 || atack < 0 || defense < 0){
        error.textContent = 'La suma total de Ataque, Defensa y Vida no puede superar 110 entre todas';
        error.style.color = 'red';
    }
    else{
        error.textContent = '';
    }
    
    
}




function validarNombre(){
    let error = document.querySelector('#errorNombre');
    let name = nombre.value;
    if(name.length > 0 && name.length < 20 && comprobarEspaciosEnBlanco(name)){
        error.textContent = '';
    }else {
        error.textContent = 'El nombre debe no cumple los requisitos';
        error.style.color = 'red';
    }
    console.log('Nombre validado.');
}

function comprobarEspaciosEnBlanco(name){
    let valor = true;
    for (let i = 0; i < name.length; i++) {
        if (name[i] == ' ') {
            valor = false;
            break;
        }
        
    }
    return valor;
}


ataque.addEventListener('change', validarAtaqueYDefensa());
defensa.addEventListener('change', validarAtaqueYDefensa());


nombre.addEventListener('change', validarNombre);

botonEnviar.addEventListener('click', f  => {
    validarNombre();
    localStorage.setItem('nombre', JSON.stringify(nombre.value));
    localStorage.setItem('ataque', JSON.stringify(ataque.value));
    localStorage.setItem('defensa', JSON.stringify(defensa.value));
    localStorage.setItem('vida', JSON.stringify(vida.value));
    window.location.href = "./index.html";
});