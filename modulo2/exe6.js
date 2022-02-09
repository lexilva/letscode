class Veiculo{
    constructor(marca,modelo,cor,licensa){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.licensa = licensa
    }
}
class Carro extends Veiculo{
    constructor(marca,modelo,cor,licensa, placa,tipo){
        super(marca, modelo, cor, licensa)
        this.placa = placa
        this.tipo = tipo
    }   
}
class Barco extends Veiculo{
    constructor(marca, modelo, cor, licensa, remo,vela){
        super(marca, modelo, cor, licensa)
        this.remo = remo
        this.vela = vela
    }
}
const carro = new Carro('Renault','Sandero','Prata', 1234, 'QXX1234','Passeio')
const barco = new Barco('Sem Marca','Manual','Branco', 1234, true, false)
console.log(carro)
console.log(carro instanceof Veiculo)
console.log(barco)
console.log(barco instanceof Veiculo)