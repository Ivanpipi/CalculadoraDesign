window.onload = function () {

    let numeroElemento = document.getElementById('numero');
    let numero = 0;
    numeroElemento.innerHTML = numero;

    let numeroCero = document.getElementById('cero');
    let numeroUno = document.getElementById('uno');
    let numeroDos = document.getElementById('dos');
    let numeroTres = document.getElementById('tres');
    let numeroCuatro = document.getElementById('cuatro');
    let numeroCinco = document.getElementById('cinco');
    let numeroSeis = document.getElementById('seis');
    let numeroSiete = document.getElementById('siete');
    let numeroOcho = document.getElementById('ocho');
    let numeroNueve = document.getElementById('nueve');
    let C = document.getElementById('C-erase');

    C.onclick = () => {
        numero = 0;
        actualizarNumero(0)
    }


    numeroCero.onclick = () => {
        numero = 0;
        actualizarNumero(0)
    }


    numeroUno.onclick = () => {
        numero = 1;
        actualizarNumero(1)
    }

    numeroDos.onclick = () => {
        numero = 2;
        actualizarNumero(2)
    }

    numeroTres.onclick = () => {
        numero = 3;
        actualizarNumero(3)
    }

    numeroCuatro.onclick = () => {
        numero = 4;
        actualizarNumero(4)
    }

    numeroCinco.onclick = () => {
        numero = 5;
        actualizarNumero(5)
    }

    numeroSeis.onclick = () => {
        numero = 6;
        actualizarNumero(6)
    }

    numeroSiete.onclick = () => {
        numero = 7;
        actualizarNumero(7)
    }

    numeroOcho.onclick = () => {
        numero = 8;
        actualizarNumero(8)
    }

    numeroNueve.onclick = () => {
        numero = 9;
        actualizarNumero(9)
    }


    function actualizarNumero(n) {
        numeroElemento.innerHTML = n;
        numero = n;
    }

}