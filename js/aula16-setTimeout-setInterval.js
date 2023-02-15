/*
    setTimeout(function, tempo em milisegundos) - Executa uma função, depois de esperar um número especificado em milissegundos.

    setInterval(function, milliseconds) - Mesmo que o setTimeout(), mas repete a execução da função continuamente. 
*/

function ativarContagem() {
    // document.getElementById('tempo').innerHTML = "Começou a contar!";
    // // Executa apenas 1 vez após o tempo especificado.
    // tempo = setTimeout(function() {
    //     document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    // }, 5000);

    tempo = setInterval(function() {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;

        if(soma === 0) {
            document.getElementById('tempo').innerHTML = "Tempo esgotado";
            pararContagem();
        }else {
            document.getElementById('tempo').innerHTML = soma;
        }
    }, 1000);

}

function pararContagem() {
    // clearTimeout(tempo);
    // document.getElementById('tempo').innerHTML = "Parou a contagem";

    clearInterval(tempo);
}