let primerValor = document.getElementById("primerValor");
        let segundoValor = document.getElementById("segundoValor");


        let botonSuma = document.getElementById("botonSuma");

        function verificarSuma () {
            let resultadoSuma = parseFloat(primerValor.value) + parseFloat(segundoValor.value);
            document.getElementById("resultado").innerHTML = resultadoSuma.toFixed(6);
        }
        botonSuma.onclick = verificarSuma;

        let botonResta = document.getElementById("botonResta");
        
        function verificarResta () {
            var resultadoResta = parseFloat(primerValor.value) - parseFloat(segundoValor.value);
            document.getElementById("resultado").innerHTML = resultadoResta.toFixed(6);
        }
        botonResta.onclick = verificarResta;


        let botonMultiplicar = document.getElementById("botonMultiplicar");

        function verificarMultiplicar () {
            var resultadoMultiplicar = parseFloat(primerValor.value) * parseFloat(segundoValor.value);
            document.getElementById("resultado").innerHTML = resultadoMultiplicar.toFixed(6);
        }
        botonMultiplicar.onclick = verificarMultiplicar;


        let botonDividir = document.getElementById("botonDividir");
        
        function verificarDividir () {
            var resultadoDividir = parseFloat(primerValor.value) / parseFloat(segundoValor.value);
            document.getElementById("resultado").innerHTML = resultadoDividir.toFixed(6);
        }
        botonDividir.onclick = verificarDividir;

        let botonClear = document.getElementById("botonClear");

        function clear () {

            document.getElementById("primerValor").value = "";
            document.getElementById("segundoValor").value = "";
            document.getElementById("resultado").innerHTML = "";

        }
        botonClear.onclick = clear;