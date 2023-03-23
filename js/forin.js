//  for..in - percorrer objetos
const aluno = { nome: "Andre", sobrenome: "Carmona"};
const notas = { n1: 80, n2: 75, n3: 92, n4: 85};
const info = {...aluno,...notas};

for ( var dado in aluno ) // cada propriedade do aluno ele coloca dentro do dado. (nome e sobrenome)
{
    console.log(aluno[dado]); // Dessa forma imprime o valor da propriedade
}
console.log("for..in - percorrer objetos");
for ( var dados in info )
{
    console.log(info[dados]);
}
console.log("for..of - Percorrer coleções (cada uma das posições)");
//  for..of - Percorrer coleções (cada uma das posições)
let notes = [ 100, 80, 75, 30, 64, 47, 98, 81, 60 ];
let aprovados = 0;
let reprovados = 0;
for ( var n of notes)
{
    n >= 70 ? aprovados++ : reprovados++;
    console.log(n);
}
console.log("Aprovados:" + aprovados);
console.log("Reprovados:" + reprovados);
console.log("for..in - percorrer objetos");
//for..in - percorrer objetos
let notes1 = [ 100, 80, 75, 30, 64, 47, 98, 81, 60 ];
for ( var b in notes1)
{
    console.log(b);
}