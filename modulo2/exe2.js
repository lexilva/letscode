class Carro {
    constructor(fabricante,modelo,cor,ano){
        this.fabricante = fabricante
        this.modelo = modelo
        this.cor = cor
        this.ano =ano
    }
}

const carro = new Carro('Renault','Sandero', 'prata', 2009)

console.log(carro)