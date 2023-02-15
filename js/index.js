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
/*
function eventoClick() {
    alert('Acionou um evento de click');
    document.body.style.backgroundColor = "blue";
}

function eventoDblClick() {
    alert('Evento de clique duplo')
}

function viraVermelho() {
    let div = document.getElementById("mouse-hover");
    div.style.backgroundColor = "red";
}

function viraAzul() {
    let div = document.getElementById("mouse-hover");
    div.style.backgroundColor = "blue";
}

function adicionaTexto() {
    let p = document.getElementById("texto");
    //p.append('O Mouse moveu!');
}

function campoFocado() {
    let input = document.getElementById("campoFocado");
    console.log('Campo focado');
}

function limpaTexto() {
    document.getElementById("campoTexto").value = "";
}

function clicaFora() {
    document.body.style.backgroundColor = "blue";
}

function teclaAtrasada() {
    let input = document.getElementById("teclaAtrasada").value;
    console.log(input);
}

function teclaPressionada() {
    let input = document.getElementById("teclaPressionada").value;
    console.log(input);
}

function teclaSoltar() {
    let input = document.getElementById("teclaSoltar").value;
    console.log(input);
}
*/

    // * Array (Matrizes) * 
/* */
const lista = ["arroz", "feijão", "macarrão", "leite"];
//atribuindo um novo valor
lista[1] = "Bolo";

let x = lista[1];
console.log(lista);

const pessoa = ["Andre", "Carmona", 30, "Professor"]; // Array(Matriz)
pessoa[pessoa.length] = "Solteiro" // Adiciona um item no final da lista.
pessoa.push("Brasileiro"); // push - Adiciona um item no final da lista.
pessoa.unshift("Inicio"); // unshift - Adiciona um item no começo da lista.
pessoa.pop(); // pop - Remove o ultimo item da matriz.
pessoa.shift(); // shift - Remove o primeiro item da matriz.
delete pessoa[0]; // - Remove o item q vc quer sem alterar as posições.
pessoa.splice(1, 0, "Item adicionado 1", "Item adicionado 2"); // splice(posicao do item, qnts itens removidos, itens adicionados) Adicionar itens.

document.getElementById("teste").innerHTML = pessoa.join(" | "); // Metodo Join - Troca o separador dos itens.

const lista1 = ["Arroz", " Feijão", " Leite", " Macarrao"]; // Array
const lista2 = [" Suco", " Refri", " Carne"]; // Array
const lista3 = [" Salgadinho", " Bolacha", " Ovo"]; // Array
const superLista = lista1.concat(lista2, lista3); // metodo concat - Juntar listas
document.getElementById("texto").innerHTML = superLista.join("/"); // Metodo Join - Troca o separador dos itens.

const jogadores = ["Firmino","Gaucho", "Fenomeno", "Messi", "Neymar", "CR7","Vampeta"]; // Array
jogadores.sort();
jogadores.reverse(); // reverse - Ordem alfabética decrescente
document.getElementById("texto1").innerHTML = jogadores;
const craques = jogadores.slice(1,5); // metodo slice - Mostra a partir da posição que vc definiu.
const jogOrdem = jogadores.sort(); // metodo sort() - Em ordem alfabetica
document.getElementById("texto3").innerHTML = jogOrdem;
document.getElementById("texto2").innerHTML = craques;

const numeros = [40, 100, 5, 25, 10];
numeros.sort(function (a,b) {return a-b}); // em ordem numérica crescente
document.getElementById("texto4").innerHTML = numeros;
numeros.sort(function (a,b) {return b-a}); // em ordem numérica decrescente
document.getElementById("texto5").innerHTML = numeros;

const numeros1 = [40, 100, 5, 25, 10];
// Pega o Maior número
function MaiorNumero(array) {
    return Math.max.apply(null, array);
}
document.getElementById("texto6").innerHTML = MaiorNumero(numeros1);
// Pega o Menor número
function MenorNumero(array) {
    return Math.min.apply(null, array);
}
document.getElementById("texto7").innerHTML = MenorNumero(numeros1);

const numeros2 = [40, 100, 5, 25, 10];
// Numeros maiores que 20
const maior20 = numeros2.filter(filtragem);
function filtragem(value, index, array) {
    return value > 20;
}
maior20.sort(function (a,b) {return b-a}); // em ordem numérica decrescente
document.getElementById("texto8").innerHTML = maior20;


const Pessoa = {nome:"Jorge", sobrenome:"Carmona", idade:30}; // Objeto.
// Como descobrir se a variável é uma array (matriz).
console.log(Array.isArray(pessoa)); // Se for array, ele retorna como TRUE.

console.log(Pessoa.nome); // Objeto.
console.log(pessoa[0]); // Array.

console.log(pessoa.length); // length - mostra o q existe dentro da matriz em número.
console.log(pessoa[pessoa.length - 1]); // Pegar o ultimo item da lista.

