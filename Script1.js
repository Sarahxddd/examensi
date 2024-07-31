let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let seccionSeleccionrAtaque = document.getElementById('seleccionar-ataque')
    seccionSeleccionrAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById ('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota =  document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionaAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionaAtaque.style.display = 'flex'

    let inputFennekin = document.getElementById('Fennekin')
    let inputChespin = document.getElementById('Chespin')
    let inputFroakie = document.getElementById('Froakie')
    let spanMascota = document.getElementById('mascota-jugador')
    
    if (inputFennekin.checked) {
        spanMascota.innerHTML ='Fennekin'
    } else if (inputChespin.checked) {
        spanMascota.innerHTML = 'Chespin'
    } else if (inputFroakie.checked) {
        spanMascota.innerHTML = 'Froakie'
    } else {
        alert('Selecciona un pokemon')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoriaEnemigo = aleatorio(1,3)
    let spanMascotaEnimigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoriaEnemigo ==1){
        spanMascotaEnimigo.innerHTML = 'Fennekin'
    } else if (mascotaAleatoriaEnemigo ==2){
        spanMascotaEnimigo.innerHTML = 'Chespin'
    } else {
        spanMascotaEnimigo.innerHTML = 'Froakie'
    }
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnmigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnmigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnmigo()
}

function ataqueAleatorioEnmigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio ==1){
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio ==2){
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("Epate.")
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje("Ganaste!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("Ganaste!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste :(")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    resvisarVidas()
}

function resvisarVidas(){
    if (vidasEnemigo ==0){
        crearMensajeFinal("Felicitaciones, ganaste!")
    } else if (vidasJugador ==0){
        crearMensajeFinal("Lo siento, perdiste :(")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu pokemon atacó con ' + ataqueJugador + ', el pokemon del enemigo atacó con ' + ataqueEnemigo + ', ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo =document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max-min +1) +min)
}

window.addEventListener('load', iniciarJuego)
