class Conta{
    constructor(){
        let numconta = undefined
        let senha = undefined
        let saldo = 0
        this.setNumconta = (n) =>{numconta = n}
        this.getNumconta = () =>{return numconta}
        this.getSenha = () => {return senha}
        this.setSenha = (s) => {senha = s}
        this.getSaldo = () => {return saldo}
        this.setsaldo = (v) => {saldo += v}
    }
    depositar (deposito,conta){
        if(this.getNumconta() != conta || deposito < 2 )throw('Número da conta errado ou valor inválido!')
        return  this.setsaldo(deposito)}
    sacar(saque, conta){
        if (this.getSaldo() < saque && this.getNumconta()!= conta) throw('Saldo Insuficiente ou conta inválida!!!')
        return this.setsaldo(-saque) 
    }
}

const conta = new Conta()
conta.setSenha(1)
conta.setNumconta(001)
conta.depositar(100,001)
conta.sacar(150,001)
console.log(conta.getNumconta())
console.log('CC: '+ conta.getNumconta() + ' Saldo: ' + conta.getSaldo())