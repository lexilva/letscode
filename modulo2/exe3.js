class Ponto {
    constructor(x, y){
        if(isNaN(x) && isNaN(y)) throw "Base e altura precisam ser números!";
        this.x = x;
        this.y = y;
    }
    
}

const ponto = new Ponto(1, 1)
console.log('abicissa: '+ ponto.x + ' Ordenada: '+ ponto.y)