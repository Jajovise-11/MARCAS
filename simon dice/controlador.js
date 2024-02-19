const colores = ["rojo", "azul", "verde", "amarillo"];
let Simon = [];
let jugador = [];
let puntuacion = 0;

function comenzar(){
    Simon=[];
    jugador=[];
    puntuacion = 0;
    actualizarPuntuacion();
    colorSecuencia();
    mostrarSecuencia();
}

function colorSecuencia(){
    const indiceAleatorio = Math.floor(Math.random() * 4);
    const colorAleatorio = colores[indiceAleatorio];
    Simon.push(colorAleatorio);
}

function mostrarSecuencia(){
    let i=0;
    const intervalo=setInterval(() => {
       resaltarColor(Simon[i]);
       i++;
       
       if(i>=Simon.length){
        clearInterval(intervalo);
        empezarEntrada();
       }
    }, 1000);
}

function resaltarColor(color){
    const colorBoton= document.getElementById(color)
    colorBoton.style.opacity="0.4";

    setTimeout(()=>{
        colorBoton.style.opacity="1";
    },500);
}

function empezarEntrada(){
    const botonesColores=document.querySelectorAll(".color");
    botonesColores.forEach(botonesColor => botonesColor.addEventListener("click", manejarEntrada));
}

function manejarEntrada(event){
    const colorSeleccionado = event.target.id;
    resaltarColor(colorSeleccionado);
    jugador.push(colorSeleccionado);

    if(verificarEntrada()){
        if(jugador.length === Simon.length){
            puntuacion++;
            actualizarPuntuacion();
            jugador=[];
            colorSecuencia();
            setTimeout(mostrarSecuencia, 1000);
        }
    }
    else{
        terminarJuego();
    }
}


function verificarEntrada(){
    for(let i = 0; i<jugador.length; i++){
        if(jugador[i] !== Simon[i]){
            return false;
        }
    }
    return true;
}

function actualizarPuntuacion(){
    document.getElementById("valorPuntuacion").textContent = puntuacion;
}

function reiniciarJuego(){
    Simon = [];
    jugador=[];
    puntuacion=0;
    actualizarPuntuacion();
    finEntrada();
}

function finEntrada(){
    const botonesColores=document.querySelectorAll(".color");
    botonesColores.forEach(botonesColor=>botonesColor.removeEventListener("click", manejarEntrada));
}

function mostrarReglas() {
    document.getElementById('contenedorReglas').style.display = 'block';
}
function ocultarReglas() {
    document.getElementById('contenedorReglas').style.display = 'none';
}