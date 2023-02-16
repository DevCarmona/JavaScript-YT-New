class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + " buzinou: Biiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const celta = new Carro("GM", "Celta", 2007);
uno.ano= 2014;
console.log(uno);
console.log(celta.buzina());