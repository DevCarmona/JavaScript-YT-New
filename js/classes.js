class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const celta = new Carro("GM", "Celta", 2007);
console.log(uno);
console.log(celta);