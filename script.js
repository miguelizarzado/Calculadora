function verificarSuma () {
    let resultadoSuma = parseFloat(primerValor.value) + parseFloat(segundoValor.value);
    document.getElementById("resultado").innerHTML = resultadoSuma;
    
    if (resultadoSuma % 1 != 0) {
        document.getElementById("resultado").innerHTML = resultadoSuma.toFixed(2);
    }
}

function verificarResta () {
    var resultadoResta = parseFloat(primerValor.value) - parseFloat(segundoValor.value);
    document.getElementById("resultado").innerHTML = resultadoResta;

    if (resultadoResta % 1 != 0) {
        document.getElementById("resultado").innerHTML = resultadoResta.toFixed(2);
    }
}

function verificarMultiplicar () {
    var resultadoMultiplicar = parseFloat(primerValor.value) * parseFloat(segundoValor.value);
    document.getElementById("resultado").innerHTML = resultadoMultiplicar;

    if (resultadoMultiplicar % 1 != 0) {
        document.getElementById("resultado").innerHTML = resultadoMultiplicar.toFixed(2);
    }
}

function verificarDividir () {
    var resultadoDividir = parseFloat(primerValor.value) / parseFloat(segundoValor.value);
    document.getElementById("resultado").innerHTML = resultadoDividir;

    if (resultadoDividir % 1 != 0) {
        document.getElementById("resultado").innerHTML = resultadoDividir.toFixed(2);
    }
}

function clear () {

    document.getElementById("primerValor").value = "";
    document.getElementById("segundoValor").value = "";
    document.getElementById("resultado").innerHTML = "";
    primerValor.focus();

}

let primerValor = document.getElementById("primerValor");
let segundoValor = document.getElementById("segundoValor");
let botonSuma = document.getElementById("botonSuma");
let botonResta = document.getElementById("botonResta");
let botonMultiplicar = document.getElementById("botonMultiplicar");
let botonDividir = document.getElementById("botonDividir");
let botonClear = document.getElementById("botonClear");

primerValor.focus();

botonSuma.onclick = verificarSuma;
botonResta.onclick = verificarResta;
botonMultiplicar.onclick = verificarMultiplicar;
botonDividir.onclick = verificarDividir;
botonClear.onclick = clear;