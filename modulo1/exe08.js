let i = 5
let x = 0
const somar = (a,b) => a + b
const subtrair =(a,b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a,b) => a / b
/*
function soma (a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function mult (a,b){
    return a * b
}

function div (a,b){
    return a / b
}*/
while (x <= i){
    console.log('soma: '+ x + '+' + i + ': ',somar(x,i))
    console.log('Subtração: '+ x + '-' + i + ': ',subtrair(x,i))
    console.log('Multiplicação: '+ x + 'X' + i + ': ',multiplicar(x,i))
    console.log('Divisão: '+ x + '/' + i + ': ',dividir(x,i))
    console.log(" ")
    console.log("=======================================")
    x++
}
