//  Bloco de comando que posso executar quando precisar dentro do programa.

function nome () {  // Declaração da Função sem parametro ()
    console.log("YT - CFB Cursos");
}
nome(); //  Chamada da função.

for ( let i= 0 ; i < 10 ; i++ ) {
    nome()
}
console.log("")
// Soma
function soma2_10 () {
    let n1 = 2;
    let n2 = 10;
    let soma = n1 + n2;
    console.log("O valor da soma entre " + n1 + " + " + n2 + " = " + soma);
}
for ( let a = 0 ; a < 10 ; a++ ) {
    soma2_10();
}
console.log("")
// Mudar texto
function mudarTexto () {
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    d1.innerHTML = "Carmona";
    d2.innerHTML = "CFB";
    d3.innerHTML = "Curso JS - Funções";
}
console.log("Mudar o texto na pág HTML");
console.log("")
//  Função que retorna valores
function retornaValor () {
    let m1 = 11;
    let m2 = 2;
    let res = m1 * m2;
    // par ou impar (% significa modulo)
    if ( res % 2 == 0 ) {
        return "Par";
    } else {
        return "Impar";
    }
}
let res = retornaValor(); //    Recebe o retorno da função retornoValor
console.log(res);
console.log("")
//  Funções Parametrizadas
function soma ( p1 ) {
    console.log(p1);
}
soma ("Teste");
soma(2022);
soma(5.2)

function soma1 ( e1, e2 ) {
    console.log("A soma de dois valores é: " + (e1 + e2));
    console.log(e1 + e2);
}
soma1(5,2)

function soma2 ( z1, z2 ) {
    return z1 + z2;
}
console.log(soma2(10,8));