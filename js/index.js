// document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";
// console.log("Oi isso é um console.log");

// let a,b,c;
// a = 5;
// b = 6;
// c = 7;

    // * Sintaxe *

//console.log();

/*
var a = 1;
var b = 5;
var c = a + b;
console.log(c);

var PESSOA = "Andre";
var pessoa = "Carmona";
console.log(pessoa);

var primeiroNome;
primeiroNome = "doido";
console.log(primeiroNome);
*/

    // * Declaradores de variáveis: var let const *

/*
//Declaração e Atribuição com var - Pode ser redeclarado
var pote = "Bombom";
alert(pote);

var a = 2;
var b = 3;
var c = a + b;
alert(c);

//Declaração de variaveis
var a,b,c;
//Atribução dos valores
a = 2;
b = 3;
c = a + b;
alert(c);

//Declaração de variaveis com var - Pode ser redeclarado
var nome, sobrenome, nomeCompleto, idade, soma;
//Atribuição dos valores
nome = "Andre";
sobrenome = "Carmona";
idade = 30;
nomeCompleto = nome + " " + sobrenome;
soma = idade + 10;

pessoa = soma + " " + nome;
//Saída
document.getElementById("texto").innerHTML = pessoa;

//Declaração e Atribuição com var
var x = 10; // Aqui é 10
{
    var x = 2; // Aqui é 2
}
//Saída - Aqui é 2
document.getElementById("texto").innerHTML = x;

//Declaração e Atribuição com let - Não pode ser redeclarado 
let pessoa = "Andre";
let pessoa = "João";

let x = 10; // Aqui é 10
{
    let x = 2; // Dentro do bloco é 2
}
//Saída - Aqui é 10
document.getElementById("texto").innerHTML = x;

//Declaração e Atribuição com const
const x = 10; // Aqui é 10
{
    const x = 2; // Dentro do bloco é 2
}
//Saída - Aqui é 10
document.getElementById("texto").innerHTML = x;
*/

    // * Operadores *

//Operadores Aritméticos
/*
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = ++valor1;
//Saída
alert(total);
alert('O valor1 ficou: ' + valor1);

//Operadores Atribuição
var valor1, valor2, total;
valor1 = "Andre ";
valor2 = "Carmona";

total = valor1 + valor2;
alert(total)
*/

//Operadores de Comparação
/*
var valor1, valor2, total;
valor1 = 8;
valor2 = 10;
// Usando === ele verifica se o tipo tbm é igual.
total = (valor1 > valor2);
alert(total);
*/

//Operador Condicional (Ternário)
/* 
var idade, eleitor;
idade = 19;
eleitor = (idade < 18) ? "Não pode votar" : "Sim, pode votar";

alert('A resposta é: ' + eleitor + ' a idade dele é de: ' + idade + ' anos.');
*/

//Operadores Lógicos
/*
var idade, eleitor, resultado;
idade = 60;
eleitor = (idade < 18) ? "Não pode votar" : "Sim, pode votar";
resultado = (idade > 60 && idade < 70);
resultado1 = (idade === 60 || idade === 72);
resultado2 = !(idade === 60); // ! usado para negação
alert(resultado2);
*/

    // * Funções *
/*
function soma(valor1, valor2) {
    return valor1 + valor2;
}
document.getElementById("texto").innerHTML = soma(10, 40);

function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}
var valorReal = 7.9;
var cotacao = 5.6;
var total = realParaDolar(valorReal, cotacao);
alert("O valor em real é R$: " + valorReal + ", o valor em dolar é: " + total);

function alertaHello() {
    alert ("Olá pessoal");
}

function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}
var x = paraCelsius(77);
alert("A temperatura é de " + x + " graus celsius");

function minhaFuncao() {
    var x = 2;
}
*/

    // * Objetos *
/*
const carro = {
    marca:"Ford", 
    modelo: "Ka", 
    ano:"2015", 
    placa:"ABC-1234",
    buzina: function() {alert('Biiiiiiii')},
    completo: function() {
        return "A marca é: " + this.marca + " e o modelo é: " + this.modelo;
    }
};
console.log(carro.completo());
*/

    // * Eventos *
/* */
