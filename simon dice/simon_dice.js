const colores =['rojo', 'azul', 'verde', 'amarillo'];
let secuenciaSimon = [];
let secuenciaUsuario = [];
let puntos = 0;

function comenzarJuego(){
    secuenciaSimon = [];
    secuenciaUsuario = [];
    puntos = 0;
    actualizarPuntos();
    agregarColorASecuencia();
    mostrarSecuenciaSimon();
}

function agregarColorASecuencia() {
    const colorAleatorio =
    colores[Math.floor(Math.random() * 4)];
    secuenciaSimon.push(colorAleatorio);
}

function mostrarSecuenciaSimon() {
    let i = 0;
    const intervalo = setInterval =>{
        resaltarColor(secuenciaSimon[i]);
        i++;

        if(i >= secuenciaSimon.length){
            clearInterval(intervalo);
            habilitarEntradaUsuario();
        }
    }, 1000);
}

function resaltarColor(color){
    const colorBtn = document.getElementById(color);
    colorBtn.style.opacity= '0.6';

    setTimeout(() => {
        colorBtn.style.opacity='1';

    }, 500);
}

function habilitarEntradaUsuario(){
    const botonesColores = 
    document.querySelectorAll('.color');
    botonesColores.forEach(botonesColor =>
        botonesColor.addEventListener('click',manejarEntradaUsuario));
}

function manejarEntradaUsuar(event){
    const colorSeleccionado = event.target.id;
    resaltarColor(colorSeleccionado);
    secuenciaUsuario.push(colorSeleccionado);

    if (verificarEntradaUsuario()){
        if(secuenciaUsuario.length === secuenciaSimon.length){
            puntos++;
            actualizarPuntos();
            secuenciaUsuario = [];
            agregarColorASecuencia();
            setTimeout(mostrarSecuenciaSimon, 1000);
        }
    } else{
        terminarJuego();
    }
}


function verificarEntradaUsuario(){
    for( let i = 0; i < secuenciaSimon.length; i++){
        if(secuenciaUsuario[i]!==secuenciaSimon[i]){
            return false;
        }
    }
    return true;
}

function terminarJuego(){
    alert(!ACABO EL JUEGO¡ tus puntos han sido: ${puntos});
    reiniciarJuego();
}

function actualizarPuntos(){
    document.getElementById('valorPuntuacion').textContent = puntos;
}

function reiniciarJuego(){
    secuenciaSimon = [];
    secuenciaUsuario = [];
    puntos = 0;
    actualizarPuntos();
    desabilitarEntradaUsuario();
}


function desabilitarEntradaUsuario(){
    const botonesColores = document.querySelectorAll('.color');
    botonesColores.forEach(botonesColor => botonesColores.removeEvenListener('click', manejarEntradaUsuario));
}