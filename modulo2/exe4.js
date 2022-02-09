class Contato{
    constructor(nome,telefone,email){
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }
    
}

class Agenda extends Contato{
    addContato(agenda,contato){
        var agenda = agenda
        return agenda.push(contato)

    }
    removeContato(contato){
        agenda = agenda.filter(c =>{
            return c.nome != contato.nome
        })
    }
}
let agenda =[]
let Agend = new Agenda()
var contato1 = new Contato('Alex','999443244', 'teste@gmail.com')
var contato2 = new Contato('Adriana','994569705', 'teste2@gmail.com')
var contato3 = new Agenda('Leandro', '993211401', 'rocha@gmail.com')
console.log('Estado da Agenda')
console.log(Agend)
Agend.addContato(agenda,contato1)
Agend.addContato(agenda,contato2)
Agend.addContato(agenda,contato3)
console.log('Adição de 3 contatos')
console.log(agenda)
console.log('Remoção de 1 Contato')
Agend.removeContato(contato1)
console.log(agenda)


