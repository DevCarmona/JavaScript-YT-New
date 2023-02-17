// Notação de Objeto JavaScript

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010,
    motor: ["1.6", "1.4", "1.0"]
};
// Converteu para texto JSON
let texto = JSON.stringify(carro);
// Colocou o o texto no nosso HTML
document.getElementById('area').innerHTML = texto;
// Converteu o texto para objeto
let obj = JSON.parse(texto);
// Pegamos um valor deste objeto
console.log(obj.motor[2]);

const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/85802000/json/');
ajax.send();
ajax.onload = function() {
    document.getElementById('area1').innerHTML = this.responseText;
    let objeto = JSON.parse(this.responseText);
    console.log(objeto.ddd);
}

function buscarCep() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();
    ajax.onload = function() {
        // Transformei o texto em objeto
        let objet = JSON.parse(this.responseText);
        // Peguei os valores que eu queria
        let logradouro = objet.logradouro;
        let comp = objet.complemento;
        let cidade = objet.localidade;
        let estado = objet.uf;

        document.getElementById('texto').innerHTML = "<b>Logradouro:</b> " + logradouro +"<br><b>Cidade:</b> " + cidade + "<br><b>Estado:</b> " + estado;
    }
}