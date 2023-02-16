// Comando base para pegar a data
let data = new Date();
console.log(data);

// Pegar o ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano);

// Pegar o mes atual
const mesesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

// Pegar dia do mes - 1 até 31
let diaMes = data.getDate();
console.log(diaMes);

// Pegar o dia da semana
const diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let diaEscrito= diaSemana[data.getDay()];
console.log(diaEscrito);

// Pegar a hora - 00 até 23
let hora = data.getHours();
console.log(hora)

// Pegar os minutos - 00 até 59
let minutos = data.getMinutes();
console.log(minutos);

// Pegar segundos - 00 até 59
let segundos = data.getSeconds();
console.log(segundos);

// Pegar Milisegundos - 00 até 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// Pegar a data no padrao brasileiro - Dia/Mes/Ano - Só a data
let dataBr = data.toLocaleString('pt-br', {dateStyle: 'short'});
console.log(dataBr);

// Pegar a data no padrao brasileiro - Dia/Mes/Ano - Só a data
let dataBrHora = data.toLocaleString('pt-br', {timeStyle: 'short'});
console.log(dataBrHora);

// Pegar os valores separados e juntar eles.
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {return x < 10 ? '0' + x : '' + x};

let dataPadraoBr = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBr);

// Comparar datas - Maior ou Menor. Ex: Vencimento, saber se já venceu ou não.
var hoje = new Date();
var vencimento = new Date(2022, 0, 15); // Ano = 2022, mes = 0 janeiro, dia = 15
if(hoje > vencimento) {
    console.log("Sua conta está vencida");
}else {
    console.log("Ainda não venceu, tudo certo")
}

// Diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 31);
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias);